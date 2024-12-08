import Image from "next/image"
import { Button } from "@/components/ui/button"
import RightImage from "../public/RightImage.png";
import Large from "../public/Large.png";
import Photo4 from "../public/Photo4.png";

export default function ListingSectionTwo() {
  return (
    <section className="py-16 px-4 md:px-6p-4 md:p-8 lg:p-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-primary mb-12">
          Our popular products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Poplar Sofa */}
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={Large}
                alt="The Poplar suede sofa"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl text-primary">The Poplar suede sofa</h3>
              <p className="text-lg text-primary">£980</p>
            </div>
          </div>

          {/* First Dandy Chair */}
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={RightImage}
                alt="The Dandy chair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl text-primary">The Dandy chair</h3>
              <p className="text-lg text-primary">£250</p>
            </div>
          </div>

          {/* Second Dandy Chair */}
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={Photo4}
                alt="The Dandy chair"
                fill
                className="object-cover bg-gray-100"
              />
            </div>
            <div>
              <h3 className="text-xl text-primary">The Dandy chair</h3>
              <p className="text-lg text-primary">£250</p>
            </div>
          </div>
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

