import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Globe, Code2, Send } from "lucide-react";
import AnimatedSection from "./ui/animated-section";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "himanshu.builds@gmail.com",
      href: "mailto:himanshu.builds@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/himanshu"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/himanshu"
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com/u/__struggler__/"
    },
    {
      icon: Globe,
      label: "Website",
      href: "https://www.himanshu.studio"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-secondary/20">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div className="glass-card p-8 rounded-2xl border-white/5 shadow-xl shadow-black/10 group h-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-xl font-bold group-hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-xl font-bold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div key={index} whileHover={{ y: -5 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-2xl border-white/5 glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-bold tracking-tight">{link.label}</span>
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-2xl shadow-primary/20"
              asChild
            >
              <a href="mailto:himanshu.builds@gmail.com" className="flex items-center gap-3 text-lg">
                <Send className="w-5 h-5" />
                Say Hello
              </a>
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
