import { FurnitureCard } from "./furniture-card"

interface Furniture {
  name: string
  description: string
  type: "table" | "chair"
  color: string
}

interface FurnitureCardsProps {
  items: Furniture[]
}

export function FurnitureCards({ items }: FurnitureCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <FurnitureCard key={index} {...item} />
      ))}
    </div>
  )
}

