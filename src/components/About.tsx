
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users } from "lucide-react"

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada pudim é preparado com carinho e dedicação."
    },
    {
      icon: Award,
      title: "Ingredientes Premium",
      description: "Utilizamos apenas ingredientes da melhor qualidade."
    },
    {
      icon: Users,
      title: "Tradição Familiar",
      description: "Receitas tradicionais passadas de geração em geração."
    }
  ]

  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate-800 mb-4">
            Por Que Escolher <span className="text-caramel-500">Nossos Pudins?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-white/80">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-caramel-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-chocolate-800 mb-2">{feature.title}</h3>
                <p className="text-chocolate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
