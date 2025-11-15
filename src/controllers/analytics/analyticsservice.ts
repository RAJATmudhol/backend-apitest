import { analyticsRepo } from "./analyticsrepo.ts";

export const createEvent = async (data: any) => {
            
  return await analyticsRepo.createEvent(data);
};

export const getEventSummarys = async (filters: {
  event?: string;
  startDate?: string;
  endDate?: string;
  appId?: string;
}) => {
  const events = await analyticsRepo.findEvents(filters);

  const count = events.length;
  const uniqueUsers = new Set(events.map(e => e.userId)).size;

  const deviceData: Record<string, number> = {};
  events.forEach(e => {
    if (e.device) deviceData[e.device] = (deviceData[e.device] || 0) + 1;
  });

  return { event: filters.event || "all", count, uniqueUsers, deviceData };
};


export const getUserStat = async (userId: any) => {
  return await analyticsRepo.findUserEvents(userId);

//   const totalEvents = events.length;
//   const deviceDetails = events.length ? events[0].metadata || {} : {};
//   const ipAddress = events.length ? events[0].ipAddress : null;

//   return { userId, totalEvents, deviceDetails, ipAddress };
};
