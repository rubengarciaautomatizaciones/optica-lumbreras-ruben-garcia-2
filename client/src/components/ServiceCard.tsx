import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, color, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      <div 
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${color}`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
