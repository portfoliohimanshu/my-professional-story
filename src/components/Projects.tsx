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
      tags: ["React", "Node.js", "MongoDB", "Express", "REST API"]
    },
    {
      title: "Unsupervised Chunking (Hindi)",
      description: "Developed an unsupervised algorithm to chunk Hindi sentences and identify syntactic units.",
      features: [
        "Explored n-gram frequency models for syntactic analysis",
        "Implemented K-means clustering for pattern recognition",
        "Language processing for Hindi text analysis"
      ],
      tags: ["Python", "NLP", "Machine Learning", "K-means"]
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
                    <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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
