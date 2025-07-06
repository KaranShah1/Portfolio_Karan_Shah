import { Link } from "wouter";
import { ArrowLeft, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const DataTechSpecialist = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge className="bg-red-500 text-white mb-4">Education Technology</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Data & Technology Specialist
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Office of Pre-College Programs, Syracuse University</strong>
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Duration:</strong> August 2024 - December 2024
                </p>
              </div>

              <img 
                src="https://karanshah1.github.io/Portfolio/images/Data_tech_Specialist.jpg" 
                alt="Data and Technology Specialist Role" 
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Goals</h2>
                <p className="text-gray-700 mb-6">
                  After two summers with the department, my goal was to enhance the summer college experience by identifying and addressing technological gaps to contribute to smoother program operations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Python (folium)</li>
                  <li>Retrieval-Augmented Generation (RAG)</li>
                  <li>Large Language Models</li>
                  <li>Prompt Engineering</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Visual Studio Code</li>
                  <li>Python Libraries</li>
                  <li>Jupyter Notebook</li>
                  <li>Clustering</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Contribution</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Collaborated with directors to streamline decision-making by identifying critical data needs, which led to the development of an automated residential forecast system, saving 2 hours of daily manual processing.</li>
                  <li>Launched a multilingual chatbot with Generative AI capabilities to improve communication within the pre-college office for SRCs and Interns (SRIs). This chatbot centralizes resources, allowing SRCs to access training documents and resolve common issues directly. With this pilot solution involving 60 users, we expect a 50% reduction in call volume, significantly enhancing operational efficiency.</li>
                  <li>Created an interactive zip code map for the 2024 Summer College application, which was used to identify zip codes for a targeted $100,000 email campaign focused on high-income households.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes Demonstrated</h2>
                <p className="text-gray-700 mb-6">
                  This role presented new challenges and required me to independently problem-solve using available documentation. I strengthened my understanding of aligning technical solutions with business needs and developed effective, resourceful solutions. This experience allowed me to apply classroom knowledge to real world problems, effectively bridging academic learning with practical application.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn Recommendations</h2>
                <div className="flex items-center gap-2 mb-6">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                  <Button asChild variant="link" className="text-blue-600 hover:underline p-0">
                    <a href="https://www.linkedin.com/in/karansaurabhshah/" target="_blank" rel="noopener noreferrer">
                      VIEW LINKEDIN PROFILE
                    </a>
                  </Button>
                </div>

                <Card className="mb-6 border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src="https://karanshah1.github.io/Portfolio/images/chris_cofer.jpeg" 
                        alt="Christopher Cofer" 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Christopher Cofer</h3>
                        <p className="text-gray-600 text-sm">Executive Director, Office of Pre-College Programs at Syracuse University - College of Professional Studies</p>
                        <p className="text-gray-500 text-xs">November 2</p>
                      </div>
                    </div>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        As the Exec. Dir. of the Office of Pre-College Programs, and previously the Exec. Dir. of Summer & Winter Sessions at Syracuse University (SU) for the last 17 years, I have had the pleasure of employing many SU undergraduate and grad students in a variety of capacities. When I state that Karan's significant contributions and positive impact on our team and operations have far exceeded those of any previous student employee, I am doing so with utmost confidence.
                      </p>
                      <p>
                        In January 2024, we found an opportunity to bring Karan back to our office to assist in the planning and preparation for Summer College 2024. Prior to the program's start in July, Karan applied his data science skills to build an automated residential forecast model. During the program, Karan was instrumental in supporting the management of all aspects of student affairs, student activities, and residence life for the Summer College – On Campus experience, supporting close to 1,000 students from 37 U.S. states and 24 countries.
                      </p>
                      <p>
                        Karan is the only student employee we have retained on staff following the conclusion of our annual Summer College program. Since August, he has been revolutionizing our systems and processes by leveraging his expertise in technology-driven improvements as a Data & Technology Specialist for our office. One noteworthy project includes Karan's development and launch of an internal multilingual staff chatbot, which has been nothing short of revolutionary for our office. Another significant project he spearheaded was an interactive zip code map of all Summer College applicants from the last three years. This tool has positioned us to more accurately target paid email campaigns and social media marketing towards high-income households, potentially saving us tens of thousands in unnecessary spending over the next few years.
                      </p>
                      <p>
                        From Summer Residential Intern to Data & Technology Specialist, Karan has deepened his understanding of what it takes to successfully run our programs, and he has had the opportunity to leverage his knowledge, skills, expertise, and creativity to make a profoundly transformative impact on how we utilize technology to improve our processes and ultimately enhance the student experience and satisfaction of our programs. Karan is the only student employee I have invited to attend our weekly staff meetings and our all-staff annual retreat—an invitation extended in recognition of his unique contributions and integral role on our team.
                      </p>
                      <p>
                        Karan is an extremely valuable member of our team, and I will miss him dearly when he moves on. Yes, I will miss him for his overwhelming contributions to our collective work, but even more so, I will miss him for his professionalism, work ethic, kindness, and simply for being himself. He is an absolute pleasure to work with daily. I am confident Karan will be an exceptional addition to any company or organization fortunate enough to hire him, and I believe it would be a mistake to overlook Karan for another candidate.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-bold text-amber-800 mb-2">Unique Recognition</h3>
                  <p className="text-amber-700">
                    I was the only student employee invited to attend weekly staff meetings and the all-staff annual retreat - a unique recognition that highlighted my integral role on the team and the significant impact of my contributions to the organization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataTechSpecialist;
