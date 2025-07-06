import { useState } from "react";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SOCIAL_LINKS } from "@/lib/constants";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = async () => {
    try {
      const response = await fetch("/api/resume/download");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Karan_Shah_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "Resume downloaded!",
          description: "Thank you for your interest."
        });
      } else {
        throw new Error("Failed to download resume");
      }
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Please contact me directly for my resume.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-orange-400/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">Ready to discuss data science opportunities or collaborate on innovative projects?</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <Linkedin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Network</h3>
                  <Button asChild variant="link" className="text-blue-600 hover:underline">
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <Github className="h-8 w-8 text-gray-700 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Code & Projects</h3>
                  <Button asChild variant="link" className="text-blue-600 hover:underline">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                      GitHub Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Contact</h3>
                  <Button asChild variant="link" className="text-blue-600 hover:underline">
                    <a href={SOCIAL_LINKS.email}>
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                onClick={handleResumeDownload}
                className="bg-primary text-white hover:bg-primary/90"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />Download Resume
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                size="lg"
              >
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
