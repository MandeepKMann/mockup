import { Link } from "react-router-dom";

const BlogList = ({setBlogLink, blogLink}) => {

    const clickHandler = (e) => {
        const linkId = e.target.id
        setBlogLink(linkId)
    }


    return (
        <section className="blogListSection">
            <div className="wrapper">
                <h3>Coluptate velit esse cillum</h3>

                <div className="blogList">
                    <div className="blogRow">
                        <div className="blogInfo">
                            <div className="blogImgContainer">
                                <img src="https://placebear.com/200/200" alt="placeholder of a brown bear in water" />
                            </div>
                            <div className="blogText">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                <Link to="/blog" id="blog1" onClick={clickHandler}>Blog One</Link>
                            </div>
                        </div>
                        <div className="blogInfo">
                            <div className="blogImgContainer">
                                <img src="https://placebear.com/200/200" alt="placeholder of a brown bear in water" />
                            </div>
                            <div className="blogText">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                <Link to="/blog" id="blog2" onClick={clickHandler}>Blog Two</Link>
                            </div>
                        </div>                        
                    </div>
                    <div className="blogRow">
                        <div className="blogInfo">
                            <div className="blogImgContainer">
                                <img src="https://placebear.com/200/200" alt="placeholder of a brown bear in water" />
                            </div>
                            <div className="blogText">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                <Link to="/blog" id="blog3" onClick={clickHandler}>Blog Three</Link>
                            </div>
                        </div>
                        <div className="blogInfo">
                            <div className="blogImgContainer">
                                <img src="https://placebear.com/200/200" alt="placeholder of a brown bear in water" />
                            </div>
                            <div className="blogText">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                <Link to="/blog" id="blog4" onClick={clickHandler}>Blog Four</Link>
                            </div>
                        </div>                        
                    </div>
                    <div className="blogRow">
                        <div className="blogInfo">
                            <div className="blogImgContainer">
                                <img src="https://placebear.com/200/200" alt="placeholder of a brown bear in water" />
                            </div>
                            <div className="blogText">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                <Link to="/blog" id="blog5" onClick={clickHandler}>Blog Five</Link>
                            </div>
                        </div>
                        <div className="blogInfo">
                            <div className="blogImgContainer">
                                <img src="https://placebear.com/200/200" alt="placeholder of a brown bear in water" />
                            </div>
                            <div className="blogText">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                <Link to="/blog" id="blog6" onClick={clickHandler}>Blog Six</Link>
                            </div>
                        </div>                        
                    </div>                                                       
                </div>
            </div>
        </section>
    )
}

export default BlogList;