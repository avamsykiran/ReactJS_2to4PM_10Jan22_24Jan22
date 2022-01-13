import React from 'react';
import Calc from './Calc';
import Counter from './Counter';
import Header from './Header';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'My First ReactJS Web',
      credits:[
        'Vamsy','Srinu','Suseela','Indhikaa'
      ]
    };
  }

  render(){
    return (
      <div>
        <Header brand={this.state.title} />
        <h4>Credits</h4>
        <ol>
          {this.state.credits.map(ele => <li>{ele}</li>)}
        </ol>
        <Counter />
        <Counter />
        <Counter />
        <Calc />
      </div>
    );
  }
}

export default App;
