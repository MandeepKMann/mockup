const NavMenu = () => {
    return (
        <nav>
            <div className="wrapper navFlex">
                <div className="navLeft">
                    <div className="hamburgerMenu">
                    {/* HAMBURGER ICON HERE */}
                    </div>
                    <div className="navImgContainer">
                        <img src="https://placebear.com/100/50" alt="placeholder of a brown bear" />
                    </div>
                    <ul className="navLinks">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>

                <div className="loginServices navRight">
                    <button>Subscribe</button>
                    <a href="#">Sign in</a>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu;