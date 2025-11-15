
import db from "../models/index.ts";

export const verifyApiKey = async (req:any, res:any ,next:any) => {
  const apiKey = req.headers["x-api-key"] as string;
   console.log(";;;;",apiKey);
   
  if (!apiKey) {
    return res.status(401).json({ message: "API key missing" });
  }

  const app = await db.App.findOne({ where: { apiKey, status: "active" } });
  if (!app) {
    return res.status(403).json({ message: "Invalid API key" });
  }
  if (app.status === "revoked") {
      return res.status(403).json({ message: "API key has been revoked." });
    }

  req.appId =app.dataValues.id;
  
  next();
};
