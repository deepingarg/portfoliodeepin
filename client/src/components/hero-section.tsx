import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, User } from "lucide-react";

export default function HeroSection() {
  const handleScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Deepin Garg
            </h1>
            <p className="text-xl lg:text-2xl text-secondary font-medium mb-6">
              Vice President – Delivery, CrossML Pvt Ltd
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Expert in digital transformation services for enterprises, ERP implementation, AI/ML development solutions, and custom software development for corporations. Delivering scalable tech solutions that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleScrollTo("#contact")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleScrollTo("#contact");
                  }
                }}
                className="inline-flex items-center px-8 py-3 bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Navigate to contact section"
              >
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => handleScrollTo("#about")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleScrollTo("#about");
                  }
                }}
                className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Navigate to about section"
              >
                <User className="mr-2 h-4 w-4" aria-hidden="true" />
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 w-full max-w-md mx-auto lg:max-w-full shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">DG</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Ready to Transform Your Business?</h3>
                  <p className="text-gray-600">Let's discuss your digital transformation goals and project requirements.</p>
                  <div className="flex flex-col space-y-2 text-sm text-gray-500">
                    <a href="mailto:deepingarg@gmail.com" className="hover:text-primary transition-colors focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1" aria-label="Send email to deepingarg@gmail.com">
                      📧 deepingarg@gmail.com
                    </a>
                    <a href="tel:+919855643356" className="hover:text-primary transition-colors focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1" aria-label="Call +91 98556 43356">
                      📱 +91 98556 43356
                    </a>
                    <span>📍 Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
