import { Link } from "wouter";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const VirtualStockExchange = () => {
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
                <Badge className="bg-blue-500 text-white mb-4">Finance</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Virtual Stock Exchange
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Course:</strong> FIN 654 Financial Analytics (Fall 2023)
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Instructor:</strong> Lai Xu
                </p>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Virtual Stock Exchange Dashboard" 
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-800">Achievement</h3>
                    <p className="text-amber-700">
                      Out of 71 participants, I was given $100,000 to trade from September 27, 2023, to December 1, 2023. By leveraging financial analysis and strategic decision-making, I was able to finish #1 in my class with an overall gain of $19,899.21 and a 19.90% return.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Goals</h2>
                <p className="text-gray-700 mb-6">
                  The aim of this project was to simulate real-world trading scenarios with a focus on maximizing returns through strategic investments in Exchange-Traded Funds (ETFs). Each participant was allocated $100,000 in virtual capital on the MarketWatch Virtual Stock Exchange platform. The primary objective was to increase profits by trading ETFs, utilizing R programming for financial analysis to inform trading strategies.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies and Tools Used</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>R:</strong> Employed for conducting financial analysis, building models, and generating actionable insights based on historical ETF data</li>
                  <li><strong>R-Studio:</strong> An integrated development environment (IDE) used for writing and executing R code for data analysis and portfolio performance monitoring</li>
                  <li><strong>MarketWatch Virtual Stock Exchange:</strong> The platform used to execute trades, simulate a virtual portfolio, and track real-time market fluctuations and portfolio performance</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Insights Influencing My Strategy</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Positive Trend in XLK:</strong> My portfolio experienced consistent growth, driven by the upward momentum in the technology sector</li>
                  <li><strong>Sector Focus:</strong> By concentrating my investments in the tech sector and periodically adjusting the number of shares based on available funds, I managed to achieve a significant return despite the potential risks associated with lack of diversification</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Contribution</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Initial Investment in XLK (Technology ETF):</strong> I initially bought 1,148 shares based on my analysis, which predicted strong growth in the tech sector. As profits accumulated, I reinvested, eventually increasing my holdings to 1,275 shares</li>
                  <li><strong>Modeling using the Single Index Model and Information Ratio:</strong> I developed a financial model for 11 ETFs, considering factors like Alpha (expected return over the risk-free rate) and Sigma (volatility). This model recommended diversification across XLK (Technology), XLV (Healthcare), and XLF (Finance). However, I took a calculated risk and concentrated my investments further into XLK, capitalizing on its continued growth</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Performance</h2>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Portfolio Performance Chart" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-700 mb-6">
                  <strong>Overall Trend:</strong> The performance of my portfolio followed a positive trajectory, with a steady increase in value from September 27, 2023, to December 1, 2023. This indicates strong and profitable performance for my chosen ETFs, particularly in the technology sector (XLK).
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Observations</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Positive Trajectory:</strong> The upward trend in the value of my ETF investment underscores the growth of the technology sector and the effectiveness of my strategy</li>
                  <li><strong>Minor Fluctuations:</strong> While there were minor dips due to market fluctuations, the overall trend remained favorable, demonstrating that short-term market movements did not significantly impact my long-term investment strategy</li>
                  <li><strong>Stable Growth:</strong> Despite these minor fluctuations, the steady upward trend signifies the success of my investment decisions within the specified timeframe</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Portfolio & Strategy</h2>
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Final Portfolio Holdings" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900">1. XLK Holdings:</h4>
                    <p className="text-gray-700">
                      • 1,275 shares (100% of my portfolio), valued at $236,563.50, with a 12.87% gain in value. XLK performed exceptionally well, which supported my decision to concentrate most of my funds in this ETF.
                    </p>
                    <p className="text-gray-700 mt-2">
                      My analysis originally recommended purchasing 1,208 shares, but due to financial constraints, I was able to buy 1,148 shares. As profits grew between October 30th and November 10th, I bought an additional 82 shares, ultimately surpassing my initial goal by purchasing a total of 1,275 shares.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">2. Riskier Strategy:</h4>
                    <p className="text-gray-700">
                      • Inspired by an article by Ricardo Fernandez, I deviated from the model's recommendation of diversification and opted to concentrate investments in XLK. I recognized the risks involved, especially related to beta (volatility), but I was confident in the sector's short-term growth potential. This move paid off, but I acknowledge that future results could vary depending on market conditions.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes Demonstrated</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold">1. Understanding of ETFs (Exchange-Traded Funds):</h4>
                    <p>ETFs are marketable securities that track a basket of assets like an index or sector. They are traded like stocks and offer diversification within a single security. This project enhanced my understanding of how ETFs operate, how to analyze their performance, and how they compare to individual stocks in terms of risk and return.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">2. Single Index Model and Information Ratio:</h4>
                    <p>I applied the Single Index Model to evaluate ETFs based on their risk and return relative to a market index. The model uses beta (sensitivity to market movements) and alpha (performance relative to the expected return) to suggest optimal investments.</p>
                    <p>The Information Ratio (IR) measures a portfolio manager's ability to generate excess returns relative to the risk taken. By using this ratio, I was able to identify ETFs that offered high returns for the level of risk involved.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">3. Risk Management and Diversification:</h4>
                    <p>While diversification is a fundamental principle of risk management, I chose a concentrated investment strategy. Although this heightened my risk exposure, I was able to manage it by continuously monitoring XLK's performance and adjusting my holdings based on market data.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">4. Sector Analysis and Strategic Investment:</h4>
                    <p>I learned how to analyze specific sectors (technology, healthcare, finance) and identify those with the strongest growth potential. The technology sector, represented by XLK, outperformed during this period, validating my strategy of concentrating my investments in this area.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">5. Portfolio Optimization using R:</h4>
                    <p>R was instrumental in performing time-series analysis, regression, and portfolio optimization. I built models to predict ETF performance, calculate risk metrics, and optimize my portfolio based on historical data.</p>
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

export default VirtualStockExchange;
