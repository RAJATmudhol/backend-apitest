import db from "../../models/index.ts";
import { v4 as uuidv4 } from "uuid";

export const repo = {
  addWebsite: async (name: string, ownerEmail: string) => {
    const apiKey = uuidv4();
    const app = await db.App.create({
      name,
      ownerEmail,
      apiKey,
      status: "active",
    });
    return {
      id: app.id,
      name: app.name,
      ownerEmail: app.ownerEmail,
      apiKey: app.apiKey,
      status: app.status,
    };
  },

  findByEmail: async (ownerEmail: string) => {
    return db.App.findOne({ where: { ownerEmail } });
  },

  findByApiKey: async (apiKey: string) => {
    return db.App.findOne({ where: { apiKey } });
  },

  revokeApiKey: async (apiKey: any) => {
    const app = await db.App.findOne({
       where: { apiKey },raw: true
       });
     if (!app) {
    throw { status: 404, message: "App not found" }; 
  }
await db.App.update(
    { status: 'revoked' },  
    { where: { apiKey } }  
  );
  
  const updatedApp = await db.App.findOne({ where: { apiKey } });
  return updatedApp;
    
  },
};
