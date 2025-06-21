import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Laptop, CheckCircle, Network, Settings } from "lucide-react";

const experiences = [
  {
    icon: Crown,
    title: "Vice President – Delivery",
    company: "CrossML Pvt Ltd",
    period: "May 2025 – Present",
    description: "Leading strategic delivery operations for AI/ERP/automation projects while driving organizational excellence and innovation in digital transformation initiatives.",
    skills: ["Strategic Leadership", "AI/ML Projects", "Digital Transformation"],
    color: "primary",
  },
  {
    icon: Laptop,
    title: "Project Manager",
    company: "CrossML Pvt Ltd",
    period: "Sep 2024 – May 2025",
    description: "Delivered custom software development for corporations with enterprise mobile app development and scalable tech solutions for SMEs through robust IT project delivery management.",
    skills: ["ERP Implementation", "Process Optimization", "Team Management"],
    color: "accent",
  },
  {
    icon: CheckCircle,
    title: "Project Manager",
    company: "QServices Inc.",
    period: "Jun 2022 – Aug 2024",
    description: "Established IT outsourcing partnerships with technology modernization services, delivering enterprise software implementation and business process automation solutions.",
    skills: ["Sprint Management", "Client Relations", "Tech Delivery"],
    color: "success",
  },
  {
    icon: Network,
    title: "Project Manager",
    company: "Madras Security Printers",
    period: "Aug 2021 – May 2022",
    description: "Coordinated comprehensive cross-departmental project efforts, ensuring seamless integration and delivery across multiple business units.",
    skills: ["Cross-functional", "Integration", "Coordination"],
    color: "purple",
  },
  {
    icon: Settings,
    title: "Operations Lead",
    company: "Tata Consultancy Services",
    period: "Dec 2014 – Feb 2021",
    description: "Delivered exceptional operational efficiency improvements, enhanced client engagement strategies, and established quality assurance frameworks that became organizational standards.",
    skills: ["Operations", "Quality Assurance", "Client Engagement"],
    color: "secondary",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary",
    cardBg: "bg-gradient-to-br from-primary/5 to-accent/5",
    text: "text-primary",
    badge: "bg-primary/10 text-primary",
  },
  accent: {
    bg: "bg-accent",
    cardBg: "bg-gradient-to-br from-accent/5 to-primary/5",
    text: "text-accent",
    badge: "bg-accent/10 text-accent",
  },
  success: {
    bg: "bg-green-600",
    cardBg: "bg-gradient-to-br from-green-50 to-accent/5",
    text: "text-green-600",
    badge: "bg-green-100 text-green-600",
  },
  purple: {
    bg: "bg-purple-600",
    cardBg: "bg-gradient-to-br from-purple-50 to-primary/5",
    text: "text-purple-600",
    badge: "bg-purple-100 text-purple-600",
  },
  secondary: {
    bg: "bg-secondary",
    cardBg: "bg-gradient-to-br from-gray-50 to-secondary/5",
    text: "text-secondary",
    badge: "bg-secondary/10 text-secondary",
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-8"
              >
                <div className={`hidden md:flex w-16 h-16 ${colorClasses[experience.color as keyof typeof colorClasses].bg} rounded-full items-center justify-center flex-shrink-0 relative z-10`}>
                  <experience.icon className="h-6 w-6 text-white" />
                </div>
                
                <Card className={`${colorClasses[experience.color as keyof typeof colorClasses].cardBg} flex-1 hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                        <p className={`font-medium ${colorClasses[experience.color as keyof typeof colorClasses].text}`}>
                          {experience.company}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-white text-gray-500 mt-2 lg:mt-0">
                        {experience.period}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{experience.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={colorClasses[experience.color as keyof typeof colorClasses].badge}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
