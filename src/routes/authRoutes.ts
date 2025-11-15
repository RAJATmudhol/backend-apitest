import { Router } from "express";
import { getApiKeyController, registerApp, revokeKeyController } from "../controllers/auth/authController.ts";


const router = Router();

router.post("/register", registerApp);
router.post("/revoke", revokeKeyController);
router.post("/api-key", getApiKeyController);

export default router;
