'use client'

import { Home, Grid, Tag, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Grid, label: 'Category', href: '/category' },
  { icon: Tag, label: 'Offers', href: '/offers' },
  { icon: ShoppingCart, label: 'Cart', href: '/cart' },
  { icon: User, label: 'Account', href: '/account' },
]

export default function AnimatedNavBar() {
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2">
      <ul className="flex items-center space-x-6">
        {navItems.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <Link
              href={href}
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

