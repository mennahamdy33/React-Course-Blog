import { useLocation } from "react-router";
import {useState, useEffect} from 'react';

export function CommentList({ comments }) {
    return (
      <ul>
        {comments.map((comment) => (
          <CommentItem value={comment} />
        ))}
      </ul>
    );
  }
  
  export function CommentItem({ value }) {
    return (
      <>
        <li>
        name: {value.name}
        <br/>  
        email: {value.email}
        <br/>  
        body: {value.body}
          
        </li>
      </>
    );
  }
  
export function Post(){
    let data = useLocation();
    const [comments, setComments] = useState([]);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${data.state.value.id}/comments`)
        .then((response) => response.json())
        .then((json) => setComments(json));
    }, [data.state.value.id]);
  
    console.log(comments);
    return (<>
    <h1>Post Page: {data.state.value.title} </h1>
    <p>post body: {data.state.value.body} </p>
    <h2>comments:</h2>
    <CommentList
        comments={comments}
        
      />
    </>
    );
    }