
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-caramel-300 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-chocolate-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-caramel-200 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-chocolate-600">Mais de 1000 clientes satisfeitos</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-chocolate-800 mb-6 leading-tight">
              Pudins
              <span className="text-caramel-500"> Artesanais</span>
              <br />
              Irresistíveis
            </h1>
            
            <p className="text-xl text-chocolate-600 mb-8 leading-relaxed">
              Descubra o sabor autêntico dos nossos pudins caseiros, feitos com ingredientes selecionados 
              e muito carinho. Uma experiência doce que vai conquistar seu paladar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('products')}
                className="bg-gradient-to-r from-caramel-500 to-caramel-600 hover:from-caramel-600 hover:to-caramel-700 text-white text-lg px-8 py-6"
              >
                Ver Cardápio
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2 border-caramel-500 text-caramel-600 hover:bg-caramel-50 text-lg px-8 py-6"
              >
                Nossa História
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-chocolate-800">500+</div>
                <div className="text-sm text-chocolate-600">Pudins vendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chocolate-800">15+</div>
                <div className="text-sm text-chocolate-600">Sabores únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chocolate-800">5★</div>
                <div className="text-sm text-chocolate-600">Avaliação média</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
                alt="Pudim delicioso"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate-700">Disponível agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
