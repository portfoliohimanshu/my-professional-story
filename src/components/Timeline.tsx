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
      {/* Dynamic Progress Line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-20" />
      
      {items.map((item, index) => (
        <div key={index} className="relative pb-12 last:pb-0 pl-10 md:pl-12">
          {/* Timeline Dot with Glow */}
          <div className="absolute left-0 top-1.5 z-10">
            <div className="w-4 h-4 rounded-full bg-primary relative">
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
              <div className="absolute inset-[-4px] rounded-full border border-primary/20" />
            </div>
          </div>

          <AnimatedSection direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1}>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-card/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 hover:border-primary/30 transition-all group shadow-xl shadow-black/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-2 text-primary/80 font-medium mt-1">
                    <span>{item.organization}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5">
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
      ))}
    </div>
  );
};

export default Timeline;
