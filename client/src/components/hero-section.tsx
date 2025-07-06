import { Button } from "@/components/ui/button";
import { IMAGES, SOCIAL_LINKS } from "@/lib/constants";
import { Linkedin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-primary/5 to-orange-400/5 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Data Scientist &
              <span className="gradient-text"> AI Engineer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Currently working with <strong>Wipro (client: Humana)</strong>, I build data-driven solutions on Azure Databricks with a passion for Artificial Intelligence and Generative AI. Outside of work, I'm a 2nd Dan Black Belt certified by Kukkiwon and a Cajon percussionist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactClick}
                className="bg-primary text-white hover:bg-primary/90"
                size="lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={handleProjectsClick}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                size="lg"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                asChild
                className="bg-orange-500 text-white hover:bg-orange-600"
                size="lg"
              >
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src={IMAGES.profilePicture} 
                alt="Karan Shah" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-500 rounded-2xl blur-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
