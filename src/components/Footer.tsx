
import { Cake, Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-chocolate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-caramel-500 rounded-full flex items-center justify-center">
                <Cake className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PudinArt</span>
            </div>
            <p className="text-gray-300">
              Pudins artesanais feitos com amor e ingredientes selecionados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Sabores</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Leite Condensado</li>
              <li>Chocolate</li>
              <li>Coco</li>
              <li>Maracujá</li>
            </ul>
          </div>

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
            </div>
          </div>
        </div>

        <div className="border-t border-chocolate-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 PudinArt. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
