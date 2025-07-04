import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "deepingarg@gmail.com",
    subtitle: "Email",
    color: "primary",
    href: "mailto:deepingarg@gmail.com",
  },
  {
    icon: Linkedin,
    title: "linkedin.com/in/deepingarg",
    subtitle: "LinkedIn",
    color: "accent",
    href: "https://www.linkedin.com/in/deepingarg/",
  },
  {
    icon: Phone,
    title: "+91 98556 43356",
    subtitle: "Phone",
    color: "success",
    href: "tel:+919855643356",
  },
  {
    icon: MapPin,
    title: "Chandigarh, India",
    subtitle: "Location",
    color: "purple",
    href: null,
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
  },
  success: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
};

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:deepingarg@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Looking for digital transformation services for your enterprise? Let's discuss ERP implementation, AI/ML development solutions, and custom software development for your corporation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Available for IT outsourcing partnerships, enterprise technology consulting, and scalable tech solutions for SMEs. Let's explore how automation service providers can drive your business transformation.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className={`w-12 h-12 ${colorClasses[info.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mr-4`}>
                    <info.icon className={`h-5 w-5 ${colorClasses[info.color as keyof typeof colorClasses].text}`} />
                  </div>
                  <div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium text-gray-900 hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
                        aria-label={`${info.subtitle}: ${info.title}`}
                      >
                        {info.title}
                      </a>
                    ) : (
                      <div className="font-medium text-gray-900">{info.title}</div>
                    )}
                    <div className="text-sm text-gray-600">{info.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Contact</h4>
              <p className="text-gray-600 text-sm mb-4">Expert in digital transformation services • ERP implementation • AI/ML solutions</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:deepingarg@gmail.com" 
                  className="text-primary hover:text-primary/80 focus:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1 transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/deepingarg/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:text-accent/80 focus:text-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded p-1 transition-colors"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="tel:+919855643356" 
                  className="text-green-600 hover:text-green-500 focus:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded p-1 transition-colors"
                  aria-label="Call phone number"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project requirements..."
                      className="resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Submit contact form"
                  >
                    <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
