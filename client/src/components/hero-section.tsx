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
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
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
              Driving Digital Transformation | Project Management | Client Success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleScrollTo("#contact")}
                className="inline-flex items-center px-8 py-3 bg-primary text-white hover:bg-primary/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => handleScrollTo("#about")}
                className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <User className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Professional portrait"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
