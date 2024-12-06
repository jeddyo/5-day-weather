import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Define a City class with name and id properties
class City {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }
}

class HistoryService {
  private filePath: string;

  constructor() {
    // Define the path to the searchHistory.json file
    this.filePath = path.join(__dirname, "../db/searchHistory.json");
  }

  // Private method to read the searchHistory.json file
  private async read(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf8");
      return JSON.parse(data) as City[];
    } catch (error) {
      if (error.code === "ENOENT") {
        // If the file doesn't exist, return an empty array
        return [];
      }
      throw error;
    }
  }

  // Private method to write the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    const data = JSON.stringify(cities, null, 2);
    await fs.writeFile(this.filePath, data, "utf8");
  }

  // Public method to get all cities from the searchHistory.json file
  async getCities(): Promise<City[]> {
    return this.read();
  }

  // Public method to add a city to the searchHistory.json file
  async addCity(cityName: string): Promise<City> {
    const cities = await this.read();
    const newCity = new City(cityName);

    // Add the new city to the list
    cities.push(newCity);
    await this.write(cities);

    return newCity;
  }

  // Public method to remove a city by its ID from the searchHistory.json file
  async removeCity(id: string): Promise<void> {
    const cities = await this.read();
    const updatedCities = cities.filter((city) => city.id !== id);

    if (cities.length === updatedCities.length) {
      throw new Error(`City with ID ${id} not found`);
    }

    await this.write(updatedCities);
  }
}

export default new HistoryService();
