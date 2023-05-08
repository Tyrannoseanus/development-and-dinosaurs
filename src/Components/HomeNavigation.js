import { NavLink } from 'react-router-dom'

function HomeNavigation(props) {
    return (
        <nav className="orange" role="navigation">
            <div className="nav-wrapper container">
                <div className="brand-logo center"><img className="bigLogo circle" src="home.png" alt="Logo" /></div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className={props.path === 'about' ? 'active' : 'inactive'}><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default HomeNavigation;
