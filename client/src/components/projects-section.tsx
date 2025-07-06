import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Award, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IMAGES } from "@/lib/constants";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "gestational-diabetes",
      title: "Early Intervention for Gestational Diabetes Prediction using ML",
      description: "Developed AI/ML-based prognostic method for gestational diabetes risk stratification using various health parameters.",
      image: IMAGES.healthcareProject,
      category: "healthcare",
      tags: ["Machine Learning", "Python", "Risk Stratification"],
      course: "Course: IST 707 Applied Machine Learning (Fall 2023)",
      instructor: "Instructor: Prof. Joshua Introne",
      achievement: null,
      link: "/projects/gestational-diabetes",
      externalLink: "https://github.com/KaranShah1/fetal-life-gestational-diabetes-prediction/blob/main/narrative.md"
    },
    {
      id: "virtual-stock-exchange",
      title: "Virtual Stock Exchange",
      description: "Achieved #1 ranking with 19.90% return ($19,899.21 gain) using strategic ETF investments and financial modeling.",
      image: IMAGES.financeProject,
      category: "finance",
      tags: ["R Programming", "Financial Analysis", "ETF Trading"],
      course: "Course: FIN 654 Financial Analytics (Fall 2023)",
      instructor: "Instructor: Lai Xu",
      achievement: "#1 out of 71 participants - 19.90% return",
      link: "/projects/virtual-stock-exchange"
    },
    {
      id: "movie-recommendation",
      title: "AI in Entertainment: Movie Recommendation",
      description: "Developed recommendation system using cosine similarity to solve the 'needle in haystack' problem for content discovery.",
      image: IMAGES.entertainmentProject,
      category: "entertainment",
      tags: ["Cosine Similarity", "Recommendation Systems", "AI"],
      course: "B.E. Final Year Project",
      instructor: "Prof. Bhavna Arora",
      achievement: "Published in IEEE Conference",
      link: "/projects/movie-recommendation",
      externalLink: "https://ieeexplore.ieee.org/document/10010973"
    },
    {
      id: "green-prosperity",
      title: "Dashboard on Green Prosperity",
      description: "Comprehensive exploration of sustainable energy transition and its impact on national growth through interconnected dashboards.",
      image: IMAGES.sustainabilityProject,
      category: "sustainability",
      tags: ["Tableau", "Data Visualization", "Python"],
      course: "Course: IST 737 Visual Analytics Dashboard (Spring 2024)",
      instructor: "Instructor: Prof. Raj Dewan",
      achievement: "Showcased at School's Poster Day",
      link: "/projects/green-prosperity"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", color: "gray" },
    { id: "healthcare", label: "Healthcare", color: "green" },
    { id: "finance", label: "Finance", color: "blue" },
    { id: "entertainment", label: "Entertainment", color: "purple" },
    { id: "sustainability", label: "Sustainability", color: "green" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getIndustryColor = (category: string) => {
    const colors = {
      healthcare: "text-green-600 border-green-600 hover:bg-green-600",
      finance: "text-blue-600 border-blue-600 hover:bg-blue-600",
      entertainment: "text-purple-600 border-purple-600 hover:bg-purple-600",
      sustainability: "text-green-600 border-green-600 hover:bg-green-600",
      education: "text-red-600 border-red-600 hover:bg-red-600"
    };
    return colors[category as keyof typeof colors] || "text-gray-600 border-gray-600 hover:bg-gray-600";
  };

  const getIndustryBadgeColor = (category: string) => {
    const colors = {
      healthcare: "bg-green-500",
      finance: "bg-blue-500",
      entertainment: "bg-purple-500",
      sustainability: "bg-green-600",
      education: "bg-red-500"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Diverse portfolio showcasing AI, ML, and data science applications</p>
        </div>
        
        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border-2 transition-colors ${
                activeFilter === filter.id 
                  ? "bg-primary text-white border-primary" 
                  : getIndustryColor(filter.id)
              } hover:text-white`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getIndustryBadgeColor(project.category)} text-white`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className={`text-xs font-medium`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.achievement && (
                  <div className={`p-3 rounded-lg mb-4 ${
                    project.category === 'finance' ? 'bg-amber-50 border border-amber-200' :
                    project.category === 'entertainment' ? 'bg-purple-50 border border-purple-200' :
                    'bg-green-50 border border-green-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Award className={`h-5 w-5 ${
                        project.category === 'finance' ? 'text-amber-600' :
                        project.category === 'entertainment' ? 'text-purple-600' :
                        'text-green-600'
                      }`} />
                      <p className={`font-semibold text-sm ${
                        project.category === 'finance' ? 'text-amber-800' :
                        project.category === 'entertainment' ? 'text-purple-800' :
                        'text-green-800'
                      }`}>
                        {project.achievement.includes('IEEE') ? '📄' : '🏆'} {project.achievement}
                      </p>
                    </div>
                  </div>
                )}
                <p className="text-sm text-gray-500 mb-4">{project.course}</p>
                <div className="flex gap-2">
                  <Link href={project.link}>
                    <Button className={`inline-flex items-center ${getIndustryColor(project.category)} hover:text-white`} variant="outline">
                      Know More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  {project.externalLink && (
                    <Button asChild variant="outline" className="inline-flex items-center">
                      <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        {project.externalLink.includes('ieee') ? 'IEEE Article' : 'GitHub'}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
