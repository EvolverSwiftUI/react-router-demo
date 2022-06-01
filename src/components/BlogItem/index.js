
import { Link } from 'react-router-dom';
import './index.css'

const BlogItem = props => {
    const {blogData} = props;
    const {id, title, imageUrl, authorUrl, author, topic} = blogData;
    return(
        <Link to={`blogs/${id}`}>
            <div>
                <h1>{title}</h1>
                <img src={imageUrl} alt="img"/>
            </div>
        </Link>
    ) 
}

export default BlogItem;