// import React, { useEffect } from 'react';
// import './App.css'; // You can include your global styles here

// function Header() {
//   return (
//     <header>
//       <h1>Welcome to the Blog</h1>
//     </header>
//   );
// }

// function NewBlogButton() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '../script.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <p>If you want to make a new post, click the button below!</p>
//       <button id="newBlog">New Blog!</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <NewBlogButton />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//pages
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <BrowserRouter>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/AddBlog" component={AddBlog} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Navigate to="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
  
export default App;