import Link from "next/link";
import { Button } from "@/components/ui/button"; // Importing Button from ShadCN
import { Input } from "@/components/ui/input"; // Optional for the search bar
import { Search, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const categories = [
    { name: "Plant pots", href: "#" },
    { name: "Ceramics", href: "#" },
    { name: "Tables", href: "#" },
    { name: "Chairs", href: "#" },
    { name: "Crockery", href: "#" },
    { name: "Tableware", href: "#" },
    { name: "Cutlery", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4  ">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between border-b">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <div className="hidden md:block">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Link href="/">
          <h1 className="text-xl ">
            Avion
          </h1>
          </Link>
          <div className="flex items-center gap-2">
          <Link href="/cart">

            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex h-12 items-center justify-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
