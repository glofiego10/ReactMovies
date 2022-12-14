import logo from './logo.svg';
import './App.css';
import CompShowBlog from './blog/ShowBlogs.jsx';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlog/>}></Route>
          <Route path='/create' element={<CompCreateBlog/>}></Route>
          <Route path='/edit/:id' element={<CompEditBlog/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
  