
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"
import { useState } from "react"

const Products = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const products = [
    {
      id: 1,
      name: "Pudim de Leite Condensado",
      description: "O clássico que nunca sai de moda. Cremoso e com aquele gostinho especial de leite condensado.",
      price: "R$ 25,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 156,
      badge: "Mais Vendido"
    },
    {
      id: 2,
      name: "Pudim de Chocolate",
      description: "Para os amantes do chocolate! Intenso e cremoso, feito com chocolate belga premium.",
      price: "R$ 28,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 134,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Pudim de Coco",
      description: "Sabor tropical que transporta você para o paraíso. Feito com coco fresco ralado.",
      price: "R$ 26,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 98,
      badge: "Novo"
    },
    {
      id: 4,
      name: "Pudim de Maracujá",
      description: "A acidez perfeita do maracujá em uma sobremesa refrescante e deliciosa.",
      price: "R$ 27,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      reviews: 89,
      badge: ""
    },
    {
      id: 5,
      name: "Pudim de Baunilha",
      description: "Suave e aromático, feito com essência natural de baunilha importada.",
      price: "R$ 26,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 112,
      badge: ""
    },
    {
      id: 6,
      name: "Pudim de Café",
      description: "Para os apreciadores do café! Intenso e marcante, perfeito para qualquer hora.",
      price: "R$ 29,00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 76,
      badge: "Especial"
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-chocolate-800 mb-6">
            Nossos <span className="text-caramel-500">Sabores</span>
          </h2>
          <p className="text-xl text-chocolate-600 max-w-3xl mx-auto">
            Cada pudim é uma obra de arte culinária, preparado com ingredientes selecionados 
            e técnicas tradicionais para garantir o sabor perfeito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-amber-50/30 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-caramel-500 text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-chocolate-600">
                      {product.rating} ({product.reviews} avaliações)
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-chocolate-800 mb-2">{product.name}</h3>
                  <p className="text-chocolate-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-caramel-600">{product.price}</span>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-caramel-500 to-caramel-600 hover:from-caramel-600 hover:to-caramel-700 text-white"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-caramel-500 text-caramel-600 hover:bg-caramel-50"
          >
            Ver Todos os Sabores
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Products
