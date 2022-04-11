import { useLocation } from "react-router";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export function PostList({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <PostItem value={post} />
        ))}
      </ul>
    );
  }
  
  export function PostItem({ value }) {
    return (
      <>
        <li>
          <Link to={ `/posts/${value.id}`}
            state={{
              value,
            }}
            >{value.title}</Link>
        </li>
      </>
    );
  }
  
export function Author(props){
    let data = useLocation();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${data.state.value.id}/posts`)
        .then((response) => response.json())
        .then((json) => setPosts(json));
    }, [data.state.value.id]);
  
    console.log(posts);
    return (<>
    <h1>Author Page: {data.state.value.name} </h1>
    <p>Author email: {data.state.value.email} </p>
    <p>Author phone: {data.state.value.phone} </p>
    <p>Author website: {data.state.value.website} </p>    
    <p>Author company: {data.state.value.company.name} </p>
    <h2>Posts:</h2>
    <PostList
        posts={posts}
        
      />
    </>
    );
    }