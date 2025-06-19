
import { Cake, Instagram, Facebook, MessageCircle, Mail, Phone } from "lucide-react"

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-chocolate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-caramel-400 to-caramel-500 rounded-full flex items-center justify-center">
                <Cake className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PudinArt</span>
            </div>
            <p className="text-gray-300 mb-4">
              Pudins artesanais feitos com amor e ingredientes selecionados. 
              Tradição familiar há mais de 20 anos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-caramel-500 rounded-full flex items-center justify-center hover:bg-caramel-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-caramel-500 rounded-full flex items-center justify-center hover:bg-caramel-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-caramel-500 rounded-full flex items-center justify-center hover:bg-caramel-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-caramel-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-caramel-400 transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-caramel-400 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-caramel-400 transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-caramel-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nossos Sabores</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Pudim de Leite Condensado</li>
              <li>Pudim de Chocolate</li>
              <li>Pudim de Coco</li>
              <li>Pudim de Maracujá</li>
              <li>Pudim de Baunilha</li>
              <li>Pudim de Café</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-caramel-400" />
                <span className="text-gray-300">(11) 9 8765-4321</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-caramel-400" />
                <span className="text-gray-300">contato@pudinart.com.br</span>
              </div>
              <div className="text-gray-300">
                <p>Rua das Delícias, 123</p>
                <p>Centro, São Paulo - SP</p>
                <p>CEP: 01234-567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-chocolate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 PudinArt. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-caramel-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-caramel-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-300 hover:text-caramel-400 text-sm transition-colors">
                Política de Entrega
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
