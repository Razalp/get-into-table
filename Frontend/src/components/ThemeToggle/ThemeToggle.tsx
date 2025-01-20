import type React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  )
}

export default ThemeToggle
