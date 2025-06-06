import './App.css'
import PricingCard from './components/PricingCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Pricing Plans
        </h1>
        
        {/* PricingCard components demonstration - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <PricingCard
            plan="Basic"
            price="$9.99/month"
            features={[
              "10 GB Storage",
              "Email Support",
              "Basic Analytics",
              "1 User Account"
            ]}
          />
          
          <PricingCard
            plan="Pro"
            price="$19.99/month"
            features={[
              "100 GB Storage",
              "Priority Support",
              "Advanced Analytics",
              "5 User Accounts",
              "API Access"
            ]}
            isFeatured={true}
          />
          
          <PricingCard
            plan="Enterprise"
            price="$49.99/month"
            features={[
              "Unlimited Storage",
              "24/7 Phone Support",
              "Custom Analytics",
              "Unlimited Users",
              "Full API Access",
              "Custom Integrations"
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default App
