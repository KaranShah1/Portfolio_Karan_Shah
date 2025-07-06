import { Link } from "wouter";
import { ArrowLeft, Linkedin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const DataAnalyst = () => {
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
                <Badge className="bg-blue-500 text-white mb-4">Data Analysis</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Data Analysis and Support Assistant
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Center for International Services, Syracuse University</strong>
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Duration:</strong> July 2023 - December 2024
                </p>
              </div>

              <img 
                src="https://karanshah1.github.io/Portfolio/images/employee_of_the_year_nominee.jpg" 
                alt="Employee of the Year Nominee" 
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">Achievement</h3>
                    <p className="text-blue-700">
                      I was honored to be nominated as the Graduate Student Employee of the Year by my office.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Goals</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Implement comprehensive data cleaning and validation to ensure adherence to SEVIS requirements by meticulously reviewing and rectifying data points, such as U.S. phone numbers and addresses, for accuracy prior to transmission</li>
                  <li>Analyze visitor management system data and create dashboards for insightful reporting</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Advanced Excel</li>
                  <li>PeopleSoft</li>
                  <li>TerraDotta</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Contribution</h2>
                <p className="text-gray-700 mb-4">
                  Since July 2023, I have dedicated 10 hours each week to this role, reporting directly to the Functional Business Analyst and Designated School Officer (DSO). My responsibilities include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Ensuring data accuracy and compliance with government regulations for over 4,000 international students</li>
                  <li>Validating and cleaning data, creating batches for SEVIS submission by the DSO</li>
                  <li>Analyzing visitor management system data with over 18,000 rows</li>
                  <li>Creating dashboards that visualize various travel signature modes—such as Advisor on Call, express, and portal-based signatures—enhancing logistics and operational planning</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes Demonstrated</h2>
                <p className="text-gray-700 mb-6">
                  Working with international student data has deepened my focus on Data Integrity, Data Privacy, Data Compliance, and Data Confidentiality. The I-20 form, a vital document for international students, represents years of hard work and dedication toward their educational goals. Through understanding the process behind generating this document, I've gained insight into the full lifecycle of an international student at Syracuse University.
                </p>
                <p className="text-gray-700 mb-6">
                  This includes their initial matriculation (referred to as "Initial student"), status change upon arrival in the U.S. (updated to "active"), CPT and OPT filings, and "Post Completing/Graduated" status upon graduation. My role requires handling sensitive data, including SSNs. Notably, I identified a data safety issue and advocated for SSN masking, resulting in an update that strengthened data protection.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Accomplishments</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Data Security Enhancement:</strong> Identified and advocated for SSN masking implementation, improving data protection protocols</li>
                  <li><strong>Process Improvement:</strong> Streamlined data validation processes, reducing processing time by 25%</li>
                  <li><strong>Compliance Excellence:</strong> Maintained 100% accuracy rate in SEVIS data submissions over 18 months</li>
                  <li><strong>Dashboard Development:</strong> Created comprehensive analytics dashboards that improved operational decision-making</li>
                  <li><strong>Cross-functional Collaboration:</strong> Worked directly with DSO and business analysts to enhance system efficiency</li>
                </ul>

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
                        src="https://karanshah1.github.io/Portfolio/images/angelina_romano.jpeg" 
                        alt="Angelina Romano Stroup" 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Angelina Romano Stroup</h3>
                        <p className="text-gray-600 text-sm">Functional Business Analyst - Center for International Services Division of Enrollment and the Student Experience</p>
                      </div>
                    </div>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Karan is a brilliant young professional with a strong work ethic and a deep commitment to both his academic journey and job responsibilities. He demonstrates an unwavering passion for learning, a genuine care for others, and profound respect for all team members.
                      </p>
                      <p>
                        Karan embodies the qualities of not only a role model but a true leader. As an international graduate student working 20 hours on campus during the academic year, he exhibits an extraordinary ability to balance his academics and work without missing classes. This balance is a testament to his dependability and trustworthiness, earning the trust of his supervisors, colleagues, and peers.
                      </p>
                      <p>
                        His organizational and time management skills have been invaluable in supporting my work as a Functional Business Analyst, particularly after the implementation of a new system interfacing between the University's PeopleSoft (an Oracle product), Terra Dotta ISSS, and SEVIS, the government immigration system. Karan's analytical skills have been precise in validating data across these systems, and his expertise in developing various reports has enhanced our services and event planning each semester.
                      </p>
                      <p>
                        From Summer Residential Intern to Data & Technology Specialist, Karan has deepened his understanding of what it takes to successfully run our programs, and he has had the opportunity to leverage his knowledge, skills, expertise, and creativity to make a profoundly transformative impact on how we utilize technology to improve our processes and ultimately enhance the student experience and satisfaction of our programs. Karan is the only student employee I have invited to attend our weekly staff meetings and our all-staff annual retreat—an invitation extended in recognition of his unique contributions and integral role on our team.
                      </p>
                      <p>
                        Karan has immense potential. He is a brilliant diamond who will continue to shine, no matter where his professional and personal journey takes him.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-bold text-blue-800 mb-2">Data Compliance Excellence</h3>
                    <p className="text-blue-700">
                      Maintained perfect compliance record for government reporting requirements, handling sensitive data for over 4,000 international students with zero security incidents.
                    </p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="text-lg font-bold text-green-800 mb-2">Process Innovation</h3>
                    <p className="text-green-700">
                      Proactively identified and resolved data security vulnerabilities, leading to system-wide improvements that enhanced data protection protocols.
                    </p>
                  </div>
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

export default DataAnalyst;
