import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Learnspac – Learning Platform",
      description: "Full-stack learning management system enabling institutes to create and manage courses, assignments, and student enrollments seamlessly.",
      features: [
        "Integrated in-browser code editor with real-time code execution",
        "Secure authentication and role-based access control for admins, instructors, and students",
        "Modular and scalable REST APIs with React components",
        "MERN stack implementation"
      ],
      tags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      github: undefined,
      demo: undefined
    },
    {
      title: "COVID-19 Spread Analysis Using Generalized SEIR Model",
      description: "Designed a SEIR model in MATLAB to analyze and predict COVID-19 spread using real-time data from the Johns Hopkins University database.",
      features: [
        "Mathematical modeling of disease transmission dynamics (Susceptible-Exposed-Infected-Recovered)",
        "Real-time data integration from Johns Hopkins University COVID-19 database",
        "Predictive analysis of disease progression under stable epidemiological conditions",
        "Parameter estimation for infection rate, incubation period, and recovery rate",
        "Visualization of epidemic curves and forecasting trends"
      ],
      tags: ["MATLAB", "Epidemiology", "Data Analysis", "Mathematical Modeling", "COVID-19"],
      github: "https://github.com/razorblade42/SEIR-model-for-COVID19",
      demo: undefined
    },
    {
      title: "GUI Group Chat Application",
      description: "TCP-based real-time group chat application with client-server architecture, featuring a user-friendly graphical interface.",
      features: [
        "Multi-client TCP socket communication using Python's Socket library",
        "Server-side message broadcasting to all connected clients",
        "Intuitive GUI built with Tkinter for seamless user experience",
        "Real-time message delivery and client connection management",
        "Thread-based architecture for handling concurrent client connections"
      ],
      tags: ["Python", "Socket Programming", "TCP/IP", "Tkinter", "Networking"],
      github: "https://github.com/razorblade42/Group-Chat-application",
      demo: undefined
    },
    {
      title: "Unsupervised Chunking (Hindi)",
      description: "Developed an unsupervised algorithm to chunk Hindi sentences and identify syntactic units.",
      features: [
        "Explored n-gram frequency models for syntactic analysis",
        "Implemented K-means clustering for pattern recognition",
        "Language processing for Hindi text analysis"
      ],
      tags: ["Python", "NLP", "Machine Learning", "K-means"],
      github: undefined,
      demo: undefined
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    {project.github && (
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="hover:bg-primary/20"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="hover:bg-primary/20"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
