import { Link } from "react-router-dom";

const Header = props => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Budget Tracking App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Statement</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;