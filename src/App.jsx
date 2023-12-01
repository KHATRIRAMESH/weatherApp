import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // console.log({ ...query, units });
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        // console.log(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div
      className=" mx-auto max-w-screen-2xl max-h-screen mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 back"
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} units={units} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
        </div>
      )}

      {/* <Forecast title="hourly forecast" />
      <Forecast title="Daily forecast" /> */}
    </div>
  );
}

export default App;
