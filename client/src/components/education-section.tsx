import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/lib/constants";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic foundation in data science and computer engineering</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Syracuse University */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <img 
                  src={IMAGES.syracuseLogo} 
                  alt="Syracuse University Logo" 
                  className="w-16 h-16 object-contain mr-4" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Syracuse University</h3>
                  <p className="text-blue-600 font-semibold">School of Information Studies</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-lg font-semibold text-gray-800">M.S. Applied Data Science</p>
                  <p className="text-gray-600">Syracuse, NY</p>
                  <p className="text-gray-500">January 2023 - December 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* University of Mumbai */}
          <Card className="border-l-4 border-l-orange-500 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <img 
                  src={IMAGES.mumbaiLogo} 
                  alt="University of Mumbai Logo" 
                  className="w-16 h-16 object-contain mr-4" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">University of Mumbai</h3>
                  <p className="text-orange-600 font-semibold">Atharva College of Engineering</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-lg font-semibold text-gray-800">B.E. Computer Engineering</p>
                  <p className="text-gray-600">Mumbai, India</p>
                  <p className="text-gray-500">August 2018 - May 2022</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
