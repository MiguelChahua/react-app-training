import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const Secciones = () => {

  const [users, setUsers] = useState<User[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(data=>{
      setUsers(data.users)
      setCargando(false)
    })
    .catch(err=>{
      console.error('Error al cargar usuarios: ',err)
      setCargando(false)
    })
  },[])

  if (cargando) return <p>Cargando usuarios...</p>
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
// ¿Qué es useEffect?
// useEffect es un hook de React que te permite ejecutar código como efecto secundario en un componente.

// ¿Qué son efectos secundarios?
// Son acciones fuera del ciclo normal de renderizado, como:
// Llamadas a APIs
// Modificar el DOM directamente
// Suscribirse a eventos
// Temporizadores (setTimeout, setInterval)
// etc.


// useEffect ejecuta codigo despues del componente, es decir, ejecuta
// toda la pagina ocomponente y luego lo que esta dentro del useEffect
// Validando
