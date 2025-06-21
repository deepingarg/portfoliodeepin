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
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-green-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-green-600 bg-clip-text text-transparent mb-6">
              Deepin Garg
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 font-semibold mb-6 px-4 py-2 bg-white/60 rounded-lg backdrop-blur-sm border border-white/20">
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                aria-label="Navigate to contact section"
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
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
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold bg-white/80 backdrop-blur-sm"
                aria-label="Navigate to about section"
              >
                <User className="mr-2 h-5 w-5" aria-hidden="true" />
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
            <div className="bg-gradient-to-br from-primary/15 via-accent/10 to-green-100 rounded-2xl p-8 lg:p-12 w-full max-w-md mx-auto lg:max-w-full shadow-2xl border border-white/30 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary via-accent to-green-600 rounded-full mx-auto flex items-center justify-center shadow-lg ring-4 ring-white/30">
                  <span className="text-4xl font-bold text-white">DG</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ready to Transform Your Business?</h3>
                  <p className="text-gray-700 font-medium">Let's discuss your digital transformation goals and project requirements.</p>
                  <div className="flex flex-col space-y-3 text-sm">
                    <a href="mailto:deepingarg@gmail.com" className="flex items-center justify-center gap-2 px-4 py-2 bg-white/70 rounded-lg hover:bg-white/90 text-primary font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" aria-label="Send email to deepingarg@gmail.com">
                      <span className="text-lg">📧</span> deepingarg@gmail.com
                    </a>
                    <a href="tel:+919855643356" className="flex items-center justify-center gap-2 px-4 py-2 bg-white/70 rounded-lg hover:bg-white/90 text-accent font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2" aria-label="Call +91 98556 43356">
                      <span className="text-lg">📱</span> +91 98556 43356
                    </a>
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/70 rounded-lg text-green-600 font-semibold">
                      <span className="text-lg">📍</span> Chandigarh, India
                    </div>
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
