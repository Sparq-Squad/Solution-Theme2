import React, { useState } from 'react';
import LocationMap from './LocationMap';

const locations = [
  { id: 'ranchi', name: 'Ranchi', coordinates: [85.3094, 23.3441], distance: "280 km", duration: "5h 20m", type: "Premium Store" },
  { id: 'kolkata', name: 'Kolkata', coordinates: [88.3639, 22.5726], distance: "270 km", duration: "5h 10m", type: "Flagship Store" },
  { id: 'bhubaneswar', name: 'Bhubaneswar, Odisha', coordinates: [85.8245, 20.2961], distance: "380 km", duration: "7h 15m", type: "Standard Store" },
  { id: 'patna', name: 'Patna', coordinates: [85.1376, 25.5941], distance: "410 km", duration: "8h 00m", type: "Premium Store" },
  { id: 'dhanbad', name: 'Dhanbad', coordinates: [86.4304, 23.7957], distance: "150 km", duration: "3h 05m", type: "Express Store" },
  { id: 'bokaro', name: 'Bokaro', coordinates: [85.9647, 23.6693], distance: "80 km", duration: "1h 45m", type: "Express Store" },
  { id: 'durgapur', name: 'Durgapur', coordinates: [87.3119, 23.4800], distance: "210 km", duration: "4h 10m", type: "Standard Store" },
];

const deliveryPartners = [
  { id: 1, name: "Speedy Logistics", rating: 4.8, deliveryTime: "48h", cost: "₹1,850", vehicles: 12 },
  { id: 2, name: "Reliable Couriers", rating: 4.5, deliveryTime: "72h", cost: "₹1,500", vehicles: 8 },
  { id: 3, name: "Premium Transports", rating: 4.9, deliveryTime: "24h", cost: "₹2,400", vehicles: 5 },
  { id: 4, name: "Economy Shippers", rating: 4.2, deliveryTime: "96h", cost: "₹1,200", vehicles: 15 },
];

const LogisticPlanning = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedPartner, setSelectedPartner] = useState(null);

  // Custom SVG Icons
  const MapPinIcon = () => (
    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const RouteIcon = () => (
    <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="5.5" cy="18.5" r="3.5" />
      <circle cx="18.5" cy="5.5" r="3.5" />
      <path d="M15.5 12.5L19.5 8.5" />
      <path d="M5.5 15.5L9.5 11.5" />
    </svg>
  );

  const TruckIcon = () => (
    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white">Logistics Planning</h1>
          <p className="text-gray-300 text-lg">
            Strategic route planning and delivery management from Jamshedpur.
          </p>
        </div>

        {/* Location Selector Card */}
        <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700">
          <div className="p-5 border-b border-gray-700">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
              <MapPinIcon />
              <span>Select Destination Location</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">From:</label>
                <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-700">
                  <span className="text-blue-300 font-semibold">Jamshedpur (Home Base)</span>
                </div>
              </div>
              <div className="flex justify-center">
                <RouteIcon />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">To:</label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select destination location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700">
          <div className="p-5 border-b border-gray-700">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
              <MapPinIcon />
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
          <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700">
            <div className="p-5 border-b border-gray-700">
              <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-4 rounded-lg border border-blue-700">
                  <span className="text-sm text-gray-400">Distance</span>
                  <p className="text-xl font-bold text-blue-300 mt-1">{selectedStore.distance}</p>
                </div>
                <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-4 rounded-lg border border-green-700">
                  <span className="text-sm text-gray-400">Estimated Time</span>
                  <p className="text-xl font-bold text-green-300 mt-1">{selectedStore.duration}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 p-4 rounded-lg border border-purple-700">
                  <span className="text-sm text-gray-400">Store Type</span>
                  <p className="text-xl font-bold text-purple-300 mt-1">{selectedStore.type}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Partners Section */}
        <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700">
          <div className="p-5 border-b border-gray-700">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
              <TruckIcon />
              <span>Delivery Partners</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {deliveryPartners.map(partner => (
                <div 
                  key={partner.id}
                  className={`bg-gray-700 rounded-lg border-2 p-4 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:border-blue-500 ${
                    selectedPartner?.id === partner.id 
                      ? 'border-blue-500 ring-2 ring-blue-500/30' 
                      : 'border-gray-600'
                  }`}
                  onClick={() => setSelectedPartner(partner)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-white">{partner.name}</h3>
                    <div className="flex items-center bg-yellow-900/40 px-2 py-1 rounded text-yellow-400">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{partner.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Delivery Time:</span>
                      <span className="font-medium text-white">{partner.deliveryTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cost:</span>
                      <span className="font-medium text-green-400">{partner.cost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Vehicles:</span>
                      <span className="font-medium text-white">{partner.vehicles}</span>
                    </div>
                  </div>
                  
                  <button 
                    className={`mt-4 w-full py-2 rounded-lg font-medium transition-colors ${
                      selectedPartner?.id === partner.id
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
                    }`}
                  >
                    {selectedPartner?.id === partner.id ? 'Selected' : 'Select Partner'}
                  </button>
                </div>
              ))}
            </div>
            
            {/* Selected Partner Details */}
            {selectedPartner && (
              <div className="mt-8 p-5 bg-gray-700/50 rounded-xl border border-gray-600">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    Selected: <span className="text-blue-400">{selectedPartner.name}</span>
                  </h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                    Confirm Delivery
                  </button>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-gray-400 font-medium text-sm">Delivery Timeline</h4>
                    <div className="mt-2 flex items-center">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div className="h-12 w-0.5 bg-blue-500 mt-1"></div>
                      </div>
                      <div>
                        <p className="text-white font-medium">Order Processing</p>
                        <p className="text-gray-400 text-sm">Completed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div className="h-12 w-0.5 bg-blue-500 mt-1"></div>
                      </div>
                      <div>
                        <p className="text-white font-medium">In Transit</p>
                        <p className="text-gray-400 text-sm">Starts today</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-gray-600 border border-gray-500 flex items-center justify-center">
                          <span className="text-xs text-gray-300">3</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-medium">Estimated Delivery</p>
                        <p className="text-gray-400 text-sm">{selectedPartner.deliveryTime}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-gray-400 font-medium text-sm">Cost Breakdown</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Base Fare</span>
                        <span className="text-white">₹{parseInt(selectedPartner.cost.replace(/\D/g, '') * 0.7)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Fuel Surcharge</span>
                        <span className="text-white">₹{parseInt(selectedPartner.cost.replace(/\D/g, '') * 0.2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Service Fee</span>
                        <span className="text-white">₹{parseInt(selectedPartner.cost.replace(/\D/g, '') * 0.1)}</span>
                      </div>
                      <div className="border-t border-gray-700 my-2 pt-2 flex justify-between font-bold">
                        <span className="text-gray-300">Total</span>
                        <span className="text-green-400">{selectedPartner.cost}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-gray-400 font-medium text-sm">Vehicle Information</h4>
                    <div className="mt-3 flex items-center">
                      <div className="mr-4 p-3 bg-gray-700 rounded-lg">
                        <TruckIcon />
                      </div>
                      <div>
                        <p className="text-white font-medium">Medium Cargo Truck</p>
                        <p className="text-gray-400 text-sm">Capacity: 5,000 kg</p>
                        <p className="text-gray-400 text-sm">Dimensions: 20ft</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Real-time tracking available</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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