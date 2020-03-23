import React from 'react';
import './App.css';
import DropDownGroup from './DropDownGroup';

const numbers=[1,2,3,4];
class  App extends React.Component {
  constructor(){
    super();
    this.state={
      dropDownValue: 0,
    };
    this.onSelectChange=this.onSelectChange.bind(this);
  }
  onSelectChange(e){
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      dropDownValue:e.target.value
    });

    let nam=1;
    let item = new Object();
    item['name'+nam]="Name";
    console.log(item);
  }
  onDropchange(props){
    console.log(props);;
  }
  render(){
  return (
    <div>
    <div className="App">
        <select onChange={this.onSelectChange}>
          {numbers.map(val=>(
             <option key={val} value={val}>{val}</option>
          ))}
        </select>
          </div>
          <div className='Repeat'>
          {Array.from({ length: this.state.dropDownValue }, (_, k) => (
            <DropDownGroup key={k} onDropchange={this.onDropchange} ident={k}></DropDownGroup>
          ))}
          </div>
          </div>
  );
  } 
}

export default App;
