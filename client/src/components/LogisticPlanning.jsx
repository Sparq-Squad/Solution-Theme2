import React, { useState, useRef } from 'react';

// Mock store and delivery partner data
const stores = [
  { id: 1, name: 'Downtown Electronics', lat: 40.7589, lng: -73.9851, address: '123 Broadway, NYC', inventory: 45, distance: 0.5 },
  { id: 2, name: 'Tech Hub Central', lat: 40.7505, lng: -73.9934, address: '456 5th Ave, NYC', inventory: 32, distance: 1.2 },
  { id: 3, name: 'Gadget World', lat: 40.7614, lng: -73.9776, address: '789 Madison Ave, NYC', inventory: 28, distance: 0.8 },
  { id: 4, name: 'Electronics Plus', lat: 40.7549, lng: -73.9840, address: '321 Park Ave, NYC', inventory: 15, distance: 0.3 },
  { id: 5, name: 'Digital Store', lat: 40.7488, lng: -73.9857, address: '654 7th Ave, NYC', inventory: 52, distance: 1.0 },
];

const deliveryPartners = [
  { id: 1, name: 'FastDelivery Pro', rating: 4.8, deliveryTime: '1-2 hours', cost: 8.99, coverage: 'Manhattan', orders: 1247 },
  { id: 2, name: 'QuickShip Express', rating: 4.6, deliveryTime: '2-4 hours', cost: 6.99, coverage: 'NYC Metro', orders: 892 },
  { id: 3, name: 'RapidRun Logistics', rating: 4.7, deliveryTime: '1-3 hours', cost: 7.99, coverage: 'Brooklyn & Manhattan', orders: 1056 },
  { id: 4, name: 'SpeedyGo', rating: 4.5, deliveryTime: '3-5 hours', cost: 5.99, coverage: 'All NYC', orders: 678 },
  { id: 5, name: 'InstantMove', rating: 4.9, deliveryTime: '30-60 min', cost: 12.99, coverage: 'Manhattan Only', orders: 2134 },
];

const LogisticPlanning = () => {
  const mapRef = useRef(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [searchAddress, setSearchAddress] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('distance');

  // Simple map visualization
  const MapComponent = () => (
    <div ref={mapRef} className="w-full h-96 bg-gray-100 rounded-lg relative overflow-hidden">
      {/* Map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="text-gray-300">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Store markers */}
      {stores.map((store, index) => (
        <div
          key={store.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
            selectedStore === store.id ? 'scale-125 z-10' : 'hover:scale-110'
          }`}
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${30 + (index * 10)}%`,
          }}
          onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${
            selectedStore === store.id ? 'bg-red-500' : 'bg-blue-500'
          }`}>
            {index + 1}
          </div>
          {selectedStore === store.id && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border text-xs whitespace-nowrap z-20">
              <p className="font-medium">{store.name}</p>
              <p className="text-gray-500">{store.inventory} units</p>
              <p className="text-gray-500">{store.distance} mi away</p>
            </div>
          )}
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
        <h4 className="font-medium text-sm mb-2">Store Locations</h4>
        <div className="flex items-center space-x-2 text-xs">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Available Stores</span>
        </div>
        <div className="flex items-center space-x-2 text-xs mt-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Selected Store</span>
        </div>
      </div>

      {/* Search overlay */}
      <div className="absolute top-4 left-4 right-4">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search address or location..."
              value={searchAddress}
              onChange={(e) => setSearchAddress(e.target.value)}
              className="pl-10 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-lg"
            />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm shadow-lg hover:bg-blue-700 transition-colors">
            Locate
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Logistic Planning</h1>
        <p className="text-gray-600">Optimize your supply chain and delivery operations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Stores</p>
                <p className="text-2xl font-bold text-gray-900">{stores.length}</p>
                <p className="text-sm text-green-600 mt-1">All operational</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                📍
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Delivery Partners</p>
                <p className="text-2xl font-bold text-gray-900">{deliveryPartners.length}</p>
                <p className="text-sm text-green-600 mt-1">Active</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                🚚
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Avg. Delivery Time</p>
                <p className="text-2xl font-bold text-gray-900">2.3h</p>
                <p className="text-sm text-green-600 mt-1">15% faster</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                ⏱️
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Inventory</p>
                <p className="text-2xl font-bold text-gray-900">{stores.reduce((sum, store) => sum + store.inventory, 0)}</p>
                <p className="text-sm text-green-600 mt-1">Units available</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                📦
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Store Locations & Coverage Map</h2>
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-700">Sort by:</label>
              <div className="relative">
                <select 
                  value={filterCriteria}
                  onChange={(e) => setFilterCriteria(e.target.value)}
                  className="w-32 pl-3 pr-8 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="distance">Distance</option>
                  <option value="inventory">Inventory</option>
                  <option value="name">Name</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <MapComponent />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Store Listings */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Closest Stores</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {stores
                .sort((a, b) => {
                  if (filterCriteria === 'distance') return a.distance - b.distance;
                  if (filterCriteria === 'inventory') return b.inventory - a.inventory;
                  return a.name.localeCompare(b.name);
                })
                .map((store) => (
                  <div 
                    key={store.id} 
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedStore === store.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{store.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{store.address}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center">
                            <span className="mr-1">📍</span>
                            <span>{store.distance} mi</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-1">📦</span>
                            <span>{store.inventory} units</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        store.inventory > 30 
                          ? 'bg-green-100 text-green-800' 
                          : store.inventory > 15 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {store.inventory > 30 ? 'High Stock' : store.inventory > 15 ? 'Medium' : 'Low Stock'}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Delivery Partners */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Delivery Partners</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {deliveryPartners
                .sort((a, b) => b.rating - a.rating)
                .map((partner) => (
                  <div key={partner.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900">{partner.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>⭐ {partner.rating}</span>
                          <span>•</span>
                          <span>{partner.orders} orders completed</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                        {partner.coverage}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Delivery Time</p>
                        <p className="font-medium">{partner.deliveryTime}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Cost</p>
                        <p className="font-medium">${partner.cost}</p>
                      </div>
                    </div>
                    
                    <button className="w-full mt-3 px-4 py-1.5 text-sm rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                      Select Partner
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Route Optimization */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mt-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Route Optimization Recommendations</h2>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <span className="text-lg">🛣️</span>
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Optimal Delivery Route</h4>
                <p className="text-sm text-blue-700 mb-3">
                  Based on current orders and store inventory, we recommend the following delivery sequence:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span>Electronics Plus (0.3 mi) - High priority orders</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span>Downtown Electronics (0.5 mi) - Bulk inventory</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span>Gadget World (0.8 mi) - Medium priority</span>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-3">
                  Estimated time savings: 25 minutes | Fuel cost reduction: $12.50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticPlanning;