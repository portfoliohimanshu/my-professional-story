import AnimatedSection from "./ui/animated-section";
import { motion } from "framer-motion";
import { Code2, Database, Wrench, Globe, Lightbulb, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-secondary/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground">My technical toolbox and core competencies.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card p-8 rounded-2xl border-white/5 hover:border-primary/30 transition-all h-full shadow-xl shadow-black/20 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                  </div>
                  <motion.div 
                    className="flex flex-wrap gap-2.5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-white/5 hover:bg-primary/20 border-white/5 text-foreground/80 px-3 py-1.5 transition-all"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
