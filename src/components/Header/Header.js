import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css';

function Header() {

    //get all cookie history break ';' and '=' characters, decrease informations in key and value, arrange keys and decode values
    var cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((acumulator, [key, value]) => (
        {...acumulator, [key.trim()]: decodeURIComponent(value) }),
    {});

    return (
        <header>
            <nav className='upheader'>
                <span>
                    <Link to='/store' className='logo'>ParrotCloud_</Link>
                </span>
                <div className='searchbar'>
                    <input
                        type='text'
                        className='searchTerm'
                        placeholder='Search...'
                    />
                </div>
                <button className='cart'>
                    <AiOutlineShoppingCart />
                </button>
                <span>
                    <Link to='/profile' className='login'>{cookies.username || cookies.email}</Link>
                </span>
            </nav>

            <ul>
                <li><Link to='/community'>Community</Link></li>
            </ul>
        </header>
    );
}

export default Header;