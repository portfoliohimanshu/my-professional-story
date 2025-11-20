import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Code2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "himanshu.builds@gmail.com",
      href: "mailto:himanshu.builds@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7488978136",
      href: "tel:+917488978136"
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 border border-border card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                size="lg"
                variant="secondary"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </a>
              </Button>
            );
          })}
        </div>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow-pulse"
          asChild
        >
          <a href="mailto:himanshu.builds@gmail.com" className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
