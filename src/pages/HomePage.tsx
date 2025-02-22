import { Link } from 'react-router-dom';
import { Search, Home, MapPin, Bed, Bath, ChevronDown, Heart } from 'lucide-react';

function HomePage() {
  const listings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      price: 849000,
      beds: 4,
      baths: 3,
      sqft: 2800,
      address: '123 Maple Street',
      city: 'West Caldwell',
      state: 'NJ',
      zip: '07006',
      type: 'House for sale',
      agency: 'Premier Real Estate',
      openHouse: 'Open: Sun 1-3pm (2/23)',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      price: 525000,
      beds: 3,
      baths: 2,
      sqft: 1650,
      address: '456 Oak Avenue',
      city: 'West Caldwell',
      state: 'NJ',
      zip: '07006',
      type: 'Townhouse for sale',
      agency: 'Luxury Homes Group',
      openHouse: 'Open: Sat 1-3pm (2/22)',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      price: 325000,
      beds: 1,
      baths: 2,
      sqft: 1650,
      address: '123 Oak Avenue',
      city: 'Caldwell',
      state: 'NJ',
      zip: '07006',
      type: 'Townhouse for sale',
      agency: 'Luxury Homes Group',
      openHouse: 'Open: fri 1-3pm (2/22)',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-600">realtor.ai</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/signin"
                className="text-gray-600 hover:text-gray-900"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex space-x-4">
              <button className="px-4 py-2 border rounded-lg flex items-center space-x-2 hover:border-gray-400">
                <span>Price</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="px-4 py-2 border rounded-lg flex items-center space-x-2 hover:border-gray-400">
                <span>Beds & Baths</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="px-4 py-2 border rounded-lg flex items-center space-x-2 hover:border-gray-400">
                <span>Home Type</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  {listing.openHouse}
                </div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold mb-2">
                  ${listing.price.toLocaleString()}
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-2">
                  <span className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {listing.beds} beds
                  </span>
                  <span className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {listing.baths} baths
                  </span>
                  <span>{listing.sqft.toLocaleString()} sqft</span>
                </div>
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <div>{listing.address}</div>
                    <div>{`${listing.city}, ${listing.state} ${listing.zip}`}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <span>{listing.type}</span>
                  <span className="mx-2">•</span>
                  <span>{listing.agency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;