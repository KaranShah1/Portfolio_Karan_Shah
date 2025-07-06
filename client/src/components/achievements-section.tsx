import { Music, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
              <Badge className="bg-red-100 text-red-800">July 2022</Badge>
            </CardContent>
          </Card>

          {/* Music */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 text-center shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <Music className="h-16 w-16 text-purple-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cajon Percussionist</h3>
              <p className="text-gray-600">Passionate about rhythm and percussion instruments, bringing creativity and artistic expression to complement analytical thinking.</p>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 text-center shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <Globe className="h-16 w-16 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AIESEC Leadership</h3>
              <p className="text-gray-600 mb-4">Operations & International Relations Manager at AIESEC in Mumbai, fostering global connections and cross-cultural understanding.</p>
              <Badge className="bg-blue-100 text-blue-800">2020-2021</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
