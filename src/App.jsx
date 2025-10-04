import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyNav from './components/myNav/MyNav';
import { useState } from 'react';

import webIcon from './assets/svgIcons/web.png'
import mopileIcon from './assets/svgIcons/mobile-development.png'
import UiUx from './assets/svgIcons/ui-ux.png'
import graphicIcon from './assets/svgIcons/illustration.png'
// import backend from './assets/svgIcons/backend.png'
import content from './assets/svgIcons/content.png'
import ai from './assets/svgIcons/automation.png'
import support from './assets/svgIcons/maintenance.png'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
// import MyProjectsPage from './pages/projectsPage/MyProjectsPage';
// import SingleProjectPage from './pages/singleProjectPage/SingleProjectPage';
// import step1 from "./assets/projectcardDetails/project-single-step-1.jpg"
import vilichesMock from './assets/projectsImgs/viliches.png'
import landScapeMock from './assets/projectsImgs/landscape.png'
import valuMock from './assets/projectsImgs/valuMock.png'
import technoMock from './assets/projectsImgs/technoMock.png'
import novalMock from './assets/projectsImgs/novalMock.png'
import hotelMock from './assets/projectsImgs/hotelMock.png'
import timeMock from './assets/projectsImgs/timeMock.png'
import MyFooter from './components/myFooter/MyFooter';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import logo1 from './assets/partnerLogos/logo1.png'
import logo2 from './assets/partnerLogos/logo2.png'
import logo3 from './assets/partnerLogos/logo3.png'
import logo4 from './assets/partnerLogos/logo4.png'
import logo5 from './assets/partnerLogos/logo5.png'
import logo6 from './assets/partnerLogos/logo10.png'
import MyMainHome from './pages/myMainHome/MyMainHome';
import MyAllServices from './pages/myAllServices/MyAllServices';
import SingleServicePage from './pages/singleServicePage/SingleServicePage';
function App() {
  const projcetCards = [
    {
        img: vilichesMock,
        subTitle: "web development",
        title: "vilches professional",
    },
    {
        img: landScapeMock,
        subTitle: "web development",
        title: "rehant elrabia",
    },
    {
        img: valuMock,
        subTitle: "web development",
        title: "valuReach",
    },
    {
        img: technoMock,
        subTitle: "web development",
        title: "techno template",
    },
    {
        img: novalMock,
        subTitle: "web development",
        title: "noval template",
    },
    {
        img: hotelMock,
        subTitle: "web development",
        title: "hotel landpage",
    },
    {
        img: timeMock,
        subTitle: "web development",
        title: "E-Commerce watches",
    }
]
//   const projectDetails = [
//   {
//     projectName: "vilches professional",
//     clientName: "vilches company",
//     servicesMade: "UI/UX, Developing",
//     websiteLink: "https://vilchesprofessional.com",
//     startDate: "01.08.2023",
//     endDate: "01.09.2023",
//     projectImg: vilichesMock,
//     overview: "n euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem.",
//     checkAndLaunch: "In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique blandit vitae sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet.",
//     workProcess: [
//       {
//         "processNum": "01.",
//         "processName": "BRAINSTORMING",
//         "processImg": step1
//       },
//       {
//         "processNum": "02.",
//         "processName": "WIREFRAME",
//         "processImg": step1
//       },
//       {
//         "processNum": "03.",
//         "processName": "UI DESIGN",
//         "processImg": step1
//       },
//       {
//         "processNum": "04.",
//         "processName": "DEVELOPING",
//         "processImg": step1
//       },
//     ]
//   },
//   {
//     projectName: "rehant elrabia",
//     clientName: "rehant elrabia company",
//     servicesMade: "UI/UX, Developing",
//     websiteLink: "https://mohmedamged.github.io/landScapeV03/",
//     startDate: "01.06.2023",
//     endDate: "01.07.2023",
//     projectImg: landScapeMock,
//     overview: "n euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem.",
//     checkAndLaunch: "In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique blandit vitae sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet.",
//     workProcess: [
//       {
//         "processNum": "01.",
//         "processName": "BRAINSTORMING",
//         "processImg": step1
//       },
//       {
//         "processNum": "02.",
//         "processName": "WIREFRAME",
//         "processImg": step1
//       },
//       {
//         "processNum": "03.",
//         "processName": "UI DESIGN",
//         "processImg": step1
//       },
//       {
//         "processNum": "04.",
//         "processName": "DEVELOPING",
//         "processImg": step1
//       },
//     ]
//   },
//   {
//     projectName: "valuReach",
//     clientName: "valuReach company",
//     servicesMade: "UI/UX, Developing",
//     websiteLink: "https://test-v01.vercel.app/",
//     startDate: "01.11.2023",
//     endDate: "in progress",
//     projectImg: valuMock,
//     overview: "n euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem.",
//     checkAndLaunch: "In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique blandit vitae sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet.",
//     workProcess: [
//       {
//         "processNum": "01.",
//         "processName": "BRAINSTORMING",
//         "processImg": step1
//       },
//       {
//         "processNum": "02.",
//         "processName": "WIREFRAME",
//         "processImg": step1
//       },
//       {
//         "processNum": "03.",
//         "processName": "UI DESIGN",
//         "processImg": step1
//       },
//       {
//         "processNum": "04.",
//         "processName": "DEVELOPING",
//         "processImg": step1
//       },
//     ]
//   },
//   {
//     projectName: "techno template",
//     clientName: "standlone project",
//     servicesMade: "UI/UX, Developing",
//     websiteLink: "https://tecno.vercel.app/",
//     startDate: "10.07.2023",
//     endDate: "03.08.2023",
//     projectImg: technoMock,
//     overview: "n euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem.",
//     checkAndLaunch: "In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique blandit vitae sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet.",
//     workProcess: [
//       {
//         "processNum": "01.",
//         "processName": "BRAINSTORMING",
//         "processImg": step1
//       },
//       {
//         "processNum": "02.",
//         "processName": "WIREFRAME",
//         "processImg": step1
//       },
//       {
//         "processNum": "03.",
//         "processName": "UI DESIGN",
//         "processImg": step1
//       },
//       {
//         "processNum": "04.",
//         "processName": "DEVELOPING",
//         "processImg": step1
//       },
//     ]
//   },
//   {
//     projectName: "noval template",
//     clientName: "standlone project",
//     servicesMade: "UI/UX, Developing",
//     websiteLink: "https://e-commerce-noval.vercel.app/",
//     startDate: "05.07.2023",
//     endDate: "01.08.2023",
//     projectImg: novalMock,
//     overview: "n euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem.",
//     checkAndLaunch: "In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique blandit vitae sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet.",
//     workProcess: [
//       {
//         "processNum": "01.",
//         "processName": "BRAINSTORMING",
//         "processImg": step1
//       },
//       {
//         "processNum": "02.",
//         "processName": "WIREFRAME",
//         "processImg": step1
//       },
//       {
//         "processNum": "03.",
//         "processName": "UI DESIGN",
//         "processImg": step1
//       },
//       {
//         "processNum": "04.",
//         "processName": "DEVELOPING",
//         "processImg": step1
//       },
//     ]
//   },
//   {
//     projectName: "hotel landpage",
//     clientName: "standlone project",
//     servicesMade: "UI/UX, Developing",
//     websiteLink: "https://mentor-kohl.vercel.app/",
//     startDate: "01.04.2023",
//     endDate: "15.04.2023",
//     projectImg: hotelMock,
//     overview: "n euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem.",
//     checkAndLaunch: "In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique blandit vitae sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet.",
//     workProcess: [
//       {
//         "processNum": "01.",
//         "processName": "BRAINSTORMING",
//         "processImg": step1
//       },
//       {
//         "processNum": "02.",
//         "processName": "WIREFRAME",
//         "processImg": step1
//       },
//       {
//         "processNum": "03.",
//         "processName": "UI DESIGN",
//         "processImg": step1
//       },
//       {
//         "processNum": "04.",
//         "processName": "DEVELOPING",
//         "processImg": step1
//       },
//     ]
//   },
//   {
//     projectName: "E-Commerce watches",
//     clientName: "standlone project",
//     servicesMade: "UI/UX, Developing",
//     websiteLink: "https://mohmedamged.github.io/E-Commerce-Watch-App-Template",
//     startDate: "16.03.2023",
//     endDate: "25.03.2023",
//     projectImg: timeMock,
//     overview: "n euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem.",
//     checkAndLaunch: "In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien venenatis orci, eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor. Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique blandit vitae sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet.",
//     workProcess: [
//       {
//         "processNum": "01.",
//         "processName": "BRAINSTORMING",
//         "processImg": step1
//       },
//       {
//         "processNum": "02.",
//         "processName": "WIREFRAME",
//         "processImg": step1
//       },
//       {
//         "processNum": "03.",
//         "processName": "UI DESIGN",
//         "processImg": step1
//       },
//       {
//         "processNum": "04.",
//         "processName": "DEVELOPING",
//         "processImg": step1
//       },
//     ]
//   },
// ]

  // const servicesArray = [
  //   {
  //     num: "01",
  //     title: "Web Development",
  //     description: "Crafting dynamic & responsive websites for impactful online presence",
  //     icon: webIcon
  //   },
  //   {
  //     num: "02",
  //     title: "App Development",
  //     description: "Turning ideas into intuitive mobile apps for exceptional experiences.",
  //     icon: mopileIcon
  //   },
  //   {
  //     num: "03",
  //     title: "UI-UX Design",
  //     description: "Creating intuitive interfaces for delightful digital experiences.",
  //     icon: UiUx
  //   },
  //   // {
  //   //   num: "04",
  //   //   title: "Graphic Design",
  //   //   description: "Bringing brands to life through captivating visuals & design.",
  //   //   icon: graphicIcon
  //   // },
  //   {
  //     num: "04",
  //     title: "Backend",
  //     description: "Powering applications with robust backend solutions.",
  //     icon: backend
  //   },
  //   {
  //     num: "05",
  //     title: "Content Writing",
  //     description: "Compelling content that resonates with your audience.",
  //     icon: content
  //   },
  //   {
  //     num: "06",
  //     title: "Ai Development",
  //     description: "Unlocking possibilities with advanced AI technology.",
  //     icon: ai
  //   },
  //   {
  //     num: "07",
  //     title: "Technical Support",
  //     description: "Reliable support for digital operations.",
  //     icon: support
  //   },
  // ];

  // const servicesInformation = [
  //   {
  //     serviceName: "Web Development",
  //     serviceIcon: webIcon,
  //     serviceDescription: "Holitech specializes in crafting dynamic and responsive websites that leave a lasting impression. Our team of expert developers combines creativity with technical expertise to build custom web solutions tailored to your business needs.",
  //     howWeWork: {
  //       "discovery And Planning": "We start by understanding your business objectives, target audience, and project requirements. We develop a detailed project plan and strategy, outlining the scope, timeline, and milestones for the web development project.",
  //       "design And Development": "Our team creates wireframes and design mockups to visualize the layout and structure of the website. We then code functional components using modern frontend and backend technologies, ensuring a seamless user experience and robust functionality.",
  //       "testing And Deployment": "Before launch, we conduct thorough testing to ensure the functionality, performance, and compatibility of the website across different browsers and devices. Once tested and approved, we handle the deployment process, ensuring a smooth transition to the production environment.",
  //       "maintenance And Support": "After launch, we provide ongoing maintenance and support services to address any issues, implement updates, and ensure the continued success of the website."
  //     },
  //     techniquesAndTools: {
  //       "programming Languages": ["HTML5", "CSS3", "JavaScript"],
  //       "frontend Frameworks": ["React.js", "Vue.js", "AngularJS"],
  //       "backend Technologies": ["Node.js", "Express.js", "Django"],
  //       "version Control": ["Git", "GitHub"],
  //       "build Tools": ["Webpack", "Babel"],
  //       "code Quality": ["ESLint", "Prettier"],
  //       "additional Tools": ["Bootstrap", "Sass", "LESS"]
  //     }

  //   },
  //   {
  //     serviceName: "App Development",
  //     serviceIcon: mopileIcon,
  //     serviceDescription: "Holitech is your go-to partner for cutting-edge mobile app development. Our skilled team of developers creates intuitive and engaging mobile applications that elevate user experiences.",
  //     howWeWork: {
  //       "discovery And Planning": "We start by understanding your business objectives, target audience, and project requirements. We develop a detailed project plan and strategy, outlining the scope, timeline, and milestones for the web development project.",
  //       "design And Development": "Our team creates wireframes and design mockups to visualize the layout and structure of the website. We then code functional components using modern frontend and backend technologies, ensuring a seamless user experience and robust functionality.",
  //       "testing And Deployment": "Before launch, we conduct thorough testing to ensure the functionality, performance, and compatibility of the website across different browsers and devices. Once tested and approved, we handle the deployment process, ensuring a smooth transition to the production environment.",
  //       "maintenance And Support": "After launch, we provide ongoing maintenance and support services to address any issues, implement updates, and ensure the continued success of the website."
  //     },
  //     techniquesAndTools: {
  //       "programming Languages": ["Swift", "Kotlin"],
  //       "frontend Frameworks": [],
  //       "backend Technologies": ["Node.js", "Express.js"],
  //       "versionControl": ["Git", "GitHub"],
  //       "build Tools": [],
  //       "code Quality": ["ESLint", "Prettier"],
  //       "additional Tools": ["React Native", "Flutter"]
  //     }
  //   },
  //   {
  //     serviceName: "UI-UX Design",
  //     serviceIcon: UiUx,
  //     serviceDescription: "At Holitech, user-centric design is at the heart of everything we do. Our UI/UX design services focus on creating intuitive interfaces and captivating visuals that delight users and drive engagement.",
  //     howWeWork: {
  //       "research And Analysis": "We conduct thorough research to understand your target audience, user needs, and business goals. This informs our design decisions and ensures a user-centric approach.",
  //       "wireframing And Prototyping": "We create wireframes and prototypes to visualize the layout and flow of the user interface. This allows for early feedback and iteration to refine the design.",
  //       "visual Design": "Our designers focus on creating visually appealing interfaces that align with your brand identity while prioritizing usability and accessibility.",
  //       "testing And Iteration": "We conduct usability testing to gather feedback and make iterative improvements to the design, ensuring a seamless and intuitive user experience."
  //     },
  //     techniquesAndTools: {
  //       "design Tools": ["Sketch", "Adobe XD", "Figma"],
  //       "prototyping Tools": ["InVision", "Proto.io"],
  //       "usability Testing Tools": ["UsabilityHub", "UserTesting"],
  //       "collaboration Tools": ["Zeplin", "Abstract"]
  //     }
  //   },
  //   {
  //     serviceName: "Graphic Design",
  //     serviceIcon: graphicIcon,
  //     serviceDescription: "Holitech's graphic design services elevate your brand aesthetics with captivating visuals and design. From logos to marketing materials, our talented designers create designs that resonate with your audience.",
  //     howWeWork: {
  //       "research And Conceptualization": "We start by understanding your brand identity, target audience, and project goals, conducting research and brainstorming sessions to develop creative concepts and ideas.",
  //       "design And Creation": "Our designers bring your vision to life through creative and impactful visual assets, including logos, branding materials, marketing collateral, and digital graphics, ensuring consistency and brand integrity.",
  //       "review And Revision": "We collaborate with you to review the designs and gather feedback, making revisions and adjustments as needed to ensure your satisfaction and alignment with your brand vision.",
  //       "delivery And Finalization": "Once approved, we deliver the final designs in various formats and sizes, providing all necessary files and assets for your use across different platforms and channels."
  //     },
  //     techniquesAndTools: {
  //       "design Software": ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
  //       "typography Tools": ["Google Fonts", "Adobe Fonts"],
  //       "color Palette Tools": ["Coolors", "Adobe Color"],
  //       "collaboration Tools": ["Behance", "Dribbble"]
  //     }
  //   },
  //   {
  //     serviceName: "Backend",
  //     serviceIcon: backend,
  //     serviceDescription: "Holitech's backend development solutions power your applications, ensuring seamless performance and scalability.",
  //     howWeWork: {
  //       "architecture And Planning": "We design the backend architecture based on the specific requirements of your application, considering factors such as data management, scalability, and security.",
  //       "development And Integration": "Our developers code the backend logic and integrate it with the frontend components, ensuring smooth communication and functionality.",
  //       "testing And Optimization": "We conduct thorough testing to identify and fix any bugs or performance issues in the backend code, optimizing it for scalability, efficiency, and security.",
  //       "deployment And Maintenance": "Once tested and approved, we deploy the backend to the production environment and provide ongoing maintenance and support to ensure the continued performance and reliability of your application."
  //     },
  //     techniquesAndTools: {
  //       "backend Languages": ["JavaScript", "Java"],
  //       "frameworks And Libraries": ["Node.js", "Express.js"],
  //       databases: [ "MySQL", "PostgreSQL"],
  //       "deployment Tools": ["AWS", "Heroku", "Google Cloud"],
  //       "monitoring Tools": ["New Relic", "Datadog", "Prometheus"]
  //     }
  //   },
  //   {
  //     serviceName: "Content Writing",
  //     serviceIcon: content,
  //     serviceDescription: "Holitech's expert content writers craft compelling and informative content that resonates with your audience.",
  //     howWeWork: {
  //       "research And Planning": "We conduct research to understand your target audience, industry trends, and business objectives, developing a content strategy tailored to your needs and goals.",
  //       "content Creation": "Our writers create engaging and informative content, including website copy, blog posts, articles, and marketing materials, that effectively communicates your message and engages your audience.",
  //       "editing And Proof reading": "We carefully edit and proofread the content to ensure clarity, accuracy, and consistency, adhering to your brand voice and style guidelines, and making revisions as needed.",
  //       "optimization And Promotion": "We optimize the content for search engines (SEO) and promote it through various channels, including social media, email marketing, and content distribution platforms, to increase visibility and drive traffic to your website."
  //     },
  //     techniquesAndTools: {
  //       "research Tools": ["Google Trends", "BuzzSumo"],
  //       "writing Tools": ["Grammarly", "Hemingway Editor"],
  //       "SEO Tools": ["Yoast SEO", "SEMrush"],
  //       "collaboration Tools": ["Google Docs", "Slack"]
  //     }
  //   },
  //   {
  //     serviceName: "Ai Development",
  //     serviceIcon: ai,
  //     serviceDescription: "Explore the possibilities of AI with Holitech. Our AI development services leverage cutting-edge technology to enhance your products and services.",
  //     howWeWork: {
  //       "consultation And Assessment": "We start by understanding your business goals and challenges, and identify areas where AI can add value, conducting a thorough assessment of your existing systems and processes.",
  //       "development And Training": "Our AI experts develop and train custom AI models tailored to your needs, using techniques such as machine learning, natural language processing, and computer vision, to analyze data and make predictions.",
  //       "integration And Testing": "We integrate the AI models into your existing systems or applications and conduct rigorous testing to ensure accuracy, reliability, and performance, making adjustments as needed to optimize performance.",
  //       "deployment And Monitoring": "Once tested and approved, we deploy the AI solutions to production and provide ongoing monitoring and maintenance to ensure continued performance, scalability, and efficiency."
  //     },
  //     techniquesAndTools: {
  //       "machine Learning Frameworks": ["TensorFlow", "PyTorch"],
  //       "natural Language Processing": ["NLTK", "spaCy"],
  //       "computer Vision": ["OpenCV", "Dlib"],
  //       "deployment Platforms": ["Google Cloud AI Platform", "Amazon SageMaker"],
  //       "monitoring Tools": ["TensorBoard", "Kibana"]
  //     }
  //   },
  //   {
  //     serviceName: "Technical Support",
  //     serviceIcon: support,
  //     serviceDescription: "Holitech provides reliable technical support to ensure your digital solutions run smoothly.",
  //     howWeWork: {
  //       "issue Resolution": "We offer timely and efficient resolution of technical issues and challenges that may arise with your digital solutions, ensuring minimal downtime and disruption to your operations.",
  //       "updates And Maintenance": "We provide regular updates and maintenance to keep your systems and applications up to date with the latest features, security patches, and performance improvements.",
  //       "training And Documentation": "We offer training and documentation to help your team effectively use and manage the digital solutions we develop, empowering them to maximize their potential and productivity.",
  //       "proactive Monitoring": "We proactively monitor your systems and applications for potential issues or vulnerabilities, taking preemptive action to prevent problems before they occur."
  //     },
  //     techniquesAndTools: {
  //       "ticketing Systems": ["Jira", "Zendesk"],
  //       "remote SupportTools": ["TeamViewer", "AnyDesk"],
  //       "monitoring Tools": ["Nagios", "Zabbix"],
  //       "documentation Tools": ["Confluence", "Docusaurus"]
  //     }
  //   },
  // ]
const servicesArray = [
  {
    num: "01",
    title: "Software Solutions",
    description: "End-to-end custom software and scalable digital platforms.",
    icon: webIcon
  },
  {
    num: "02",
    title: "Social Media & Marketing",
    description: "Boosting your brand with creative campaigns and digital marketing.",
    icon: mopileIcon
  },
  {
    num: "03",
    title: "Content Creation",
    description: "Engaging content that tells your story and connects with audiences.",
    icon: content
  },
  {
    num: "04",
    title: "Graphic Design & Branding",
    description: "Building strong brand identities with stunning visuals.",
    icon: graphicIcon
  },
  {
    num: "05",
    title: "AI Solutions",
    description: "Innovative AI integrations to optimize workflows and scale.",
    icon: ai
  },
  {
    num: "06",
    title: "Motion Graphics",
    description: "Dynamic animations and visual storytelling to captivate audiences.",
    icon: UiUx
  },
  {
    num: "07",
    title: "Business Strategy",
    description: "Smart strategies to grow, innovate, and sustain your business.",
    icon: support
  }
];

  const servicesInformation = [
  {
    serviceName: "Software Solutions",
    serviceIcon: webIcon,
    serviceDescription: "We deliver end-to-end software solutions tailored to your business needs. From custom applications to scalable platforms, we focus on building innovative, secure, and high-performing solutions.",
    howWeWork: {
      "discovery And Planning": "We analyze your business requirements and define the right technical architecture for a scalable and efficient solution.",
      "design And Development": "Our team designs intuitive interfaces and develops reliable systems using the latest technologies.",
      "testing And Deployment": "We rigorously test solutions to ensure security, performance, and scalability before deployment.",
      "maintenance And Support": "We provide continuous updates, optimization, and technical support to ensure long-term success."
    },
    techniquesAndTools: {
      "languages": ["JavaScript", "Python", "PHP"],
      "frameworks": ["React.js", "Node.js", "Laravel"],
      "databases": ["MySQL", "MongoDB", "PostgreSQL"],
      "deployment": ["AWS", "Docker", "CI/CD"]
    }
  },
  {
    serviceName: "Social Media & Marketing",
    serviceIcon: mopileIcon,
    serviceDescription: "We create impactful digital marketing strategies and manage your social presence to boost visibility, engagement, and growth.",
    howWeWork: {
      "strategy": "We study your brand, competitors, and audience to craft a unique marketing strategy.",
      "content Creation": "We design creative posts, videos, and campaigns tailored to your brand voice.",
      "campaign Management": "We run and optimize paid campaigns across major platforms.",
      "analytics": "We track performance, measure KPIs, and refine strategies for better ROI."
    },
    techniquesAndTools: {
      "social Platforms": ["Facebook", "Instagram", "LinkedIn", "TikTok"],
      "marketing Tools": ["Google Ads", "Meta Ads Manager", "HubSpot"],
      "analytics Tools": ["Google Analytics", "Hotjar"]
    }
  },
  {
    serviceName: "Content Creation",
    serviceIcon: content,
    serviceDescription: "We craft engaging written, visual, and multimedia content that tells your brand’s story and resonates with your audience.",
    howWeWork: {
      "research": "We understand your audience and industry to create relevant content ideas.",
      "creation": "We write, design, and produce impactful blogs, scripts, and campaigns.",
      "editing": "Our editors refine content to maintain clarity, tone, and brand alignment.",
      "distribution": "We publish and distribute content across web and social platforms."
    },
    techniquesAndTools: {
      "writing Tools": ["Grammarly", "Hemingway"],
      "SEO Tools": ["Ahrefs", "SEMrush"],
      "collaboration Tools": ["Notion", "Google Docs"]
    }
  },
  {
    serviceName: "Graphic Design & Branding",
    serviceIcon: graphicIcon,
    serviceDescription: "We bring your brand to life with modern graphic design and strong visual identity systems.",
    howWeWork: {
      "research And Identity": "We study your brand values and target audience to define a unique identity.",
      "design": "We create logos, brand guidelines, and marketing visuals.",
      "iteration": "We refine designs based on client feedback and testing.",
      "final Delivery": "We provide all brand assets for online and offline use."
    },
    techniquesAndTools: {
      "design Software": ["Adobe Photoshop", "Illustrator", "Figma"],
      "brand Tools": ["Coolors", "Adobe Color"],
      "showcase Platforms": ["Behance", "Dribbble"]
    }
  },
  {
    serviceName: "AI Solutions",
    serviceIcon: ai,
    serviceDescription: "We integrate Artificial Intelligence to optimize workflows, improve decision-making, and unlock new opportunities.",
    howWeWork: {
      "consulting": "We identify AI opportunities within your business processes.",
      "model Development": "We build custom machine learning and NLP solutions.",
      "integration": "We integrate AI into your existing systems.",
      "monitoring": "We track AI performance and fine-tune models regularly."
    },
    techniquesAndTools: {
      "frameworks": ["TensorFlow", "PyTorch"],
      "NLP Tools": ["spaCy", "OpenAI APIs"],
      "vision Tools": ["OpenCV"],
      "deployment": ["AWS AI", "Google Cloud AI"]
    }
  },
  {
    serviceName: "Motion Graphics",
    serviceIcon: UiUx,
    serviceDescription: "We design motion graphics and animations that bring your message to life with dynamic visual storytelling.",
    howWeWork: {
      "concept Development": "We define the story, style, and purpose of the motion graphic.",
      "storyboarding": "We create a storyboard to visualize the animation flow.",
      "animation": "Our designers craft stunning 2D/3D animations and effects.",
      "delivery": "We optimize and deliver the final video for all platforms."
    },
    techniquesAndTools: {
      "animation Tools": ["Adobe After Effects", "Blender", "Cinema 4D"],
      "video Editing": ["Adobe Premiere Pro", "Final Cut Pro"]
    }
  },
  {
    serviceName: "Business Strategy",
    serviceIcon: support,
    serviceDescription: "We provide business strategy consulting to help you scale, innovate, and achieve sustainable growth.",
    howWeWork: {
      "analysis": "We analyze your market, competitors, and current operations.",
      "planning": "We define clear goals and measurable KPIs.",
      "execution": "We guide you through implementing strategic initiatives.",
      "review": "We track performance and adapt strategies for success."
    },
    techniquesAndTools: {
      "frameworks": ["SWOT", "Porter’s Five Forces"],
      "tools": ["Miro", "Notion", "Excel"],
      "analytics": ["Power BI", "Tableau"]
    }
  }
];

  const partnerArr = [
    {
      logo: logo1,
      link: "https://www.namecheap.com/"
    },
    {
      logo: logo2,
      link: "https://ae.godaddy.com/"
    },
    {
      logo: logo3,
      link: "https://stripe.com/"
    },
    {
      logo: logo4,
      link: "https://www.envato.com/"
    },
    {
      logo: logo5,
      link: "https://themeforest.net/"
    },
    {
      logo: logo6,
      link: "https://www.figma.com/"
    },

  ]

  const [scrollToggle, setScrollToggle] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  });
  return (
    <>
      <MyNav scrollToggle={scrollToggle} />
      <ScrollToTopButton />
      <Routes>
        <Route path='/' element={<MyMainHome partnerArr={partnerArr} projcetCards={projcetCards} servicesArray={servicesArray} />} />
        <Route path='/services' element={<MyAllServices servicesArray={servicesArray} />} />
        <Route path='/services/:serviceName' element={<SingleServicePage servicesArray={servicesArray} servicesInformation={servicesInformation}/>} />
        <Route path='/about-us' element={<AboutUsPage />} />
        {/* <Route path='/projects' element={<MyProjectsPage projcetCards={projcetCards}/>} /> */}
        {/* <Route path='/projects/:projectName' element={<SingleProjectPage projectDetails={projectDetails} projcetCards={projcetCards}/>} /> */}
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
