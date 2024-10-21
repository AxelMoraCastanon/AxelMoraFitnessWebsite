// Bond Portfolio screens images
import BondPortfolio from "../assets/projects/BondPortfolioScreens/BondPortfolio.jpg";
import BondList from "../assets/projects/BondPortfolioScreens/BondList.png";
import BondListDetails from "../assets/projects/BondPortfolioScreens/BondListDetails.png";
import IndustryList from "../assets/projects/BondPortfolioScreens/IndustryList.png";
import BondsByIndustry from "../assets/projects/BondPortfolioScreens/BondsByIndustry.png";
import StratificationReportsList from "../assets/projects/BondPortfolioScreens/StratificationReportsList.png";
import CouponStratification from "../assets/projects/BondPortfolioScreens/CouponStratification.png";
import YieldStratification from "../assets/projects/BondPortfolioScreens/YieldStratification.png";
import DatabaseTables from "../assets/projects/BondPortfolioScreens/DatabaseTables.png";
import BondsTable from "../assets/projects/BondPortfolioScreens/BondsTable.png";
import StratifyCouponsTable from "../assets/projects/BondPortfolioScreens/StratifyCouponsTable.png";
import StratifyIndustryTable from "../assets/projects/BondPortfolioScreens/StratifyIndustryTable.png";
import StratifyRatingGroupTable from "../assets/projects/BondPortfolioScreens/StratifyRatingGroupTable.png";
import StratifyRatingsTable from "../assets/projects/BondPortfolioScreens/StratifyRatingsTable.png";
import StratifyTermTable from "../assets/projects/BondPortfolioScreens/StratifyTermTable.png";
import StratifyYieldTable from "../assets/projects/BondPortfolioScreens/StratifyYieldTable.png";

// GymPulse screens images
import InteractiveCalendar from "../assets/projects/GymPulseScreens/InteractiveCalendar.jpeg";
import AppleMapsScreen from "../assets/projects/GymPulseScreens/AppleMapsScreen.jpeg";
import ContactScreen from "../assets/projects/GymPulseScreens/ContactScreen.jpeg";
import LocationBasedSearch from "../assets/projects/GymPulseScreens/LocationBasedSearch.jpeg";
import LocationInfoScreen from "../assets/projects/GymPulseScreens/LocationInfoScreen.jpeg";
import TrainerinformationScreen from "../assets/projects/GymPulseScreens/TrainerinformationScreen.jpeg";
import PaymentsStripe from "../assets/projects/GymPulseScreens/PaymentsStripe.jpeg";
import StripeCamera from "../assets/projects/GymPulseScreens/StripeCamera.jpeg";

// BidMe screens images
import BidMeDashboard from "../assets/projects/BidMeScreens/BidMeDashboard.jpg";
import BidMeLocationSearch from "../assets/projects/BidMeScreens/BidMeLocationSearch.jpg";
import BidMeCreateBid from "../assets/projects/BidMeScreens/BidMeCreateBid.jpg";
import BidMeInvoice from "../assets/projects/BidMeScreens/BidMeInvoice.jpg";

//AI Club Image and Resume
import AIClubImage from "../assets/CSUCIArtificialIntelligenceClub.jpg";
import AxelMoraResume from "../assets/AxelMoraResume.pdf"; // Updated import

export const HERO_CONTENT = `I’m an AWS-certified Software Engineer with a B.S. in Computer Science from CSU Channel Islands.
 I specialize in integrating cloud services to build secure, scalable, and reliable solutions.
  Driven by a passion for continuous learning and cloud computing,
 I focus on delivering impactful software that makes a difference.`;

export const ABOUT_TEXT = `I’m a detail-oriented, AWS-certified Software Engineer with a B.S. in Computer Science from CSU Channel Islands. 
As a co-founder of my university’s AI Club, I led cloud workshops partnering with companies such as AWS & Mission Cloud, enhancing both my leadership and technical expertise. 
I developed GymPulse and BidMe using Agile practices and led the creation of a Bond Portfolio App, managing everything from research to deployment. 
I integrate cloud services and infrastructure into every project, ensuring security, scalability, reliability, and efficiency. 
My passion for continuous learning, cloud computing, and software development drives me to deliver impactful solutions. 
Outside of tech, I train as a powerlifter and strongman.`;

export const EXPERIENCES = [
  {
    date: "January 2023 - January 2024",
    role: "Club Treasurer & Co-Founder",
    company: "CSU Channel Islands Artificial Intelligence Club",
    image: AIClubImage,
    description: `Led AI and cloud computing initiatives, organizing workshops and a successful AWS Cloud-Computing Hackathon
                  in collaboration with Amazon Web Services and Mission Cloud, fostering innovation and problem-solving. 
                  I also managed financial operations to optimize resource allocation, ensuring impactful and cost-effective outcomes.`,
    technologies: ["Amazon Web Services (AWS)", "Machine Learning (M.L.)", "Artificial Intelligence (A.I.)", "C", "Linux", "Ubuntu", "Excel", "Powerpoint", "Leadership", "Cross-Functional Teams"],
  },
];

