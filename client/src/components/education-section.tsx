import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Project Management Professional (PMP)",
    organization: "PMI Certified",
    color: "primary",
  },
  {
    title: "Certified Scrum Master",
    organization: "Agile Methodology",
    color: "accent",
  },
  {
    title: "Six Sigma Certified",
    organization: "Process Improvement",
    color: "success",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/5",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent/5",
    text: "text-accent",
  },
  success: {
    bg: "bg-success/5",
    text: "text-success",
  },
};

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Bachelor of Technology</h3>
                    <p className="text-secondary">Computer Engineering</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">University</span>
                    <span className="font-medium">Punjabi University</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">2010 – 2014</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Grade</span>
                    <span className="font-medium text-success">Grade A</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg mt-6 p-4 text-center">
                  <div className="text-sm text-gray-600 font-medium">Strong foundation in computer engineering principles and software development methodologies</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Professional Certifications</h3>
                    <p className="text-secondary">Industry-recognized credentials</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center p-4 ${colorClasses[cert.color as keyof typeof colorClasses].bg} rounded-lg`}
                    >
                      <CheckCircle className={`h-5 w-5 ${colorClasses[cert.color as keyof typeof colorClasses].text} mr-3 flex-shrink-0`} />
                      <div>
                        <div className="font-medium text-gray-900">{cert.title}</div>
                        <div className="text-sm text-gray-600">{cert.organization}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
