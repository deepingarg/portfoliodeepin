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
              Experienced IT leader with <strong>9+ years</strong> in delivery, operations, and digital transformation. I specialize in Agile/Scrum methodologies, ERP implementations, Web/Mobile Development, and cutting-edge AI/ML solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I excel at aligning technology initiatives with business objectives while ensuring measurable results. My expertise encompasses project delivery, risk management, and building high-performing teams that drive organizational success across diverse industries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-success/5 rounded-lg">
                <div className="text-3xl font-bold text-success mb-2">15+</div>
                <div className="text-sm text-gray-600">Teams Led</div>
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
