import { useParams } from "react-router-dom";


const BlogDetails = ({blogData}) => {
    const {id} = useParams();
    const blogPost = blogData.find((blogPost) => blogPost.id === id);

    return (
        <div className="dynamicPost" key={blogPost.id}>
            <div className="wrapper">
                <h1 className="title">{blogPost.title}</h1>
            </div>
            <div className="postImageContainer">
                <img src={blogPost.src} alt={blogPost.alt} />
            </div>
            <div className="subtitleContainer">
                <div className="wrapper">
                    <p className="subtitle">{blogPost.subtitle}</p>
                </div>
            </div>
            <div className="wrapper">
                <div className="postText">{blogPost.content}</div>
            </div>
        </div>
    )

}

export default BlogDetails;