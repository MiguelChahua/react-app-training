import { motion } from "framer-motion";

interface SRCProps {
    titulo: string
    descripcion: string
}

const ScrollRevealCard = ({titulo, descripcion} : SRCProps) => {
  return (
    <motion.div
        initial={{ opacity: 0, y:40 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration:0.6 }}
        viewport={{ once:true, amount:0.3 }}
        className="card"
    >
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
    </motion.div>
  )
}

export default ScrollRevealCard;