import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      
      <div className="noise-bg absolute inset-0 -z-20" />

      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span 
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full glass-card text-primary border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            Available for SDE Roles
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">Himanshu</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-medium mb-3">
            Software Engineer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions with modern technologies and a focus on performance.
          </p>
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Innovative engineer specializing in backend systems, microservices, and high-performance web applications.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            <a href="#contact" className="flex items-center gap-2">
              Get In Touch
              <Mail className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/10 glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
            <a href="#projects" className="flex items-center gap-2">
              View Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/10 glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
            <a href="https://drive.google.com/file/d/1WJlhb0OsoixLFevOkeUQM5WNmo3JBCY4/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Resume
              <FileText className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          {[
            { icon: <Github />, href: "https://github.com/razorblade42", label: "GitHub" },
            { icon: <Linkedin />, href: "https://www.linkedin.com/in/himanshu-056b461a4/", label: "LinkedIn" },
            { icon: <Code2 />, href: "https://leetcode.com/u/__struggler__/", label: "LeetCode" },
            { icon: <Mail />, href: "mailto:himanshu.builds@gmail.com", label: "Email" }
          ].map((social, i) => (
            <motion.a 
              key={i}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary"
              aria-label={social.label}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
