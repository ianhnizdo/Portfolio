import {Outlet, Link} from 'react-router-dom';

export default function Nav(){
    return(
        <section className="navigation">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-link" id="Home">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="nav-link" id="About">
                        <Link to={"/about"}>About Me</Link>
                    </li>
                    <li className="nav-link" id="Contact">
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li className="nav-link" id="Projects">
                        <Link to={'/projects'}>Projects</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}