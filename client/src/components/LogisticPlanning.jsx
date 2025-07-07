import React, { useState } from "react";
import LocationMap from "./LocationMap";

const locations = [
  {
    id: "ranchi",
    name: "Ranchi",
    coordinates: [85.3094, 23.3441],
    distance: "280 km",
    duration: "5h 20m",
    type: "Premium Store",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    coordinates: [88.3639, 22.5726],
    distance: "270 km",
    duration: "5h 10m",
    type: "Flagship Store",
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar, Odisha",
    coordinates: [85.8245, 20.2961],
    distance: "380 km",
    duration: "7h 15m",
    type: "Standard Store",
  },
  {
    id: "patna",
    name: "Patna",
    coordinates: [85.1376, 25.5941],
    distance: "410 km",
    duration: "8h 00m",
    type: "Premium Store",
  },
  {
    id: "dhanbad",
    name: "Dhanbad",
    coordinates: [86.4304, 23.7957],
    distance: "150 km",
    duration: "3h 05m",
    type: "Express Store",
  },
  {
    id: "bokaro",
    name: "Bokaro",
    coordinates: [85.9647, 23.6693],
    distance: "80 km",
    duration: "1h 45m",
    type: "Express Store",
  },
  {
    id: "durgapur",
    name: "Durgapur",
    coordinates: [87.3119, 23.48],
    distance: "210 km",
    duration: "4h 10m",
    type: "Standard Store",
  },
];

const deliveryPartners = [
  {
    id: 1,
    name: "Speedy Logistics",
    rating: 4.8,
    deliveryTime: "48h",
    cost: "₹1,850",
    vehicles: 12,
  },
  {
    id: 2,
    name: "Reliable Couriers",
    rating: 4.5,
    deliveryTime: "72h",
    cost: "₹1,500",
    vehicles: 8,
  },
  {
    id: 3,
    name: "Premium Transports",
    rating: 4.9,
    deliveryTime: "24h",
    cost: "₹2,400",
    vehicles: 5,
  },
  {
    id: 4,
    name: "Economy Shippers",
    rating: 4.2,
    deliveryTime: "96h",
    cost: "₹1,200",
    vehicles: 15,
  },
];

