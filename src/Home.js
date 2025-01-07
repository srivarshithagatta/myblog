import { useState,useEffect } from 'react'
import BlogList from './BlogList';
const Home = () => {
    const [name,setName]=useState("varshi");
    const [blogs,setBlogs]=useState([
    {title:"My Blog1", body:"Body of Blog1", author:"Ramu",id:1},
    {title:"My Blog2", body:"Body of Blog2", author:"Raju",id:2},
    {title:"My Blog3", body:"Body of Blog3", author:"Sindhu",id:3},
    ]);
    const handleDelete = (author)=>{
        const newblogs = blogs.filter(blog=>blog.author!==author)
        setBlogs(newblogs)
    };
    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs)
        console.log(name)
    },[name]);
    return (
    <div className="Home">
            <button onClick={()=>setName("Yashu")}>Click Me</button>

        <BlogList blogs = {blogs} title = "Hello varshi" handleDelete={handleDelete}/>

    </div>
    );
   }
   export default Home;
