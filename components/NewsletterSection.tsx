import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="bg-white ">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1D1B33]">
          Join the club and get the benefits
        </h2>
        <p className="text-gray-600 mt-4">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <form
          className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4"
        //   onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="your@email.com"
            className="w-full md:w-1/3 bg-gray-100 text-gray-600 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#675B8C]"
          />
          <Button className="bg-[#1D1B33] text-white px-6 py-3 rounded-md">
            Sign up
          </Button>
        </form>
      </div>
    </section>
  );
}
