import { Component } from "react";

class BlogItemDetails extends Component {
    state = {blogData: {}};

    componentDidMount() {
        this.getBlogItemData()
    }

    getBlogItemData = async () => {
        const {match} = this.props;
        const {params} = match;
        const {id} = params;
        console.log(id);
        const apiUrl = `https://apis.ccbp.in/blogs/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const updatedData = {
            title: data.title,
            imageUrl: data.image_url,
            content: data.content,
            avatarUrl: data.avatar_url,
            author: data.author,
        }
        this.setState({blogData: updatedData});
    }

    renderBlogItemDetails = () => {
        const {blogData} = this.state;
        const {title, imageUrl, content, avatarUrl, author} = blogData;
        return(
            <div>
                <h1>{title}</h1>
                <img src={avatarUrl} alt='avatar' />
                <p>{author}</p>
                <img src={imageUrl} alt="img"/>
                <p>{content}</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderBlogItemDetails()}
            </div>
        )
    }
}

export default BlogItemDetails;