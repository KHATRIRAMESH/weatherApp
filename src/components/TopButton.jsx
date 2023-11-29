import React from "react";

function TopButton() {
  const cities = [
    {
      id: 1,
      title: "Pokhara",
    },
    {
      id: 2,
      title: "Kathmandu",
    },
    {
      id: 3,
      title: "Nepalgunj",
    },

    {
      id: 4,
      title: "Jumla",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium transition ease-out hover:scale-125"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
