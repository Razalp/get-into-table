import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TableIcon, ChairIcon } from "./furniture-icons"

interface FurnitureCardProps {
  name: string
  description: string
  type: "table" | "chair"
  color: string
}

export function FurnitureCard({ name, description, type }: FurnitureCardProps) {
  const Icon = type === "table" ? TableIcon : ChairIcon

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className={` py-6`}>
        <div className="flex justify-center">
          <Icon className={`w-24 h-24 `} />
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className="text-2xl font-bold mb-2">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  )
}
