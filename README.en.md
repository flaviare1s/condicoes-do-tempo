# Weather Conditions

[![English](https://img.shields.io/badge/lang-English-blue.svg)](README.en.md) [![Português](https://img.shields.io/badge/lang-Português-green.svg)](README.md)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![OpenWeather API](https://img.shields.io/badge/OpenWeather-EB6E4B?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/api)

## 🌤️ About the Project

A weather application that displays real-time weather conditions using the OpenWeather API. Built with TypeScript, HTML, and CSS, using Webpack for bundling.

🚀 **[Live Demo](https://flaviare1s.github.io/condicoes-do-tempo/)**

## ⚙️ Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/flaviare1s/condicoes-do-tempo.git
   cd condicoes-do-tempo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

4. Add your OpenWeather API key to the `.env` file:

   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

5. Build the project:
   ```bash
   npm run build
   ```

## 🔑 How to Get an API Key

1. Create a free account at [OpenWeather](https://openweathermap.org/)
2. Access the API Keys section in your profile
3. Copy your API key and add it to the `.env` file

## 🛠️ Technologies Used

- **TypeScript** - Programming language
- **HTML5 & CSS3** - Structure and styling
- **Webpack** - Module bundler
- **OpenWeather API** - Weather data
- **dotenv** - Environment variables management

## 📄 License

This project is licensed under the ISC License.
