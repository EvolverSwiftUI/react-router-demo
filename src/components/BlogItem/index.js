
import './index.css'

const BlogItem = props => {
    const {blogData} = props;
    const {id, title, imageUrl, authorUrl, author, topic} = blogData;
    return(
        <div>
            <h1>{title}</h1>
            <img src={imageUrl} alt="img"/>
        </div>
    ) 
}

export default BlogItem;