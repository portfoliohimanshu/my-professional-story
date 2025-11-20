import { Calendar, MapPin } from "lucide-react";

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
      {items.map((item, index) => (
        <div key={index} className="relative pb-12 last:pb-0 pl-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
          {index !== items.length - 1 && <div className="timeline-line" />}
          
          <div className="absolute left-0 top-1">
            <div className="timeline-dot" />
          </div>

          <div className="bg-card rounded-lg p-6 border border-border card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1 md:mt-0">
                <Calendar className="w-4 h-4" />
                <span>{item.period}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-primary font-medium mb-1">
              <span>{item.organization}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>

            <ul className="space-y-2">
              {item.description.map((desc, idx) => (
                <li key={idx} className="text-foreground/80 text-sm leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
