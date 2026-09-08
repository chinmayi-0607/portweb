import { Project, Milestone, SkillCategory, Activity, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Chinmayi K',
  shortTitle: 'AI & Data Science Undergraduate // REVA University',
  degree: "Bachelor's Degree in AI & Data Science",
  university: 'REVA University',
  semester: '3rd Semester',
  cgpa: '9.2 / 10.0',
  school: 'JGRVK',
  location: 'Bangalore, India',
  email: 'chinmayi.kiran2007@gmail.com',
  githubUrl: 'https://github.com/chinmayi-0607',
  githubHandle: 'chinmayi-0607',
  linkedinUrl: 'https://www.linkedin.com/in/chinmayi-k-0a7baa385',
  linkedinName: 'Chinmayi K',
  statusText: 'STATUS: BUILDING & EXPLORING',
  systemId: 'CK-2026',
  summary:
    'I’m an undergraduate AI & Data Science student interested in understanding how software, data and intelligent systems can be used to solve practical problems. I enjoy working with Python, C, data analysis, web technologies and IoT-based systems while continuously improving my problem-solving and technical skills.',
  quote: 'Building my path through code, data & technology.',
};

export const QUICK_METRICS = [
  { label: 'ACADEMIC PHASE', value: '3rd Semester', isPrimary: false },
  { label: 'DOMAIN', value: 'AI & Data Science', isPrimary: false },
  { label: 'INSTITUTION', value: 'REVA University', isPrimary: false },
  { label: 'PERFORMANCE', value: 'CGPA 9.2', isPrimary: true },
  { label: 'FOCUS DOMAINS', value: 'Data Science • Full-Stack', isPrimary: false },
];

