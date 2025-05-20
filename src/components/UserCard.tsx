import { useState } from "react"
import userImg from '../assets/jugador.png';

export default function UserCard({user}:any) {

	const [isContacted, setIsContacted] = useState(false)

  const handleClick = () => {
    setIsContacted(!isContacted)
  }

  return (
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
					<button id={`${user.id}`} className="btn btn-primary btn-sm" onClick={() => handleClick()}>{isContacted ? 'Contactado' : 'Contactar'}</button>
				</div>
			</div>
    </li>
  )
}

// useEffect ejecuta codigo despues del componente, es decir, ejecuta
// toda la pagina ocomponente y luego lo que esta dentro del useEffect
// QUEDO 2:19:00 USEEFFECT