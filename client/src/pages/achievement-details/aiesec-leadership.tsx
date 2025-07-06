import { Link } from "wouter";
import { ArrowLeft, Globe, Users, Target, TrendingUp, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const AiesecLeadership = () => {
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
                <Badge className="bg-blue-500 text-white mb-4">Leadership & Global Impact</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  AIESEC Leadership Experience
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Role:</strong> Operations & International Relations Manager
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Organization:</strong> AIESEC in Mumbai, India
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Duration:</strong> August 2020 - July 2021
                </p>
              </div>

              <div className="mb-8 text-center">
                <svg width="256" height="256" viewBox="0 0 256 256" className="mx-auto">
                  <circle cx="128" cy="128" r="112" fill="#3B82F6" />
                  <circle cx="128" cy="128" r="88" fill="#60A5FA" />
                  <circle cx="128" cy="128" r="64" fill="#93C5FD" />
                  <rect x="112" y="80" width="32" height="96" fill="#1E40AF" />
                  <rect x="80" y="112" width="96" height="32" fill="#1E40AF" />
                  <circle cx="80" cy="80" r="12" fill="#FCD34D" />
                  <circle cx="176" cy="80" r="12" fill="#FCD34D" />
                  <circle cx="176" cy="176" r="12" fill="#FCD34D" />
                  <circle cx="80" cy="176" r="12" fill="#FCD34D" />
                  <path d="M48 128 Q128 48 208 128 Q128 208 48 128" stroke="#1D4ED8" strokeWidth="8" fill="none" />
                  <text x="128" y="136" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">AIESEC</text>
                  <circle cx="60" cy="60" r="8" fill="#10B981" />
                  <circle cx="196" cy="60" r="8" fill="#10B981" />
                  <circle cx="196" cy="196" r="8" fill="#10B981" />
                  <circle cx="60" cy="196" r="8" fill="#10B981" />
                  <circle cx="128" cy="40" r="6" fill="#EF4444" />
                  <circle cx="216" cy="128" r="6" fill="#EF4444" />
                  <circle cx="128" cy="216" r="6" fill="#EF4444" />
                  <circle cx="40" cy="128" r="6" fill="#EF4444" />
                </svg>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About AIESEC</h2>
                <p className="text-gray-700 mb-6">
                  AIESEC is the world's largest youth-led organization, present in over 120 countries and territories. It provides young people with leadership development opportunities, cross-cultural global internships, and volunteer experiences to develop leadership skills, international understanding, and social responsibility. AIESEC believes in youth leadership as a key driver for positive social change.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">AIESEC's Mission:</h3>
                  <p className="text-blue-700">
                    To activate leadership potential of youth around the world to create positive impact on society through cross-cultural understanding and developing leaders who are committed to making a difference.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Role and Responsibilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="h-6 w-6 text-blue-500" />
                        <h3 className="font-bold text-gray-900">Operations Management</h3>
                      </div>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Streamlined operational processes and workflows</li>
                        <li>• Coordinated team activities and project timelines</li>
                        <li>• Managed resource allocation and budget planning</li>
                        <li>• Implemented quality assurance protocols</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="h-6 w-6 text-green-500" />
                        <h3 className="font-bold text-gray-900">International Relations</h3>
                      </div>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Built partnerships with international AIESEC entities</li>
                        <li>• Facilitated cross-cultural exchange programs</li>
                        <li>• Managed communication with global stakeholders</li>
                        <li>• Coordinated international volunteer placements</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements and Impact</h2>
                <div className="space-y-6 mb-8">
                  <Card className="bg-green-50 border border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        <h3 className="font-bold text-green-800">Program Growth</h3>
                      </div>
                      <p className="text-green-700">
                        Successfully increased international exchange participant numbers by 35% through strategic partnership development and improved operational efficiency during the challenging COVID-19 period.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="h-6 w-6 text-blue-600" />
                        <h3 className="font-bold text-blue-800">Team Leadership</h3>
                      </div>
                      <p className="text-blue-700">
                        Led a diverse team of 15+ volunteers across different functional areas, providing mentorship, training, and support to develop their leadership capabilities and achieve organizational objectives.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-purple-50 border border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="h-6 w-6 text-purple-600" />
                        <h3 className="font-bold text-purple-800">Social Impact</h3>
                      </div>
                      <p className="text-purple-700">
                        Facilitated meaningful cultural exchanges that connected young people from India with opportunities in 25+ countries, promoting global understanding and personal development.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership Skills Developed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Strategic Planning</h4>
                    <p className="text-gray-600 text-sm">Developing long-term vision and actionable strategies for organizational growth</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Cross-Cultural Communication</h4>
                    <p className="text-gray-600 text-sm">Effective communication across diverse cultural backgrounds and contexts</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Project Management</h4>
                    <p className="text-gray-600 text-sm">Managing complex projects with multiple stakeholders and tight deadlines</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Conflict Resolution</h4>
                    <p className="text-gray-600 text-sm">Mediating disputes and finding win-win solutions in multicultural teams</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Digital Collaboration</h4>
                    <p className="text-gray-600 text-sm">Leading virtual teams and managing remote operations effectively</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Stakeholder Management</h4>
                    <p className="text-gray-600 text-sm">Building and maintaining relationships with diverse organizational partners</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Network and Impact</h2>
                <p className="text-gray-700 mb-6">
                  Through AIESEC, I became part of a global network of young leaders committed to making positive social impact. This experience provided exposure to different cultures, business practices, and social challenges from around the world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <p className="text-blue-800 font-semibold">Countries Connected</p>
                    <p className="text-blue-600 text-sm">International partnerships established</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                    <p className="text-green-800 font-semibold">Youth Impacted</p>
                    <p className="text-green-600 text-sm">Direct mentorship and guidance provided</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                    <p className="text-purple-800 font-semibold">Team Members</p>
                    <p className="text-purple-600 text-sm">Diverse volunteers led and developed</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges Overcome</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>COVID-19 Adaptation:</strong> Rapidly pivoted operations to virtual formats while maintaining engagement and program quality</li>
                  <li><strong>Cultural Sensitivity:</strong> Navigated complex cultural differences in international partnerships and team dynamics</li>
                  <li><strong>Resource Constraints:</strong> Maximized impact with limited budgets through creative solutions and volunteer mobilization</li>
                  <li><strong>Time Zone Coordination:</strong> Managed global team coordination across multiple time zones effectively</li>
                  <li><strong>Language Barriers:</strong> Facilitated communication between team members speaking different languages</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Application to Professional Career</h2>
                <p className="text-gray-700 mb-6">
                  The leadership experience at AIESEC has been instrumental in shaping my professional approach and capabilities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Data Science Applications</h3>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Stakeholder management for technical projects</li>
                        <li>• Cross-functional team collaboration</li>
                        <li>• Project planning and execution</li>
                        <li>• International perspective on data ethics</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Professional Leadership</h3>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Building trust in diverse teams</li>
                        <li>• Adapting communication styles</li>
                        <li>• Managing ambiguity and change</li>
                        <li>• Social impact orientation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuing Global Engagement</h2>
                <p className="text-gray-700 mb-6">
                  The AIESEC experience instilled a lifelong commitment to global citizenship and positive social impact. This perspective continues to influence my approach to technology and data science, ensuring that technical solutions consider broader social implications and cultural contexts.
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Leadership Philosophy</h3>
                  <p className="text-blue-700">
                    "Leadership is not about being in charge, but about empowering others to reach their potential while working together toward a common vision that creates positive impact." This philosophy, developed through AIESEC, continues to guide my approach in technical roles, emphasizing collaboration, mentorship, and the importance of diverse perspectives in solving complex problems.
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

export default AiesecLeadership;