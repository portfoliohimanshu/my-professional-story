import { GraduationCap, Award } from "lucide-react";

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
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Education</span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 mt-1">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="text-muted-foreground text-sm">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold">{edu.grade}</span>
                  </div>
                  
                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
