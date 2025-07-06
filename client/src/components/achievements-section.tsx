import { Music, Globe, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { IMAGES } from "@/lib/constants";

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beyond Work</h2>
          <p className="text-xl text-gray-600">Achievements and interests outside of technology</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Martial Arts */}
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 text-center shadow-lg">
            <CardContent className="p-8">
              <div className="relative mb-6">
                <img 
                  src={IMAGES.martialArts} 
                  alt="Second Dan Black Belt Achievement" 
                  className="w-full h-48 object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Second Dan Black Belt</h3>
              <p className="text-gray-600 mb-4">Certified by Kukkiwon (World Taekwondo Headquarters)</p>
              <div className="flex flex-col gap-3">
                <Badge className="bg-red-100 text-red-800">July 2022</Badge>
                <Link href="/achievements/taekwondo-black-belt">
                  <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
                    Know More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Music */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 text-center shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto">
                  <rect x="8" y="20" width="48" height="32" rx="4" fill="#8B5CF6" />
                  <rect x="12" y="24" width="40" height="24" rx="2" fill="#A855F7" />
                  <circle cx="32" cy="36" r="8" fill="#C084FC" />
                  <path d="M24 36 L40 36" stroke="#E879F9" strokeWidth="2" />
                  <path d="M28 32 L36 40" stroke="#E879F9" strokeWidth="2" />
                  <path d="M36 32 L28 40" stroke="#E879F9" strokeWidth="2" />
                  <rect x="6" y="18" width="4" height="36" rx="2" fill="#7C3AED" />
                  <rect x="54" y="18" width="4" height="36" rx="2" fill="#7C3AED" />
                  <path d="M16 16 Q32 12 48 16" stroke="#6D28D9" strokeWidth="2" fill="none" />
                  <path d="M16 56 Q32 60 48 56" stroke="#6D28D9" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cajon Percussionist</h3>
              <p className="text-gray-600 mb-4">Passionate about rhythm and percussion instruments, bringing creativity and artistic expression to complement analytical thinking.</p>
              <Link href="/achievements/cajon-percussionist">
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white">
                  Know More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 text-center shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto">
                  <circle cx="32" cy="32" r="28" fill="#3B82F6" />
                  <circle cx="32" cy="32" r="22" fill="#60A5FA" />
                  <circle cx="32" cy="32" r="16" fill="#93C5FD" />
                  <rect x="28" y="20" width="8" height="24" fill="#1E40AF" />
                  <rect x="20" y="28" width="24" height="8" fill="#1E40AF" />
                  <circle cx="20" cy="20" r="3" fill="#FCD34D" />
                  <circle cx="44" cy="20" r="3" fill="#FCD34D" />
                  <circle cx="44" cy="44" r="3" fill="#FCD34D" />
                  <circle cx="20" cy="44" r="3" fill="#FCD34D" />
                  <path d="M12 32 Q32 12 52 32 Q32 52 12 32" stroke="#1D4ED8" strokeWidth="2" fill="none" />
                  <text x="32" y="36" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AIESEC</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AIESEC Leadership</h3>
              <p className="text-gray-600 mb-4">Operations & International Relations Manager at AIESEC in Mumbai, fostering global connections and cross-cultural understanding.</p>
              <div className="flex flex-col gap-3">
                <Badge className="bg-blue-100 text-blue-800">2020-2021</Badge>
                <Link href="/achievements/aiesec-leadership">
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                    Know More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
