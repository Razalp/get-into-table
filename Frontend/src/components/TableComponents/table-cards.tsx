import { TableCard } from "./table-card"

interface Table {
  name: string
  description: string
  imageUrl: string
}

interface TableCardsProps {
  tables: Table[]
}

export function TableCards({ tables }: TableCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tables.map((table, index) => (
        <TableCard key={index} {...table} />
      ))}
    </div>
  )
}

