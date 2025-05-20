import UserCard from './components/UserCard';

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
          <UserCard key={user.id} user={user}/>
        ))}
      </ul>
    </div>
  );
};

// Se agrego en button id un `${}` ya que en typsript se usa restrictivamente el id en string a difereencia del JSX que si permite solo con id