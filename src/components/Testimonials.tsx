
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      location: "São Paulo, SP",
      text: "Simplesmente o melhor pudim que já comi na vida! A textura é perfeita e o sabor é incrível. Já virei cliente fiel!",
      rating: 5,
      avatar: "AS"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ",
      text: "Encomendei para o aniversário da minha esposa e foi um sucesso total. Todos os convidados elogiaram muito!",
      rating: 5,
      avatar: "CM"
    },
    {
      id: 3,
      name: "Mariana Costa",
      location: "Belo Horizonte, MG",
      text: "O pudim de chocolate é divino! Super cremoso e com um sabor marcante. Recomendo de olhos fechados!",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 4,
      name: "Pedro Santos",
      location: "Salvador, BA",
      text: "Qualidade excepcional e entrega super rápida. O atendimento também é nota 10. Parabéns pelo trabalho!",
      rating: 5,
      avatar: "PS"
    },
    {
      id: 5,
      name: "Julia Oliveira",
      location: "Brasília, DF",
      text: "Já experimentei vários sabores e todos são maravilhosos. O de maracujá é o meu favorito!",
      rating: 5,
      avatar: "JO"
    },
    {
      id: 6,
      name: "Roberto Lima",
      location: "Fortaleza, CE",
      text: "Produtos de altíssima qualidade. Dá para sentir o carinho e dedicação em cada pudim. Recomendo muito!",
      rating: 5,
      avatar: "RL"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-chocolate-800 mb-6">
            O Que Nossos <span className="text-caramel-500">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-chocolate-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre nossos pudins artesanais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-caramel-400 opacity-60" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-chocolate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramel-400 to-caramel-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-chocolate-800">{testimonial.name}</div>
                    <div className="text-sm text-chocolate-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-chocolate-600">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-medium">4.9/5 baseado em 500+ avaliações</span>
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
