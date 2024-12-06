import path from "path";
import { fileURLToPath } from "url";
import { Router, Request, Response } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Route to serve the main index.html file
router.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../../client/dist/index.html"));
});

// Optional: Fallback route for undefined paths
router.get("*", (req: Request, res: Response) => {
  res.status(404).sendFile(path.join(__dirname, "../../../client/dist/404.html"));
});

export default router;
