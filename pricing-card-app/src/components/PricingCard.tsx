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
        relative rounded-lg border p-4 sm:p-6 shadow-sm transition-all duration-200
        w-full max-w-sm mx-auto sm:max-w-none
        ${isFeatured 
          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500' 
          : 'border-gray-200 bg-white hover:shadow-lg'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
      tabIndex={0}
      role="button"
      aria-label={`${plan} pricing plan`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">
        {plan}
      </h3>

      {/* Price */}
      <div className="mb-4 sm:mb-6 text-center sm:text-left">
        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
          {price}
        </span>
      </div>

      {/* Features list */}
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-sm sm:text-base text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button 
        className={`
          w-full py-2 sm:py-3 px-4 rounded-md font-medium transition-colors duration-200
          text-sm sm:text-base
          ${isFeatured
            ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
            : 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900'
          }
          focus:outline-none focus:ring-2 focus:ring-offset-2
        `}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard; 