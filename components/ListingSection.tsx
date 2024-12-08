import Image from "next/image"
import { Button } from "@/components/ui/button"
import RightImage from "../public/RightImage.png";
import Photo1 from "../public/Photo1.png";
import Photo2 from "../public/Photo2.png";
import Photo3 from "../public/Photo3.png";

interface Product {
  name: string
  price: number
  image: any
}

const products: Product[] = [
  {
    name: "The Dandy chair",
    price: 250,
    image: RightImage,
  },
  {
    name: "Rustic Vase Set",
    price: 155,
    image: Photo1,
  },
  {
    name: "The Silky Vase",
    price: 125,
    image: Photo2,
  },
  {
    name: "The Lucy Lamp",
    price: 399,
    image: Photo3
  },
]

export default function ListingSection() {
  return (
    <section className="py-16 px-4 md:px-6p-4 md:p-8 lg:p-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-8">New ceramics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square relative mb-4 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-normal mb-1">{product.name}</h3>
              <p className="text-lg">£{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            className="min-w-[140px] text-base"
          >
            View collection
          </Button>
        </div>
      </div>
    </section>
  )
}

