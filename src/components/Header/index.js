import { Link } from 'react-router-dom';
import './index.css'

const Header = () => (
    <nav>
        <div>
            <h1> My Blog </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header;