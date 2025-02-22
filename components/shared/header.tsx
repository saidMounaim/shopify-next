import React from "react";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4 mx-auto">
        <h1 className="text-2xl font-bold">Shopify Next</h1>
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-6 w-6" />
          <span className="sr-only">Shopping cart</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
