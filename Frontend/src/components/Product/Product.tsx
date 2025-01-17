import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Chef1 from '../../assets/Chef/Chef1.png';
import Chef2 from '../../assets/Chef/Chef2.png';
import Chef3 from '../../assets/Chef/Chef3.png';
import Chef4 from '../../assets/Chef/Chef4.png';

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Professional Chef Package",
      image: Chef1,
      price: 299.99,
      description: "Complete professional chef equipment set"
    },
    {
      id: 2,
      name: "Premium Kitchen Bundle",
      image: Chef2,
      price: 399.99,
      description: "Premium kitchen tools and accessories"
    },
    {
      id: 3,
      name: "Gourmet Cooking Set",
      image: Chef3,
      price: 249.99,
      description: "Essential gourmet cooking equipment"
    },
    {
      id: 4,
      name: "Master Chef Collection",
      image: Chef4,
      price: 449.99,
      description: "Ultimate master chef professional kit"
    }
  ];

  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-6xl mx-auto">
       
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                
                    ${product.price.toFixed(2)}
                  
                  <Button 
                 
                    onClick={() => alert(`Added ${product.name} to cart!`)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;