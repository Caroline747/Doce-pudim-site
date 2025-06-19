
import { Button } from "@/components/ui/button"
import { Cake, Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-caramel-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-caramel-400 to-chocolate-500 rounded-full flex items-center justify-center">
              <Cake className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-chocolate-800">PudinArt</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-chocolate-700 hover:text-caramel-600 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-chocolate-700 hover:text-caramel-600 transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-chocolate-700 hover:text-caramel-600 transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-chocolate-700 hover:text-caramel-600 transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-chocolate-700 hover:text-caramel-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-caramel-500 to-caramel-600 hover:from-caramel-600 hover:to-caramel-700 text-white"
            >
              Peça Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-caramel-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-chocolate-700 hover:text-caramel-600 transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-chocolate-700 hover:text-caramel-600 transition-colors text-left"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-chocolate-700 hover:text-caramel-600 transition-colors text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-chocolate-700 hover:text-caramel-600 transition-colors text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-chocolate-700 hover:text-caramel-600 transition-colors text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-caramel-500 to-caramel-600 hover:from-caramel-600 hover:to-caramel-700 text-white w-full"
              >
                Peça Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
