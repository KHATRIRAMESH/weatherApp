import React from "react";

const TimeAndLocation = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <div className="text-white text-xl font-extralight">
          <p>Tuesday,31 May 2023|Local time:12:45 PM</p>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Berlin, DE</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
