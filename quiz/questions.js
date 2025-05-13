const questions = [
  {
    question: "What is Social Engineering?",
      answers: [
        {text: "A manipulation tactic which exploits human error in order to gain confidential information", correct: true},
        {text: "A tool which monitors traffic going in and out of a computer or a network and then allows the traffic through or denies it", correct: false},
        {text: "An attempt by cybercriminals posing as a legitimate source to obtain confidential information", correct: false},
        {text: "An antivirus software", correct: false}
      ]
  },

  {
    question: "What is a firewall?",
      answers: [
        {text: "An antivirus software", correct: false},        
        {text: "A Virtual Private Network", correct: false},
        {text: "A type of social engineering where the cybercriminal attempts to trick a user using attractive offers or rewards", correct: false},
        {text: "A tool which monitors traffic going in and out of a computer or a network and then allows the traffic through or denies it", correct: true},
      ]
  },

  {
    question: "Cybercriminals only go after large companies or power individuals",
      answers: [
        {text: "True", correct: false},        
        {text: "False", correct: true}
      ]
  },

  {
    question: "What is Multifactor Authentication (MFA)",
      answers: [
        {text: "An authentication method in which users have to provide more than one verification methods for access to something", correct: true},        
        {text: "An antivirus software", correct: false},
        {text: "A form of social engineering", correct: false},
        {text: "A type of malware which prevents a user access to their personal data", correct: false},
      ]
  },

  {
    question: "What is an antivirus software",
      answers: [
        {text: "A program which detects, prevents and removes malware", correct: true},        
        {text: "A packet analyser used for network troubleshooting and analysis", correct: false},
        {text: "A type of malware which prevents a user access to their personal data", correct: false},
        {text: "Protection of information and information systems", correct: false},
      ]
  },

  {
    question: "Which one of the following is an antivirus software",
      answers: [
        {text: "Wireshark", correct: false},        
        {text: "McAfee", correct: true},
        {text: "VPN", correct: false},
        {text: "Phishing", correct: false},
      ]
  },

  {
    question: "What is it called when a fake text is sent to someone with the aim of gaining confidential information?",
      answers: [
        {text: "Vishing", correct: false},        
        {text: "Smishing", correct: true},
        {text: "VPN", correct: false},
        {text: "Tailgaiting", correct: false},
      ]
  },

  {
    question: "What does a Virtual Private Network do?",
      answers: [
        {text: "Encrypts a user's data and masks their IP address", correct: true},        
        {text: "Prevents a user access to their personal data", correct: false},
        {text: "A program which detects, prevents and removes malware", correct: false},
        {text: "Lures victims into accepting a fake prize in order to obtain confidential information", correct: false},
      ]
  },

  {
    question: "How can someone stay safe from social engineering",
      answers: [
        {text: "Ignore all forms of online communication someone can use to attempt social engineering", correct: false},        
        {text: "Disable Multi-Factor Authentication", correct: false},
        {text: "Stay aware and keep learning about these techniques", correct: true},
        {text: "Respond to all forms of online communication someone can use to attempt social engineering", correct: false},
      ]
  },

  {
    question: "Social Engineering can only happen over a device, and not in person",
      answers: [
        {text: "True", correct: true},        
        {text: "False", correct: false},
      ]
  },

  {
    question: "What is Shoulder Surfing",
      answers: [
        {text: "When an attacker can view a person's screen and keypad in person to get their personal information ", correct: true},        
        {text: "A type of phishing attack targeting high profile employees, such as a CEO", correct: false},
        {text: "The use of a fake story to gain a person's trust to get them to reveal confidential information", correct: false},
        {text: "When a person gains unauthorised access to a physical location", correct: false},
      ]
  },

  {
    question: "What is the practice of attempting to manipulate a user into disclosing confidential information over the phone known as?",
      answers: [
        {text: "Whaling", correct: false},        
        {text: "Pretexting", correct: false},
        {text: "Vishing", correct: true},
        {text: "Smishing", correct: false},
      ]
  },

  {
    question: "What is pharming?",
      answers: [
        {text: "When an attack tries to lure victims into accepting a fake prize in order to obtain confidential information", correct: false},        
        {text: "When an attacker targets a website that is frequently visited by users in an group or organisation", correct: false},
        {text: "A type of social engineering where the cybercriminal attempts to trick a user using attractive offers or rewards", correct: false},
        {text: "When an attacker attempts to redirect users to a fake website", correct: true},
      ]
  },

  {
    question: "What is cryptography?",
      answers: [
        {text: "Assurance that an unauthorised user cannot view some data", correct: false},        
        {text: "Raw data to be protected during transmission from sender to receiver", correct: false},
        {text: "The scrambled version of a plaintext as a result of applying an encryption algorithm", correct: false},
        {text: "The design and analysis of mechanisms to provide secure communication", correct: true},
      ]
  },

      {
    question: "What is a Red Team's goal?",
      answers: [
        {text: "Identify vulnerabilities, weaknesses and gaps in an organisations security by using techniques used by attackers ", correct: true},        
        {text: "Defending an organisation's networks, systems and data against cyberattacks", correct: false},
      ]
  },

      {
    question: "What is a Blue Team's goal?",
      answers: [
        {text: "Identify vulnerabilities, weaknesses and gaps in an organisations security by using techniques used by attackers ", correct: false},        
        {text: "Defending an organisation's networks, systems and data against cyberattacks", correct: true},

      ]
  },

      {
    question: "What is a Virus?",
      answers: [
        {text: "A self spreading malware", correct: false},        
        {text: "A piece of malware which appears to be carrying out a useful, legitimate task", correct: false},
        {text: "A piece of malware which requires other programmes so that it can spread", correct: true},
        {text: "Malicious activity that is triggered when a condition is met", correct: false},
      ]
  },

    {
    question: "What is a Trojan Horse?",
      answers: [
        {text: "A self spreading malware", correct: false},        
        {text: "A piece of malware which appears to be carrying out a useful, legitimate task", correct: true},
        {text: "A program which detects, prevents and removes malware", correct: false},
        {text: "An antivirus software", correct: false},
      ]
  },

  {
    question: "What is a Worm?",
      answers: [
        {text: "A self spreading malware", correct: true},        
        {text: "A program which detects, prevents and removes malware", correct: false},
        {text: "A packet analyser used for network troubleshooting and analysis", correct: false},
        {text: "A form of social engineering", correct: false},
      ]
  },

  {
    question: "What type of malware attempts to blackmail a user into making a large payment?",
      answers: [
        {text: "Adware", correct: false},        
        {text: "Keyloggers", correct: false},
        {text: "Ransomware", correct: true},
        {text: "Spyware", correct: false},
      ]
  },

];
