import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Cog, TrendingUp, Users, Bot } from "lucide-react";

const skills = [
  {
    icon: CheckCircle2,
    title: "Project Delivery & Agile",
    description: "Expert in Agile/Scrum methodologies, sprint planning, and delivery optimization.",
    percentage: 95,
    color: "primary",
  },
  {
    icon: Cog,
    title: "ERP & App Development",
    description: "Comprehensive experience in ERP implementations and modern application development.",
    percentage: 90,
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Risk & Budget Management",
    description: "Strategic planning and financial oversight ensuring project success within constraints.",
    percentage: 88,
    color: "success",
  },
  {
    icon: Users,
    title: "Client & Team Leadership",
    description: "Building high-performing teams and maintaining strong client relationships.",
    percentage: 92,
    color: "purple",
  },
  {
    icon: Bot,
    title: "Digital Strategy & Automation",
    description: "Leading digital transformation initiatives and AI/ML implementation strategies.",
    percentage: 85,
    color: "orange",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    bar: "bg-primary",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    bar: "bg-accent",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    bar: "bg-success",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    bar: "bg-purple-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    bar: "bg-orange-600",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${colorClasses[skill.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mb-6`}>
                    <skill.icon className={`h-8 w-8 ${colorClasses[skill.color as keyof typeof colorClasses].text}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.title}</h3>
                  <p className="text-gray-600 mb-6">{skill.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>{skill.title.split(' ')[0]}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${colorClasses[skill.color as keyof typeof colorClasses].bar}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
