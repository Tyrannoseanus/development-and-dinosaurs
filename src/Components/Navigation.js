import { NavLink } from 'react-router-dom'

function Navigation(props) {
    return (
        <nav className="orange" role="navigation">
            <div className="nav-wrapper container">
                <NavLink to="/" className="brand-logo hide-on-med-and-down"><img className="circle logo" src="/home.png" width={40} alt="Logo" /> Development and Dinosaurs</NavLink>
                <NavLink to="/" className="brand-logo hide-on-large-only"><img className="responsive-img circle center" src="home.png" alt="Logo" /></NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className={props.path === 'about' ? 'active' : 'inactive'}><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
