'use client'

import { Home, Grid, Tag, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: Grid, label: 'Category', to: '/category' },
  { icon: Tag, label: 'Offers', to: '/offers' },
  { icon: ShoppingCart, label: 'Cart', to: '/cart' },
  { icon: User, label: 'Account', to: '/account' },
]

export default function AnimatedNavBar() {
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2">
      <ul className="flex items-center space-x-6">
        {navItems.map(({ icon: Icon, label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className={`flex flex-col items-center ${
                activeItem === label ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveItem(label)}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: activeItem === label ? 1.2 : 1,
                  y: activeItem === label ? -5 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              <span className="sr-only">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
