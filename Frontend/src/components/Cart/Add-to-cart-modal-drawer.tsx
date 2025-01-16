"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, Plus, Minus } from 'lucide-react'

// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
]

export default function AddToCartModalDrawer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([])

  const addToCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { id: productId, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
      return prevCart.filter((item) => item.id !== productId)
    })
  }

  const getQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id)
    return sum + (product ? product.price * item.quantity : 0)
  }, 0)

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Add to Cart Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <h2 className="text-lg font-semibold mb-4">Add to Cart</h2>
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              View Cart ({totalItems} items)
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
              <ScrollArea className="h-[300px]">
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.id)
                  return product ? (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <span>{product.name}</span>
                      <div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : null
                })}
              </ScrollArea>
              <div className="mt-4">
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
              </div>
              <Button className="w-full mt-4">Checkout</Button>
            </div>
          </DrawerContent>
        </Drawer>
        <ScrollArea className="h-[300px] mt-4">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between items-center mb-2">
              <span>{product.name} - ${product.price}</span>
              <div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeFromCart(product.id)}
                  disabled={getQuantity(product.id) === 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-2">{getQuantity(product.id)}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => addToCart(product.id)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

