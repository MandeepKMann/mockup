import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'


const NavMenu = () => {
    return (
        <nav>
            <div className="wrapper navFlex">
                <div className="navLeft">
                    <div className="hamburgerMenu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="navImgContainer">
                        <img src="https://placebear.com/100/50" alt="placeholder of a brown bear" />
                    </div>
                    <ul className="navLinks">
                        <Link to="/">Home</Link>
                        <li><a href="https://github.com/MandeepKMann/mockup">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/mandeepkmann/">LinkedIn</a></li>
                        <li><a href="https://findtheinvisiblecow.com/">Find the Cow</a></li>
                        <li><a href="https://explore.org/livecams/cats/kitten-rescue-cam">Kitten Cam</a></li>
                    </ul>
                </div>

                <div className="loginServices navRight">
                    <button>Subscribe</button>
                    <a href="https://github.com/MandeepKMann/mockup">Sign in</a>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu;