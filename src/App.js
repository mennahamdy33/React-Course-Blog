import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/HomePage';
import {Author} from './pages/AuthorPage';
import {Post} from './pages/PostPage';
function App() {
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='authors/:id' element={<Author/>}/>
  <Route path='posts/:id' element={<Post/>}/>
</Routes>
  );
}

export default App;
