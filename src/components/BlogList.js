import { Link } from "react-router-dom";
import blogContent from "../blogContent.js";

const BlogList = ({setBlogLink}) => {

    //Finds the id of the clicked link and changes the state of the BlogLink to the target id
    const clickHandler = (e) => {
        const linkId = e.target.id
        setBlogLink(linkId)
    }

    // https://stackoverflow.com/questions/34404289/map-array-sections-to-new-array
    // Determines the size and amount of sections I want to divie up my blogContent array into
    const numberOfSections = 3;
    const chunkSize = Math.ceil(blogContent.length / numberOfSections);

    //loops through and slices the blogContent array into the sized determined above, and pushed them into a new jaggedArray 
    const jaggedArray = [];
    for (let i = 0; i < blogContent.length; i += chunkSize) {
        jaggedArray.push(blogContent.slice(i, i + chunkSize));
    }
    console.log(jaggedArray)



    return (
        <section className="blogListSection">
            <div className="wrapper">
                <h3>Coluptate velit esse cillum</h3>

                <div className="blogList">
                    {/* Maps through the jaggedArray and place them into sections */}
                    {jaggedArray.map((blogRow, index) => {
                        return (
                            <div className="blogRow" key={index}>
                                {/* map through  the sections to display content on page*/}
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