const LogisticPlanning = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Custom SVG Icons
const MapPinIcon = () => (
  <svg
    className="w-5 h-5 text-amber-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

  const RouteIcon = () => (
    <svg
      className="w-8 h-8 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="5.5" cy="18.5" r="3.5" />
      <circle cx="18.5" cy="5.5" r="3.5" />
      <path d="M15.5 12.5L19.5 8.5" />
      <path d="M5.5 15.5L9.5 11.5" />
    </svg>
  );

  const TruckIcon = () => (
    <svg
      className="w-5 h-5 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] text-gray-100">
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-2 py-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 tracking-tight drop-shadow-md">
            Logistics Planning
          </h1>
          <p className="text-lg text-gray-400 font-medium">
            Strategic route planning and delivery management from{" "}
            <span className="text-amber-200 font-semibold">Jamshedpur</span>.
          </p>
        </div>

        {/* Location Selector Card */}
        <div className="bg-[#111111] rounded-xl shadow-xl border border-[#2c2c2c]">
          <div className="p-5 border-b border-[#2c2c2c]">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <MapPinIcon className="w-5 h-5" />
              <span>Select Destination Location</span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* From */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">
                  From:
                </label>
                <div className="p-3 bg-amber-900/10 rounded-lg border border-amber-700/30">
                  <span className="text-amber-300 font-semibold">
                    Jamshedpur (Home Base)
                  </span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="flex justify-center">
                <RouteIcon className="text-gray-400 w-6 h-6" />
              </div>

              {/* To Dropdown - Custom Controlled with Icon */}
              <div className="space-y-2 w-full relative">
                <label className="text-sm font-semibold text-gray-400">
                  To:
                </label>

                <div
                  className="bg-[#131418] text-yellow-300 border border-[#3f434f] rounded-md py-3 px-4 font-medium text-sm cursor-pointer select-none flex justify-between items-center"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>
                    {selectedLocation
                      ? locations.find((loc) => loc.id === selectedLocation)
                          ?.name
                      : "Select destination location"}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-2 text-gray-400 transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Dropdown Items */}
                {showDropdown && (
                  <div className="absolute z-50 mt-1 w-full bg-[#161a23] border border-[#3f434f] rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {locations.map((location) => (
                      <div
                        key={location.id}
                        className="px-4 py-2 hover:bg-yellow-100 hover:text-black text-yellow-300 cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedLocation(location.id);
                          setShowDropdown(false);
                        }}
                      >
                        {location.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

{/* Map Section */}
<div className="bg-[#131418] rounded-xl shadow-xl border border-[#2f323a]">
  <div className="p-5 border-b border-[#2f323a]">
    <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
      <MapPinIcon className="w-5 h-5" />
      <span>Store Locations & Route Planning</span>
    </div>
  </div>
  <div className="p-0">
    <LocationMap
      selectedLocation={selectedLocation}
      locations={locations}
      onStoreSelect={setSelectedStore}
      selectedStore={selectedStore}
    />
  </div>
</div>


{/* Route Information */}
{selectedStore && (
  <div className="bg-[#131418] rounded-xl shadow-xl border border-[#2f323a]">
    <div className="p-5 border-b border-[#2f323a]">
      <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="5.5" cy="18.5" r="3.5" />
          <circle cx="18.5" cy="5.5" r="3.5" />
          <path d="M15.5 12.5L19.5 8.5" />
          <path d="M5.5 15.5L9.5 11.5" />
        </svg>
        <span>Route Information</span>
      </div>
    </div>

    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/50 p-4 rounded-lg border border-blue-700 hover:scale-[1.02] transition-all duration-300">
          <span className="text-sm text-gray-400">Distance</span>
          <p className="text-xl font-bold text-blue-300 mt-1">
            {selectedStore.distance}
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-900/40 to-green-800/50 p-4 rounded-lg border border-green-700 hover:scale-[1.02] transition-all duration-300">
          <span className="text-sm text-gray-400">Estimated Time</span>
          <p className="text-xl font-bold text-green-300 mt-1">
            {selectedStore.duration}
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/50 p-4 rounded-lg border border-purple-700 hover:scale-[1.02] transition-all duration-300">
          <span className="text-sm text-gray-400">Store Type</span>
          <p className="text-xl font-bold text-purple-300 mt-1">
            {selectedStore.type}
          </p>
        </div>
      </div>
    </div>
  </div>
)}


        {/* Delivery Partners Section */}
        <div className="bg-[#111111] rounded-xl shadow-xl border border-[#2a2a2a]">
          <div className="p-5 border-b border-[#2a2a2a]">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <TruckIcon />
              <span>Delivery Partners</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliveryPartners.map((partner) => (
                <div
                  key={partner.id}
                  className={`bg-[#1c1c1c] rounded-xl border-2 p-4 transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                    selectedPartner?.id === partner.id
                      ? "border-amber-500 ring-2 ring-amber-500/30"
                      : "border-gray-700 hover:border-amber-400"
                  }`}
                  onClick={() => setSelectedPartner(partner)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-white">
                      {partner.name}
                    </h3>
                    <div className="flex items-center bg-amber-900/40 px-2 py-1 rounded text-amber-400 text-sm">
                      ⭐ <span className="ml-1">{partner.rating}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Delivery Time:</span>
                      <span className="text-white">{partner.deliveryTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cost:</span>
                      <span className="text-emerald-400">{partner.cost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Vehicles:</span>
                      <span className="text-white">{partner.vehicles}</span>
                    </div>
                  </div>

                  <button
                    className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors text-sm ${
                      selectedPartner?.id === partner.id
                        ? "bg-amber-500 text-black hover:bg-amber-600"
                        : "bg-[#2c2c2c] text-white hover:bg-[#3a3a3a]"
                    }`}
                  >
                    {selectedPartner?.id === partner.id
                      ? "Selected"
                      : "Select Partner"}
                  </button>
                </div>
              ))}
            </div>

            {/* Selected Partner Details */}
            {selectedPartner && (
              <div className="mt-8 p-6 bg-[#1c1c1c] rounded-xl border border-[#2a2a2a]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    Selected:{" "}
                    <span className="text-amber-400">
                      {selectedPartner.name}
                    </span>
                  </h3>
                  <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-semibold">
                    Confirm Delivery
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Timeline */}
                  <div className="bg-[#111111] p-5 rounded-lg border border-[#2a2a2a]">
                    <h4 className="text-sm text-gray-400 font-medium">
                      Delivery Timeline
                    </h4>
                    <div className="mt-3 space-y-4">
                      {[
                        "Order Processing",
                        "In Transit",
                        "Estimated Delivery",
                      ].map((step, index) => (
                        <div className="flex items-start" key={step}>
                          <div className="flex flex-col items-center mr-4">
                            <div
                              className={`w-8 h-8 rounded-full ${
                                index === 2
                                  ? "bg-gray-700 border border-gray-500 text-sm text-gray-300"
                                  : "bg-amber-500"
                              } flex items-center justify-center`}
                            >
                              {index === 2 ? (
                                <span>{index + 1}</span>
                              ) : (
                                <svg
                                  className="w-4 h-4 text-black"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                            {index < 2 && (
                              <div className="h-10 w-0.5 bg-amber-500 mt-1"></div>
                            )}
                          </div>
                          <div>
                            <p className="text-white font-medium">{step}</p>
                            <p className="text-sm text-gray-400">
                              {index === 0
                                ? "Completed"
                                : index === 1
                                ? "Starts today"
                                : selectedPartner.deliveryTime}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="bg-[#111111] p-5 rounded-lg border border-[#2a2a2a]">
                    <h4 className="text-sm text-gray-400 font-medium">
                      Cost Breakdown
                    </h4>
                    <div className="mt-3 space-y-3 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Base Fare</span>
                        <span>
                          ₹
                          {parseInt(
                            selectedPartner.cost.replace(/\D/g, "") * 0.7
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Fuel Surcharge</span>
                        <span>
                          ₹
                          {parseInt(
                            selectedPartner.cost.replace(/\D/g, "") * 0.2
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Service Fee</span>
                        <span>
                          ₹
                          {parseInt(
                            selectedPartner.cost.replace(/\D/g, "") * 0.1
                          )}
                        </span>
                      </div>
                      <div className="border-t border-gray-700 my-2 pt-2 flex justify-between font-bold text-base">
                        <span className="text-gray-100">Total</span>
                        <span className="text-emerald-400">
                          {selectedPartner.cost}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="bg-[#111111] p-5 rounded-lg border border-[#2a2a2a]">
                    <h4 className="text-sm text-gray-400 font-medium">
                      Vehicle Information
                    </h4>
                    <div className="mt-4 flex items-start">
                      <div className="p-3 bg-[#2c2c2c] rounded-lg mr-4">
                        <TruckIcon className="text-amber-400 w-6 h-6" />
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-white font-semibold">
                          Medium Cargo Truck
                        </p>
                        <p className="text-gray-400">Capacity: 5,000 kg</p>
                        <p className="text-gray-400">Dimensions: 20ft</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-1 text-sm text-gray-400">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Real-time tracking available</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Temperature controlled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticPlanning;
