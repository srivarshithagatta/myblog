const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const author = props.author;
    const handleDelete = props.handleDelete;
    /*   <button onClick={()=>handleDelete(blog.author)}>Delete Blog</button>
    to delete all the authors.
*/
    return ( 
        <div className="BlogList">
            <h1>{title}</h1>
            <div className="home">
            

    {blogs.map((blog) => (
    <div className="blog-preview" key={blog.id}>
    <h2>{blog.title}</h2>
    <p>Written by: {blog.author}</p>
    <button onClick={()=>handleDelete(blog.author)}>Delete Blog</button>

    </div>
    ))
    }
    </div>
        </div>
     );
}
 
export default BlogList;
