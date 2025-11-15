
import { log } from "console";
import { register, getApiKey, revokeKey } from "./authservice.ts";

export const registerApp = async (req:any, res:any) => {
  try {
    const { name, ownerEmail } = req.body;
    if (!name || !ownerEmail) {
      return res.status(400).json({ message: "Missing 'name' or 'ownerEmail'." });
    }

    const response = await register(name, ownerEmail);
    res.status(200).json({message: "Website/app added successfully", response,});

  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message || "Internal server error" });
  }
};

export const getApiKeyController = async (req:any, res:any) => {
  try {
    const { ownerEmail } = req.query;
    if (!ownerEmail || typeof ownerEmail !== "string") {
      return res.status(400).json({ message: "Missing or invalid 'ownerEmail'." });
    }

    const response = await getApiKey(ownerEmail);
    res.status(200).json({
      message: "API key retrieved successfully",
      response,
    });
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message || "Internal server error" });
  }
};

export const revokeKeyController = async (req:any, res:any) => {
  try {
    const { apiKey } = req.body;
    if (!apiKey) {
      return res.status(400).json({ message: "Missing 'apiKey'." });
    }

    const response = await revokeKey(apiKey);
    console.log("---",response);
    
    res.status(200).json({
      message: "API key revoked successfully",
      response,
    });
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message || "Internal server error" });
  }
};
