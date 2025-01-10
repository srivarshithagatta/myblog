import { useState,useEffect } from 'react'
import BlogList from './BlogList';
const Home = () => {
    const [name,setName]=useState("Sindhu");
    const [blogs,setBlogs]=useState(null);
    const handleDelete = (author)=>{
        const newblogs = blogs.filter(blog=>blog.author!==author)
        setBlogs(newblogs)
    };
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
        return res.json();
        })
        .then(data => {
        setBlogs(data);
        })
        },[]);
    
    return (
    <div className="Home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
    );
   }
   export default Home;
