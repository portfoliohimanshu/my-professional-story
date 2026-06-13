import { GraduationCap, Award } from "lucide-react";
import AnimatedSection from "./ui/animated-section";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Indian Institute of Technology Goa",
      period: "2019 - 2023",
      grade: "CGPA: 8.43/10",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Computer Networks",
        "Computer Architecture",
        "Digital Systems",
        "Linear Algebra",
        "Discrete Mathematics",
        "Deep Learning and AI"
      ]
    },
    {
      degree: "Class 12 (CBSE)",
      institution: "Holy Mission Secondary School, Patna, Bihar",
      period: "2019",
      grade: "Aggregate: 93.4%",
      coursework: []
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Academic <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground">My educational background and core certifications.</p>
          </div>
        </AnimatedSection>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction={index % 2 === 0 ? "right" : "left"}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-card/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 hover:border-primary/30 transition-all group shadow-xl shadow-black/20"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors tracking-tight">{edu.degree}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5 w-fit">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-primary font-medium text-lg mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center gap-2 text-accent/90 mb-6 bg-accent/5 w-fit px-3 py-1 rounded-lg border border-accent/10">
                      <Award className="w-4 h-4" />
                      <span className="font-bold text-sm tracking-wide">{edu.grade}</span>
                    </div>
                    
                    {edu.coursework.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Key Coursework</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span 
                              key={idx} 
                              className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-secondary/50 text-foreground/80 border border-white/5 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
