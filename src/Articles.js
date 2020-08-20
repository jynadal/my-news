import React, {useState, useEffect} from "react";


//const API_URL = "http://newsapi.org/v2/everything?q=apple&from=2020-08-19&to=2020-08-19&sortBy=popularity&apiKey=0ae6c474f16d443785d6e79535c20bda";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
            

function Articles() {
    const [posts, setPosts] = useState([]);
    const [errors, setErrors] = useState(false);
 
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(posts => {
            //console.log(data)
            setPosts(posts)})
        //.catch(err => setErrors(err));

    },[]);    

return(
    <div>
        {posts.map((post, index) => (
            <ul key={index}>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        )
        )}
    </div>
);

}

export default Articles;