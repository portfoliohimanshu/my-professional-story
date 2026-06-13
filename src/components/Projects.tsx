import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./ui/animated-section";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Giggle – Squad Discovery Platform",
      description: "Real-time social discovery platform enabling \"Squad-to-Squad\" video encounters featuring synchronized cinematic reveals and a geo-sharded matchmaking engine.",
      features: [
        "Integrated Agora RTC for low-latency multi-participant video streaming and Socket.io for a sub-millisecond global signaling mesh",
        "Optimized system performance and reliability using a hybrid MongoDB/Redis architecture with Redlock-based atomic pairing",
        "Migrated high-frequency session data to Redis Hashes to reduce database overhead and improve reliability",
        "Developed a responsive \"Industrial Minimalist\" UX using Next.js 15 and Framer Motion featuring collapsible workspaces",
        "Implemented immersive discovery modes and a \"Gatekeeper\" manual approval security pipeline"
      ],
      tags: ["Next.js 15", "Agora RTC", "Socket.io", "MongoDB", "Redis", "Framer Motion"],
      github: undefined,
      demo: "https://giggle-web-git-main-razorblade42s-projects.vercel.app/"
    },
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
    <section id="projects" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work, ranging from real-time social platforms to mathematical modeling and NLP.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full bg-card/40 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-all group">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center justify-between gap-4">
                      <span className="group-hover:text-primary transition-colors">{project.title}</span>
                      <div className="flex gap-2 shrink-0">
                        {project.github && (
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="w-9 h-9 rounded-full hover:bg-primary/20 hover:text-primary"
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
                            className="w-9 h-9 rounded-full hover:bg-primary/20 hover:text-primary"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-foreground/60 leading-relaxed pt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/5 text-primary border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
