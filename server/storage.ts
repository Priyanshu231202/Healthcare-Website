import { db } from "./db";
import {
  doctors,
  services,
  appointments,
  type Doctor,
  type InsertDoctor,
  type Service,
  type InsertService,
  type Appointment,
  type InsertAppointment
} from "@shared/schema";

export interface IStorage {
  // Doctors
  getDoctors(): Promise<Doctor[]>;
  createDoctor(doctor: InsertDoctor): Promise<Doctor>;

  // Services
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;

  // Appointments
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
}

export class DatabaseStorage implements IStorage {
  // Doctors
  async getDoctors(): Promise<Doctor[]> {
    return await db.select().from(doctors);
  }

  async createDoctor(doctor: InsertDoctor): Promise<Doctor> {
    const [newDoctor] = await db.insert(doctors).values(doctor).returning();
    return newDoctor;
  }

  // Services
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }

  // Appointments
  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const [newAppointment] = await db.insert(appointments).values(appointment).returning();
    return newAppointment;
  }
}

export const storage = new DatabaseStorage();
