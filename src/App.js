import React from 'react';
import './App.css';


class Subject extends React.Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web~!
      </header>    

    );
  }
}

class TOC extends React.Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href='1.html'>HTML</a></li>
          <li><a href='2.html'>CSS</a></li>
          <li><a href='3.html'>Javascript</a></li>

        </ul>
      </nav>


    );
  }
}

class Content extends React.Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }

}

export default App;
