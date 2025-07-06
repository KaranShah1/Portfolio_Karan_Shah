import { Link } from "wouter";
import { ArrowLeft, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const GreenProsperity = () => {
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
                <Badge className="bg-green-600 text-white mb-4">Sustainability</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Dashboard on Green Prosperity: Is Sustainable Energy the Key to National Growth?
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Course:</strong> IST 737 Visual Analytics Dashboard (Spring 2024)
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Instructor:</strong> Prof. Raj Dewan
                </p>
              </div>

              <img 
                src="https://karanshah1.github.io/Portfolio/images/team_vad.JPG" 
                alt="Green Prosperity Team" 
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="text-lg font-bold text-green-800">Achievement</h3>
                    <p className="text-green-700">
                      Utilizing the dashboard to enhance our storytelling has proven to be incredibly valuable, and it was showcased at the school's poster day. This presentation reinforced the idea that a proficient data professional is, at their core, a skilled storyteller—a concept we truly experienced firsthand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Goals</h2>
                <p className="text-gray-700 mb-6">
                  The Green Prosperity initiative presents a comprehensive exploration of the global transition toward sustainable energy and its impact on national growth. Through a series of interconnected dashboards, this project delves into the intricate dynamics of renewable energy adoption, investment trends, and the economic ramifications of embracing green technologies. Each dashboard provides unique insights, ranging from global greenhouse gas emissions to renewable energy investment trends, culminating in a holistic understanding of the interplay between environmental sustainability and economic prosperity.
                </p>

                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Introduction Dashboard" 
                  className="w-full h-64 object-cover rounded-lg mb-8"
                />

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Visual Studio Code</li>
                  <li>Python Libraries & Frameworks</li>
                  <li>Jupyter Notebook</li>
                  <li>Tableau</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Actionable Insights</h2>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Global Greenhouse Gas Emissions: A Geographic Perspective</h3>
                <p className="text-gray-700 mb-6">
                  This dashboard provides a geographical overview of global greenhouse gas emissions, highlighting the predominant role of the power industry in contributing to emissions. It underscores the urgent need for accelerated efforts in carbon management and emphasizes the collective journey toward achieving net-zero emissions.
                </p>
                <img 
                  src="https://karanshah1.github.io/Portfolio/images/dashboard_1.jpg" 
                  alt="Global Greenhouse Gas Emissions Dashboard" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Navigating the Global Renewable Energy Landscape</h3>
                <p className="text-gray-700 mb-6">
                  Through this dashboard, users explore the worldwide shift towards renewable energy sources. It showcases the remarkable increase in renewable energy adoption since 2000 and examines the varying approaches taken by nations, with examples such as China, the United States, and Europe, offering insights into the challenges and opportunities in transitioning to cleaner energy sources.
                </p>
                <img 
                  src="https://karanshah1.github.io/Portfolio/images/dashboard_2.jpg" 
                  alt="Global Renewable Energy Landscape Dashboard" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Green Growth Portfolio: Tracking Worldwide Renewable Investments</h3>
                <p className="text-gray-700 mb-6">
                  This dashboard offers a detailed analysis of global renewable energy investment trends, highlighting the significant increase in investments in renewable technologies like solar, wind, and biofuels. It showcases regional disparities in investment distribution and emphasizes the growing commitment towards sustainable energy solutions worldwide.
                </p>
                <img 
                  src="https://karanshah1.github.io/Portfolio/images/dashboard_3.jpg" 
                  alt="Green Growth Portfolio Dashboard" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Harnessing Green Energy: Reshaping Economies</h3>
                <p className="text-gray-700 mb-6">
                  Focusing on the economic repercussions of embracing green technologies, this dashboard integrates Sustainable Development Goals (SDG) scores with renewable energy investment data. It illustrates the correlation between clean energy prioritization and economic growth, emphasizing how investments in renewable energy not only benefit the environment but also stimulate vibrant economies and job markets.
                </p>
                <img 
                  src="https://karanshah1.github.io/Portfolio/images/dashboard_4.jpg" 
                  alt="Harnessing Green Energy Dashboard" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Contribution</h2>
                <p className="text-gray-700 mb-6">
                  We divided the tasks among team members, with each person responsible for creating a dashboard. I developed the "Green Growth Portfolio" dashboard, which highlights the significant increase in investments in renewable technologies such as solar, wind, and biofuels.
                </p>
                <p className="text-gray-700 mb-6">
                  My specific contributions included:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Data collection and preprocessing for global renewable energy investment data</li>
                  <li>Design and development of interactive visualizations showcasing investment trends</li>
                  <li>Analysis of regional disparities in renewable energy investments</li>
                  <li>Integration of multiple data sources to create comprehensive investment insights</li>
                  <li>Collaboration with team members to ensure consistent storytelling across dashboards</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes Demonstrated</h2>
                <p className="text-gray-700 mb-6">
                  At one point, we faced challenges in finding relevant data to support our narrative. To overcome this, we sourced data from various platforms, cleaned it, merged it, and aligned it according to our storyline. This process required thorough analysis of each dataset and extensive exploratory data analysis before finalizing the dashboard.
                </p>
                <p className="text-gray-700 mb-6">
                  Key learning outcomes include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Data Integration Skills:</strong> Learned to combine datasets from multiple sources while maintaining data quality and consistency</li>
                  <li><strong>Visual Storytelling:</strong> Developed expertise in using data visualization to tell compelling stories about complex global issues</li>
                  <li><strong>Tableau Proficiency:</strong> Advanced skills in creating interactive dashboards with complex filtering and drill-down capabilities</li>
                  <li><strong>Exploratory Data Analysis:</strong> Enhanced ability to discover patterns and insights through systematic data exploration</li>
                  <li><strong>Team Collaboration:</strong> Experience working in multidisciplinary teams to create cohesive analytical products</li>
                  <li><strong>Domain Knowledge:</strong> Deep understanding of renewable energy markets, investment patterns, and sustainability metrics</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Challenges Overcome</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Data Quality Issues:</strong> Handled missing values, inconsistent formats, and varying data collection methodologies across different sources</li>
                  <li><strong>Scale Normalization:</strong> Addressed challenges in comparing investment data across countries with vastly different economic scales</li>
                  <li><strong>Temporal Alignment:</strong> Synchronized datasets with different time ranges and reporting frequencies</li>
                  <li><strong>Performance Optimization:</strong> Optimized dashboard performance to handle large datasets while maintaining interactivity</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact and Applications</h2>
                <p className="text-gray-700 mb-6">
                  The Green Prosperity dashboard series has practical applications for:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Policy Makers:</strong> Understanding global trends to inform national energy strategies</li>
                  <li><strong>Investors:</strong> Identifying opportunities in emerging renewable energy markets</li>
                  <li><strong>Researchers:</strong> Baseline data for further academic studies on energy transition</li>
                  <li><strong>Environmental Organizations:</strong> Evidence-based advocacy for sustainable energy policies</li>
                  <li><strong>Business Leaders:</strong> Strategic insights for corporate sustainability initiatives</li>
                </ul>

                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-2">Project Recognition</h3>
                  <p className="text-green-700">
                    This project was selected for presentation at the School of Information Studies Poster Day, where it received positive feedback from faculty and industry professionals for its comprehensive approach to analyzing the relationship between sustainable energy investments and economic growth.
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

export default GreenProsperity;
