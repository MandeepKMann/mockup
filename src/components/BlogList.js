import { Link } from "react-router-dom";
import blogContent from "../blogContent.js";

const BlogList = ({setBlogLink}) => {

    const clickHandler = (e) => {
        const linkId = e.target.id
        setBlogLink(linkId)
    }

    const numberOfSections = 3;
    const chunkSize = Math.ceil(blogContent.length / numberOfSections);

    const slicedData = [];
    for (let i = 0; i < blogContent.length; i += chunkSize) {
        slicedData.push(blogContent.slice(i, i + chunkSize));
    }
    console.log(slicedData)



    return (
        <section className="blogListSection">
            <div className="wrapper">
                <h3>Coluptate velit esse cillum</h3>

                <div className="blogList">

                    {slicedData.map((blogRow, index) => {
                        return (
                            <div className="blogRow" key={index}>
                                {blogRow.map((blogPost, index) => {
                                    return (
                                        <div className="blogInfo" key={index}>
                                            <div className="blogImgContainer">
                                                <img src={blogPost.previewImg} alt={blogPost.alt} />
                                            </div>
                                            <div className="blogText">
                                                <p>{blogPost.previewText}</p>
                                                <Link to="/blog" id={blogPost.id} onClick={clickHandler}>{blogPost.title}</Link>
                                            </div>
                                        </div>
                                    )
                                })}                   
                            </div>
                        )
                    })}
                </div>
            </div>{/*END wrapper*/}
        </section>
    )
}

export default BlogList;