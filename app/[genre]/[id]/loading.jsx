export default function loading() {
  return (
    <div className="w-full animate-pulse">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        {/* Placeholder for the movie image */}
        <div className="rounded-lg bg-gray-300" style={{ width: '100%', maxWidth: '500px', height: '300px' }}></div>
        <div className="p-2 flex-1 space-y-4">
          {/* Placeholder for the movie title */}
          <div className="h-8 bg-gray-300 rounded"></div>
          {/* Placeholder for the movie overview */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
          {/* Placeholder for the movie release date */}
          <div className="h-2 bg-gray-300 rounded w-1/3"></div>
          {/* Placeholder for the movie rating */}
          <div className="h-2 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );

}
