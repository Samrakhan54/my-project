import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductImage from "../../public/ProductImage.png";
import ProductImage1 from "../../public/ProductImage1.png";

export default function ShoppingCart() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:p-24 py-8 ">
        <h1 className="text-3xl font-bold text-[#1D1B33] mb-6">
          Your shopping cart
        </h1>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-4 text-sm font-medium">Product</th>
              <th className="py-4 text-sm font-medium">Quantity</th>
              <th className="py-4 text-sm font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1 */}
            <tr className="border-b border-gray-200">
              <td className="py-6 flex items-center space-x-4">
                <Image
                  src={ProductImage}
                  alt="Graystone Vase"
                  width={64}
                  height={64}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium text-[#1D1B33]">Graystone Vase</p>
                  <p className="text-sm text-gray-500">
                    A timeless ceramic vase with a tri-color gray glaze.
                  </p>
                  <p className="text-sm text-gray-800">£85</p>
                </div>
              </td>
              <td className="py-6">1</td>
              <td className="py-6">£85</td>
            </tr>
            {/* Product 2 */}
            <tr className="border-b border-gray-200">
              <td className="py-6 flex items-center space-x-4">
                <Image
                  src={ProductImage1}
                  alt="Basic White Vase"
                  width={64}
                  height={64}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium text-[#1D1B33]">Basic White Vase</p>
                  <p className="text-sm text-gray-500">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="text-sm text-gray-800">£125</p>
                </div>
              </td>
              <td className="py-6">1</td>
              <td className="py-6">£125</td>
            </tr>
          </tbody>
        </table>

        {/* Subtotal Section */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-lg font-medium">
            Subtotal <span className="text-xl font-bold">£210</span>
          </p>
          <Link
            href="/checkout"
            className="bg-[#1D1B33] text-white py-3 px-6 rounded-md text-sm font-medium"
          >
            Go to checkout
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Taxes and shipping are calculated at checkout!
        </p>
      </div>
      <Footer />
    </div>
  );
}
