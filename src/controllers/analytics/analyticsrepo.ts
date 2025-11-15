import db from "../../models/index.ts";
import { Op } from "sequelize";

export const analyticsRepo = {
  createEvent: async (eventData: any) => {
    return await db.Event.create(eventData);
  },

  findEvents: async (filters: {
    event?: string;
    startDate?: string;
    endDate?: string;
    appId?: string;
  }) => {
    const whereClause: any = {};
    if (filters.event) whereClause.event = filters.event;
    if (filters.appId) whereClause.appId = filters.appId;
    if (filters.startDate || filters.endDate) {
      whereClause.timestamp = {};
      if (filters.startDate) whereClause.timestamp[Op.gte] = new Date(filters.startDate);
      if (filters.endDate) whereClause.timestamp[Op.lte] = new Date(filters.endDate);
    }

    return await db.Event.findAll({ where: whereClause });
  },

  findUserEvents: async (userId: string) => {
    return await db.Event.findAll({ where: { userId:userId } });
  },
};
