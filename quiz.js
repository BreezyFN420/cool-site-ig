/**
 * QUIZ.JS — Practice Exam Engine
 * Renders a hub of practice exams for a given certification (A+, Security+, Network+),
 * handles taking an exam question-by-question, grading, and reviewing answers.
 * Reads its question bank from CERT_DATA (cert-data.js), which must load before this file.
 */

(function () {
  'use strict';

  function initCertApp() {
    const app = document.getElementById('certApp');
    if (!app) return;

    const certKey = app.getAttribute('data-cert');
    const cert = CERT_DATA[certKey];
    if (!cert) {
      app.innerHTML = '<p class="quiz-error">No question bank found for this certification.</p>';
      return;
    }

    const state = {
      view: 'hub',       // hub | exam | results | review | answerkey
      groupId: null,
      examIndex: null,
      exam: null,
      answers: [],        // selected option index per question, -1 if unanswered
      current: 0
    };

    function storageKey(groupId, examIndex) {
      return 'quizBest:' + certKey + ':' + groupId + ':' + examIndex;
    }

    function getBest(groupId, examIndex) {
      try {
        const raw = localStorage.getItem(storageKey(groupId, examIndex));
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    function saveBest(groupId, examIndex, scorePct) {
      try {
        const prev = getBest(groupId, examIndex);
        if (!prev || scorePct > prev.best) {
          localStorage.setItem(storageKey(groupId, examIndex), JSON.stringify({ best: scorePct }));
        }
      } catch (e) { /* ignore storage errors */ }
    }

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    function render() {
      if (state.view === 'hub') renderHub();
      else if (state.view === 'exam') renderExam();
      else if (state.view === 'results') renderResults();
      else if (state.view === 'review') renderReview(false);
      else if (state.view === 'answerkey') renderReview(true);
      window.scrollTo({ top: app.offsetTop - 90, behavior: 'smooth' });
    }

    function renderHub() {
      let html = '';
      html += '<div class="quiz-hub-intro">';
      html += '<h2>' + escapeHtml(cert.name) + ' Practice Exams</h2>';
      html += '<p>' + escapeHtml(cert.description) + ' Each option below combines every question in that exam domain into one full-length practice run.</p>';
      html += '</div>';

      cert.groups.forEach(function (group) {
        html += '<div class="quiz-group">';
        html += '<div class="quiz-group-label">' + escapeHtml(group.label) + '</div>';
        html += '<div class="quiz-exam-grid">';
        getExamOptions(group).forEach(function (exam, idx) {
          const best = getBest(group.id, idx);
          const bestLine = best ? '<div class="quiz-best">Best score: ' + best.best + '%</div>' : '<div class="quiz-best quiz-best-empty">Not attempted yet</div>';
          html += '<div class="quiz-exam-card">';
          html += '<div class="quiz-exam-card-top">';
          html += '<div class="quiz-exam-title">' + escapeHtml(exam.title) + '</div>';
          html += '<div class="quiz-exam-count">' + exam.questions.length + ' questions</div>';
          html += '</div>';
          html += '<div class="quiz-exam-description">' + escapeHtml(exam.description) + '</div>';
          html += bestLine;
          html += '<div class="quiz-exam-actions">';
          html += '<button type="button" class="quiz-btn quiz-btn-primary" data-action="start" data-group="' + group.id + '" data-exam="' + idx + '">Start Exam</button>';
          html += '<button type="button" class="quiz-btn quiz-btn-ghost" data-action="answerkey" data-group="' + group.id + '" data-exam="' + idx + '">View Answer Key</button>';
          html += '</div>';
          html += '</div>';
        });
        html += '</div></div>';
      });

      app.innerHTML = html;

      app.querySelectorAll('[data-action="start"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          startExam(btn.getAttribute('data-group'), parseInt(btn.getAttribute('data-exam'), 10));
        });
      });
      app.querySelectorAll('[data-action="answerkey"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          openAnswerKey(btn.getAttribute('data-group'), parseInt(btn.getAttribute('data-exam'), 10));
        });
      });
    }

    function getExamOptions(group) {
      return [{
        title: group.label + ' Full Practice Exam',
        description: 'All available questions combined for a longer, realistic practice session.',
        questions: group.exams.reduce(function (allQuestions, exam) {
          return allQuestions.concat(exam.questions);
        }, [])
      }];
    }

    function findExam(groupId, examIndex) {
      const group = cert.groups.filter(function (g) { return g.id === groupId; })[0];
      if (!group) return null;
      return getExamOptions(group)[examIndex] || null;
    }

    function shuffleQuestions(questions) {
      const shuffled = questions.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temporary = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temporary;
      }
      return shuffled;
    }

    function startExam(groupId, examIndex) {
      const exam = findExam(groupId, examIndex);
      if (!exam) return;
      state.groupId = groupId;
      state.examIndex = examIndex;
      state.exam = Object.assign({}, exam, { questions: shuffleQuestions(exam.questions) });
      state.answers = new Array(state.exam.questions.length).fill(-1);
      state.current = 0;
      state.view = 'exam';
      render();
    }

    function openAnswerKey(groupId, examIndex) {
      const exam = findExam(groupId, examIndex);
      if (!exam) return;
      state.groupId = groupId;
      state.examIndex = examIndex;
      state.exam = exam;
      state.answers = new Array(exam.questions.length).fill(-1);
      state.view = 'answerkey';
      render();
    }

    function renderExam() {
      const exam = state.exam;
      const total = exam.questions.length;
      const q = exam.questions[state.current];
      const answeredCount = state.answers.filter(function (a) { return a !== -1; }).length;

      let html = '';
      html += '<div class="quiz-topbar">';
      html += '<button type="button" class="quiz-btn quiz-btn-ghost" data-action="exit">Exit to Exam List</button>';
      html += '<div class="quiz-progress-label">Question ' + (state.current + 1) + ' of ' + total + ' &middot; ' + answeredCount + ' answered</div>';
      html += '</div>';
      html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + Math.round(((state.current + 1) / total) * 100) + '%"></div></div>';

      html += '<div class="quiz-question-card">';
      html += '<div class="quiz-question-text">' + escapeHtml(q.question) + '</div>';
      html += '<div class="quiz-options">';
      q.options.forEach(function (opt, i) {
        const selected = state.answers[state.current] === i;
        html += '<button type="button" class="quiz-option' + (selected ? ' quiz-option-selected' : '') + '" data-option="' + i + '">';
        html += '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>';
        html += '<span class="quiz-option-text">' + escapeHtml(opt) + '</span>';
        html += '</button>';
      });
      html += '</div></div>';

      html += '<div class="quiz-nav-row">';
      html += '<button type="button" class="quiz-btn quiz-btn-ghost" data-action="prev"' + (state.current === 0 ? ' disabled' : '') + '>Previous</button>';
      html += '<div class="quiz-jump-list">';
      exam.questions.forEach(function (_, i) {
        const cls = i === state.current ? 'quiz-jump-current' : (state.answers[i] !== -1 ? 'quiz-jump-answered' : '');
        html += '<button type="button" class="quiz-jump ' + cls + '" data-jump="' + i + '">' + (i + 1) + '</button>';
      });
      html += '</div>';
      if (state.current < total - 1) {
        html += '<button type="button" class="quiz-btn quiz-btn-primary" data-action="next">Next</button>';
      } else {
        html += '<button type="button" class="quiz-btn quiz-btn-primary" data-action="submit">Submit Exam</button>';
      }
      html += '</div>';

      app.innerHTML = html;

      app.querySelectorAll('.quiz-option').forEach(function (btn) {
        btn.addEventListener('click', function () {
          state.answers[state.current] = parseInt(btn.getAttribute('data-option'), 10);
          render();
        });
      });
      const exitBtn = app.querySelector('[data-action="exit"]');
      if (exitBtn) exitBtn.addEventListener('click', function () { state.view = 'hub'; render(); });
      const prevBtn = app.querySelector('[data-action="prev"]');
      if (prevBtn) prevBtn.addEventListener('click', function () { if (state.current > 0) { state.current--; render(); } });
      const nextBtn = app.querySelector('[data-action="next"]');
      if (nextBtn) nextBtn.addEventListener('click', function () { if (state.current < total - 1) { state.current++; render(); } });
      const submitBtn = app.querySelector('[data-action="submit"]');
      if (submitBtn) submitBtn.addEventListener('click', function () {
        const unanswered = state.answers.filter(function (a) { return a === -1; }).length;
        if (unanswered > 0) {
          const proceed = confirm(unanswered + ' question(s) unanswered. Submit anyway?');
          if (!proceed) return;
        }
        state.view = 'results';
        render();
      });
      app.querySelectorAll('.quiz-jump').forEach(function (btn) {
        btn.addEventListener('click', function () {
          state.current = parseInt(btn.getAttribute('data-jump'), 10);
          render();
        });
      });
    }

    function scoreExam() {
      const exam = state.exam;
      let correct = 0;
      exam.questions.forEach(function (q, i) {
        if (state.answers[i] === q.correct) correct++;
      });
      return { correct: correct, total: exam.questions.length, pct: Math.round((correct / exam.questions.length) * 100) };
    }

    function renderResults() {
      const score = scoreExam();
      saveBest(state.groupId, state.examIndex, score.pct);
      const passed = score.pct >= 80;

      let html = '';
      html += '<div class="quiz-results-card ' + (passed ? 'quiz-pass' : 'quiz-fail') + '">';
      html += '<div class="quiz-results-title">' + escapeHtml(state.exam.title) + ' — Results</div>';
      html += '<div class="quiz-results-score">' + score.correct + ' / ' + score.total + '</div>';
      html += '<div class="quiz-results-pct">' + score.pct + '%</div>';
      html += '<div class="quiz-results-status">' + (passed ? 'Passing (80% or higher)' : 'Below 80% — review the material and try again') + '</div>';
      html += '<div class="quiz-results-actions">';
      html += '<button type="button" class="quiz-btn quiz-btn-primary" data-action="review">Review Answers</button>';
      html += '<button type="button" class="quiz-btn quiz-btn-ghost" data-action="retake">Retake Exam</button>';
      html += '<button type="button" class="quiz-btn quiz-btn-ghost" data-action="exit">Back to Exam List</button>';
      html += '</div></div>';

      app.innerHTML = html;

      app.querySelector('[data-action="review"]').addEventListener('click', function () { state.view = 'review'; render(); });
      app.querySelector('[data-action="retake"]').addEventListener('click', function () { startExam(state.groupId, state.examIndex); });
      app.querySelector('[data-action="exit"]').addEventListener('click', function () { state.view = 'hub'; render(); });
    }

    function renderReview(isAnswerKey) {
      const exam = state.exam;
      let html = '';
      html += '<div class="quiz-topbar">';
      html += '<button type="button" class="quiz-btn quiz-btn-ghost" data-action="exit">Back to Exam List</button>';
      html += '<div class="quiz-progress-label">' + escapeHtml(exam.title) + (isAnswerKey ? ' — Answer Key' : ' — Answer Review') + '</div>';
      html += '</div>';

      exam.questions.forEach(function (q, i) {
        const userAnswer = state.answers[i];
        const isCorrect = userAnswer === q.correct;
        let statusClass = 'quiz-review-neutral';
        let statusLabel = '';
        if (!isAnswerKey) {
          statusClass = isCorrect ? 'quiz-review-correct' : 'quiz-review-incorrect';
          statusLabel = isCorrect ? 'Correct' : (userAnswer === -1 ? 'Not answered' : 'Incorrect');
        }
        html += '<div class="quiz-review-item ' + statusClass + '">';
        html += '<div class="quiz-review-head">';
        html += '<span class="quiz-review-num">Question ' + (i + 1) + '</span>';
        if (!isAnswerKey) html += '<span class="quiz-review-status">' + statusLabel + '</span>';
        html += '</div>';
        html += '<div class="quiz-review-question">' + escapeHtml(q.question) + '</div>';
        html += '<div class="quiz-review-options">';
        q.options.forEach(function (opt, oi) {
          let cls = 'quiz-review-opt';
          if (oi === q.correct) cls += ' quiz-review-opt-correct';
          if (!isAnswerKey && oi === userAnswer && oi !== q.correct) cls += ' quiz-review-opt-wrong';
          html += '<div class="' + cls + '"><span class="quiz-option-letter">' + String.fromCharCode(65 + oi) + '</span><span class="quiz-option-text">' + escapeHtml(opt) + '</span></div>';
        });
        html += '</div>';
        if (q.explanation) {
          html += '<div class="quiz-review-explanation"><strong>Explanation:</strong> ' + escapeHtml(q.explanation) + '</div>';
        }
        html += '</div>';
      });

      html += '<div class="quiz-nav-row quiz-nav-row-end">';
      if (!isAnswerKey) html += '<button type="button" class="quiz-btn quiz-btn-ghost" data-action="retake">Retake Exam</button>';
      html += '<button type="button" class="quiz-btn quiz-btn-primary" data-action="exit">Back to Exam List</button>';
      html += '</div>';

      app.innerHTML = html;
      app.querySelectorAll('[data-action="exit"]').forEach(function (btn) {
        btn.addEventListener('click', function () { state.view = 'hub'; render(); });
      });
      const retakeBtn = app.querySelector('[data-action="retake"]');
      if (retakeBtn) retakeBtn.addEventListener('click', function () { startExam(state.groupId, state.examIndex); });
    }

    render();
  }

  document.addEventListener('DOMContentLoaded', initCertApp);
})();
