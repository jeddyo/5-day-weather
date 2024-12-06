import dotenv from "dotenv";
dotenv.config();

interface Coordinates {
  lat: number;
  lon: number;
}

interface Forecast {
  date: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  icon: string;
  description: string;
}

class WeatherService {
  private baseURL: string = process.env.API_BASE_URL || "https://api.openweathermap.org/data/2.5";
  private apiKey: string = process.env.API_KEY || "";

  // Fetch coordinates for a city
  private async fetchCoordinates(city: string): Promise<Coordinates> {
    const geocodeURL = `${this.baseURL}/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`;
    const response = await fetch(geocodeURL);

    if (!response.ok) {
      throw new Error("Failed to fetch coordinates");
    }

    const [data] = await response.json();
    return { lat: data.lat, lon: data.lon };
  }

  // Fetch 5-day weather forecast by coordinates
  private async fetchForecast({ lat, lon }: Coordinates): Promise<any> {
    const forecastURL = `${this.baseURL}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(forecastURL);

    if (!response.ok) {
      throw new Error("Failed to fetch forecast");
    }

    return response.json();
  }

  // Parse the forecast data
  private parseForecast(data: any): Forecast[] {
    return data.list.map((entry: any) => ({
      date: new Date(entry.dt * 1000).toLocaleString(),
      temp: entry.main.temp,
      humidity: entry.main.humidity,
      windSpeed: entry.wind.speed,
      icon: entry.weather[0].icon,
      description: entry.weather[0].description,
    }));
  }

  // Main method to get the forecast for a city
  async getForecastForCity(city: string): Promise<Forecast[]> {
    const coordinates = await this.fetchCoordinates(city);
    const forecastData = await this.fetchForecast(coordinates);
    return this.parseForecast(forecastData);
  }
}

export default new WeatherService();
