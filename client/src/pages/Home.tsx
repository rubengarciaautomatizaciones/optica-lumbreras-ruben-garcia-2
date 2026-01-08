import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { AppointmentModal } from "@/components/AppointmentModal";
import { Phone, Eye, ScanEye, Activity, Smile, MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 lg:pt-32 overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl -z-10 opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10 opacity-50" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/10 text-secondary font-semibold text-sm tracking-wide">
                NUEVA COLECCIÓN 2024 DISPONIBLE
              </div>
              <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
                Tu salud visual con <span className="text-primary">estilo propio</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Expertos en optometría clínica y las últimas tendencias en moda óptica en Puerto Lumbreras. Cuidamos de tus ojos mientras realzamos tu mirada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30">
                  <Phone className="mr-2 h-5 w-5" /> Llamar Ahora
                </Button>
                <AppointmentModal>
                  <Button size="lg" variant="outline" className="border-2 font-semibold">
                    Reservar Cita
                  </Button>
                </AppointmentModal>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative z-10 w-full max-w-md lg:max-w-full">
                {/* Image Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2.5rem] rotate-6 opacity-20 transform translate-x-4 translate-y-4" />
                {/* woman wearing glasses smiling bright background */}
                <img 
                  src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mujer sonriendo con gafas" 
                  className="relative rounded-[2.5rem] shadow-2xl w-full h-auto object-cover aspect-[4/5]"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">HORARIO HOY</p>
                    <p className="text-sm font-bold text-foreground">Abierto hasta las 13:30</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicios" className="py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Servicios Clínicos
            </h2>
            <p className="text-lg text-muted-foreground">
              Tecnología avanzada y atención personalizada para garantizar tu salud visual integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Eye}
              title="Examen Visual"
              description="Evaluación completa de tu agudeza visual y salud ocular con tecnología de última generación."
              color="bg-primary"
              delay={0}
            />
            <ServiceCard 
              icon={ScanEye}
              title="Contactología"
              description="Adaptación de lentes de contacto personalizadas, incluyendo orto-k y lentes progresivas."
              color="bg-secondary"
              delay={0.1}
            />
            <ServiceCard 
              icon={Activity}
              title="Tensión Ocular"
              description="Control y prevención del glaucoma mediante la medición precisa de la presión intraocular."
              color="bg-[#FF5C6C]" // soft red
              delay={0.2}
            />
            <ServiceCard 
              icon={Smile}
              title="Asesoría Estética"
              description="Te ayudamos a encontrar la montura perfecta que se adapte a tu rostro y estilo personal."
              color="bg-[#FFC300]" // mustard
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* COLLECTIONS SECTION */}
      <section id="colecciones" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Tendencias</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Las mejores marcas, <br/>el mejor estilo.
              </h2>
            </div>
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors">
              Ver Catálogo Completo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            {/* fashion glasses on table */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
            >
              <img 
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" 
                alt="Gafas de sol" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display font-bold text-2xl text-white mb-2">Gafas de Sol</h3>
                <p className="text-white/80 mb-4">Protégete con estilo este verano.</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:underline decoration-primary decoration-2 underline-offset-4">
                  Descubrir Colección
                </span>
              </div>
            </motion.div>

            {/* Collection 2 */}
            {/* reading glasses close up */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] md:-mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop" 
                alt="Gafas graduadas" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display font-bold text-2xl text-white mb-2">Graduadas</h3>
                <p className="text-white/80 mb-4">Monturas ligeras y resistentes.</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:underline decoration-secondary decoration-2 underline-offset-4">
                  Descubrir Colección
                </span>
              </div>
            </motion.div>

            {/* Collection 3 */}
            {/* kid wearing glasses */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
            >
              <img 
                src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800&auto=format&fit=crop" 
                alt="Gafas infantiles" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display font-bold text-2xl text-white mb-2">Infantil</h3>
                <p className="text-white/80 mb-4">Diversión y resistencia para los peques.</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:underline decoration-[#FF99C8] decoration-2 underline-offset-4">
                  Descubrir Colección
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="font-display font-bold text-4xl mb-8">Visítanos en Puerto Lumbreras</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Dirección</h4>
                      <p className="text-muted-foreground">Calle Mably, 8<br/>30890 Puerto Lumbreras, Murcia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Horario</h4>
                      <p className="text-muted-foreground">
                        <span className="block">Lunes a Viernes: 10:00 - 13:30 | 17:00 - 20:30</span>
                        <span className="block mt-1">Sábados: 10:00 - 13:30</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF99C8]/20 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Contacto</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:968000000" className="block hover:text-primary font-medium">968 00 00 00</a>
                        <a href="mailto:info@opticalumbreras.es" className="block hover:text-primary">info@opticalumbreras.es</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                   <AppointmentModal>
                      <Button className="w-full md:w-auto" size="lg">Solicitar Cita Ahora</Button>
                   </AppointmentModal>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-[400px] lg:h-auto w-full relative group overflow-hidden">
                {/* stylized map view of street */}
                <img 
                   src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop"
                   alt="Mapa de ubicación"
                   className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg font-bold text-gray-800 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary fill-primary" />
                    Ver en Google Maps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <Eye className="w-6 h-6 text-primary" />
               <span className="font-display font-bold text-xl">OPTICA LUMBRERAS</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Óptica Lumbreras. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Aviso Legal</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34600000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="white" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
}
