import React from "react";

function TopButton({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Texas",
    },
    {
      id: 3,
      title: "Toronto",
    },

    {
      id: 4,
      title: "Paris",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => {
            setQuery({ q: city.title });
          }}
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
