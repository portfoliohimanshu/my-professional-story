import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Himanshu</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Software Engineer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Building scalable solutions with modern technologies
          </p>
        </div>
        
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Innovative Software Engineer seeking full-time SDE roles to build scalable and impactful solutions.
          Specialized in backend development, microservices architecture, and full-stack web applications.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#contact" className="flex items-center gap-2">
              Get In Touch
              <Mail className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="hover:bg-secondary/80">
            <a href="#projects" className="flex items-center gap-2">
              View Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/himanshu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/himanshu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://leetcode.com/u/__struggler__/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors"
            aria-label="LeetCode"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a 
            href="mailto:himanshu.builds@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
