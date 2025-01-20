'use client'

import { useState , useRef  } from 'react'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import food1 from "../../assets/Food/1.jpg"
import food2 from "../../assets/Food/2.jpg"
import food3 from "../../assets/Food/3.jpg"
import food4 from "../../assets/Food/4.jpg"
import food5 from "../../assets/Food/5.jpg"
import food6 from "../../assets/Food/6.jpg"
import food7 from "../../assets/Food/7.jpg"
import food8 from "../../assets/Food/8.jpg"
import food9 from "../../assets/Food/9.jpg"
import food10 from "../../assets/Food/10.jpg"
import food11 from "../../assets/Food/11.jpg"
import food12 from "../../assets/Food/12.jpg"
import food13 from "../../assets/Food/13.jpg"

// Mock product data
const products  = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    price: 12.99,
    image: food1,
    rating: 4.7,
    category: "Italian Cuisine",
  },
  {
    id: 2,
    name: "Sushi Platter",
    price: 18.99,
    image: food2,
    rating: 4.8,
    category: "Japanese Cuisine",
  },
  {
    id: 3,
    name: "Tacos Al Pastor",
    price: 9.99,
    image: food3,
    rating: 4.6,
    category: "Mexican Cuisine",
  },
  {
    id: 4,
    name: "Cheeseburger Deluxe",
    price: 11.49,
    image: food4,
    rating: 4.5,
    category: "American Cuisine",
  },
  {
    id: 5,
    name: "Margherita Pizza",
    price: 13.99,
    image: food5,
    rating: 4.9,
    category: "Italian Cuisine",
  },
  {
    id: 6,
    name: "Caesar Salad",
    price: 8.99,
    image: food6,
    rating: 4.4,
    category: "Salads",
  },
  {
    id: 7,
    name: "Butter Chicken",
    price: 14.99,
    image: food7,
    rating: 4.8,
    category: "Indian Cuisine",
  },
  {
    id: 8,
    name: "Pad Thai",
    price: 12.49,
    image: food8,
    rating: 4.7,
    category: "Thai Cuisine",
  },
  {
    id: 9,
    name: "Vegan Buddha Bowl",
    price: 10.99,
    image: food9,
    rating: 4.6,
    category: "Vegan Cuisine",
  },
  {
    id: 10,
    name: "Ramen Noodles",
    price: 13.49,
    image: food10,
    rating: 4.8,
    category: "Japanese Cuisine",
  },
  {
    id: 11,
    name: "Fish and Chips",
    price: 15.99,
    image: food11,
    rating: 4.5,
    category: "British Cuisine",
  },
  {
    id: 12,
    name: "Greek Gyro",
    price: 11.99,
    image: food12,
    rating: 4.7,
    category: "Greek Cuisine",
  },
  {
    id: 13,
    name: "Chocolate Lava Cake",
    price: 7.99,
    image: food13,
    rating: 4.9,
    category: "Desserts",
  }
];

export default function Product() {
  const [likedProducts, setLikedProducts] = useState<number[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleLike = (id: number) => {
    setLikedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const handleAddToCart = () => {

    if (!audioRef.current) {
      audioRef.current = new Audio('/public/AddToCart.mp3');
    }

    audioRef.current.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }


  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br  min-h-screen">
       <audio ref={audioRef} src="../../assets/AddToCartSound/AddToCart.mp3" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-32 overflow-hidden group">
                <img
                  src={product.image || "/placeholder.svg"}

    
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <Badge className="absolute top-1 left-1 text-xs bg-primary text-white">{product.category}</Badge>
                <Button 
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 h-6 w-6"
                  onClick={toggleLike}
                >
                  <Heart className={`h-3 w-3 ${likedProducts.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
              </div>
              <CardContent className="p-2">
                <h2 className="text-sm font-semibold mb-1 text-gray-800 truncate">{product.name}</h2>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-primary">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="ml-1 text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-2 bg-gray-50">
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-white text-xs font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

