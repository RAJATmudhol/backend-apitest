
import {createEvent,getEventSummarys,getUserStat}  from "./analyticsservice.ts";

export const collectEvent = async (req:any, res:any) => {
  try {
    const eventData = { 
      ...req.body, 
      appId: req.appId 
    };
    
    
    const event = await createEvent(eventData);
    res.status(201).json({ message: "Event collected", event });
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

export const getEventSummary = async (req:any, res:any) => {
  try {
    const { event, startDate, endDate, appId } = req.query;
    const summary = await getEventSummarys({
      event: event as string,
      startDate: startDate as string,
      endDate: endDate as string,
      appId: appId as string,
    });
    res.json(summary);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

export const getUserStats = async (req:any, res:any) => {
  try {
    const { userId } = req.query;
    console.log(userId);
    
    if (!userId) return res.status(400).json({ message: "Missing userId" });

    const stats = await getUserStat(userId);
    res.json(stats);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};
