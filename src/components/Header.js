import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='light-blue lighten-3'>
            <div className='nav-wrapper'>
                <a href='/react-recipe-website' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/react-recipe-website/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/react-recipe-website/contact'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
