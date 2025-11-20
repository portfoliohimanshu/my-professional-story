import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Globe, Lightbulb, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages & Frameworks",
      skills: ["Java", "Python", "C", "C++", "JavaScript", "Spring Boot", "MERN Stack", "Hibernate", "Fast API"]
    },
    {
      icon: Database,
      title: "Database & Messaging",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Kafka"]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: ["Git", "Github", "Docker", "Linux", "IntelliJ", "Postman"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "HTMX", "JavaScript", "React"]
    },
    {
      icon: Server,
      title: "Core Expertise",
      skills: ["Backend Development", "Microservices Architecture", "RESTful APIs", "JSON-RPC"]
    },
    {
      icon: Lightbulb,
      title: "Soft Skills",
      skills: ["Integrity", "Dependability", "Teamwork", "Problem Solving", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 border border-border card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-secondary hover:bg-primary/20 border-border"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
