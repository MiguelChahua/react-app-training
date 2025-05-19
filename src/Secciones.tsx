import userImg from '../src/assets/jugador.png';

const users = [
  { id: 1, name: 'Miguel Angel', description: 'Frontend Developer' },
  { id: 2, name: 'Lucía Torres', description: 'UX Designer' },
  { id: 3, name: 'Carlos Pérez', description: 'Full Stack Developer' }
];

export const Secciones = () => {

  const handleClick = (name:any) => {
    console.log(`Contactando a ${name}`)
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Usuarios</h2>
      <ul className="list-unstyled d-flex flex-column align-items-center gap-3">
        {users.map(({id,name,description}) => (
          <li key={id} className="w-100" style={{ maxWidth: '500px' }}>
            <div className="d-flex align-items-center bg-light p-3 rounded shadow-sm">
              <img
                src={userImg}
                alt={name}
                className="rounded-circle me-3"
                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              />
              <div>
                <h5 className="mb-1 text-dark">{name}</h5>
                <p className="mb-0 text-muted">{description}</p>
                <button id={`${id}`} className="btn btn-primary btn-sm" onClick={() => handleClick(name)}>Contactar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Se agrego en button id un `${}` ya que en typsript se usa restrictivamente el id en string a difereencia del JSX que si permite solo con id