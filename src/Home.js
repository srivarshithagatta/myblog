


import {useState} from "react";


const Home = () => {
    
    const [blogs, setBlogs]=useState(
        [
            {'title':'Salaar','body': 'action movie', 'author':'Prashanth'},
            {'title':'Kalki','body': 'Scifi movie', 'author':'Nag Ashwin'},
            {'title':'Vikram','body': 'action movie', 'author':'lokesh'}
        ]

    )

    return ( 

        <div className="home">
            { 
                blogs.map((blog) => (
                    <div className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p> Written by: {blog.author}</p>
                    </div>
                    
                ))
            }
        </div>

     );
}

export default Home;