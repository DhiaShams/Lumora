import React from "react";

const PrizePool = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
        PRIZES
      </h2>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Total Prize Pool */}
        <div
          className="
            bg-[#98c2c9]/40 dark:bg-[#1f2937]/70
            backdrop-blur-md
            rounded-xl
            p-6
            flex flex-col items-center justify-center
            shadow-sm hover:shadow-lg
            transition-all duration-300
            border border-white/20 dark:border-white/10
            hover:border-[#21b924]/20
          "
        >
          <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ₹1,00,000
          </div>
          <p className="text-sm md:text-base font-semibold tracking-wide text-gray-800 dark:text-gray-300">
            PRIZE POOL
          </p>
        </div>

        {/* Cash Prize */}
        <div
          className="
            bg-[#98c2c9]/40 dark:bg-[#1f2937]/70
            backdrop-blur-md
            rounded-xl
            p-6
            flex flex-col items-center justify-center
            shadow-sm hover:shadow-lg
            transition-all duration-300
            border border-white/20 dark:border-white/10
            hover:border-[#420ef5]/20
          "
        >
          <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ₹70,000
          </div>
          <p className="text-sm md:text-base font-semibold tracking-wide text-gray-800 dark:text-gray-300">
            IN CASH PRIZES
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrizePool;
