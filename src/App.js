import React from 'react';
import Articles from './Articles';
import './App.css';

function App() {
  return (
    <div className="App">
      <Articles />     
    </div>

  );
}

export default App;

// fetch("http://newsapi.org/v2/everything?q=apple&from=2020-08-19&to=2020-08-19&sortBy=popularity&apiKey=0ae6c474f16d443785d6e79535c20bda").then(response =>
//   response.json()
// ).then(results => {
//   console.log(results);
// });
