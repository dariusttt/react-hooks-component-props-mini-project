import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {Blogdata.name} />
       <About image = { blogData.image } />
       <ArticleList posts={blogData.posts} />
  
    </div>
  );
}

export default App;
