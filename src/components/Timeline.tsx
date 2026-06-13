import { Calendar, MapPin } from "lucide-react";
import AnimatedSection from "./ui/animated-section";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Dynamic Progress Line - Centered on desktop, left on mobile */}
      <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-20" />
      
      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot - Centered on desktop, left on mobile */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 z-10">
                <div className="w-4 h-4 rounded-full bg-primary relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                  <div className="absolute inset-[-4px] rounded-full border border-primary/20" />
                </div>
              </div>

              {/* Spacer for desktop to push content to one side */}
              <div className="hidden md:block w-1/2" />

              {/* Card Container */}
              <div className="w-full md:w-1/2 pl-10 md:pl-0">
                <AnimatedSection 
                  direction={isEven ? "left" : "right"} 
                  delay={index * 0.1}
                  className={isEven ? "md:pr-12" : "md:pl-12"}
                >
                  <motion.div
                    whileHover={{ x: isEven ? -5 : 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 hover:border-primary/30 transition-all group shadow-xl shadow-black/20"
                  >
                    <div className="flex flex-col mb-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                        <div className="flex flex-wrap gap-2 shrink-0">
                          <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/5">
                            <Calendar className="w-3 h-3" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                        <div className="flex items-center gap-2 text-primary/80 font-bold text-sm">
                          <span>{item.organization}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-foreground/70 text-sm leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
