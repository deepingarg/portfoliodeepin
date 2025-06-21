import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              Leading IT project delivery firm expertise with <strong>9+ years</strong> providing digital transformation services for enterprises. Specialized in ERP implementation, enterprise mobile app development, and AI/ML development solutions for businesses across various industries.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              As an automation service provider for enterprises, I deliver custom software development for corporations while ensuring scalable tech solutions for SMEs. My proven track record includes successful IT outsourcing partnerships and technology modernization projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-8 max-w-2xl mx-auto">
              <motion.div 
                className="text-center p-4 md:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 animate-pulse" role="text" aria-label="9 plus years experience">9+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 md:p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2 animate-pulse" role="text" aria-label="50 plus projects delivered">50+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Projects Delivered</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 md:p-6 bg-gradient-to-br from-green-100 to-green-50 rounded-lg border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2 animate-pulse" role="text" aria-label="100 plus team members led">100+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Team Members Led</div>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 shadow-sm">
                  PMP Certified
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all duration-200 shadow-sm">
                  Scrum Master
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-green-100 text-green-600 border-green-200 hover:bg-green-200 hover:scale-105 transition-all duration-200 shadow-sm">
                  Six Sigma
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
