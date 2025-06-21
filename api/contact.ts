import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertContactMessageSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      // Handle contact form submission
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      return res.status(201).json({ 
        success: true, 
        message: "Message sent successfully",
        id: message.id 
      });
    }

    if (req.method === 'GET') {
      // Get all contact messages
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    }

    // Method not allowed
    return res.status(405).json({ 
      success: false, 
      message: "Method not allowed" 
    });

  } catch (error) {
    console.error('API Error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Validation error", 
        errors: error.errors 
      });
    }

    return res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
}