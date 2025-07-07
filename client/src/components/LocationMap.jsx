import React, { useEffect, useState } from 'react';

const LocationMap = ({ 
  selectedLocation, 
  locations, 
  onStoreSelect, 
  selectedStore 
}) => {
  const [stores, setStores] = useState([]);
  const [showRoute, setShowRoute] = useState(false);

  // Mock store data for different locations
  const storeData = {
    ranchi: [
      { id: 'r1', name: 'Ranchi Central Mall', type: 'Electronics Store', coordinates: [85.3094, 23.3441], distance: '165 km', duration: '3h 45m' },
      { id: 'r2', name: 'Main Road Electronics', type: 'Mobile Store', coordinates: [85.3200, 23.3500], distance: '168 km', duration: '3h 50m' },
      { id: 'r3', name: 'City Center Store', type: 'Computer Store', coordinates: [85.3000, 23.3400], distance: '163 km', duration: '3h 40m' },
    ],
    kolkata: [
      { id: 'k1', name: 'Park Street Electronics', type: 'Electronics Store', coordinates: [88.3639, 22.5726], distance: '420 km', duration: '7h 30m' },
      { id: 'k2', name: 'Gariahat Market', type: 'Mobile Store', coordinates: [88.3700, 22.5200], distance: '425 km', duration: '7h 45m' },
      { id: 'k3', name: 'Salt Lake Store', type: 'Computer Store', coordinates: [88.4200, 22.5800], distance: '430 km', duration: '8h 00m' },
    ],
    bhubaneswar: [
      { id: 'b1', name: 'Bhubaneswar Tech Hub', type: 'Electronics Store', coordinates: [85.8245, 20.2961], distance: '380 km', duration: '6h 45m' },
      { id: 'b2', name: 'Sahid Nagar Store', type: 'Mobile Store', coordinates: [85.8400, 20.3000], distance: '385 km', duration: '7h 00m' },
    ],
    patna: [
      { id: 'p1', name: 'Patna Electronics Market', type: 'Electronics Store', coordinates: [85.1376, 25.5941], distance: '290 km', duration: '5h 30m' },
      { id: 'p2', name: 'Boring Road Store', type: 'Computer Store', coordinates: [85.1500, 25.6000], distance: '295 km', duration: '5h 45m' },
    ],
    dhanbad: [
      { id: 'd1', name: 'Dhanbad Central', type: 'Electronics Store', coordinates: [86.4304, 23.7957], distance: '75 km', duration: '1h 45m' },
      { id: 'd2', name: 'Sardar Market', type: 'Mobile Store', coordinates: [86.4400, 23.8000], distance: '78 km', duration: '1h 50m' },
    ],
    bokaro: [
      { id: 'bo1', name: 'Bokaro Steel City Store', type: 'Electronics Store', coordinates: [85.9647, 23.6693], distance: '65 km', duration: '1h 30m' },
      { id: 'bo2', name: 'City Center Bokaro', type: 'Computer Store', coordinates: [85.9700, 23.6750], distance: '68 km', duration: '1h 35m' },
    ],
    durgapur: [
      { id: 'du1', name: 'Durgapur Electronics', type: 'Electronics Store', coordinates: [87.3119, 23.4800], distance: '185 km', duration: '4h 15m' },
      { id: 'du2', name: 'City Centre Mall', type: 'Mobile Store', coordinates: [87.3200, 23.4850], distance: '188 km', duration: '4h 20m' },
    ],
  };

  useEffect(() => {
    if (selectedLocation && storeData[selectedLocation]) {
      setStores(storeData[selectedLocation]);
      setShowRoute(true);
    } else {
      setStores([]);
      setShowRoute(false);
      onStoreSelect(null);
    }
  }, [selectedLocation, onStoreSelect]);

  const handleStoreClick = (store) => {
    onStoreSelect(store);
  };

  // Custom SVG icons
  const MapPinIcon = () => (
    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const NavigationIcon = () => (
    <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-green-700 via-green-600 to-blue-600 rounded-xl overflow-hidden shadow-xl">
      {/* Cartoonish Map Background */}
      <div className="absolute inset-0">
        {/* Mountains in background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-800 to-green-600 opacity-60">
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[40px] border-b-slate-700 opacity-50"></div>
          <div className="absolute bottom-0 left-16 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[60px] border-b-slate-600 opacity-40"></div>
          <div className="absolute bottom-0 right-20 w-0 h-0 border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-b-[50px] border-b-slate-700 opacity-50"></div>
        </div>
        
        {/* Rivers/Roads */}
        <div className="absolute top-1/3 left-0 w-full h-2 bg-blue-400 opacity-30 transform rotate-12"></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-yellow-600 opacity-40 transform -rotate-6"></div>
        
        {/* Cities representation as cartoon buildings */}
        <div className="absolute top-1/4 left-1/5">
          <div className="flex items-end space-x-1">
            <div className="w-3 h-8 bg-slate-600 rounded-t"></div>
            <div className="w-4 h-6 bg-slate-700 rounded-t"></div>
            <div className="w-3 h-10 bg-slate-600 rounded-t"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-1/4">
          <div className="flex items-end space-x-1">
            <div className="w-2 h-6 bg-slate-600 rounded-t"></div>
            <div className="w-3 h-8 bg-slate-700 rounded-t"></div>
            <div className="w-2 h-5 bg-slate-600 rounded-t"></div>
          </div>
        </div>

        {/* Forest areas */}
        <div className="absolute top-1/3 right-1/3">
          <div className="flex space-x-1">
            <div className="w-2 h-4 bg-green-800 rounded-full"></div>
            <div className="w-3 h-5 bg-green-700 rounded-full"></div>
            <div className="w-2 h-4 bg-green-800 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4">
          <div className="flex space-x-1">
            <div className="w-2 h-3 bg-green-800 rounded-full"></div>
            <div className="w-2 h-4 bg-green-700 rounded-full"></div>
            <div className="w-3 h-5 bg-green-800 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Jamshedpur (Home Base) */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse shadow-lg shadow-primary/50 border-3 border-white"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs semibold bg-green-500 text-gray-700 px-2 py-1 rounded font-semibold shadow-lg">
              Jamshedpur (Base)
            </span>
          </div>
        </div>
      </div>

      {/* Selected Location and Stores */}
      {selectedLocation && stores.length > 0 && (
        <>
          {/* Route Line */}
          {showRoute && (
            <div className="absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 animate-pulse z-10">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <NavigationIcon />
              </div>
            </div>
          )}
          
          {/* Destination Area */}
          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 z-10">
            <div className="space-y-2">
              {stores.map((store, index) => (
                <div
                  key={store.id}
                  className={`relative cursor-pointer transition-all duration-200 ${
                    selectedStore?.id === store.id ? 'scale-110' : 'hover:scale-105'
                  }`}
                  onClick={() => handleStoreClick(store)}
                  style={{
                    transform: `translate(${index * 15}px, ${index * 20}px)`,
                  }}
                >
                  <div className={`w-3 h-3 rounded-full shadow-lg border-2 border-white ${
                    selectedStore?.id === store.id 
                      ? 'bg-yellow-800 shadow-accent/50 animate-bounce' 
                      : 'bg-green-500 shadow-green-500/50'
                  }`}></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                    <span className={`text-xs px-2 py-1 rounded font-medium shadow-lg ${
                      selectedStore?.id === store.id
                        ? 'bg-gray-800 text-amber-400'
                        : 'bg-green-500 text-gray-700'
                    }`}>
                      {store.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

{/* Legend */}
<div className="absolute bottom-4 left-4 bg-[#1f1f1f]/90 backdrop-blur-sm rounded-lg p-3 space-y-2 border border-[#3c3c3c] shadow-lg z-10">
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 bg-yellow-400 rounded-full border border-white"></div>
    <span className="text-xs text-yellow-200">Jamshedpur (Base)</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 bg-green-500 rounded-full border border-white"></div>
    <span className="text-xs text-yellow-200">Available Stores</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 bg-yellow-500 rounded-full border border-white animate-pulse"></div>
    <span className="text-xs text-yellow-200">Selected Store</span>
  </div>
</div>


{/* Location Info */}
{selectedLocation && (
  <div className="absolute top-4 right-4 bg-[#1f1f1f]/90 backdrop-blur-sm rounded-lg p-3 border border-[#3c3c3c] shadow-lg z-10">
    <div className="flex items-center gap-2">
      <MapPinIcon />
      <span className="text-sm font-medium text-yellow-200">
        {locations.find(loc => loc.id === selectedLocation)?.name}
      </span>
    </div>
    <div className="text-xs text-yellow-400 mt-1">
      {stores.length} stores available
    </div>
  </div>
)}


{/* No Location Selected */}
{!selectedLocation && (
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="text-center text-yellow-400 bg-[#1f1f1f]/90 backdrop-blur-sm rounded-lg p-6 border border-[#3c3c3c] shadow-lg">
      <div className="mx-auto mb-4 w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-yellow-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
      <p className="text-lg font-semibold text-yellow-200">Select a destination location</p>
      <p className="text-sm text-yellow-500">to view available stores and routes</p>
    </div>
  </div>
)}

    </div>
  );
};

export default LocationMap;