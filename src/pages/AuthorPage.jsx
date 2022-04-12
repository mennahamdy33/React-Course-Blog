import { useLocation } from "react-router";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export function PostList({ posts }) {
    return (
      <div className="row">
      <div className="col-3">

      </div>
      <div className="col">
      <h2>Posts</h2>
        {posts.map((post) => (
          
          <div className="hov inner-box">{
          <PostItem value={post} />
                              }
          </div>
        ))}
      </div>
      </div>
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
            style={{ textDecoration: 'none',color:'white'}}>{value.title}</Link>
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
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <h1 style={{color:'white'}}>{data.state.value.name} </h1> </nav>
    <div >
    <table className="table">
    <thead>
    <th>
    E-mail
    </th>
    <th>
    Phone
    </th>
    <th>
    website
    </th>
    <th>
    company
    </th>
    </thead>
    <tbody>
    <tr>
     <td>{data.state.value.email} </td> 
    <td>{data.state.value.phone} </td>
    <td>{data.state.value.website} </td>    
    <td>{data.state.value.company.name} </td>
    </tr>
    </tbody>
    
    </table>
    </div>
    <div > 
    
    
     <PostList
     posts={posts}
     
     />
    </div>
    </>
    );
    }