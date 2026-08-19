// Practice exam question bank data for A+, Security+, and Network+
const CERT_DATA = {
  "aplus": {
    "name": "CompTIA A+",
    "code": "220-1101 / 220-1102",
    "description": "Entry-level certification covering hardware, operating systems, networking, troubleshooting, and security fundamentals.",
    "groups": [
      {
        "id": "core1",
        "label": "Core 1 (220-1101)",
        "exams": [
          {
            "title": "Practice Exam 1",
            "questions": [
              {
                "question": "A user recently reported that every few days the system clock is approximately three minutes behind. The user also received an error message on the BIOS screen. Which of the following would MOST likely fix the clock issue?",
                "options": [
                  "Replace the motherboard's CMOS battery.",
                  "Install a new power supply.",
                  "Enable dual-channel memory by adding a second RAM stick.",
                  "Configure the PC to be an NTP server."
                ],
                "correct": 0,
                "explanation": "A CMOS battery that is dying can no longer hold BIOS settings reliably, causing the system clock to drift and triggering BIOS time/date errors."
              },
              {
                "question": "A PC in a conference room will be connected to a large-screen TV for video presentations during training sessions. Which of the following video connectors is the MOST likely choice for this environment?",
                "options": [
                  "Video Graphics Array",
                  "Thunderbolt",
                  "Digital Visual Interface",
                  "High-Definition Multimedia Interface"
                ],
                "correct": 3,
                "explanation": "HDMI carries both high-definition video and audio over a single cable, making it the standard choice for connecting a PC to a TV for presentations."
              },
              {
                "question": "An organization uses a cloud storage service to store company files. The file synchronization client for this cloud service is installed on every user's computer. One user reports that a file synced with the client to their computer does not contain information a co-worker of theirs added earlier today. Indicate the BEST action to take when troubleshooting this problem.",
                "options": [
                  "Exit the cloud service's client that is locally installed, restart the computer, and check to see if the file contains the information that is missing.",
                  "Visit the cloud service's website, locate the service status page, and determine if there is a service outage impacting the organization.",
                  "Open the cloud service's client that is locally installed, determine if there are any reported errors, and follow the steps provided to correct the synchronization errors.",
                  "Open the cloud service's client that is locally installed and check to see if there are any updates available for the client."
                ],
                "correct": 2,
                "explanation": "Sync errors are usually reported inside the client itself, so checking it for errors and following the suggested fix resolves most sync problems directly."
              },
              {
                "question": "A technician is replacing a laptop's HDD with an SSD. Which of the following should the technician do FIRST?",
                "options": [
                  "Create a backup of the HDD.",
                  "Upgrade the RAM on the laptop.",
                  "Enable SSD support at BIOS.",
                  "Install SSD drivers inside the OS."
                ],
                "correct": 0,
                "explanation": "Before making any hardware change that could result in data loss, the technician should always back up the drive first."
              },
              {
                "question": "A user with a new 5G smartphone notices the device has separated at the seam on one edge and is measurably thicker at that point. Which of the following actions should the user take FIRST?",
                "options": [
                  "Power off the smartphone and place it in a bucket of rice for 48 hours.",
                  "Place the smartphone in a refrigerator between 35\u00b0F (1.6\u00b0C) and 40\u00b0F (4.4\u00b0C) overnight.",
                  "Fully deplete the phone's battery and then charge it to 100%.",
                  "Contact the smartphone manufacturer for warranty support."
                ],
                "correct": 3,
                "explanation": "A swollen battery is a safety hazard and should not be pierced, frozen, or drained; the device should be handled per warranty/service procedures."
              }
            ]
          },
          {
            "title": "Practice Exam 2",
            "questions": [
              {
                "question": "What type of network is most commonly associated with Bluetooth devices such as wireless keyboards, mice, and headphones, and covers a small area?",
                "options": [
                  "LAN",
                  "WAN",
                  "PAN",
                  "MAN"
                ],
                "correct": 2,
                "explanation": "A Personal Area Network (PAN) covers a very short range, typically a few meters, which matches how Bluetooth accessories connect to a host device."
              },
              {
                "question": "Which of the following technologies has the FASTEST connection speed?",
                "options": [
                  "Fiber",
                  "Satellite",
                  "DSL",
                  "Cable"
                ],
                "correct": 0,
                "explanation": "Fiber optic connections offer the highest bandwidth and lowest latency of the listed options, making it the fastest."
              },
              {
                "question": "A technician is helping a user configure a new mobile phone. The user could pay for purchases with the previous phone by touching the phone to the payment system. Which of the following features should the technician enable so that the user can use the new phone to also pay for purchases this way?",
                "options": [
                  "PAN",
                  "RFID",
                  "NFC",
                  "Bluetooth"
                ],
                "correct": 2,
                "explanation": "NFC (Near Field Communication) is the short-range wireless technology used for tap-to-pay mobile payment systems."
              },
              {
                "question": "You have a desktop computer that is behaving erratically on the network. The wired connection will often disconnect without warning. Which tool should you use to troubleshoot the network adapter?",
                "options": [
                  "Multimeter",
                  "Loopback plug",
                  "Tone generator and probe",
                  "Cable tester"
                ],
                "correct": 1,
                "explanation": "A loopback plug tests the NIC's send/receive circuitry directly, helping isolate whether the adapter itself is the source of the disconnects."
              },
              {
                "question": "A technician needs to replace a failed power supply on a server. The server in question only has one power supply. The server contains two processors that need 100w, five hard drives that need 9w, and a GPU that uses 200w. Which of the following power supplies should the technician use?",
                "options": [
                  "500w",
                  "425w",
                  "325w",
                  "375w"
                ],
                "correct": 0,
                "explanation": "Total load is 2x100w (CPUs) + 5x9w (drives) + 200w (GPU) = 445w, so the technician should choose the next power supply rating above that draw, which is 500w."
              }
            ]
          },
          {
            "title": "Practice Exam 3",
            "questions": [
              {
                "question": "You are tasked with troubleshooting a desktop computer that does not power on. After checking the power cable and power supply, you find no issues. What is the next step you should take?",
                "options": [
                  "Replace the motherboard",
                  "Check the power button connection",
                  "Replace the RAM",
                  "Check the CPU connection"
                ],
                "correct": 1,
                "explanation": "With external power confirmed good, the next logical step is to verify the front-panel power button and its connection to the motherboard."
              },
              {
                "question": "Which of the following mobile device features is primarily used to extend battery life by adjusting screen brightness and disabling background apps? What is the best feature to extend battery life?",
                "options": [
                  "Airplane mode",
                  "Battery saver mode",
                  "Power off",
                  "Do Not Disturb mode"
                ],
                "correct": 1,
                "explanation": "Battery saver mode specifically reduces brightness and restricts background app activity to extend battery life."
              },
              {
                "question": "You are setting up a wireless network for a small office and need to configure security settings to ensure the network is protected. Which of the following wireless security protocols should you use to ensure the best security?",
                "options": [
                  "WEP",
                  "WPA",
                  "WPA2",
                  "WPS"
                ],
                "correct": 2,
                "explanation": "WPA2 (using AES encryption) offers materially stronger security than WEP or WPA, and WPS is a pairing feature, not an encryption protocol, so WPA2 is the best available choice here."
              },
              {
                "question": "Which Windows tool would you use to troubleshoot startup issues and attempt to fix system boot errors? What is the most appropriate tool for startup issues?",
                "options": [
                  "Disk Cleanup",
                  "System Restore",
                  "Safe Mode",
                  "System Configuration (msconfig)"
                ],
                "correct": 1,
                "explanation": "Safe Mode loads Windows with a minimal driver set, which helps isolate and resolve issues that are preventing a normal startup."
              },
              {
                "question": "Which of the following printer issues can cause print jobs to be stuck in the print queue and not be printed? What could cause print jobs to get stuck?",
                "options": [
                  "The printer is out of paper",
                  "The printer is offline",
                  "The printer is out of toner",
                  "The printer cable is unplugged"
                ],
                "correct": 1,
                "explanation": "If the printer shows offline, the print spooler holds queued jobs without sending them to the device until it comes back online."
              }
            ]
          },
          {
            "title": "Practice Exam 4",
            "questions": [
              {
                "question": "Which of the following is a primary characteristic of cloud computing? What is a key characteristic of cloud computing?",
                "options": [
                  "Local storage",
                  "Unlimited bandwidth",
                  "Scalability",
                  "Physical hardware management"
                ],
                "correct": 2,
                "explanation": "Scalability, the ability to increase or decrease resources on demand, is one of the defining characteristics of cloud computing."
              },
              {
                "question": "What is the primary purpose of a firewall in a network? What does a firewall primarily do?",
                "options": [
                  "Encrypt data",
                  "Monitor network traffic",
                  "Block unauthorized access",
                  "Scan for malware"
                ],
                "correct": 2,
                "explanation": "A firewall's core job is to inspect and control traffic in and out of a network, blocking connections that do not meet defined rules."
              },
              {
                "question": "You are installing Windows 10 on a computer, and the installation asks for a product key. Where would you find the product key for a pre-installed version of Windows?",
                "options": [
                  "On the computer\u2019s hard drive",
                  "On a sticker located on the back of the computer",
                  "In the installation media",
                  "In the BIOS/UEFI firmware"
                ],
                "correct": 1,
                "explanation": "OEM product keys for pre-installed Windows are commonly printed on a Certificate of Authenticity sticker attached to the case."
              },
              {
                "question": "Which of the following types of cables is used for a wired Ethernet connection? What cable is used for Ethernet?",
                "options": [
                  "USB cable",
                  "HDMI cable",
                  "RJ45 cable",
                  "VGA cable"
                ],
                "correct": 2,
                "explanation": "RJ45 connectors and the twisted-pair cabling that terminates in them are the standard for wired Ethernet connections."
              },
              {
                "question": "Which of the following components would you find integrated on a modern motherboard? Which component is integrated on a motherboard?",
                "options": [
                  "Processor",
                  "RAM slots",
                  "Hard drive",
                  "Power supply"
                ],
                "correct": 1,
                "explanation": "RAM slots are built directly onto the motherboard, while the CPU, storage, and power supply are separate, socketed or cabled components."
              }
            ]
          }
        ]
      },
      {
        "id": "core2",
        "label": "Core 2 (220-1102)",
        "exams": [
          {
            "title": "Practice Exam 5",
            "questions": [
              {
                "question": "A user's Windows desktop continuously crashes during boot. A technician runs the following command in safe mode and then reboots the desktop: c:\\Windows\\system32> sfc /scannow Which of the following BEST describes why the technician ran this command?",
                "options": [
                  "The user's profile is damaged.",
                  "The system files are corrupted.",
                  "The hard drive needs to be defragmented.",
                  "The system needs to have a restore performed."
                ],
                "correct": 1,
                "explanation": "sfc /scannow scans protected system files and repairs corrupted ones, which is consistent with a boot process that keeps crashing due to file corruption."
              },
              {
                "question": "A user calls the IT help desk and explains that all the data on the user's computer is encrypted. The user also indicates that a pop-up message on the screen is asking for payment in Bitcoins to unlock the encrypted data. The user's computer is MOST likely infected with which of the following?",
                "options": [
                  "Botnet",
                  "Spyware",
                  "Ransomware",
                  "Rootkit"
                ],
                "correct": 2,
                "explanation": "Encrypting a user's files and demanding a cryptocurrency payment to restore access is the defining behavior of ransomware."
              },
              {
                "question": "A user reports being unable to access the Internet or use wireless headphones on a mobile device. The technician confirms the headphones properly connect to another device. Which of the following should the technician do to solve the issue?",
                "options": [
                  "Turn off airplane mode.",
                  "Connect to a different service set identifier.",
                  "Test the battery on the device.",
                  "Disable near-field communication."
                ],
                "correct": 0,
                "explanation": "Airplane mode disables all wireless radios, including cellular data and Bluetooth, so turning it off restores both internet and headphone connectivity."
              },
              {
                "question": "Which of the following symptoms is MOST likely a sign of ransomware?",
                "options": [
                  "Internet connectivity is lost.",
                  "Battery life is reduced.",
                  "Files on devices are inaccessible.",
                  "A large number of ads appear."
                ],
                "correct": 2,
                "explanation": "Files suddenly becoming inaccessible (often renamed or showing a ransom note) is the classic symptom of a ransomware infection."
              },
              {
                "question": "A sales staff member recently left a laptop at a hotel and needs a new one immediately. After remotely wiping the old laptop, a support technician prepares to take a new laptop out of inventory to begin the deployment process. Which of the following should the technician do FIRST?",
                "options": [
                  "Recycle all the cardboard and other shipping materials appropriately.",
                  "Call the hotel and demand the old laptop be sent back to the repair depot.",
                  "Confirm the shipping address for the new laptop with the sales staff member.",
                  "Document the serial numbers and usernames for asset management."
                ],
                "correct": 3,
                "explanation": "Before reissuing equipment, the technician should log serial numbers and assigned usernames so the deployment is properly tracked for asset management."
              }
            ]
          },
          {
            "title": "Practice Exam 6",
            "questions": [
              {
                "question": "Which of the following workstation operating systems uses NTFS for the standard filesystem type?",
                "options": [
                  "macOS",
                  "Windows",
                  "Chrome OS",
                  "Linux"
                ],
                "correct": 1,
                "explanation": "Windows uses NTFS as its native, standard file system, unlike macOS (APFS/HFS+), Chrome OS, or Linux (ext4 and others)."
              },
              {
                "question": "A technician has been directed to dispose of hard drives from company laptops properly. Company standards require the use of a high-powered magnet to destroy data on decommissioned hard drives. Which of the following data destruction methods should the technician choose?",
                "options": [
                  "Degaussing",
                  "Drilling",
                  "Incinerating",
                  "Shredding"
                ],
                "correct": 0,
                "explanation": "Degaussing exposes a magnetic hard drive to a powerful magnetic field that scrambles the platter's data, matching the described method."
              },
              {
                "question": "A network engineer needs to update a network firewall, which will cause a temporary outage. The network engineer submits a change request form to perform the required maintenance. If the firewall update fails, which of the following is the NEXT step?",
                "options": [
                  "Perform a risk analysis.",
                  "Execute a backout plan.",
                  "Request a change approval.",
                  "Acquire end user acceptance."
                ],
                "correct": 1,
                "explanation": "A documented backout plan defines how to revert a failed change, and it should be executed immediately when the change causes an unexpected outage."
              },
              {
                "question": "A technician is installing M.2 devices in several workstations. Which of the following would be required when installing the devices?",
                "options": [
                  "Air filtration",
                  "Heat-resistant gloves",
                  "Ergonomic floor mats",
                  "Electrostatic discharge straps"
                ],
                "correct": 3,
                "explanation": "M.2 cards contain static-sensitive components, so an ESD strap is required to protect them from electrostatic discharge during installation."
              },
              {
                "question": "Which of the following Linux commands will display a directory of files?",
                "options": [
                  "chown",
                  "ls",
                  "chmod",
                  "cls"
                ],
                "correct": 1,
                "explanation": "The 'ls' command lists the contents of a directory in Linux, similar to 'dir' in Windows."
              }
            ]
          },
          {
            "title": "Practice Exam 7",
            "questions": [
              {
                "question": "A user needs to run a legacy application that only works on Windows 7. What is the best method to run the application on a Windows 10 machine?",
                "options": [
                  "Use Task Scheduler",
                  "Use Compatibility Mode",
                  "Disable UAC",
                  "Change File Permissions"
                ],
                "correct": 1,
                "explanation": "Compatibility Mode lets Windows 10 emulate the behavior of an older Windows version so legacy applications can run correctly."
              },
              {
                "question": "Which edition of Windows 10 does not support BitLocker?",
                "options": [
                  "Windows 10 Pro",
                  "Windows 10 Home",
                  "Windows 10 Enterprise",
                  "Windows 10 Education"
                ],
                "correct": 1,
                "explanation": "Windows 10 Home does not include BitLocker; it is available starting with Windows 10 Pro and above."
              },
              {
                "question": "What type of malware appears to perform a desirable function but actually performs malicious activity in the background?",
                "options": [
                  "Virus",
                  "Worm",
                  "Trojan horse",
                  "Ransomware"
                ],
                "correct": 2,
                "explanation": "A Trojan horse disguises itself as legitimate or useful software while secretly carrying out malicious actions in the background."
              },
              {
                "question": "What should be the first step when addressing a suspected malware infection?",
                "options": [
                  "Delete the infected file",
                  "Run a full antivirus scan",
                  "Quarantine the system",
                  "Reinstall the OS"
                ],
                "correct": 2,
                "explanation": "Isolating (quarantining) the affected system first prevents the suspected malware from spreading before further investigation or remediation."
              },
              {
                "question": "A user is unable to access a network share but can browse the internet. What\u2019s the most likely cause?",
                "options": [
                  "DNS issue",
                  "Incorrect subnet mask",
                  "File and print sharing disabled",
                  "Faulty NIC"
                ],
                "correct": 2,
                "explanation": "If internet access works but a network share does not, the most likely culprit is that file and printer sharing is disabled on the source machine."
              }
            ]
          },
          {
            "title": "Practice Exam 8",
            "questions": [
              {
                "question": "A user reports that files on their computer are encrypted and a message is asking for payment. What kind of attack has likely occurred?",
                "options": [
                  "Spyware",
                  "Trojan",
                  "Ransomware",
                  "Worm"
                ],
                "correct": 2,
                "explanation": "Encrypting a user's files and demanding payment to unlock them is the hallmark of a ransomware attack."
              },
              {
                "question": "After installing a new application, Windows 10 repeatedly shows \u201cApplication Not Responding.\u201d What should be checked first?",
                "options": [
                  "Group Policy settings",
                  "Task Manager for CPU/memory usage",
                  "System Restore",
                  "BIOS configuration"
                ],
                "correct": 1,
                "explanation": "Task Manager quickly reveals whether a process is consuming excessive CPU or memory, which is a common cause of an app becoming unresponsive."
              },
              {
                "question": "A user cannot open an encrypted email. What\u2019s the most likely reason?",
                "options": [
                  "Their email address changed",
                  "The sender is using a different OS",
                  "The user doesn't have the correct private key",
                  "The antivirus is blocking the message"
                ],
                "correct": 2,
                "explanation": "Encrypted email (S/MIME) requires the recipient's private key to decrypt the message; without it, the message cannot be opened."
              },
              {
                "question": "Which of the following is considered a best practice when working inside a computer?",
                "options": [
                  "Use latex gloves",
                  "Wear a wool sweater",
                  "Use an anti-static wrist strap",
                  "Always unplug the monitor only"
                ],
                "correct": 2,
                "explanation": "An anti-static wrist strap grounds the technician to prevent electrostatic discharge from damaging sensitive internal components."
              },
              {
                "question": "What\u2019s the purpose of a ticketing system in IT support?",
                "options": [
                  "To store software license keys",
                  "To track and prioritize user issues",
                  "To manage user credentials",
                  "To monitor network bandwidth"
                ],
                "correct": 1,
                "explanation": "A ticketing system logs, tracks, and prioritizes user-reported issues so they can be managed and resolved in an organized way."
              }
            ]
          }
        ]
      }
    ]
  },
  "security": {
    "name": "CompTIA Security+",
    "code": "SY0-701",
    "description": "Covers general security concepts, threats and vulnerabilities, security architecture, security operations, and program management.",
    "groups": [
      {
        "id": "main",
        "label": "SY0-701",
        "exams": [
          {
            "title": "Practice Exam 1",
            "questions": [
              {
                "question": "A security analyst wants to ensure that if a laptop is stolen, the data on its drive cannot be read even if the drive is removed and connected to another computer. Which control BEST achieves this?",
                "options": [
                  "Full disk encryption",
                  "A BIOS supervisor password",
                  "A screen lock policy",
                  "File-level compression"
                ],
                "correct": 0,
                "explanation": "Full disk encryption protects data at rest so the contents are unreadable without the encryption key, even if the drive is removed and attached elsewhere."
              },
              {
                "question": "Which of the following BEST describes the security principle of least privilege?",
                "options": [
                  "Users are granted the minimum access needed to perform their job",
                  "Users must change their password every 30 days",
                  "All traffic is denied unless explicitly allowed",
                  "Data is classified based on sensitivity"
                ],
                "correct": 0,
                "explanation": "Least privilege means giving each account only the access required to do its job, limiting the damage if the account is compromised."
              },
              {
                "question": "A company wants to verify that a downloaded software update has not been altered in transit. Which of the following would BEST accomplish this?",
                "options": [
                  "Comparing the file's hash to the vendor's published hash",
                  "Scanning the file with antivirus software",
                  "Checking the file's creation date",
                  "Encrypting the file before installation"
                ],
                "correct": 0,
                "explanation": "Comparing cryptographic hashes verifies integrity: any change to the file, even a single bit, produces a different hash value."
              },
              {
                "question": "Which type of attack involves an attacker intercepting and possibly altering communications between two parties who believe they are communicating directly with each other?",
                "options": [
                  "On-path attack",
                  "Denial-of-service attack",
                  "SQL injection",
                  "Credential stuffing"
                ],
                "correct": 0,
                "explanation": "An on-path (man-in-the-middle) attack positions the attacker between two communicating parties to intercept or modify traffic."
              },
              {
                "question": "An organization requires employees to present a smart card and enter a PIN before accessing a workstation. This is an example of which authentication concept?",
                "options": [
                  "Multifactor authentication",
                  "Single sign-on",
                  "Role-based access control",
                  "Federation"
                ],
                "correct": 0,
                "explanation": "Combining something you have (the smart card) with something you know (the PIN) satisfies two different authentication factors, making this multifactor authentication."
              },
              {
                "question": "Which of the following is the PRIMARY purpose of a security awareness training program?",
                "options": [
                  "Reduce the likelihood employees fall victim to social engineering",
                  "Satisfy antivirus licensing requirements",
                  "Replace the need for technical security controls",
                  "Configure firewall rules automatically"
                ],
                "correct": 0,
                "explanation": "Security awareness training teaches employees to recognize phishing and other social engineering tactics, reducing human-factor risk."
              },
              {
                "question": "A penetration tester is given full knowledge of the internal network, including source code and credentials, before beginning testing. Which type of test is this?",
                "options": [
                  "White-box test",
                  "Black-box test",
                  "Gray-box test",
                  "Passive reconnaissance"
                ],
                "correct": 0,
                "explanation": "A white-box (or known-environment) test provides the tester complete internal knowledge of the target ahead of time."
              },
              {
                "question": "Which of the following backup types captures only the data that has changed since the LAST full backup, without resetting the archive bit?",
                "options": [
                  "Differential backup",
                  "Incremental backup",
                  "Snapshot backup",
                  "Full backup"
                ],
                "correct": 0,
                "explanation": "A differential backup always captures changes since the last full backup and does not clear the archive bit, so each differential grows larger over time."
              },
              {
                "question": "A company's data retention policy requires that customer records be permanently and irreversibly destroyed once the retention period expires. For records stored on paper, which method BEST satisfies this?",
                "options": [
                  "Cross-cut shredding",
                  "Placing documents in a locked cabinet",
                  "Redacting names only",
                  "Archiving to a secure offsite location"
                ],
                "correct": 0,
                "explanation": "Cross-cut shredding physically destroys paper records so the information cannot be reconstructed, satisfying a secure destruction requirement."
              },
              {
                "question": "Which of the following BEST describes the concept of non-repudiation in information security?",
                "options": [
                  "Proof that a specific party performed an action and cannot deny it",
                  "Ensuring data is available when needed",
                  "Restricting access based on job role",
                  "Encrypting data both at rest and in transit"
                ],
                "correct": 0,
                "explanation": "Non-repudiation provides evidence (such as a digital signature) that ties an action to a specific party, preventing them from credibly denying it later."
              }
            ]
          },
          {
            "title": "Practice Exam 2",
            "questions": [
              {
                "question": "An attacker sends a fraudulent email that appears to come from a company's CEO, asking the finance department to urgently wire funds. Which social engineering technique is this?",
                "options": [
                  "Business email compromise (whaling)",
                  "Tailgating",
                  "Shoulder surfing",
                  "Typosquatting"
                ],
                "correct": 0,
                "explanation": "Impersonating an executive to pressure staff into an urgent financial transaction is a classic business email compromise / whaling attack."
              },
              {
                "question": "Which cryptographic concept ensures that if a long-term private key is later compromised, past session communications remain safe?",
                "options": [
                  "Perfect forward secrecy",
                  "Key stretching",
                  "Salting",
                  "Steganography"
                ],
                "correct": 0,
                "explanation": "Perfect forward secrecy generates unique session keys for each session so a future key compromise does not expose past traffic."
              },
              {
                "question": "A security team wants to detect and block known attack signatures on the network in real time while also stopping the traffic before it reaches its destination. Which device should be deployed?",
                "options": [
                  "Inline intrusion prevention system (IPS)",
                  "Passive intrusion detection system (IDS)",
                  "Network tap",
                  "Honeypot"
                ],
                "correct": 0,
                "explanation": "An inline IPS sits directly in the traffic path and can actively block malicious traffic, unlike a passive IDS which only alerts."
              },
              {
                "question": "Which of the following vulnerabilities occurs when an application fails to properly validate user input, allowing an attacker to run unintended database commands?",
                "options": [
                  "SQL injection",
                  "Buffer overflow",
                  "Cross-site scripting",
                  "Race condition"
                ],
                "correct": 0,
                "explanation": "SQL injection exploits unsanitized input fields to insert malicious SQL commands that the backend database executes."
              },
              {
                "question": "An organization wants a group of servers to fail over automatically to a secondary site if the primary data center goes offline, with minimal downtime. Which concept BEST describes this capability?",
                "options": [
                  "High availability",
                  "Data loss prevention",
                  "Vulnerability scanning",
                  "Change management"
                ],
                "correct": 0,
                "explanation": "High availability designs (such as clustering or failover sites) keep services running with minimal interruption if a primary system fails."
              },
              {
                "question": "A user receives a text message claiming to be from their bank, asking them to click a link and verify their account. Which type of attack is this?",
                "options": [
                  "Smishing",
                  "Vishing",
                  "Pharming",
                  "Spear phishing via email"
                ],
                "correct": 0,
                "explanation": "Smishing is phishing carried out over SMS text messages rather than email or voice calls."
              },
              {
                "question": "Which access control model assigns permissions based on labels and clearance levels, and is commonly used in government and military systems?",
                "options": [
                  "Mandatory access control (MAC)",
                  "Discretionary access control (DAC)",
                  "Role-based access control (RBAC)",
                  "Attribute-based access control (ABAC)"
                ],
                "correct": 0,
                "explanation": "Mandatory access control enforces access based on fixed classification labels and clearance levels set by a central authority, not by resource owners."
              },
              {
                "question": "During an incident response, which phase focuses on removing the root cause of the incident, such as malware or a compromised account, from affected systems?",
                "options": [
                  "Eradication",
                  "Containment",
                  "Identification",
                  "Lessons learned"
                ],
                "correct": 0,
                "explanation": "Eradication is the phase where the underlying cause of the incident is removed from the environment after it has been contained."
              },
              {
                "question": "Which of the following would be the BEST way to reduce the attack surface of a newly deployed server?",
                "options": [
                  "Disabling unused services and closing unnecessary ports",
                  "Adding more RAM to the server",
                  "Enabling verbose logging",
                  "Installing a second network interface card"
                ],
                "correct": 0,
                "explanation": "Disabling unneeded services and ports removes potential entry points, directly reducing the server's attack surface."
              },
              {
                "question": "A company wants to ensure that if an employee's laptop is lost, sensitive data can be erased remotely. Which mobile device management feature provides this?",
                "options": [
                  "Remote wipe",
                  "Geofencing",
                  "Containerization",
                  "Full device encryption"
                ],
                "correct": 0,
                "explanation": "Remote wipe allows an administrator to erase data on a lost or stolen device remotely, protecting sensitive information from exposure."
              }
            ]
          },
          {
            "title": "Practice Exam 3",
            "questions": [
              {
                "question": "Which of the following BEST describes a zero-day vulnerability?",
                "options": [
                  "A flaw that is exploited before the vendor has released a patch",
                  "A vulnerability that has existed for zero days since discovery",
                  "An attack that takes zero seconds to execute",
                  "A vulnerability with a CVSS score of zero"
                ],
                "correct": 0,
                "explanation": "A zero-day vulnerability is one that attackers exploit before the vendor is aware of it or has issued a fix."
              },
              {
                "question": "An organization implements a policy requiring two employees to approve any change over a certain dollar amount. Which security concept does this represent?",
                "options": [
                  "Separation of duties",
                  "Least privilege",
                  "Job rotation",
                  "Mandatory vacation"
                ],
                "correct": 0,
                "explanation": "Separation of duties splits critical tasks between multiple people so no single individual can complete a sensitive action alone."
              },
              {
                "question": "Which of the following is an example of a compensating control?",
                "options": [
                  "Adding increased monitoring on a legacy system that cannot be patched",
                  "Installing the latest vendor patch",
                  "Replacing an outdated server",
                  "Writing a new security policy"
                ],
                "correct": 0,
                "explanation": "A compensating control provides an alternative safeguard when the primary control, such as patching, cannot be applied directly."
              },
              {
                "question": "A company wants to test its incident response plan without impacting production systems, using a discussion-based exercise where the team talks through their roles. Which type of exercise is this?",
                "options": [
                  "Tabletop exercise",
                  "Live simulation",
                  "Red team engagement",
                  "Penetration test"
                ],
                "correct": 0,
                "explanation": "A tabletop exercise is a discussion-based walkthrough of an incident scenario, without operating on live systems."
              },
              {
                "question": "Which wireless security protocol introduced Simultaneous Authentication of Equals (SAE) to replace the pre-shared key exchange used in earlier versions?",
                "options": [
                  "WPA3",
                  "WPA2",
                  "WEP",
                  "WPS"
                ],
                "correct": 0,
                "explanation": "WPA3 replaced the WPA2 four-way handshake with SAE, which is more resistant to offline dictionary attacks."
              },
              {
                "question": "An attacker gains access to a system and installs software that provides continued privileged access while hiding its presence from normal detection tools. What is this called?",
                "options": [
                  "Rootkit",
                  "Adware",
                  "Logic bomb",
                  "Keylogger"
                ],
                "correct": 0,
                "explanation": "A rootkit is malware designed to grant persistent, hidden privileged access while evading detection."
              },
              {
                "question": "Which of the following documents defines the acceptable boundaries and rules of engagement before a penetration test begins?",
                "options": [
                  "Rules of engagement",
                  "Service level agreement",
                  "Memorandum of understanding",
                  "Business impact analysis"
                ],
                "correct": 0,
                "explanation": "Rules of engagement specify the scope, methods, timing, and boundaries authorized for a penetration test."
              },
              {
                "question": "A company classifies data as Public, Internal, Confidential, and Restricted. Which security concept does this represent?",
                "options": [
                  "Data classification",
                  "Data masking",
                  "Data minimization",
                  "Data sovereignty"
                ],
                "correct": 0,
                "explanation": "Data classification labels data by sensitivity so appropriate handling and protection controls can be applied to each category."
              },
              {
                "question": "Which of the following BEST describes the purpose of a honeypot?",
                "options": [
                  "To lure and observe attackers in an isolated, monitored environment",
                  "To encrypt sensitive files automatically",
                  "To back up production data offsite",
                  "To authenticate remote users"
                ],
                "correct": 0,
                "explanation": "A honeypot is a decoy system designed to attract attackers so their techniques can be observed and analyzed safely."
              },
              {
                "question": "Which of the following is the MOST effective way to mitigate the risk of a former employee retaining access to company systems after termination?",
                "options": [
                  "Promptly disabling accounts as part of the offboarding process",
                  "Requiring all employees to use the same shared password",
                  "Increasing the password complexity requirement",
                  "Enabling a screensaver lock policy"
                ],
                "correct": 0,
                "explanation": "Promptly disabling or removing accounts during offboarding directly closes off a departing employee's access to systems."
              }
            ]
          },
          {
            "title": "Practice Exam 4",
            "questions": [
              {
                "question": "Which of the following BEST describes the purpose of a Security Information and Event Management (SIEM) system?",
                "options": [
                  "Aggregating and correlating log data from multiple sources for analysis and alerting",
                  "Encrypting data at rest across the enterprise",
                  "Automatically patching vulnerable systems",
                  "Managing user password resets"
                ],
                "correct": 0,
                "explanation": "A SIEM centralizes log collection and correlation from many sources, helping analysts detect and investigate security events."
              },
              {
                "question": "An organization wants to ensure that even if an attacker obtains a database of hashed passwords, cracking them via precomputed rainbow tables is significantly harder. Which technique should be applied?",
                "options": [
                  "Salting the hashes",
                  "Using a faster hashing algorithm",
                  "Storing passwords in plaintext with encryption",
                  "Disabling password complexity requirements"
                ],
                "correct": 0,
                "explanation": "Adding a unique salt to each password before hashing defeats precomputed rainbow table attacks because each hash becomes unique."
              },
              {
                "question": "Which type of malware self-replicates and spreads across a network without requiring a host file or user interaction?",
                "options": [
                  "Worm",
                  "Trojan",
                  "Virus",
                  "Spyware"
                ],
                "correct": 0,
                "explanation": "A worm is self-propagating and can spread across networks independently, unlike a virus which needs a host file, or a Trojan which relies on user action."
              },
              {
                "question": "A company wants to segment its guest Wi-Fi traffic so it cannot reach internal corporate resources. Which network design concept BEST achieves this?",
                "options": [
                  "VLAN segmentation",
                  "Port forwarding",
                  "Load balancing",
                  "Network address translation"
                ],
                "correct": 0,
                "explanation": "Placing guest traffic on a separate VLAN isolates it from internal networks at the switching layer."
              },
              {
                "question": "Which of the following BEST describes a supply chain attack?",
                "options": [
                  "Compromising a trusted third-party vendor or component to attack the end target",
                  "Flooding a server with traffic to cause a denial of service",
                  "Guessing a user's password through repeated attempts",
                  "Intercepting Wi-Fi traffic at a coffee shop"
                ],
                "correct": 0,
                "explanation": "A supply chain attack compromises a trusted vendor, update mechanism, or component that the target relies on, using it as an entry point."
              },
              {
                "question": "Which control type is a fence around a data center building an example of?",
                "options": [
                  "Physical control",
                  "Administrative control",
                  "Technical control",
                  "Detective control"
                ],
                "correct": 0,
                "explanation": "A fence is a tangible, physical barrier meant to deter or prevent unauthorized physical access, making it a physical control."
              },
              {
                "question": "An organization performs a formal analysis to determine which business processes are most critical and how long they can be down before causing serious harm. What is this analysis called?",
                "options": [
                  "Business impact analysis",
                  "Vulnerability assessment",
                  "Penetration test",
                  "Risk register review"
                ],
                "correct": 0,
                "explanation": "A business impact analysis identifies critical processes and their maximum tolerable downtime, informing recovery priorities."
              },
              {
                "question": "Which of the following authentication factors is an example of 'something you are'?",
                "options": [
                  "Fingerprint scan",
                  "Hardware token",
                  "PIN code",
                  "Security question"
                ],
                "correct": 0,
                "explanation": "A fingerprint is a biometric characteristic, which falls under the 'something you are' authentication factor."
              },
              {
                "question": "A company wants to legally bind a third-party vendor to specific uptime and response-time guarantees. Which document should be used?",
                "options": [
                  "Service level agreement (SLA)",
                  "Non-disclosure agreement (NDA)",
                  "Acceptable use policy (AUP)",
                  "Memorandum of understanding (MOU)"
                ],
                "correct": 0,
                "explanation": "A service level agreement formally defines measurable performance commitments such as uptime and response times."
              },
              {
                "question": "Which of the following is the MOST likely reason an organization would conduct regular vulnerability scans rather than relying solely on annual penetration tests?",
                "options": [
                  "Vulnerability scans provide more frequent visibility into newly disclosed weaknesses",
                  "Vulnerability scans replace the need for patch management",
                  "Vulnerability scans actively exploit systems to confirm risk",
                  "Vulnerability scans are required only once per year by regulation"
                ],
                "correct": 0,
                "explanation": "Regular vulnerability scanning gives ongoing, frequent insight into new weaknesses as they are disclosed, complementing periodic penetration tests."
              }
            ]
          }
        ]
      }
    ]
  },
  "network": {
    "name": "CompTIA Network+",
    "code": "N10-009",
    "description": "Covers networking concepts, infrastructure implementation, network operations, network security, and troubleshooting.",
    "groups": [
      {
        "id": "main",
        "label": "N10-009",
        "exams": [
          {
            "title": "Practice Exam 1",
            "questions": [
              {
                "question": "Which layer of the OSI model is responsible for logical addressing and routing between networks?",
                "options": [
                  "Network layer",
                  "Data link layer",
                  "Transport layer",
                  "Session layer"
                ],
                "correct": 0,
                "explanation": "The Network layer (Layer 3) handles logical (IP) addressing and routing packets between different networks."
              },
              {
                "question": "A technician needs to connect two switches together to extend the network across a building while combining multiple physical links into one logical, higher-bandwidth connection. Which technology should be used?",
                "options": [
                  "Link aggregation",
                  "VLAN tagging",
                  "Port mirroring",
                  "Spanning Tree Protocol"
                ],
                "correct": 0,
                "explanation": "Link aggregation (such as LACP) bundles multiple physical links into a single logical link, increasing bandwidth and providing redundancy."
              },
              {
                "question": "Which of the following is the default subnet mask for a Class C IPv4 network?",
                "options": [
                  "255.255.255.0",
                  "255.255.0.0",
                  "255.0.0.0",
                  "255.255.255.255"
                ],
                "correct": 0,
                "explanation": "Class C networks use a default subnet mask of 255.255.255.0, providing 254 usable host addresses."
              },
              {
                "question": "A network administrator wants to prevent switching loops on a network with redundant links between switches. Which protocol should be enabled?",
                "options": [
                  "Spanning Tree Protocol (STP)",
                  "Dynamic Host Configuration Protocol (DHCP)",
                  "Address Resolution Protocol (ARP)",
                  "Border Gateway Protocol (BGP)"
                ],
                "correct": 0,
                "explanation": "Spanning Tree Protocol detects redundant paths between switches and blocks them to prevent Layer 2 switching loops."
              },
              {
                "question": "Which DNS record type maps a hostname to an IPv4 address?",
                "options": [
                  "A record",
                  "MX record",
                  "CNAME record",
                  "TXT record"
                ],
                "correct": 0,
                "explanation": "An A record maps a hostname directly to an IPv4 address; AAAA is used for IPv6."
              },
              {
                "question": "A user reports that a workstation is intermittently disconnecting from the network. A technician suspects the Ethernet cable is faulty. Which tool would BEST confirm this?",
                "options": [
                  "Cable tester",
                  "Toner probe",
                  "Spectrum analyzer",
                  "Protocol analyzer"
                ],
                "correct": 0,
                "explanation": "A cable tester checks for continuity, shorts, and wiring faults along the length of an Ethernet cable."
              },
              {
                "question": "Which port number is used by HTTPS by default?",
                "options": [
                  "443",
                  "80",
                  "21",
                  "25"
                ],
                "correct": 0,
                "explanation": "HTTPS uses TCP port 443 by default, while plain HTTP uses port 80."
              },
              {
                "question": "A company wants to allow remote employees to securely access internal network resources as though they were physically on-site. Which technology BEST accomplishes this?",
                "options": [
                  "VPN",
                  "VLAN",
                  "NAT",
                  "QoS"
                ],
                "correct": 0,
                "explanation": "A VPN creates an encrypted tunnel over the internet, allowing remote users secure access to internal network resources."
              },
              {
                "question": "Which of the following wireless standards operates ONLY in the 5GHz band?",
                "options": [
                  "802.11a",
                  "802.11b",
                  "802.11g",
                  "802.11n (2.4GHz mode)"
                ],
                "correct": 0,
                "explanation": "802.11a was designed to operate exclusively in the 5GHz band, unlike 802.11b/g which operate in 2.4GHz."
              },
              {
                "question": "A technician wants to reduce broadcast traffic on a large flat network by dividing it into smaller logical segments. Which technology should be implemented?",
                "options": [
                  "VLANs",
                  "Port forwarding",
                  "NAT",
                  "STP"
                ],
                "correct": 0,
                "explanation": "VLANs logically segment a switched network into smaller broadcast domains, reducing unnecessary broadcast traffic."
              }
            ]
          },
          {
            "title": "Practice Exam 2",
            "questions": [
              {
                "question": "Which protocol automatically assigns IP addresses, subnet masks, and default gateways to devices on a network?",
                "options": [
                  "DHCP",
                  "DNS",
                  "SNMP",
                  "NTP"
                ],
                "correct": 0,
                "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically leases IP configuration information to devices joining the network."
              },
              {
                "question": "A network engineer needs to translate multiple private internal IP addresses to a single public IP address for internet access. Which technology should be used?",
                "options": [
                  "NAT (specifically PAT)",
                  "VLAN trunking",
                  "DNS forwarding",
                  "Static routing"
                ],
                "correct": 0,
                "explanation": "Port Address Translation (a form of NAT) maps many internal private addresses to one public address using different port numbers."
              },
              {
                "question": "Which cabling standard is rated for speeds up to 10Gbps over a maximum distance of 55 meters?",
                "options": [
                  "Cat6",
                  "Cat5e",
                  "Cat3",
                  "Coaxial RG-6"
                ],
                "correct": 0,
                "explanation": "Cat6 supports 10Gbps up to about 55 meters; beyond that distance it is typically limited to 1Gbps, while Cat5e tops out at 1Gbps."
              },
              {
                "question": "A technician is troubleshooting a connectivity issue and wants to trace the path packets take to a remote host, including each hop along the way. Which command should be used?",
                "options": [
                  "traceroute",
                  "ping",
                  "ipconfig",
                  "netstat"
                ],
                "correct": 0,
                "explanation": "Traceroute (or tracert on Windows) reveals each router hop between the source and destination, along with latency at each hop."
              },
              {
                "question": "Which of the following BEST describes the function of a default gateway?",
                "options": [
                  "The device that forwards traffic destined for networks outside the local subnet",
                  "A server that resolves hostnames to IP addresses",
                  "A switch that filters traffic by MAC address",
                  "A device that assigns dynamic IP addresses"
                ],
                "correct": 0,
                "explanation": "The default gateway is the router that a host sends traffic to when the destination is outside its own local subnet."
              },
              {
                "question": "An organization wants to prioritize voice traffic over regular data traffic on a congested network link. Which technology should be implemented?",
                "options": [
                  "Quality of Service (QoS)",
                  "Port mirroring",
                  "Link aggregation",
                  "NAT"
                ],
                "correct": 0,
                "explanation": "QoS allows administrators to prioritize latency-sensitive traffic, such as VoIP, over less time-sensitive data traffic."
              },
              {
                "question": "Which IPv6 address type is used for communication with a single, nearest interface among a group, and is commonly associated with load-balancing scenarios?",
                "options": [
                  "Anycast",
                  "Unicast",
                  "Multicast",
                  "Loopback"
                ],
                "correct": 0,
                "explanation": "Anycast addresses are assigned to multiple interfaces, and traffic is routed to the nearest one, useful for load distribution and redundancy."
              },
              {
                "question": "A technician needs to identify all active TCP and UDP connections on a local Windows machine. Which command should be used?",
                "options": [
                  "netstat",
                  "ipconfig",
                  "nslookup",
                  "arp"
                ],
                "correct": 0,
                "explanation": "Netstat displays active network connections and listening ports on a local machine."
              },
              {
                "question": "Which of the following network topologies connects every device to a central device, such as a switch, making it the most common topology in modern LANs?",
                "options": [
                  "Star topology",
                  "Ring topology",
                  "Bus topology",
                  "Mesh topology"
                ],
                "correct": 0,
                "explanation": "A star topology connects all devices to a central switch or hub, and is the standard design used in most modern wired LANs."
              },
              {
                "question": "A company's firewall administrator wants to allow only specific, explicitly approved traffic and deny everything else by default. Which approach is this?",
                "options": [
                  "Implicit deny",
                  "Implicit allow",
                  "Split tunneling",
                  "Port mirroring"
                ],
                "correct": 0,
                "explanation": "An implicit deny policy blocks all traffic by default except what has been explicitly permitted, following the principle of least privilege for network access."
              }
            ]
          },
          {
            "title": "Practice Exam 3",
            "questions": [
              {
                "question": "Which wireless security protocol is considered obsolete and easily cracked due to weak encryption, and should not be used in modern networks?",
                "options": [
                  "WEP",
                  "WPA2",
                  "WPA3",
                  "802.1X"
                ],
                "correct": 0,
                "explanation": "WEP uses a weak encryption scheme with well-known vulnerabilities and can be cracked quickly with widely available tools."
              },
              {
                "question": "A network technician needs to physically identify which port on a patch panel corresponds to a specific wall jack. Which tool is BEST suited for this task?",
                "options": [
                  "Toner probe (tone generator and probe)",
                  "Cable certifier",
                  "Loopback adapter",
                  "Punch-down tool"
                ],
                "correct": 0,
                "explanation": "A tone generator sends a signal down the cable, and the probe detects it, letting a technician trace which patch panel port corresponds to a jack."
              },
              {
                "question": "Which of the following describes the purpose of a demarcation point (demarc) in a network installation?",
                "options": [
                  "The point where the ISP's network responsibility ends and the customer's begins",
                  "The location where all VLANs are terminated",
                  "The physical location of the core router",
                  "The point where wireless and wired networks intersect"
                ],
                "correct": 0,
                "explanation": "The demarcation point marks the boundary between the service provider's infrastructure and the customer-owned network equipment."
              },
              {
                "question": "An administrator wants to allow specific external users to reach an internal web server without exposing the rest of the internal network. Where should the server be placed?",
                "options": [
                  "A DMZ (demilitarized zone)",
                  "The internal VLAN with other servers",
                  "Directly on the core switch's default VLAN",
                  "Behind a second layer of NAT with no firewall rules"
                ],
                "correct": 0,
                "explanation": "A DMZ isolates publicly accessible servers from the internal network, limiting exposure if the server is compromised."
              },
              {
                "question": "Which of the following BEST describes the purpose of the Address Resolution Protocol (ARP)?",
                "options": [
                  "Resolving a known IP address to its corresponding MAC address on the local network",
                  "Resolving a hostname to an IP address",
                  "Assigning IP addresses dynamically to hosts",
                  "Encrypting traffic between two hosts"
                ],
                "correct": 0,
                "explanation": "ARP maps an IP address to its MAC address on the local network segment so frames can be delivered at Layer 2."
              },
              {
                "question": "A network shows signs of a broadcast storm after a new switch was connected with both ends of a cable plugged into the same switch. Which feature would have prevented this?",
                "options": [
                  "Spanning Tree Protocol",
                  "DHCP snooping",
                  "Port security",
                  "NAT"
                ],
                "correct": 0,
                "explanation": "Spanning Tree Protocol detects and blocks looped paths, such as a cable connected to two ports on the same switch, preventing broadcast storms."
              },
              {
                "question": "Which of the following connectors is commonly used for terminating fiber optic cables and features a push-pull mechanism for quick connect/disconnect?",
                "options": [
                  "LC connector",
                  "RJ45 connector",
                  "RJ11 connector",
                  "BNC connector"
                ],
                "correct": 0,
                "explanation": "The LC connector is a small-form-factor fiber connector widely used in modern fiber installations, featuring a simple push-pull latch."
              },
              {
                "question": "A network administrator wants to limit which specific MAC addresses are allowed to connect to a switch port. Which feature should be configured?",
                "options": [
                  "Port security",
                  "VLAN trunking",
                  "Spanning Tree Protocol",
                  "Link aggregation"
                ],
                "correct": 0,
                "explanation": "Port security restricts a switch port to a defined set of authorized MAC addresses, blocking unauthorized devices."
              },
              {
                "question": "Which of the following BEST describes split-horizon in the context of routing protocols?",
                "options": [
                  "Preventing a route from being advertised back out the interface it was learned on",
                  "Splitting traffic evenly across two links",
                  "Dividing a network into two separate autonomous systems",
                  "Encrypting routing table updates"
                ],
                "correct": 0,
                "explanation": "Split-horizon prevents routing loops by not re-advertising a route back out the same interface from which it was learned."
              },
              {
                "question": "A technician needs to check whether a specific remote host is reachable and measure round-trip latency. Which command is BEST suited for this?",
                "options": [
                  "ping",
                  "tracert",
                  "nslookup",
                  "ipconfig"
                ],
                "correct": 0,
                "explanation": "Ping sends ICMP echo requests to a host and reports whether it responds along with round-trip time."
              }
            ]
          },
          {
            "title": "Practice Exam 4",
            "questions": [
              {
                "question": "Which of the following BEST describes the purpose of CIDR notation, such as /24, in an IP address?",
                "options": [
                  "It indicates how many bits of the address represent the network portion",
                  "It indicates the number of hosts currently active on the network",
                  "It specifies the default gateway address",
                  "It specifies the VLAN ID assigned to the subnet"
                ],
                "correct": 0,
                "explanation": "CIDR notation specifies how many leading bits of the IP address are used for the network portion, defining the subnet size."
              },
              {
                "question": "A network engineer wants a dynamic routing protocol suited for a large enterprise network that calculates the best path using link-state information rather than hop count alone. Which protocol fits this description?",
                "options": [
                  "OSPF",
                  "RIP",
                  "STP",
                  "ARP"
                ],
                "correct": 0,
                "explanation": "OSPF is a link-state routing protocol that considers link cost/bandwidth, making it more efficient than distance-vector protocols like RIP for larger networks."
              },
              {
                "question": "Which of the following is a benefit of using a virtual private cloud (VPC) with defined subnets and route tables in a cloud environment?",
                "options": [
                  "Logical network isolation and controlled traffic flow within the cloud provider's infrastructure",
                  "Guaranteed zero latency to all cloud regions",
                  "Automatic elimination of the need for firewalls",
                  "Unlimited free bandwidth between regions"
                ],
                "correct": 0,
                "explanation": "A VPC lets an organization define isolated, logically segmented networks with controlled routing and traffic flow inside a cloud provider's infrastructure."
              },
              {
                "question": "A technician notices excessive collisions on an older half-duplex Ethernet segment. Which of the following would MOST directly resolve this?",
                "options": [
                  "Replacing the hub with a switch to enable full-duplex, collision-free links",
                  "Increasing the cable length",
                  "Adding more devices to the same hub",
                  "Lowering the port speed to 10Mbps"
                ],
                "correct": 0,
                "explanation": "Switches provide dedicated collision domains per port and support full-duplex operation, eliminating the collisions inherent to shared hub segments."
              },
              {
                "question": "Which of the following network monitoring methods copies traffic from one switch port to another so a monitoring tool can inspect it without being inline?",
                "options": [
                  "Port mirroring (SPAN)",
                  "Port security",
                  "NAT",
                  "VLAN trunking"
                ],
                "correct": 0,
                "explanation": "Port mirroring (or SPAN) duplicates traffic from a source port to a destination port for out-of-band monitoring and analysis."
              },
              {
                "question": "A company is experiencing intermittent Wi-Fi issues in an area where multiple nearby access points are configured on overlapping channels. Which of the following would BEST resolve this?",
                "options": [
                  "Reassigning access points to non-overlapping channels",
                  "Increasing the SSID broadcast interval",
                  "Disabling WPA2 encryption",
                  "Lowering the access point's transmit power to zero"
                ],
                "correct": 0,
                "explanation": "Assigning nearby access points to non-overlapping channels (such as 1, 6, and 11 in 2.4GHz) reduces co-channel interference."
              },
              {
                "question": "Which of the following describes the primary difference between TCP and UDP?",
                "options": [
                  "TCP is connection-oriented with error recovery; UDP is connectionless and does not guarantee delivery",
                  "TCP is used only for email; UDP is used only for web traffic",
                  "UDP provides guaranteed delivery while TCP does not",
                  "TCP and UDP both require a three-way handshake"
                ],
                "correct": 0,
                "explanation": "TCP establishes a connection and ensures reliable, ordered delivery, while UDP sends datagrams without connection setup or delivery guarantees."
              },
              {
                "question": "An administrator is designing a network and wants to ensure that if one core switch fails, traffic can still flow through a redundant path with minimal disruption. Which design principle does this reflect?",
                "options": [
                  "Fault tolerance / redundancy",
                  "Traffic shaping",
                  "Load balancing based on DNS round robin",
                  "Network address translation"
                ],
                "correct": 0,
                "explanation": "Building redundant paths and devices into a network design provides fault tolerance so a single failure does not take down connectivity."
              },
              {
                "question": "Which of the following would be the MOST likely cause of a duplicate IP address error appearing on a workstation in a network using DHCP?",
                "options": [
                  "A device on the network was manually configured with a static IP inside the DHCP scope",
                  "The DHCP lease time was set too long",
                  "The workstation's NIC driver is outdated",
                  "The switch port is configured as an access port"
                ],
                "correct": 0,
                "explanation": "When a device is statically assigned an address that falls within the active DHCP scope, DHCP may also hand that same address to another client, causing a conflict."
              },
              {
                "question": "A technician wants to verify that a newly terminated fiber run meets required loss and length specifications before it is placed into production. Which tool should be used?",
                "options": [
                  "An optical time-domain reflectometer (OTDR)",
                  "A toner probe",
                  "A cable crimper",
                  "A punch-down tool"
                ],
                "correct": 0,
                "explanation": "An OTDR measures signal loss and identifies faults or breaks along a fiber run, verifying it meets specification before going live."
              }
            ]
          }
        ]
      }
    ]
  }
};
