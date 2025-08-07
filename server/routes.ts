import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all items
  app.get("/api/items", async (req, res) => {
    try {
      const items = await storage.getItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch items" });
    }
  });

  // Get items by province
  app.get("/api/items/province/:province", async (req, res) => {
    try {
      const items = await storage.getItemsByProvince(req.params.province);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch items by province" });
    }
  });

  // Get items by category
  app.get("/api/items/category/:category", async (req, res) => {
    try {
      const items = await storage.getItemsByCategory(req.params.category);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch items by category" });
    }
  });

  // Get single item
  app.get("/api/items/:id", async (req, res) => {
    try {
      const item = await storage.getItem(req.params.id);
      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch item" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
