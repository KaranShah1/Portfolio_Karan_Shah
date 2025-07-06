import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you might want to send an email notification here
      // For now, we'll just log it
      console.log(`New contact message from ${message.name} (${message.email}): ${message.message}`);
      
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully",
        id: message.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      // In a real application, you would have an actual resume file
      // For this implementation, we'll create a simple text-based resume
      const resumeContent = generateResumeContent();
      
      // Set headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Karan_Shah_Resume.pdf"');
      
      // For a real implementation, you would serve an actual PDF file
      // Here we'll send a text response indicating the resume would be downloaded
      res.status(200).send(resumeContent);
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to download resume" 
      });
    }
  });

  // Get contact messages endpoint (for admin purposes)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateResumeContent(): string {
  return `
KARAN SHAH
Data Scientist & AI Engineer

Contact Information:
Email: contact@karanshah.dev
LinkedIn: https://www.linkedin.com/in/karansaurabhshah/
GitHub: https://github.com/KaranShah1

PROFESSIONAL EXPERIENCE:

Data Scientist | Wipro Ltd. - Client: Humana Inc. | Jan 2025 - Present
• Building data-driven solutions on Azure Databricks platform for healthcare analytics
• Implementing AI solutions for healthcare data processing and analysis

Data & Technology Specialist | Syracuse University | Aug 2024 - Dec 2024
• Developed automated residential forecast system, saving 2 hours daily
• Launched multilingual chatbot with 60 users, expected 50% call volume reduction
• Created interactive zip code map for $100,000 targeted email campaign

Data Analysis and Support Assistant | Syracuse University | July 2023 - Dec 2024
• Ensured data accuracy and compliance for over 4,000 international students
• Analyzed visitor management system data with over 18,000 rows
• Created dashboards visualizing travel signature modes for operational planning
• Nominated as Graduate Student Employee of the Year

EDUCATION:

M.S. Applied Data Science | Syracuse University | Jan 2023 - Dec 2024
B.E. Computer Engineering | University of Mumbai | Aug 2018 - May 2022

KEY PROJECTS:

• Early Intervention for Gestational Diabetes Prediction using ML
• Virtual Stock Exchange (#1 ranking with 19.90% return)
• AI Movie Recommendation System (IEEE Publication)
• Green Prosperity Dashboard (Showcased at Poster Day)

TECHNICAL SKILLS:

• Programming: Python, R, SQL
• Machine Learning & AI: Scikit-learn, TensorFlow, Generative AI
• Cloud Platforms: Azure Databricks
• Data Visualization: Tableau, Matplotlib, Seaborn
• Databases: PostgreSQL, MongoDB
• Tools: Git, Jupyter, VS Code

ACHIEVEMENTS:

• 2nd Dan Black Belt certified by Kukkiwon (World Taekwondo Headquarters)
• IEEE Conference Publication on AI in Entertainment
• Graduate Student Employee of the Year Nominee
• AIESEC Leadership Role - Operations & International Relations Manager

This resume represents a comprehensive overview of Karan Shah's professional experience, 
education, and achievements in data science and AI engineering.
  `.trim();
}
