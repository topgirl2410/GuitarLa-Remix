import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from '../components/navegacion';

function Header() {
    
    return (
        <header className='header'>
            <div className="contenedor barra">
                <Link
                    to='/'
                    className="logo">
                    <img className='logo' src={logo} alt='imagen logo' />
                </Link>
                <Navegacion />
            </div>
        </header>
    )
}

export default Header
