import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-900 text-white p-5">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-gray-300 rounded-full w-12 h-12"></div>
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-sm text-teal-300">Inventory Manager</p>
          </div>
        </div>
        <nav className="space-y-3">
          <a href="#" className="block py-2 px-3 rounded hover:bg-teal-700">
            Employee Management
          </a>
          <a href="#" className="block py-2 px-3 bg-teal-700 rounded">
            Product Management
          </a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-teal-700">
            Order Management
          </a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-teal-700">
            Supplier Management
          </a>
        </nav>
        <button className="absolute bottom-5 left-5 text-gray-300 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-white">
        <h1 className="text-3xl font-bold mb-4">Augmentin</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <label className="block mb-2 text-gray-600">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Expiration Date</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Supplier</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Quantity</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Stored Temperature</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Shelf Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block mb-2 text-gray-600">Directions to Use</label>
          <textarea
            className="w-full p-2 border rounded bg-gray-100"
            rows={3}
            disabled
          ></textarea>
        </div>
        <div className="mt-6">
          <label className="block mb-2 text-gray-600">Side Effects</label>
          <textarea
            className="w-full p-2 border rounded bg-gray-100"
            rows={3}
            disabled
          ></textarea>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
