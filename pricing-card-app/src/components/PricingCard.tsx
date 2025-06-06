import React from 'react';

interface PricingCardProps {
  plan: string;           // Required: plan name
  price: string;          // Required: price string
  features: string[];     // Required: feature list
  isFeatured?: boolean;   // Optional: highlight flag
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  features, 
  isFeatured = false 
}) => {
  return (
    <div 
      className={`
        relative rounded-lg p-8 min-h-[400px] flex flex-col cursor-pointer
        transition-all duration-300 ease-in-out
        transform md:hover:scale-105 md:hover:shadow-2xl md:hover:-translate-y-2
        focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
        focus:scale-105 focus:shadow-2xl focus:-translate-y-2
        active:scale-95 active:transition-transform active:duration-100
        ${isFeatured 
          ? 'bg-slate-700 text-white shadow-xl md:hover:shadow-blue-500/25' 
          : 'bg-white text-gray-900 shadow-md md:hover:shadow-gray-500/25'
        }
      `}
      tabIndex={0}
      role="button"
      aria-label={`${plan} pricing plan - ${price}`}
    >
      {/* Plan name */}
      <h3 className={`
        text-lg font-medium mb-6 text-center transition-colors duration-300
        ${isFeatured ? 'text-white' : 'text-gray-900'}
      `}>
        {plan}
      </h3>

      {/* Price */}
      <div className="mb-8 text-center">
        <span className={`
          text-4xl font-bold transition-colors duration-300
          ${isFeatured ? 'text-white' : 'text-gray-900'}
        `}>
          {price}
        </span>
      </div>

      {/* Features list */}
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="text-center">
            <span className={`
              text-sm transition-colors duration-300
              ${isFeatured ? 'text-gray-200' : 'text-gray-600'}
            `}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      <button 
        className={`
          w-full py-3 px-6 rounded-md font-medium 
          transition-all duration-300 ease-in-out
          transform md:hover:scale-105 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-opacity-50
          ${isFeatured
            ? 'bg-blue-600 text-white md:hover:bg-blue-700 md:hover:shadow-lg focus:ring-blue-400'
            : 'bg-gray-900 text-white md:hover:bg-gray-800 md:hover:shadow-lg focus:ring-gray-600'
          }
        `}
        aria-label={`Subscribe to ${plan} plan`}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard; 