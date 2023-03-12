import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerContent">
                    <div className="footerLinks">
                        <div className="footerImgContainer">
                            <img src="https://placebear.com/100/50" alt="placeholder of a brown bear" />
                        </div>

                        <div className="footerUl">
                            <ul className="socialLinks">
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup"><FontAwesomeIcon icon={faTwitter}/></a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup"><FontAwesomeIcon icon={faInstagram}/></a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup"><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                            </ul>

                            <ul className="contactLinks">
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                                <li><a href="https://github.com/MandeepKMann/mockup" target="_blank" rel="norefferer">Link</a></li>
                            </ul>
                        </div>


                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ratione quo? Aut iure mollitia deleniti. Debitis reprehenderit cum quae hic facilis. Distinctio deserunt minus ducimus dignissimos. Voluptatibus dolore eum quis.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;