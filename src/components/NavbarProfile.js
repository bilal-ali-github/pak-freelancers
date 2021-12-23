const NavbarProfile = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/logo-white.svg" className="navbar-logo ms-5"></img>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/search">
                                Find Work <i className="fas fa-search"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Messages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">
                                Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="/">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarProfile