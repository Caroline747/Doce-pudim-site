
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Pudim de Leite Condensado",
      description: "O clássico cremoso com aquele gostinho especial.",
      price: "R$ 25,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Pudim de Chocolate",
      description: "Intenso e cremoso, feito com chocolate premium.",
      price: "R$ 28,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Pudim de Coco",
      description: "Sabor tropical com coco fresco ralado.",
      price: "R$ 26,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Pudim de Maracujá",
      description: "Refrescante com a acidez perfeita do maracujá.",
      price: "R$ 27,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-800 mb-4">
            Nossos <span className="text-caramel-500">Sabores</span>
          </h2>
          <p className="text-lg text-chocolate-600 max-w-2xl mx-auto">
            Cada pudim é preparado com carinho e ingredientes selecionados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-chocolate-800 mb-2">{product.name}</h3>
                  <p className="text-chocolate-600 mb-3 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-caramel-600">{product.price}</span>
                    <Button size="sm" className="bg-caramel-500 hover:bg-caramel-600 text-white">
                      Pedir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
