const Header = () => {
    return (
        <header className='Header'>
            <div className='Header-main'>
                <img className='Logo-header' src="../src/assets/MH-Logo.png" alt="Logo" />
                <h1>
                    <a className='Title-bold'>M </a><a className='Title-semibold'>u </a><a className='Title-Medium'>s </a><a className='Title-regular'>i </a><a className='Title-light'>c </a>
                    <a className='Title-regular'>
                    House
                    </a>
                </h1>
            </div>
            <div className='Header-sec'>
                <h4 className='slogan'>Marcá tu ritmo</h4>
            </div>
        </header>
    )
  }

  export default Header