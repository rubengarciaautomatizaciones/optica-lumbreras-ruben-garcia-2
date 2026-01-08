import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Eye, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Colecciones", href: "#colecciones" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-primary leading-none tracking-tight">OPTICA</span>
              <span className="font-display font-bold text-xl text-secondary leading-none tracking-tight">LUMBRERAS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="font-display tracking-wide bg-gradient-to-r from-primary to-[#FF5C6C]">
              Pedir Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 text-foreground/80 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-2" size="lg">Pedir Cita</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
