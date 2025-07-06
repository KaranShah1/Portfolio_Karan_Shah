import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const GestationalDiabetes = () => {
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
                <Badge className="bg-green-500 text-white mb-4">Healthcare</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Early Intervention for Gestational Diabetes Prediction using ML
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Course:</strong> IST 707 Applied Machine Learning (Fall 2023)
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Instructor:</strong> Prof. Joshua Introne
                </p>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1289&q=80" 
                alt="Gestational Diabetes ML Project" 
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-6">
                  For the Machine Learning Project, we have collaborated with Fetal Life, a Kentucky-based startup dedicated to advancing healthcare solutions. Currently, the conventional practice involves physicians assessing gestational diabetes in pregnant women around week 20 of their pregnancy. Unfortunately, by this point, the diagnosis is already confirmed, with no chance of reversal. In response to this challenge, Fetal Life is actively engaged in developing an AI/ML-based prognostic method for gestational diabetes, specifically emphasizing risk stratification.
                </p>
                <p className="text-gray-700 mb-6">
                  The proposed algorithm takes into account various parameters, including age, socioeconomic status, prior perinatal health conditions, current and past health conditions, Medicaid claims data, and more. The objective is to identify pregnant women at a heightened risk for gestational diabetes, with notable indicators such as rapid or unusual weight gain during the first or early second trimesters. Subsequently, the AI/ML model will execute risk stratification and scoring.
                </p>
                <p className="text-gray-700 mb-8">
                  This innovative approach enables early intervention and targeted care for women at an elevated risk for gestational diabetes before an official diagnosis is made. The ultimate aim is to prevent the onset of gestational diabetes, thereby improving the overall prognosis.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Methodology</h2>
                <p className="text-gray-700 mb-6">
                  In the initial phase of our study, we delved into the Fetal Life Dataset, comprising 26 sheets and 60827 rows. After isolating the pertinent 16 columns for our analysis, we encountered a significant imbalance in the data, with 60795 instances (99.95%) classified as False and only 31 instances (0.05%) as True. Consequently, recognizing the need for a more balanced dataset, we transitioned to a similar dataset available on Kaggle.
                </p>
                <p className="text-gray-700 mb-8">
                  The Kaggle dataset, with its 3526 rows, proved to be an ideal alternative for our research. Additionally, this dataset featured several overlapping columns with our original selection. To optimize our approach, we adopted a collaborative strategy wherein each team member explored different methods, fostering subsequent discussions and mutual learning.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">2.1 Dataset</h3>
                <p className="text-gray-700 mb-6">
                  Due to the problems presented in the Fetal Life dataset, we opted for using the publicly available GDM Data Set. This dataset comprises 3,525 cases, with 17 features including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Case Number:</strong> Unique identifier for each patient in the study</li>
                  <li><strong>Age:</strong> The age of the patient at the time of the study</li>
                  <li><strong>No of Pregnancy:</strong> Total number of times the patient has been pregnant</li>
                  <li><strong>BMI:</strong> Body Mass Index, a measure of body fat based on height and weight</li>
                  <li><strong>HDL:</strong> High-Density Lipoprotein cholesterol levels, often referred to as "good" cholesterol</li>
                  <li><strong>Family History:</strong> Presence of gestational diabetes in the patient's family history</li>
                  <li><strong>PCOS:</strong> Indicates whether the patient has Polycystic Ovary Syndrome</li>
                  <li><strong>OGTT:</strong> Oral Glucose Tolerance Test results, a test for gestational diabetes</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">2.2 Classification Models</h3>
                <p className="text-gray-700 mb-6">
                  To identify the most effective models, we initially ran several machine learning algorithms without hyperparameter tuning. The outcomes showed that Decision Tree, RBF Support Vector Machines, and K Nearest Neighbors performed best with F1-scores around 0.97.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">2.3 Neural Network Architecture</h3>
                <p className="text-gray-700 mb-6">
                  The neural network's architecture is anchored by an autoencoder recognized for its prowess in feature extraction. The model includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Input Layer:</strong> Accepts scaled and imputed data</li>
                  <li><strong>Dense Layers:</strong> Employs ReLU activation to unravel complex patterns</li>
                  <li><strong>Bottleneck Feature:</strong> Focuses on key features, enhancing predictive accuracy</li>
                  <li><strong>Output Neuron:</strong> Utilizes sigmoid activation to calculate gestational diabetes likelihood</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes Demonstrated</h2>
                <p className="text-gray-700 mb-6">
                  This project enhanced my understanding of machine learning applications in healthcare, particularly in predictive modeling for early intervention. I gained experience with:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Handling imbalanced datasets and data preprocessing techniques</li>
                  <li>Implementing ensemble methods for improved prediction accuracy</li>
                  <li>Neural network architecture design for medical prediction</li>
                  <li>Cross-validation and hyperparameter tuning strategies</li>
                  <li>Healthcare data ethics and patient privacy considerations</li>
                </ul>

                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-2">Key Achievement</h3>
                  <p className="text-green-700">
                    Successfully developed a machine learning model achieving ~97% accuracy for early gestational diabetes prediction, enabling healthcare providers to intervene before traditional diagnosis timeframes.
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

export default GestationalDiabetes;
