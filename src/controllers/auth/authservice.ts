
import {repo} from './authrepo.ts'

export const register = async (name: string, ownerEmail: string) => {
  const existing = await repo.findByEmail(ownerEmail);
  if (existing) {
    throw { status: 409, message: "App already registered" };
  }

  return repo.addWebsite(name, ownerEmail);
};

export const getApiKey = async (ownerEmail: string) => {
  const app = await repo.findByEmail(ownerEmail);
  if (!app) {
    throw { status: 404, message: "App not found" };
  }

  return {
    id: app.id,
    name: app.name,
    ownerEmail: app.ownerEmail,
    apiKey: app.apiKey,
    status: app.status,
  };
};

export const revokeKey = async (apiKey: string) => {
  const app = await repo.findByApiKey(apiKey);
  if (!app) {
    throw { status: 404, message: "App not found" };
  }

  return repo.revokeApiKey(apiKey);
};