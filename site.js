/**
 * SITE.JS — Interactive Engine for C-Family Reference Website
 * Handles Live Search Filtering, One-Click Code Copying, and Navigation Helpers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCopyButtons();
  initSearch();
  initBackToTop();
  initKeyboardShortcuts();
});

/**
 * Automatically wraps <pre> blocks and adds one-click Copy buttons
 */
function initCopyButtons() {
  const preElements = document.querySelectorAll('pre');
  preElements.forEach((pre) => {
    // If parent is not already a code-wrap, wrap it
    let wrapper = pre.parentElement;
    if (!wrapper.classList.contains('code-wrap')) {
      wrapper = document.createElement('div');
      wrapper.className = 'code-wrap';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    }

    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.setAttribute('type', 'button');
    copyBtn.setAttribute('aria-label', 'Copy code snippet');
    copyBtn.textContent = 'Copy';

    copyBtn.addEventListener('click', async () => {
      const codeText = pre.innerText || pre.textContent;
      try {
        await navigator.clipboard.writeText(codeText);
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = codeText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      }
    });

    wrapper.appendChild(copyBtn);
  });
}

/**
 * Real-time Instant Search filter across cards and sections
 */
function initSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const resultsBar = document.getElementById('searchResultsBar');
  const resultsCount = document.getElementById('searchResultsCount');
  const clearBtn = document.getElementById('searchClearBtn');
  const cards = Array.from(document.querySelectorAll('.grid .card, .compare-card'));
  const sectionHeaders = Array.from(document.querySelectorAll('.section-header'));

  // Ensure no-results card exists
  let noResultsCard = document.getElementById('noResultsCard');
  if (!noResultsCard && cards.length > 0) {
    const firstGrid = document.querySelector('.grid');
    if (firstGrid) {
      noResultsCard = document.createElement('div');
      noResultsCard.id = 'noResultsCard';
      noResultsCard.className = 'no-results-card';
      noResultsCard.innerHTML = `
        <h3>No matching cheatsheet cards found</h3>
        <p>Try searching for a different keyword, data type, or syntax keyword.</p>
      `;
      firstGrid.parentElement.insertBefore(noResultsCard, firstGrid);
    }
  }

  if (!searchInput) return;

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      // Show all cards
      cards.forEach(card => card.classList.remove('hidden', 'card-highlight'));
      sectionHeaders.forEach(sh => sh.style.display = '');
      if (resultsBar) resultsBar.classList.remove('active');
      if (noResultsCard) noResultsCard.style.display = 'none';
      return;
    }

    let matchCount = 0;

    cards.forEach(card => {
      const cardText = card.textContent.toLowerCase();
      const isMatch = cardText.includes(query);

      if (isMatch) {
        card.classList.remove('hidden');
        card.classList.add('card-highlight');
        matchCount++;
      } else {
        card.classList.add('hidden');
        card.classList.remove('card-highlight');
      }
    });

    // Check visibility of section headers
    sectionHeaders.forEach(sh => {
      let nextElem = sh.nextElementSibling;
      let hasVisibleCards = false;
      while (nextElem && !nextElem.classList.contains('section-header')) {
        if (nextElem.classList.contains('grid')) {
          const visible = nextElem.querySelectorAll('.card:not(.hidden)');
          if (visible.length > 0) hasVisibleCards = true;
        }
        nextElem = nextElem.nextElementSibling;
      }
      sh.style.display = hasVisibleCards ? '' : 'none';
    });

    // Update Results Bar
    if (resultsBar && resultsCount) {
      resultsBar.classList.add('active');
      resultsCount.textContent = `Found ${matchCount} matching card${matchCount === 1 ? '' : 's'} for "${searchInput.value}"`;
    }

    // Toggle no results
    if (noResultsCard) {
      noResultsCard.style.display = matchCount === 0 ? 'block' : 'none';
    }
  }

  searchInput.addEventListener('input', performSearch);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      performSearch();
      searchInput.focus();
    });
  }
}

/**
 * Floating back-to-top button
 */
function initBackToTop() {
  let btn = document.getElementById('backToTopBtn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.className = 'back-to-top';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', 'Scroll back to top');
    btn.innerHTML = '&uarr;';
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Global Keyboard shortcuts
 */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    const searchInput = document.getElementById('globalSearchInput');
    // Press '/' or 'Ctrl+K' / 'Cmd+K' to focus search
    if ((e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput) {
      if (searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    }
    // Press Escape to clear and blur search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.blur();
    }
  });
}
