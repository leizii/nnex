
export default function SearchBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex justify-center">
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <input
          type="text"
          id="search-input"
          placeholder="搜索..."
          className="border border-gray-300 w-full py-2 pl-4 pr-10 rounded-full focus:ring-blue-500 focus:border-blue-500"
        />
        <button id="search-button" className="absolute inset-y-0 right-0 flex items-center px-3 bg-blue-500 rounded-r-full text-white hover:bg-blue-600">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};
