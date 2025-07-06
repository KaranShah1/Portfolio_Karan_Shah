import { Link } from "wouter";
import { ArrowLeft, Music, Brain, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const CajonPercussionist = () => {
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
                <Badge className="bg-purple-500 text-white mb-4">Music & Arts</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Cajon Percussionist
                </h1>
                <p className="text-lg text-gray-600">
                  <strong>Passion:</strong> Rhythm, Percussion, and Musical Expression
                </p>
              </div>

              <div className="mb-8 text-center">
                <svg width="256" height="256" viewBox="0 0 256 256" className="mx-auto">
                  <rect x="32" y="80" width="192" height="128" rx="16" fill="#8B5CF6" />
                  <rect x="48" y="96" width="160" height="96" rx="8" fill="#A855F7" />
                  <circle cx="128" cy="144" r="32" fill="#C084FC" />
                  <path d="M96 144 L160 144" stroke="#E879F9" strokeWidth="8" />
                  <path d="M112 128 L144 160" stroke="#E879F9" strokeWidth="8" />
                  <path d="M144 128 L112 160" stroke="#E879F9" strokeWidth="8" />
                  <rect x="24" y="72" width="16" height="144" rx="8" fill="#7C3AED" />
                  <rect x="216" y="72" width="16" height="144" rx="8" fill="#7C3AED" />
                  <path d="M64 64 Q128 48 192 64" stroke="#6D28D9" strokeWidth="8" fill="none" />
                  <path d="M64 224 Q128 240 192 224" stroke="#6D28D9" strokeWidth="8" fill="none" />
                  <circle cx="80" cy="80" r="4" fill="#FCD34D" />
                  <circle cx="176" cy="80" r="4" fill="#FCD34D" />
                  <circle cx="80" cy="224" r="4" fill="#FCD34D" />
                  <circle cx="176" cy="224" r="4" fill="#FCD34D" />
                  <path d="M64 120 Q96 110 128 120 Q160 110 192 120" stroke="#FBBF24" strokeWidth="4" fill="none" />
                  <path d="M64 180 Q96 190 128 180 Q160 190 192 180" stroke="#FBBF24" strokeWidth="4" fill="none" />
                </svg>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Cajon</h2>
                <p className="text-gray-700 mb-6">
                  The cajon is a box-shaped percussion instrument originally from Peru, but now popular worldwide in various musical genres including flamenco, Latin, jazz, and contemporary music. This versatile instrument allows for a wide range of sounds and rhythmic expressions, making it a perfect complement to both solo and ensemble performances.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Musical Journey and Passion</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Music className="h-6 w-6 text-purple-500" />
                        <h3 className="font-bold text-gray-900">Rhythmic Foundation</h3>
                      </div>
                      <p className="text-gray-700">Deep understanding of various rhythm patterns from different cultures, including Afro-Cuban, Latin, and contemporary beats.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-pink-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Brain className="h-6 w-6 text-pink-500" />
                        <h3 className="font-bold text-gray-900">Creative Expression</h3>
                      </div>
                      <p className="text-gray-700">Using music as a creative outlet to balance analytical thinking with artistic expression and emotional release.</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills and Techniques</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Basic Techniques:</strong> Mastery of fundamental sounds including bass tones, slaps, and finger rolls</li>
                  <li><strong>Advanced Patterns:</strong> Complex polyrhythms and syncopated patterns across multiple genres</li>
                  <li><strong>Dynamic Control:</strong> Ability to vary intensity and volume for musical expression and accompaniment</li>
                  <li><strong>Improvisation:</strong> Spontaneous rhythm creation and adaptation to different musical contexts</li>
                  <li><strong>Genre Versatility:</strong> Adaptation to various musical styles including flamenco, rumba, Latin jazz, and modern fusion</li>
                  <li><strong>Ensemble Playing:</strong> Collaborative skills for playing with other musicians and maintaining groove</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Connection to Professional Development</h2>
                <p className="text-gray-700 mb-6">
                  Musical training, particularly in percussion, develops several skills that directly enhance professional capabilities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-purple-50 border border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Brain className="h-6 w-6 text-purple-600" />
                        <h3 className="font-bold text-purple-800">Cognitive Benefits</h3>
                      </div>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Enhanced pattern recognition</li>
                        <li>• Improved timing and coordination</li>
                        <li>• Strengthened memory and focus</li>
                        <li>• Developed multitasking abilities</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-pink-50 border border-pink-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="h-6 w-6 text-pink-600" />
                        <h3 className="font-bold text-pink-800">Emotional Intelligence</h3>
                      </div>
                      <ul className="text-pink-700 space-y-1 text-sm">
                        <li>• Stress relief and emotional regulation</li>
                        <li>• Creative problem-solving approach</li>
                        <li>• Enhanced self-expression</li>
                        <li>• Improved confidence and presentation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Musical Styles and Influences</h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Genre Exploration:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                        <h4 className="font-semibold text-gray-900">Flamenco</h4>
                      </div>
                      <p className="text-sm text-gray-600">Traditional Spanish rhythms</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                        <h4 className="font-semibold text-gray-900">Latin Jazz</h4>
                      </div>
                      <p className="text-sm text-gray-600">Complex syncopated patterns</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                        <h4 className="font-semibold text-gray-900">Contemporary</h4>
                      </div>
                      <p className="text-sm text-gray-600">Modern fusion styles</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                        <h4 className="font-semibold text-gray-900">World Music</h4>
                      </div>
                      <p className="text-sm text-gray-600">Global rhythmic traditions</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Balance with Technical Career</h2>
                <p className="text-gray-700 mb-6">
                  Music serves as the perfect counterbalance to a technical career in data science and AI. While analytical work engages the logical mind, percussion playing activates creativity, intuition, and emotional expression. This balance enhances overall cognitive function and prevents burnout by providing:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Mental Reset:</strong> Switching between analytical and creative modes refreshes cognitive resources</li>
                  <li><strong>Stress Relief:</strong> Physical expression through rhythm provides natural stress reduction</li>
                  <li><strong>Pattern Recognition:</strong> Musical patterns enhance mathematical and algorithmic thinking</li>
                  <li><strong>Presentation Skills:</strong> Performance experience improves confidence in professional presentations</li>
                  <li><strong>Cultural Awareness:</strong> Exposure to diverse musical traditions enhances global perspective</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Community and Collaboration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="h-6 w-6 text-blue-500" />
                        <h3 className="font-bold text-gray-900">Ensemble Experience</h3>
                      </div>
                      <p className="text-gray-700">Participating in musical groups and jam sessions, learning the importance of listening, timing, and collaborative creation.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="h-6 w-6 text-red-500" />
                        <h3 className="font-bold text-gray-900">Cultural Connection</h3>
                      </div>
                      <p className="text-gray-700">Connecting with diverse musical communities and appreciating the cultural roots of different rhythmic traditions.</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Musical Goals</h2>
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <ul className="list-disc list-inside text-purple-700 space-y-2">
                    <li>Exploring fusion of electronic music production with acoustic percussion</li>
                    <li>Learning complementary percussion instruments to expand rhythmic vocabulary</li>
                    <li>Participating in multicultural music collaborations and festivals</li>
                    <li>Using music as a medium for stress relief workshops in tech communities</li>
                    <li>Integrating rhythmic thinking into data science presentations and workshops</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-bold text-purple-800 mb-2">The Rhythm of Innovation</h3>
                  <p className="text-purple-700">
                    Just as data science seeks patterns in complex datasets, percussion explores patterns in rhythm and time. Both require precision, creativity, and the ability to find order within apparent chaos. This musical passion enriches my analytical work by providing a different lens through which to understand patterns, timing, and the beauty of mathematical relationships expressed through sound.
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

export default CajonPercussionist;