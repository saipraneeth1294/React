import React from 'react';
import './App.css';
import InputElement from './InputElement';
import OnMouseToggleImage from'./OnMouseToggleImage';

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
   <InputElement/>
   <OnMouseToggleImage primaryImg={'/logo192.png'} secondaryImg={'/logo512.png'}/>
    </div>
  );
  } 
}

export default App;
