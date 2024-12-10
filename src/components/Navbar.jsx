import logo from '../assets/react.svg'

function Navbar () {
    return (
        <header className='header'>
            <nav className='nav'>
                <img src={logo} className='logo' alt='React logo' />
                <span className='logo-text'>ReactFacts</span>
            </nav>
        </header>
    )
}

export default Navbar;