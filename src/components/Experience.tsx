import Timeline from "./Timeline";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      organization: "One Savings Bank India (OSBI)",
      location: "Bengaluru",
      period: "June 2025 - Current",
      description: [
        "Architected and implemented Java microservices using orchestration patterns for the bank's new mobile application backend.",
        "Led backend development for mobile app, integrating Fusion Auth APIs for identity management, enabling seamless authentication for existing web customers.",
        "Developed RESTful APIs for authentication workflows, biometric registration and authentication, ensuring secure user verification.",
        "Optimized and customized existing GraphQL APIs to meet mobile application requirements and improve query performance.",
        "Built backend services for web application using Java, Terraform for infrastructure as code, Azure cloud services, APIM for API management, and Mambu banking platform integration."
      ]
    },
    {
      title: "Software Engineer",
      organization: "Cognam Technologies",
      location: "Remote",
      period: "May 2023 - June 2025",
      description: [
        "Developed and integrated virtual card features in the user wallet using ISO8583 standards and Lithic APIs, enabling card activation, PIN management, and usage controls through a secure Java backend.",
        "Built a React-based admin support portal with dynamic interfaces, connecting to a Spring Boot backend for smooth client-server communication and real-time updates.",
        "Refactored backend queries using Criteria JPA for efficient data fetching and designed frontend export tools to generate transaction reports (CSV) from large datasets.",
        "Engineered a customizable authentication system with React-driven onboarding flows and Java-based enforcement logic, supporting multi-step logins (OAuth/OIDC, email, SMS) and invitation-based user provisioning.",
        "Improved platform usability and security by implementing multilingual push/email notifications and device fingerprinting, integrated into both React frontend and backend workflows."
      ]
    },
    {
      title: "Software Development Trainee",
      organization: "Cognam Technologies",
      location: "Remote",
      period: "June 2022 - Nov 2022",
      description: [
        "Enhanced the Jinjava templating engine for broader functionality, increasing its applicability.",
        "Utilized ANTLR to build a linter for a web template engine.",
        "Worked on type systems, type inference, and scoping algorithms.",
        "Implemented syntax and semantic validators in JavaScript."
      ]
    },
    {
      title: "SDE Intern",
      organization: "Oxytocin Labs",
      location: "Remote",
      period: "April 2022 – May 2022",
      description: [
        "Contributed to a full-stack ad-making SaaS platform used by clients like Spotify and Amazon.",
        "Built RESTful APIs using Node.js and TypeScript for robust backend functionality and integration.",
        "Developed reusable UI components in React.js to deliver responsive and interactive interfaces.",
        "Integrated backend services with AWS for scalable deployment and improved performance.",
        "Collaborated in agile sprints, feature planning, and end-to-end product delivery lifecycle."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Experience</span>
        </h2>
        <Timeline items={experiences} />
      </div>
    </section>
  );
};

export default Experience;
