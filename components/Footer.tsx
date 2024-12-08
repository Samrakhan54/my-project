import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#1D1B33] text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h4 className="font-bold mb-4">Our company</h4>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div>
            <h4 className="font-bold mb-4">Join our mailing list</h4>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-[#322F50] text-white border-none focus:ring-2 focus:ring-[#675B8C]"
              />
              <Button className="bg-white text-[#1D1B33] px-4">Sign up</Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#322F50] mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-[#675B8C]">LinkedIn</a>
            <a href="#" className="text-white hover:text-[#675B8C]">Facebook</a>
            <a href="#" className="text-white hover:text-[#675B8C]">Instagram</a>
            <a href="#" className="text-white hover:text-[#675B8C]">Skype</a>
            <a href="#" className="text-white hover:text-[#675B8C]">Twitter</a>
            <a href="#" className="text-white hover:text-[#675B8C]">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
