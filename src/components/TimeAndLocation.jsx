import React from "react";
import { formatToLocalTime } from "../services/WeatherService";

const TimeAndLocation = ({ weather: {dt, timezone, name, country} }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          <p>{formatToLocalTime(dt,timezone)}</p>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name},${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
