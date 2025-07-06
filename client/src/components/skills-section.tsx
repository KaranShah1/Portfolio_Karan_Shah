import { Brain, Cloud, BarChart3, Bot, Code2, Database } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { icon: Code2, name: "Python", color: "text-green-500" },
    { icon: Brain, name: "Machine Learning", color: "text-blue-500" },
    { icon: Cloud, name: "Azure", color: "text-blue-600" },
    { icon: BarChart3, name: "Data Analysis", color: "text-purple-500" },
    { icon: Bot, name: "Generative AI", color: "text-green-600" },
    { icon: Database, name: "R", color: "text-red-500" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <IconComponent className={`h-8 w-8 mx-auto mb-3 ${skill.color}`} />
                <p className="font-semibold text-gray-900">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