export const PROJECTS = [
  {
    title: "Bond Portfolio App",
    date: "June 2024 - Pesent",
    position:"Software Engineer",
    image: [BondPortfolio,BondList,BondListDetails,IndustryList,BondsByIndustry,StratificationReportsList,CouponStratification,YieldStratification,
          DatabaseTables,BondsTable,StratifyCouponsTable,StratifyIndustryTable,StratifyRatingGroupTable,StratifyRatingsTable,StratifyTermTable,StratifyYieldTable],
    description:
      `Designed and developed a bond portfolio management Android app using Java, Kotlin, and XML, 
      providing users with the ability to perform CRUD operations and generate reports such as coupon stratifications and portfolio summaries. 
      Taking ownership of the entire development lifecycle, from research and design to deployment, 
      I collaborated closely with stakeholders to replace traditional Excel-based workflows with a secure, user-friendly mobile solution. 
      To support seamless backend interactions, I configured AWS infrastructure—including EC2, RDS, Lambda, CloudWatch, and IAM—using a LAMP stack for scalability and reliability. 
      Furthermore, I ensured smooth data transactions between the app and the AWS RDS MySQL database by testing PHP API endpoints with Postman, 
      guaranteeing secure and efficient communication across the system.`,
    technologies: ["Java", "Kotlin", "XML", "AWS EC2", "AWS RDS", "AWS Lambda", "CloudWatch", "IAM", "LAMP Stack", "PHP", "MySQL", "Postman"],
  },
  {
    title: "GymPulse App",
    date: "August 2023 - December 2023",
    position:"Software Engineer",
    image: [InteractiveCalendar,AppleMapsScreen,ContactScreen,LocationBasedSearch,LocationInfoScreen,TrainerinformationScreen,PaymentsStripe,StripeCamera],
    description:
      `Enhanced backend data handling on AWS RDS MySQL, 
      improving data retrieval times by 30% and significantly boosting the app's responsiveness and overall user experience. 
      Streamlined the testing and deployment processes by implementing a CI/CD pipeline with AWS CodeStar, 
      reducing deployment errors by 20% and ensuring more reliable app updates. 
      Additionally, designed a user-friendly interface in Xcode using Swift, 
      incorporating intuitive UI/UX principles and seamlessly integrating the Stripe SDK for payment processing, 
      which led to a 15% increase in user engagement during beta testing.`,
    technologies: ["Swift", "Xcode", "AWS CodeStar", "AWS RDS MySQL", "Stripe SDK"],
  },
  {
    title: "BidMe App",
    date: "August 2022 - December 2022",
    position:"Software Engineer",
    image: [BidMeDashboard,BidMeLocationSearch,BidMeCreateBid,BidMeInvoice],
    description:
      `Leveraged Unix shell scripting to automate data backup and restore processes for the Amazon RDS MySQL database,
      ensuring data integrity while minimizing downtime during maintenance windows. 
      Optimized SQL queries to efficiently manage large datasets, 
      reducing execution time by 40% and significantly enhancing the app’s performance. 
      Additionally, designed a custom API using Java and SpringBoot to enable seamless integration with the MySQL database, 
      supporting real-time data synchronization across modules and improving both user experience and system reliability.`,
    technologies: ["Java", "SpringBoot", "SQL", "Unix Shell Scripting", "AWS RDS MySQL"],
  },
  {
    title: "CSU Channel Islands CI-LISP Interpreter",
    date: "January 2022 - May 2022",
    position:"Software Engineer",
    image:null,
    description:
      `Developed an interpreter for CI-LISP using C, addressing complex challenges such as tokenization, parsing, 
      and evaluating arithmetic expressions with proper scoping rules, ensuring the successful implementation of the language. 
      Utilized a Unix/Linux environment for development, leveraging tools like Lex and Yacc for parsing, 
      and automated testing processes with shell scripts, improving testing efficiency by 25%. 
      Additionally, introduced advanced features like typecasting and conditionals, 
      enhancing the computational capabilities of CI-LISP and making it a more versatile and powerful tool for users.`,
    technologies: ["C", "Lex", "Yacc", "Unix/Linux", "Shell Scripting"],
  },
];

export const CONTACT = {
  email: "axelmora2011@gmail.com",
  linkedin: "https://www.linkedin.com/in/axel-mora-36508316a/",
  github: "https://github.com/AxelMoraCastanon"
};