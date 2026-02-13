import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Doctors
  app.get(api.doctors.list.path, async (req, res) => {
    const doctors = await storage.getDoctors();
    res.json(doctors);
  });

  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Appointments
  app.post(api.appointments.create.path, async (req, res) => {
    try {
      const input = api.appointments.create.input.parse(req.body);
      const appointment = await storage.createAppointment(input);
      res.status(201).json(appointment);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}

// Seed function to populate initial data
export async function seedDatabase() {
  const existingDoctors = await storage.getDoctors();
  if (existingDoctors.length === 0) {
    await storage.createDoctor({
      name: "Theresa Webb",
      specialty: "Pediatrics",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300", // Placeholder or use asset if available
      bio: "Expert in child healthcare."
    });
    await storage.createDoctor({
      name: "Dianne Russell",
      specialty: "Allergy & Immunology",
      imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
      bio: "Specialist in allergies."
    });
     await storage.createDoctor({
      name: "Wade Warren",
      specialty: "Gynecology",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
      bio: "Women's health specialist."
    });
     await storage.createDoctor({
      name: "Leslie Alexander",
      specialty: "Nephrology",
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
      bio: "Kidney care expert."
    });
     await storage.createDoctor({
      name: "Marvin McKinney",
      specialty: "Cardiology Specialist",
      imageUrl: "https://images.unsplash.com/photo-1612531386530-97286d74c2ea?auto=format&fit=crop&q=80&w=300",
      bio: "Heart health specialist."
    });
  }

  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Surgical Services",
      description: "Comprehensive care focused on your overall well-being.",
      icon: "Scalpel"
    });
    await storage.createService({
      title: "Diagnostics & Lab Testing",
      description: "Early detection routine screening improve health outcomes.",
      icon: "Microscope"
    });
     await storage.createService({
      title: "Immunization Services",
      description: "Immunization programs designed for lifelong protection.",
      icon: "Syringe"
    });
    await storage.createService({
      title: "Emergency Care",
      description: "Comprehensive healthcare for children, & adolescents.",
      icon: "Ambulance"
    });
  }
}
