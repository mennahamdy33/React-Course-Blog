import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Author} from './AuthorPage';
export function AuthorList({ authors }) {
  return (
    <ul>
      {authors.map((author) => (
        <AuthorItem value={author} />
      ))}
    </ul>
  );
}

export function AuthorItem({ value }) {
  return (
    <>
      <li>
        <Link to={ `/authors/${value.id}`}
          state={{
            value,
          }}
          >{value.name}</Link>
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
      <h1>Home Page</h1>
      <AuthorList
        authors={authors}
      />
    </>
  );
}
