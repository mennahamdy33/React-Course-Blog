import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Author} from './AuthorPage';

export function AuthorList({ authors }) {
  var i =1

  return (
    // <ul>
    <div className="row">
    <div className="col-3">
     
    </div>
    <div className="col"> 
    <table className="table">
      <tbody>{
        
        authors.map((author) => (

       
        <tr class="inner-box">
          <td>
          <div >
            
                 <img className="images" width="100" height="100" src={`https://bootdey.com/img/Content/avatar/avatar${i=i<8?++i:1}.png` } alt="" />
              </div>

          </td>
            <td>
      <h3>{
      
        <AuthorItem value={author} />
        
      }
      
      </h3>
    {/* </ul> */}
    </td>
    </tr>
    ))}
    </tbody>
    
    </table>
    </div>
    </div>

  );
}

export function AuthorItem({ value }) {

  return (
    < >
      <li >
        <Link to={ `/authors/${value.id}` }
          state={{
            value,
          }}
          style={{ textDecoration: 'none' }} >{value.name}</Link>
      </li>
    </>
  );
}

export function Home() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setAuthors(json));
  }, []);
 
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark"><h1 style={{color:'white'}}>Home Page</h1></nav>
      
      <AuthorList
        authors={authors}
      />
    </>
  );
}
