import { Truck, CheckCircle, CreditCard, Recycle } from 'lucide-react'

export default function FeatureSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
          What makes our brand different
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 mb-4 flex items-center justify-center">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Next day as standard</h3>
            <p className="text-muted-foreground">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Made by true artisans</h3>
            <p className="text-muted-foreground">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 mb-4 flex items-center justify-center">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Unbeatable prices</h3>
            <p className="text-muted-foreground">
              For our materials and quality you won't find better prices anywhere
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 mb-4 flex items-center justify-center">
              <Recycle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Recycled packaging</h3>
            <p className="text-muted-foreground">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

