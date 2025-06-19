
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    })
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-caramel-50 to-chocolate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-chocolate-800 mb-6">
            Entre em <span className="text-caramel-500">Contato</span>
          </h2>
          <p className="text-xl text-chocolate-600 max-w-3xl mx-auto">
            Pronto para saborear nossos pudins artesanais? Entre em contato conosco 
            e faça seu pedido. Estamos aqui para adoçar seu dia!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl text-chocolate-800">Faça seu Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Seu nome completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-caramel-200 focus:border-caramel-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-caramel-200 focus:border-caramel-500"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu telefone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-caramel-200 focus:border-caramel-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Conte-nos sobre seu pedido (sabores, quantidade, data de entrega...)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="border-caramel-200 focus:border-caramel-500"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-caramel-500 to-caramel-600 hover:from-caramel-600 hover:to-caramel-700 text-white py-6 text-lg"
                >
                  Enviar Pedido
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramel-400 to-caramel-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-800 mb-2">Endereço</h3>
                    <p className="text-chocolate-600">
                      Rua das Delícias, 123<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramel-400 to-caramel-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-800 mb-2">Telefone</h3>
                    <p className="text-chocolate-600">
                      (11) 9 8765-4321<br />
                      (11) 3456-7890
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramel-400 to-caramel-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-800 mb-2">E-mail</h3>
                    <p className="text-chocolate-600">
                      contato@pudinart.com.br<br />
                      pedidos@pudinart.com.br
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramel-400 to-caramel-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-800 mb-2">Horário de Funcionamento</h3>
                    <p className="text-chocolate-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 16h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-chocolate-800 mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" className="border-caramel-300 text-caramel-600 hover:bg-caramel-50">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button size="sm" variant="outline" className="border-caramel-300 text-caramel-600 hover:bg-caramel-50">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button size="sm" variant="outline" className="border-caramel-300 text-caramel-600 hover:bg-caramel-50">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
