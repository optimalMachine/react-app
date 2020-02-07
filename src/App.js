import React from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject:{title:'WEB', sub:'World Wide Web'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information.'},
        {id:2, title:'CSS', desc:'CSS is for design.'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive.'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if (this.state.mode === 'welcome'){
      
    }else if(this.state.mode==='read'){

    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title='HTML' desc='HTML is HyperText Markup Language'></Content>
      </div>
    );
  }

}

export default App;
