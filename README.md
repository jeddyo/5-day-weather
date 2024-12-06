
# **5 Day Weather Forecast**

## **Description**

The 5 Day Weather Forecast application is a full-stack web application that provides users with weather forecasts for a city of their choice. The application displays a 5-day weather forecast and saves users' search history for easy access to previously searched cities.

This project utilizes a modern development stack, including TypeScript, Vite, and Node.js, for fast, efficient, and scalable web development.

---

## **Table of Contents**

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Integration](#api-integration)
6. [Routes](#routes)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Features**

- Fetch and display a 5-day weather forecast for any city.
- Save and retrieve search history from the server.
- Seamlessly integrates with the OpenWeatherMap API for real-time weather data.
- Responsive design with a clean and user-friendly interface.
- Uses environment variables for API key security.

---

## **Technologies Used**

- **Frontend**: Vite, TypeScript, HTML5, CSS3
- **Backend**: Node.js, Express, TypeScript
- **Database**: JSON file system for storing search history
- **API**: OpenWeatherMap API
- **Additional Tools**: Axios, UUID, dotenv

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Navigate to the `Develop` folder and install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Copy the `.env.example` file and rename it to `.env`.
   - Add your OpenWeatherMap API key:
     ```
     API_BASE_URL=https://api.openweathermap.org
     API_KEY=your_api_key_here
     ```

4. Build the client:
   ```bash
   npm run client:build
   ```

5. Start the server:
   ```bash
   npm run start
   ```

---

## **Usage**

1. Launch the application in your browser at `http://localhost:3001/`.
2. Use the search bar to find the 5-day weather forecast for any city.
3. View detailed weather information such as temperature, wind speed, and humidity.
4. Access your search history for quick lookups of previously searched cities.

---

## **API Integration**

This application uses the OpenWeatherMap API for real-time weather data. The following endpoints are utilized:

1. **Weather Forecast**:
   - `https://api.openweathermap.org/data/2.5/forecast`
   - Parameters: `city`, `appid`, `units`.

2. **API Key Security**:
   - API keys are securely stored in `.env` files and accessed via the `dotenv` package.

---

## **Routes**

### **HTML Routes**
- `GET *`: Serves the main `index.html` file.

### **API Routes**
- `GET /api/weather/history`: Returns all saved cities as JSON.
- `POST /api/weather`: Saves a city and fetches its weather data.

---

## **Contributing**

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License.

---
