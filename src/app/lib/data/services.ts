// src/app/lib/data/services.ts

export interface Service {
  slug: string;
  title: string;
  intro: string;
  bannerUrl: string;
  detailImgUrl: string;
  subServices: {
    title: string;
    description: string;
  }[];
  processSteps: {
    title: string;
    text: string;
  }[];
  tools: string[];
  closing: string;
}

export const services: Service[] = [
  {
    slug: 'mobile-applications',
    title: 'Mobile Applications Development',
    intro:
      'We create powerful, user-friendly mobile applications that help businesses engage with their customers effectively across all mobile platforms.',
    bannerUrl: '/images/App-dev/appdeveloper banner.svg',
    detailImgUrl: '/images/App-dev/Details app dev.png',
    subServices: [
      { title: 'iOS App Development', description: 'Custom native iOS applications built with Swift for optimal performance.' },
      { title: 'Android App Development', description: 'High-quality Android apps developed using Kotlin and Java.' },
      { title: 'Cross-Platform Apps', description: 'Flutter and React Native apps that work across iOS and Android.' },
      { title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces designed for maximum user engagement.' },
      { title: 'App Testing & QA', description: 'Comprehensive testing to ensure bug-free performance.' },
    ],
    processSteps: [
      { title: 'Requirement Analysis', text: 'We start by understanding your business needs and target audience.' },
      { title: 'Design & Prototyping', text: 'Creating wireframes and prototypes to visualize the app flow.' },
      { title: 'Development', text: 'Agile development process with regular iterations and feedback.' },
      { title: 'Testing & Deployment', text: 'Rigorous testing followed by app store deployment.' },
      { title: 'Support & Maintenance', text: 'Continuous updates and improvements post-launch.' },
    ],
    tools: ['Flutter', 'Kotlin', 'Java', 'Swift', 'Firebase', 'React Native'],
    closing: 'Let us help you build a mobile application that stands out in the crowded app marketplace.',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    intro:
      'We build fast, modern, and SEO-friendly websites and web apps tailored to your business needs.',
    bannerUrl: '/images/Web-dev/web banner.svg',
    detailImgUrl: '/images/Web-dev/Web dev.svg',
    subServices: [
      { title: 'Next.js Apps', description: 'Scalable React applications with modern SSR support.' },
      { title: 'Landing Pages', description: 'High-converting marketing pages for lead generation.' },
      { title: 'CMS Integration', description: 'Contentful, Sanity, Strapi and more.' },
      { title: 'E-commerce', description: 'Custom storefronts and Shopify integrations.' },
    ],
    processSteps: [
      { title: 'Planning', text: 'We define goals, content, and design system.' },
      { title: 'Design', text: 'UI/UX wireframes, moodboards, and final designs.' },
      { title: 'Development', text: 'Frontend and backend code execution with CI/CD.' },
      { title: 'Testing', text: 'Manual & automated tests ensure stability.' },
      { title: 'Deployment', text: 'Launch on Vercel, Netlify, or custom servers.' },
    ],
    tools: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Sanity', 'Vercel'],
    closing: 'We deliver pixel-perfect, fast-loading websites ready for the modern web.',
  },
  {
    slug: 'cloud-hosting',
    title: 'Cloud & Hosting Services',
    intro:
      'Get reliable, secure, and scalable cloud infrastructure tailored to your application and growth.',
    bannerUrl: '/images/cloud/Banner cloud.svg',
    detailImgUrl: '/images/cloud/Cloud detail.svg',
    subServices: [
      { title: 'Cloud Deployment', description: 'Deploy on AWS, GCP, Vercel, and more.' },
      { title: 'Monitoring & Scaling', description: 'Real-time performance monitoring & auto-scaling.' },
      { title: 'Security Setup', description: 'Firewall rules, encryption, access control.' },
      { title: 'DNS & Domains', description: 'Domain management and SSL setup.' },
    ],
    processSteps: [
      { title: 'Architecture Planning', text: 'Choose right cloud stack for your app.' },
      { title: 'Provisioning', text: 'Set up servers, storage, and networking.' },
      { title: 'Deployment', text: 'Deploy using CI/CD, containers, or serverless.' },
      { title: 'Monitoring', text: 'Use tools like Grafana, Sentry, Datadog.' },
      { title: 'Maintenance', text: 'Keep infra updated, secure, and optimized.' },
    ],
    tools: ['AWS', 'GCP', 'Vercel', 'Docker', 'Linux', 'Nginx'],
    closing: 'Scale and deploy with confidence using cloud best practices.',
  },
  {
  slug: 'software-development',
  title: 'Custom Software Development',
  intro: 'We develop scalable, tailored software that solves your unique business problems efficiently.',
  bannerUrl: '/images/banners/software-banner.jpg',
  detailImgUrl: '/images/details/software-detail.jpg',
  subServices: [
    { title: 'ERP Solutions', description: 'Enterprise-level tools to manage operations, finance, and HR.' },
    { title: 'Desktop Apps', description: 'Cross-platform desktop apps built with Electron or .NET.' },
    { title: 'CRM Systems', description: 'Manage customer data, pipelines, and automation workflows.' },
    { title: 'Inventory Management', description: 'Automated solutions for stock and supply chain management.' },
  ],
  processSteps: [
    { title: 'Discovery', text: 'Understand your business goals & system needs.' },
    { title: 'Architecture', text: 'Design system structure and tech stack.' },
    { title: 'Coding & Modules', text: 'Develop modular, testable components.' },
    { title: 'QA & UAT', text: 'Perform thorough testing and client validation.' },
    { title: 'Deployment', text: 'Launch system with documentation & training.' },
  ],
  tools: ['Node.js', 'MongoDB', '.NET', 'Electron', 'PostgreSQL', 'GitHub'],
  closing: 'Build software that powers your business operations seamlessly.',
},
{
  slug: 'ai-automation',
  title: 'AI & Automation Services',
  intro: 'We integrate intelligent systems to automate your workflows using the power of AI.',
  bannerUrl: '/images/banners/ai-banner.jpg',
  detailImgUrl: '/images/details/ai-detail.jpg',
  subServices: [
    { title: 'AI Chatbots', description: 'Custom-trained GPT bots that handle support or sales.' },
    { title: 'Automation Workflows', description: 'Zapier, Make, or custom code to automate repetitive tasks.' },
    { title: 'ML Models', description: 'Predictive analytics and recommendation systems.' },
    { title: 'Vision & OCR', description: 'Image analysis, scanning & text extraction from media.' },
  ],
  processSteps: [
    { title: 'Problem Framing', text: 'Define what needs to be automated or predicted.' },
    { title: 'Data Collection', text: 'Gather relevant structured/unstructured data.' },
    { title: 'Model Training', text: 'Train and evaluate AI/ML models.' },
    { title: 'Integration', text: 'Deploy models via APIs or embedded systems.' },
    { title: 'Monitoring', text: 'Track performance and retrain when needed.' },
  ],
  tools: ['Python', 'OpenAI', 'TensorFlow', 'Pandas', 'Zapier', 'Make'],
  closing: 'Level up your operations with smart, automated solutions powered by AI.',
},
{
  slug: 'bpo-services',
  title: 'BPO (Business Process Outsourcing) Services',
  intro: 'Outsource your customer support, technical helpdesk, data processing, and back-office tasks to our expert team and focus on scaling your core business.',
  bannerUrl: '/images/banners/bpo-banner.jpg',
  detailImgUrl: '/images/details/bpo-detail.jpg',
  subServices: [
    { title: 'Customer Support', description: '24/7 voice, chat, and email support for your customers.' },
    { title: 'Technical Helpdesk', description: 'Tier 1 and Tier 2 support for software and hardware issues.' },
    { title: 'Data Entry & Processing', description: 'Accurate and scalable data handling services.' },
    { title: 'Order Management', description: 'Track and manage customer orders across platforms.' },
    { title: 'Billing & Invoicing', description: 'Handle financial transactions and invoices with precision.' },
  ],
  processSteps: [
    { title: 'Requirement Gathering', text: 'Understand your business goals and outsourcing needs.' },
    { title: 'Team Setup', text: 'Build a trained team tailored to your process.' },
    { title: 'Onboarding & Training', text: 'Educate the team with process knowledge and tools.' },
    { title: 'Go Live & Monitor', text: 'Start operations and monitor KPIs & SLAs.' },
    { title: 'Optimization', text: 'Continuously improve productivity and quality.' },
  ],
  tools: ['Zendesk', 'Freshdesk', 'Zoho Desk', 'Slack', 'Google Workspace', 'Zapier'],
  closing: 'Let us handle your support and operational tasks so you can focus on what you do best — growing your business.',
}


];
