import { FaDice } from 'react-icons/fa'

function Header() {

  return (

    <header className="header">

      <div className="logo">
        <FaDice />
      </div>

      <h1 className="titulo">
        Prize draw
      </h1>

      <p>
        Sorteador com React
      </p>

    </header>

  )
}

export default Header