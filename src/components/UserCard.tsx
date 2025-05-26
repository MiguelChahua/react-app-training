import { useRef, useState } from "react"

export default function UserCard({user}:any) {

	const [isContacted, setIsContacted] = useState(false)

  const ref = useRef(0)

  const handleClick = () => {
    setIsContacted(!isContacted)
  }
  const handleIncreaseRef = () => {
    ref.current++
    console.log(ref)
  }

  console.log('renderizado')

  return (
    <li key={user.id} className="w-100" style={{ maxWidth: '500px' }}>
			<div className="d-flex align-items-center bg-light p-3 rounded shadow-sm">
				<img
					src={user.image}
					alt={user.firstName}
					className="rounded-circle me-3"
					style={{ width: '60px', height: '60px', objectFit: 'cover' }}
				/>
				<div>
					<h5 className="mb-1 text-dark">{user.firstName}</h5>
					<p className="mb-0 text-muted">{user.email}</p>
          <button id={user.id} onClick={handleIncreaseRef}>Aumentar ref</button>
					<button id={`${user.id}`} className="btn btn-primary btn-sm" onClick={() => handleClick()}>{isContacted ? 'Contactado' : 'Contactar'}</button>
				</div>
			</div>
    </li>
  )
}

// UseRef persistente y mutable