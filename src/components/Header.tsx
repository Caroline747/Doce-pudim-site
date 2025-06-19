
import { Button } from "@/components/ui/button"
import { Cake } from "lucide-react"

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-caramel-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-caramel-500 rounded-full flex items-center justify-center">
              <Cake className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-chocolate-800">PudinArt</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-chocolate-700 hover:text-caramel-600"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-chocolate-700 hover:text-caramel-600"
            >
              Sabores
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-chocolate-700 hover:text-caramel-600"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-chocolate-700 hover:text-caramel-600"
            >
              Contato
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-caramel-500 hover:bg-caramel-600 text-white"
          >
            Peça Agora
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
