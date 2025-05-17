import userImg from '../src/assets/jugador.png';

const users = [
  { id: 1, name: 'Miguel Angel', description: 'Frontend Developer' },
  { id: 2, name: 'Lucía Torres', description: 'UX Designer' },
  { id: 3, name: 'Carlos Pérez', description: 'Full Stack Developer' }
];

export const Secciones = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Usuarios</h2>
      <ul className="list-unstyled d-flex flex-column align-items-center gap-3">
        {users.map((user) => (
          <li key={user.id} className="w-100" style={{ maxWidth: '500px' }}>
            <div className="d-flex align-items-center bg-light p-3 rounded shadow-sm">
              <img
                src={userImg}
                alt={user.name}
                className="rounded-circle me-3"
                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              />
              <div>
                <h5 className="mb-1 text-dark">{user.name}</h5>
                <p className="mb-0 text-muted">{user.description}</p>
                <button className="btn btn-primary btn-sm">Contactar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Se agrega formulario y coton queda min 1:26:45 Aprende REACT desde CERO - Curso COMPLETO