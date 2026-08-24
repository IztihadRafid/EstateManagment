export const SkeletonPropertyContent = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 bg-gray-200 animate-pulse">
          <div className="absolute top-4 left-4 w-24 h-8 bg-gray-300 rounded-full animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="h-10 bg-gray-200 rounded animate-pulse mb-3 w-3/4" />
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3 mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                >
                  <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto mb-2 w-8" />
                  <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto mb-2 w-12" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse mx-auto w-16" />
                </div>
              ))}
            </div>
            <div className="mb-8">
              <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 w-32" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
              </div>
            </div>
            <div>
              <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 w-24" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 h-96 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
