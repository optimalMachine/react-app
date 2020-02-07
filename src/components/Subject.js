import React from 'react';


class Subject extends React.Component{
    render(){
      return(
        <header>
          <a href='/'><h1>{this.props.title}</h1></a>
          {this.props.sub}
        </header>    
  
      );
    }
  }

  export default Subject;
