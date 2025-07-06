import { Link } from "wouter";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const MovieRecommendation = () => {
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
                <Badge className="bg-purple-500 text-white mb-4">Entertainment</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  AI in Entertainment – Movie Recommendation using cosine similarity
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>B.E. Final Year Project</strong>
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Prof.</strong> Bhavna Arora
                </p>
              </div>

              <img 
                src="https://karanshah1.github.io/Portfolio/images/entertainment.jpg" 
                alt="AI Movie Recommendation System" 
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="text-lg font-bold text-purple-800">IEEE Publication</h3>
                    <p className="text-purple-700">
                      This project was published in the 2022 6th International Conference On Computing, Communication, Control And Automation (ICCUBEA).
                    </p>
                    <Button asChild className="mt-2" variant="outline">
                      <a href="https://ieeexplore.ieee.org/document/10010973" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Read IEEE Article
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
                <p className="text-gray-700 mb-6">
                  This age of information brings in a huge amount of data and combined with the number of options available on the internet, it becomes a huge problem in choosing a single thing. This is an example of the saying finding a needle in the haystack. The solution for that is using a magnet to attract the needle, the magnet in this case is a good recommendation system.
                </p>
                <p className="text-gray-700 mb-6">
                  A recommendation system is a tool that can help a user find the best option for the wide variety of options available. Nowadays every application we use is controlled by a recommendation system. Many platforms like Amazon Prime, Voot, ZEE5, which suggest movies, Zomato which suggests food, Spotify, Wynk, Hungama Music which suggests music, Airbnb, Trivago which suggests hotels and policy bazaar which recommends policy.
                </p>
                <p className="text-gray-700 mb-8">
                  In this project, we used Cosine similarity for a movie recommendation. Cosine similarity is a distance calculation metric that will tell us the distance between two items if the cosine of the angle between them is small it means that the items are close to each other and vice versa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-6">
                  In today's world, artificial intelligence is an integral part of the various industries as a whole. Especially during a pandemic where cinemas are closed and people working from home are doing something to calm down by watching movies or listening to music, these people are on the OTT platform. With the advent of Internet Service Providers, where on-demand streaming services offer almost unlimited content and deliver high-speed data at affordable prices the scenario has changed completely.
                </p>
                <p className="text-gray-700 mb-6">
                  These OTT services are catalogs of relevant content that provide endless topics for discussion. Now it has a big impact on our lifestyle. The impact of these services on our lives comes from subtle nuances, cultural references, and the cult of television shows and movies. Streaming services have evolved mainstream movies and televisions and brought their outfits to an ever-expanding user base.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem Statement</h2>
                <p className="text-gray-700 mb-6">
                  The exponential growth of digital content has created a paradox of choice for users. While streaming platforms offer thousands of movies and shows, users often struggle to find content that matches their preferences. This leads to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Decision fatigue from too many options</li>
                  <li>Time wasted browsing instead of watching</li>
                  <li>Reduced user satisfaction and engagement</li>
                  <li>Potential churn to competing platforms</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution: Cosine Similarity-Based Recommendation</h2>
                <p className="text-gray-700 mb-6">
                  Our approach leverages cosine similarity to measure the angle between vectors representing movie features. The system works by:
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Feature Extraction:</strong> Converting movie attributes (genre, cast, director, ratings) into numerical vectors</li>
                  <li><strong>Similarity Calculation:</strong> Computing cosine similarity between user preferences and available movies</li>
                  <li><strong>Ranking:</strong> Sorting recommendations based on similarity scores</li>
                  <li><strong>Filtering:</strong> Applying additional constraints like release year, rating thresholds</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cosine Similarity Formula</h3>
                <p className="text-gray-700 mb-4">
                  The cosine similarity between two vectors A and B is calculated as:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6 font-mono text-sm">
                  similarity = cos(θ) = (A · B) / (||A|| × ||B||)
                </div>
                <p className="text-gray-700 mb-6">
                  Where:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>A · B is the dot product of vectors A and B</li>
                  <li>||A|| and ||B|| are the magnitudes of vectors A and B</li>
                  <li>θ is the angle between the vectors</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Algorithm Steps</h3>
                <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                  <li>Preprocess movie data (genres, cast, directors, ratings)</li>
                  <li>Create user profile vector based on viewing history and ratings</li>
                  <li>Generate feature vectors for all movies in the database</li>
                  <li>Calculate cosine similarity between user profile and each movie</li>
                  <li>Sort movies by similarity score in descending order</li>
                  <li>Apply filters and return top N recommendations</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Content-Based Filtering:</strong> Recommendations based on movie characteristics rather than user behavior</li>
                  <li><strong>Scalability:</strong> Efficient computation allowing real-time recommendations</li>
                  <li><strong>Cold Start Solution:</strong> Can recommend movies to new users based on initial preferences</li>
                  <li><strong>Interpretability:</strong> Clear mathematical foundation for recommendation logic</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results and Impact</h2>
                <p className="text-gray-700 mb-6">
                  The implemented recommendation system demonstrated significant improvements in:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>User engagement metrics (increased watch time)</li>
                  <li>Recommendation accuracy compared to baseline methods</li>
                  <li>System performance with large datasets</li>
                  <li>User satisfaction scores in testing</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Enhancements</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Integration with collaborative filtering for hybrid recommendations</li>
                  <li>Deep learning approaches for better feature extraction</li>
                  <li>Real-time adaptation based on user feedback</li>
                  <li>Multi-modal recommendations including trailers and reviews</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
                <p className="text-gray-700 mb-6">
                  This project provided valuable experience in:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Machine learning algorithms and their practical applications</li>
                  <li>Data preprocessing and feature engineering techniques</li>
                  <li>System design for real-world recommendation scenarios</li>
                  <li>Performance optimization for large-scale data processing</li>
                  <li>Academic research and publication processes</li>
                </ul>

                <div className="mt-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-bold text-purple-800 mb-2">Publication Details</h3>
                  <p className="text-purple-700 mb-2">
                    <strong>Conference:</strong> 2022 6th International Conference On Computing, Communication, Control And Automation (ICCUBEA)
                  </p>
                  <p className="text-purple-700 mb-2">
                    <strong>Date:</strong> 26-27 August 2022
                  </p>
                  <p className="text-purple-700 mb-2">
                    <strong>Location:</strong> Pune, India
                  </p>
                  <p className="text-purple-700">
                    <strong>DOI:</strong> 10.1109/ICCUBEA54992.2022.10010973
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

export default MovieRecommendation;
