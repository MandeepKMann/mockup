import { Link } from "react-router-dom";
import blogContent from "../blogContent.js";
import '../styles/BlogList.css';

const BlogList = ({setBlogLink, blogLink}) => {

    // https://stackoverflow.com/questions/34404289/map-array-sections-to-new-array
    // Determines the size and amount of sections I want to divie up my blogContent array into
    // const numberOfSections = 3;
    // const chunkSize = Math.ceil(blogContent.length / numberOfSections);

    //loops through and slices the blogContent array into the sized determined above, and pushed them into a new jaggedArray 
    // const jaggedArray = [];
    // for (let i = 0; i < blogContent.length; i += chunkSize) {
    //     jaggedArray.push(blogContent.slice(i, i + chunkSize));
    // }
    
    // sets the state and stores the user selection in local storage
    const clickHandler = (e) => {
        setBlogLink(e.target.id)
        localStorage.setItem("blogLink", e.target.id)
    }

    return (
        <section className="blogListSection">
            <div className="wrapper">
                <h3>Coluptate velit esse cillum</h3>

                    <div className="blogListContainer">
                        <div className="line lineOne"></div>
                        <div className="line lineTwo"></div>
                
                        <div className="blogList">
                            {blogContent.map((blogPost, index) => {
                                return (
                                    <div className="blogInfo" key={index}>
                                        <div className="blogImgContainer">
                                            <img src={blogPost.previewImg} alt={blogPost.alt} />
                                        </div>
                                        <div className="blogText">
                                            <p>{blogPost.previewText}</p>
                                            {/* Finds the id of the clicked link and changes the state of the BlogLink to the target id */}
                                            <Link to="/blog" id={blogPost.id} onClick={clickHandler}>{blogPost.title}</Link>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                    {/* Maps through the jaggedArray and place them into sections */}
                    {/* {jaggedArray.map((blogRow, index) => {
                        return (
                            <div className="blogRow" key={index}> */}
                                {/* map through  the sections to display content on page*/}
                                {/* {blogRow.map((blogPost, subIndex) => { */}
                                    {/* // return (
                                    //     <div className="blogInfo" key={subIndex}>
                                    //         <div className="blogImgContainer">
                                    //             <img src={blogPost.previewImg} alt={blogPost.alt} />
                                    //         </div>
                                    //         <div className="blogText">
                                    //             <p>{blogPost.previewText}</p> */}
                                                {/* Finds the id of the clicked link and changes the state of the BlogLink to the target id */}
                                                {/* <Link to="/blog" id={blogPost.id} onClick={(e) => {setBlogLink(e.target.id)}}>{blogPost.title}</Link>
                                            </div>
                                        </div>
                                    )
                                })}                   
                            </div>
                        )
                    })} */}
                </div>
            </div>{/*END wrapper*/}
        </section>
    )
}

export default BlogList;