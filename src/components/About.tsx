import { motion } from 'framer-motion';
import aboutImg from '../assets/about2.jpg';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Imagen animada de derecha a izquierda */}
        <div className="col-md-6 mb-4 mb-md-0">
          <motion.img
            width={'400px'}
            height={'600px'}
            src={aboutImg}
            alt="Acerca de nosotros"
            className="img-fluid rounded shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        {/* Texto animado de arriba hacia abajo */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 
            className="mb-3"
            style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '2rem' }}
            >
            Estilo que habla por ti
            </h2>
          <p style ={{ fontFamily: 'TT Interphases, sans-serif',
            fontSize: '1rem'}}>
            Creemos que el diseño y los detalles marcan la diferencia. Nos dirigimos a hombres que valoran su imagen y buscan productos con estilo auténtico. Ofrecemos accesorios pensados para acompañarte en cualquier ocasión, combinando calidad, funcionalidad y carácter.
          </p>
          <p style ={{ fontFamily: 'TT Interphases, sans-serif',
            fontSize: '1rem'}}>
            Nuestro compromiso es brindarte una experiencia de compra moderna, segura y personalizada. Seleccionamos materiales resistentes, cuidamos cada entrega y respondemos con cercanía. Porque creemos que el estilo no solo se lleva, también se transmite.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
