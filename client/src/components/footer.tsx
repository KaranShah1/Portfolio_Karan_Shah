import { Linkedin, Github } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Karan Shah</h3>
          <p className="text-gray-300">Data Scientist & AI Engineer</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400">&copy; 2025 Karan Shah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
