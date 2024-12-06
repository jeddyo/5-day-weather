import { Router, Request, Response } from "express";
import WeatherService from "../../service/weatherService";

const router = Router();

// Route to get the 5-day weather forecast
router.post("/", async (req: Request, res: Response) => {
  const { city } = req.body;

  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const forecast = await WeatherService.getForecastForCity(city);
    res.json(forecast);
  } catch (error) {
    console.error("Error fetching forecast:", error);
    res.status(500).json({ error: "Failed to fetch forecast" });
  }
});

export default router;
