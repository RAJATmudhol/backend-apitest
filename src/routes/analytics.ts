import { Router } from "express";
import { collectEvent, getEventSummary, getUserStats } from "../controllers/analytics/analyticsController.ts";
import { verifyApiKey } from "../middlewares/authMiddleware.ts";

const router = Router();

router.post("/collect", verifyApiKey, collectEvent);
router.get("/event-summary", verifyApiKey, getEventSummary);
router.get("/user-stats", verifyApiKey, getUserStats);

export default router;
