
import { Button } from "@/components/ui/button"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-chocolate-800 mb-6">
            Pudins Artesanais
            <span className="text-caramel-500"> Deliciosos</span>
          </h1>
          
          <p className="text-xl text-chocolate-600 mb-8 max-w-2xl mx-auto">
            Sabores únicos feitos com carinho e ingredientes selecionados. 
            Uma experiência doce que vai conquistar seu paladar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-caramel-500 hover:bg-caramel-600 text-white text-lg px-8 py-6"
            >
              Ver Sabores
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-caramel-500 text-caramel-600 hover:bg-caramel-50 text-lg px-8 py-6"
            >
              Fazer Pedido
            </Button>
          </div>

          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
              alt="Pudim delicioso"
              className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
