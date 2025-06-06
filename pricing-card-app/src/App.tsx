import './App.css'
import PricingCard from './components/PricingCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-16">
          Pricing
        </h1>
        
        {/* PricingCard components matching the design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <PricingCard
            plan="Standard"
            price="$100"
            features={[
              "50,000 Requests",
              "4 contributors",
              "Up to 3 GB storage space"
            ]}
          />
          
          <PricingCard
            plan="Pro"
            price="$200"
            features={[
              "100,000 Requests",
              "7 contributors",
              "Up to 5 GB storage space"
            ]}
            isFeatured={true}
          />
          
          <PricingCard
            plan="Expert"
            price="$500"
            features={[
              "200,000 Requests",
              "11 contributors",
              "Up to 10 GB storage space"
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default App
