import { Link } from "wouter";
import { ExternalLink, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">Building data-driven solutions across industries</p>
        </div>
        <div className="space-y-8">
          {/* Current Position */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Data Scientist</h3>
                  <p className="text-lg text-blue-600 font-semibold">Wipro Ltd. - Client: Humana Inc.</p>
                </div>
                <div className="text-gray-600 md:text-right">
                  <p className="font-medium">Jan 2025 - Present</p>
                </div>
              </div>
              <p className="text-gray-600">Building data-driven solutions on Azure Databricks platform for healthcare analytics and AI implementations.</p>
            </CardContent>
          </Card>

          {/* Data & Technology Specialist */}
          <Card className="border-l-4 border-l-red-500 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Data & Technology Specialist</h3>
                  <p className="text-lg text-red-600 font-semibold">Office of Pre-College Programs, Syracuse University</p>
                </div>
                <div className="text-gray-600 md:text-right">
                  <p className="font-medium">Aug 2024 - Dec 2024</p>
                  <Link href="/roles/data-tech-specialist">
                    <button className="text-blue-500 hover:underline font-medium flex items-center gap-1">
                      Know More <ExternalLink className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed automated residential forecast system, saving 2 hours of daily manual processing</li>
                <li>Launched multilingual chatbot with 60 users, expecting 50% reduction in call volume</li>
                <li>Created interactive zip code map for targeted $100,000 email campaign</li>
              </ul>
              <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-600" />
                  <p className="text-amber-800 font-semibold">Achievement: Invited to weekly staff meetings and annual retreat - unique recognition for student employees</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Analysis Assistant */}
          <Card className="border-l-4 border-l-blue-600 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Data Analysis and Support Assistant</h3>
                  <p className="text-lg text-blue-600 font-semibold">Center for International Services, Syracuse University</p>
                </div>
                <div className="text-gray-600 md:text-right">
                  <p className="font-medium">July 2023 - Dec 2024</p>
                  <Link href="/roles/data-analyst">
                    <button className="text-blue-500 hover:underline font-medium flex items-center gap-1">
                      Know More <ExternalLink className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ensured data accuracy and compliance for over 4,000 international students</li>
                <li>Analyzed visitor management system data with over 18,000 rows</li>
                <li>Created dashboards visualizing travel signature modes for operational planning</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <p className="text-blue-800 font-semibold">Achievement: Nominated as Graduate Student Employee of the Year</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Summer Residential Intern</h4>
                <p className="text-red-600 font-semibold">Syracuse University</p>
                <p className="text-gray-600 text-sm">Feb 2024 - July 2024</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Co-Founder & Product Developer</h4>
                <p className="text-green-600 font-semibold">KV Digitalise</p>
                <p className="text-gray-600 text-sm">July 2020 - Nov 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
