
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Utensils } from "lucide-react"

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada pudim é preparado com carinho e dedicação, seguindo receitas tradicionais de família."
    },
    {
      icon: Utensils,
      title: "Ingredientes Premium",
      description: "Utilizamos apenas ingredientes da melhor qualidade, selecionados especialmente para nossos pudins."
    },
    {
      icon: Award,
      title: "Receitas Artesanais",
      description: "Técnicas tradicionais combinadas com inovação para criar sabores únicos e inesquecíveis."
    },
    {
      icon: Users,
      title: "Tradição Familiar",
      description: "Três gerações de conhecimento culinário aplicado em cada sobremesa que produzimos."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-caramel-50 to-chocolate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-chocolate-800 mb-6">
              Nossa <span className="text-caramel-500">História</span>
            </h2>
            <p className="text-lg text-chocolate-600 mb-6 leading-relaxed">
              Há mais de 20 anos, a PudinArt nasceu do sonho da Dona Maria de compartilhar 
              suas receitas familiares com o mundo. O que começou como uma pequena produção 
              caseira, hoje se tornou referência em pudins artesanais.
            </p>
            <p className="text-lg text-chocolate-600 mb-8 leading-relaxed">
              Cada pudim carrega em si a tradição e o amor que sempre fizeram parte da nossa 
              família. Utilizamos apenas ingredientes selecionados e técnicas tradicionais 
              para garantir que cada sobremesa seja uma experiência única e memorável.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/70 rounded-xl">
                <div className="text-3xl font-bold text-caramel-600 mb-2">20+</div>
                <div className="text-sm text-chocolate-700">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl">
                <div className="text-3xl font-bold text-caramel-600 mb-2">1000+</div>
                <div className="text-sm text-chocolate-700">Clientes Felizes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-caramel-400 to-caramel-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-chocolate-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-chocolate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