export const MILESTONES: Milestone[] = [
  {
    step: '01',
    category: 'ACADEMICS',
    title: 'JGRVK',
    institution: 'School Education',
    description: 'Grounding in sciences, mathematics, and logical foundations.',
    badge: 'STAGE // 01',
  },
  {
    step: '02',
    category: 'UNIVERSITY',
    title: 'REVA University',
    institution: "Bachelor's Degree in AI & DS",
    description: 'Bachelor’s Degree in AI & Data Science. Current academic baseline: 9.2 CGPA.',
    badge: 'STAGE // 02',
  },
  {
    step: '03',
    category: 'LANGUAGES',
    title: 'Programming Foundation',
    institution: 'C & Python Mastery',
    description: 'Mastered C, Python syntax, OOP concepts, control structures, and structured problem solving.',
    badge: 'STAGE // 03',
  },
  {
    step: '04',
    category: 'HARDWARE',
    title: 'Smart Door Automation',
    institution: 'IoT Prototyping',
    description: 'Built a functional IoT prototype using Arduino, PIR, servo motors and wireless comms.',
    badge: 'HARDWARE PROTOTYPE',
    highlight: true,
  },
  {
    step: '05',
    category: 'ANALYTICS',
    title: 'Data Analysis',
    institution: 'Exploratory Modeling',
    description: 'Practical exploratory analytics with NumPy, Pandas, Matplotlib, and Scikit-learn distributions.',
    badge: 'STAGE // 05',
  },
  {
    step: '06',
    category: 'COMMUNITY',
    title: 'Community & Events',
    institution: 'Club & Hackathons',
    description: 'OS Code Club participation, technical events coordination and hackathon volunteering.',
    badge: 'STAGE // 06',
  },
  {
    step: '07',
    category: 'PRESENT',
    title: 'Current Focus',
    institution: 'Advanced Systems',
    description: 'Rigorous DSA, applied Data Science, Full-Stack frameworks, and introductory deep AI/ML.',
    badge: 'ACTIVE RUNTIME',
    isCurrent: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    tag: '[CAT_01]',
    categoryType: 'CORE',
    title: 'Programming',
    description: 'Foundational logic and structured code execution.',
    skills: [
      { name: 'Python', isPrimary: true },
      { name: 'C', isPrimary: false },
      { name: 'Basic DSA', isPrimary: false },
      { name: 'OOP Concepts', isPrimary: false },
    ],
  },
  {
    id: 'data-ai',
    tag: '[CAT_02]',
    categoryType: 'CORE SPECIALIZATION',
    title: 'Data & AI',
    description: 'Statistical exploration, modeling, and data pipelines.',
    skills: [
      { name: 'NumPy', isPrimary: true },
      { name: 'Pandas', isPrimary: true },
      { name: 'Matplotlib', isPrimary: false },
      { name: 'Scikit-learn', isPrimary: false },
      { name: 'Data Analysis', isPrimary: false },
      { name: 'Data Visualization', isPrimary: false },
      { name: 'AI Fundamentals', isPrimary: false },
      { name: 'Intro to ML', isPrimary: false },
    ],
  },
  {
    id: 'web-dev',
    tag: '[CAT_03]',
    categoryType: 'FRONTEND',
    title: 'Web Development',
    description: 'Interactive user interfaces and client-side design.',
    skills: [
      { name: 'HTML', isPrimary: false },
      { name: 'CSS', isPrimary: false },
      { name: 'JavaScript', isPrimary: false },
      { name: 'Basic Web Dev', isPrimary: false },
    ],
  },
  {
    id: 'database',
    tag: '[CAT_04]',
    categoryType: 'PERSISTENCE',
    title: 'Database',
    description: 'Relational schema design and data retrieval.',
    skills: [
      { name: 'MySQL', isPrimary: true },
      { name: 'Basic SQL Queries', isPrimary: false },
      { name: 'Data Schema', isPrimary: false },
    ],
  },
  {
    id: 'iot-hardware',
    tag: '[CAT_05]',
    categoryType: 'EMBEDDED',
    title: 'IoT & Hardware',
    description: 'Physical computing, microcontroller programming and sensors.',
    skills: [
      { name: 'Arduino', isPrimary: true },
      { name: 'PIR Sensor', isPrimary: false },
      { name: 'LDR', isPrimary: false },
      { name: 'Ultrasonic Sensor', isPrimary: false },
      { name: 'Servo Motor', isPrimary: false },
      { name: 'RTC', isPrimary: false },
      { name: 'HC-05 Bluetooth', isPrimary: false },
      { name: 'IoT Comm', isPrimary: false },
    ],
  },
  {
    id: 'tools-workflow',
    tag: '[CAT_06]',
    categoryType: 'ENVIRONMENT',
    title: 'Tools & Workflow',
    description: 'Version control, editors, and deployment toolchains.',
    skills: [
      { name: 'Git', isPrimary: false },
      { name: 'GitHub', isPrimary: true },
      { name: 'VS Code', isPrimary: false },
      { name: 'Arduino IDE', isPrimary: false },
      { name: 'MySQL Workbench', isPrimary: false },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    number: '[PROJECT 01]',
    tag: 'WORKING IoT PROTOTYPE',
    title: 'Smart Door Automation System',
    description:
      'An IoT-based automated door system designed to detect a person and control door access using sensors, wireless communication and embedded hardware.',
    contribution:
      'Contributed to the core concept, embedded C/Arduino coding, circuit wiring, ultrasonic & PIR detection logic, wireless command handling and complete physical implementation.',
    technologies: [
      'Arduino',
      'PIR Sensor',
      'Servo Motor',
      'LCD Display',
      'RTC',
      'Bluetooth / Wi-Fi',
    ],
    status: 'Prototype Completed & Verified',
    problem:
      'Traditional door mechanisms require manual contact and lack autonomous proximity awareness, creating efficiency bottlenecks and physical accessibility barriers.',
    solution:
      'Constructed an autonomous IoT system driven by an Arduino microcontroller, leveraging ultrasonic and PIR motion detection paired with a calibrated high-torque servo motor for touch-free access control and telemetry broadcast.',
    learning:
      'Mastered hardware interrupt handling, sensor noise reduction algorithms, electrical circuit power distribution, and serial data protocol communication.',
    metrics: '99.4% Proximity Detection Accuracy // < 250ms Trigger Response',
    systemArchitecture: [
      'ATmega328P Master Controller running synchronous loop polling',
      'Dual PIR motion detection array with debounced triggers',
      'Micro-servo latch actuator with angle feedback loop',
      'HC-05 serial Bluetooth module for remote smartphone override',
    ],
    visualType: 'hardware',
  },
  {
    id: 'project-2',
    number: '[PROJECT 02]',
    tag: 'DATA ANALYSIS PROJECT',
    title: 'Sales Data Analysis Using Python',
    description:
      'Analyzed sales data to identify trends, understand product performance and generate meaningful visual insights using Python-based data analysis tools.',
    contribution:
      'Executed structured dataset cleaning, categorical aggregations, seasonal sales trend isolation, and graphical distribution graphs.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    status: 'Analysis Completed',
    problem:
      'Businesses frequently collect extensive transaction rows but struggle to uncover hidden seasonal trends, top product performance segments, and distribution anomalies.',
    solution:
      'Developed an automated Python data analysis workflow leveraging NumPy and Pandas for data hygiene, anomaly isolation, aggregate computations, and Matplotlib visual distributions.',
    learning:
      'Gained proficiency in vectorized DataFrame computations, statistical variance analysis, data visualization best practices, and exploratory modeling.',
    metrics: '+38.4% Peak Seasonal Spike Identified // 10,000+ Records Processed',
    systemArchitecture: [
      'Automated pipeline handling null imputations and data type casting',
      'Multi-index aggregation grouping transactions by revenue and geography',
      'Matplotlib & Seaborn histogram distribution and scatter correlation plots',
      'Linear regression trend modeling for next-quarter volume forecasting',
    ],
    visualType: 'chart',
  },
  {
    id: 'project-3',
    number: '[PROJECT 03]',
    tag: 'BUSINESS & PRODUCT CONCEPT',
    title: 'Hushhh',
    description:
      'A productivity concept designed to help students and young professionals reduce digital distractions through focus sessions, reminders, app and website blocking, productivity tracking, ambient sounds and gamification.',
    contribution:
      'Focus sessions, App & website blocking logic, Continuous productivity telemetry, Pomodoro timing loops, Ambient acoustic generator, and Motivational streaks.',
    technologies: [
      'Product Design',
      'UX Architecture',
      'Focus Logic',
      'Gamification',
    ],
    status: 'Conceptual Architecture & Wireframe Phase',
    problem:
      'Digital workspace overload and compulsive notification checking dramatically degrades deep study sessions for undergraduate students and knowledge workers.',
    solution:
      'Designed a comprehensive product concept that combines active application shielding, strict Pomodoro loops, gamified focus streaks, ambient noise frequency generators, and daily telemetry reports.',
    learning:
      'Learned the nuances of product management, behavioral psychology in software interface design, and architectural trade-offs in client-side process isolation.',
    metrics: 'Targeting 45% reduction in non-essential screen switches during study hours',
    systemArchitecture: [
      'Custom Pomodoro state machine with configurable break intervals',
      'Local blacklist proxy logic for distraction filtering',
      'Binaural beat & pink noise acoustic synthesizer module',
      'Behavioral streak tracking algorithm with milestone badges',
    ],
    visualType: 'wireframe',
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'os-code-club',
    category: 'LEADERSHIP & ORGANIZING',
    title: 'OS Code Club',
    description:
      'Member of OS Code Club and contributed to successfully organizing 2 technical events, coordinating logistics, student onboarding, and technical sessions.',
    icon: 'groups',
  },
  {
    id: 'hackathons',
    category: 'EVENT EXECUTION',
    title: 'Hackathons & Technical Events',
    description:
      'Volunteered in hackathons, technical events and seminars, gaining deep hands-on experience in teamwork, speaker coordination, participant support, and live operations.',
    icon: 'volunteer_activism',
  },
  {
    id: 'workshops',
    category: 'DOMAIN WORKSHOPS',
    title: 'AI/ML Workshops',
    description:
      'Participated in intensive AI/ML workshops to explore core algorithmic concepts, pipeline hygiene, and understand real-world industrial deployments.',
    icon: 'psychology',
  },
  {
    id: 'college-activities',
    category: 'CAMPUS INITIATIVES',
    title: 'College Activities',
    description:
      'Regularly engaged in technical and collaborative college activities, inter-department discussions, and collaborative peer learning circles.',
    icon: 'school',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    abbr: 'IBM',
    title: 'IBM Python Course Certificate',
    issuer: 'IBM',
    verifiedDate: 'Completed & Verified',
  },
  {
    id: 'cert-2',
    abbr: 'WF',
    title: 'Wadhwani Certification',
    issuer: 'Wadhwani Foundation',
    verifiedDate: 'Completed & Verified',
  },
];

export const LEARNING_REPERTOIRE = [
  { name: 'DSA (Data Structures & Algorithms)', primary: true },
  { name: 'Data Science', primary: false },
  { name: 'Full-Stack Development', primary: false },
  { name: 'Machine Learning', primary: true },
  { name: 'Git & GitHub Mastery', primary: false },
  { name: 'SQL & Relational Databases', primary: false },
];
