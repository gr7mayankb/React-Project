import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { kelvinToCelcius } from "../utils/tempConv";
import Navbar from "../Components/Navbar";

const Weather = () => {
  const [weatherdata, setweatherdata] = useState(null);

  const [city, setcity] = useState("delhi");

  const apiKey = "95b084788e27da86a1bc6e0a68047f22";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();
      console.log("API data:", data);
      setweatherdata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const [forecastData, setForecastData] = useState(null);

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      console.log(response.data);
      setForecastData(response.data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
      setForecastData(null);
    }
  };

  useEffect(() => {
    fetchData();
    fetchForecastData();
    // const intervalId = setInterval(() => {
    //   fetchData();
    // }, 10000);

    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center h-screen">
      <div className="w-full"><Navbar/> </div>
      {/* <h1 className="font-bold text-[5vw] bg-blue-500 text-white w-full text-center p-2">
        Weather App
      </h1> */}
      {weatherdata && (
        <>
          <div className="w-[80%] p-4">
            <form
              onSubmit={handleSearch}
              className="grid grid-cols-[80%_20%] gap-2"
            >
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                className="p-2 rounded-lg shadow-[0_0_5px_black]"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-lg"
              >
                Get Weather
              </button>
            </form>
          </div>

          <div className="w-[80%] bg-white p-6 rounded-lg bg-green-50 ">
            <div>
              <div className="font-bold">Current Weather</div>
            </div>

            <div className="">
              <div className="flex flex-col gap-4 p-4">
                <div>
                  {weatherdata?.name}, {weatherdata?.sys.country}
                </div>
                <div className="flex gap-4">
                  <img
                    src={getWeatherIconUrl(weatherdata.weather[0].icon)}
                    className="h-[15vh]  "
                    alt=""
                  />
                  <div className="text-[8vw]">
                    {" "}
                    {kelvinToCelcius(weatherdata?.main.temp)}
                    <span className="text-[2rem]">°C </span>
                  </div>
                </div>
                <div className="font-bold">
                  {weatherdata?.weather[0].description}
                </div>
              </div>

              <div className="flex flex-col gap-4 p-4 ">
                <div>
                  Feels like {kelvinToCelcius(weatherdata?.main.feels_like)}°C
                </div>
                <div className="flex gap-2">
                  <div className="">
                    Max: {kelvinToCelcius(weatherdata?.main.temp_max)}°C{" "}
                  </div>{" "}
                  <div className="">
                    Min: {kelvinToCelcius(weatherdata?.main.temp_min)}°C
                  </div>
                </div>
                <div>Humidity : {weatherdata?.main.humidity} % </div>
                <div>Wind Speed: {weatherdata.wind.speed} m/s</div>
                <div>Wind Direction: {weatherdata.wind.deg}°</div>
                <div>Pressure: {weatherdata.main.pressure}pha</div>
              </div>
            </div>
          </div>
        </>
      )}
    
    </div>
  );
};

export default Weather;
