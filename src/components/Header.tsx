import bgHeader from '../assets/bg-header3.jpg';

const Header = () => {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center text-white text-center"
      style={{
        width: '100vw', // Imagen ocuapra ancho de la ventana
        margin: 0,
        padding: 0,
        height: '600px', // Altura fija
        backgroundImage: `url(${bgHeader})`, // Usamos la imagen con este atributo
        backgroundSize: 'cover', // Hace que la imagen se adapte y llene todo el espacio
        backgroundPosition: 'center', // Imagen al centro
        backgroundRepeat: 'no-repeat', // No repetir imagen para llenar espacio
      }}
    >
      <div
        className='text-center d-flex flex-column align-items-center'
        style={{ maxWidth: '800px', padding: '0 20px' }}
      >
        <h1 style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '3rem' }}>
          Accesorios Tauro
        </h1>
        <p
          style={{
            fontFamily: 'TT Interphases, sans-serif',
            fontSize: '1.25rem',
            marginBottom: '1.5rem',
          }}
        >
          Detalles que extienden tu forma de ser
        </p>
        <button className="btn btn-danger px-4 py-2">
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default Header;
