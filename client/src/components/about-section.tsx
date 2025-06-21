import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office environment"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              Experienced IT leader with <strong>9+ years</strong> in delivery, operations, and digital transformation. I specialize in Agile/Scrum methodologies, ERP implementations, Web/Mobile Development, and cutting-edge AI/ML solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I'm known for my ability to align technology initiatives with business goals while ensuring measurable results. My expertise spans across project delivery, risk management, and building high-performing teams that drive organizational success.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
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
