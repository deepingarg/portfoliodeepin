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
              <div className="text-center p-4 md:p-6 bg-primary/5 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2" role="text" aria-label="9 plus years experience">9+</div>
                <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-accent/5 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2" role="text" aria-label="50 plus projects delivered">50+</div>
                <div className="text-xs md:text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-success/5 rounded-lg sm:col-span-2 lg:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-success mb-2" role="text" aria-label="15 plus teams led">15+</div>
                <div className="text-xs md:text-sm text-gray-600">Teams Led</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                PMP Certified
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                Scrum Master
              </Badge>
              <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                Six Sigma
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
