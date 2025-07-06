import { Link } from "wouter";
import { ArrowLeft, Award, Target, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const TaekwondoBlackBelt = () => {
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
                <Badge className="bg-red-500 text-white mb-4">Martial Arts</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Second Dan Black Belt in Taekwondo
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Certified by:</strong> Kukkiwon (World Taekwondo Headquarters)
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Achievement Date:</strong> July 2022
                </p>
              </div>

              <img 
                src="https://karanshah1.github.io/Portfolio/images/Martial%20Arts.jpg" 
                alt="Second Dan Black Belt Achievement" 
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievement Overview</h2>
                <p className="text-gray-700 mb-6">
                  Earning a Second Dan Black Belt from Kukkiwon, the World Taekwondo Headquarters, represents years of dedicated training, discipline, and mastery of traditional Korean martial arts. This achievement demonstrates not only physical prowess but also mental fortitude, leadership capabilities, and a deep understanding of martial arts philosophy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Journey to Black Belt</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="h-6 w-6 text-red-500" />
                        <h3 className="font-bold text-gray-900">Training Duration</h3>
                      </div>
                      <p className="text-gray-700">Over 8 years of consistent training, progressing through colored belt ranks with dedication and perseverance.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="h-6 w-6 text-orange-500" />
                        <h3 className="font-bold text-gray-900">Technical Mastery</h3>
                      </div>
                      <p className="text-gray-700">Proficiency in advanced forms (poomsae), sparring techniques, breaking demonstrations, and self-defense applications.</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills and Competencies Developed</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Physical Conditioning:</strong> Enhanced flexibility, strength, balance, and cardiovascular endurance through rigorous training</li>
                  <li><strong>Mental Discipline:</strong> Developed focus, concentration, and the ability to remain calm under pressure</li>
                  <li><strong>Leadership:</strong> Mentored junior students and assisted in teaching classes, developing communication and guidance skills</li>
                  <li><strong>Self-Defense:</strong> Mastered practical self-defense techniques and situational awareness</li>
                  <li><strong>Cultural Understanding:</strong> Deep appreciation for Korean culture, traditions, and martial arts philosophy</li>
                  <li><strong>Goal Setting:</strong> Experience in setting long-term objectives and working systematically to achieve them</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Requirements for Second Dan</h2>
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Demonstration Proficiency:</h3>
                  <ul className="list-disc list-inside text-red-700 space-y-2">
                    <li>Advanced poomsae (forms) including Koryo and Keumgang</li>
                    <li>One-step sparring with multiple attack scenarios</li>
                    <li>Free sparring demonstrating control and technique</li>
                    <li>Breaking techniques using hands and feet</li>
                    <li>Self-defense applications and counters</li>
                    <li>Teaching demonstration to junior students</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Philosophy and Values</h2>
                <p className="text-gray-700 mb-6">
                  Taekwondo is built on five tenets that guide both training and daily life:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Courtesy (예의)</h4>
                    <p className="text-gray-600 text-sm">Respect for others, humility, and proper etiquette</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Integrity (염치)</h4>
                    <p className="text-gray-600 text-sm">Honesty, moral principles, and doing what is right</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Perseverance (인내)</h4>
                    <p className="text-gray-600 text-sm">Persistence in the face of challenges and setbacks</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Self-Control (극기)</h4>
                    <p className="text-gray-600 text-sm">Mastery over emotions and disciplined behavior</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Indomitable Spirit (백절불굴)</h4>
                    <p className="text-gray-600 text-sm">Courage and determination to overcome obstacles</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Application to Professional Life</h2>
                <p className="text-gray-700 mb-6">
                  The discipline and principles learned through Taekwondo training directly translate to professional and academic pursuits:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Problem-Solving:</strong> Breaking down complex challenges into manageable components</li>
                  <li><strong>Stress Management:</strong> Maintaining composure and clear thinking under pressure</li>
                  <li><strong>Continuous Learning:</strong> Embracing the mindset of constant improvement and skill development</li>
                  <li><strong>Leadership:</strong> Leading by example and mentoring others in their growth journey</li>
                  <li><strong>Resilience:</strong> Bouncing back from failures and setbacks with renewed determination</li>
                </ul>

                <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Kukkiwon Certification</h3>
                  <p className="text-red-700">
                    The Kukkiwon certification is the highest standard for Taekwondo black belt ranking, recognized globally as the official certification from the birthplace of Taekwondo. This achievement represents not only personal accomplishment but also entry into a worldwide community of martial artists committed to excellence and continuous growth.
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

export default TaekwondoBlackBelt;