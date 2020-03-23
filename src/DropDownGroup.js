import React from 'react';

class DropDownGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            drop1:'',
            drop2:'',
            drop3:'',
            ident: null
        }
        this.ondropChange=this.ondropChange.bind(this);
    }
    ondropChange(e){
        console.log(e.target.name);
        e.preventDefault();
        let val=e.target.value
        this.setState({
            [e.target.name]:val,
            ident:this.props.ident
        });
        this.props.onDropchange(this.state);
    }

    render(){
        return(
            <div>
                <div>
                    <select name='drop1' onChange={this.ondropChange}>
                        <option value='value1'>Value1</option>
                        <option value='value2'>Value2</option>
                        <option value='value3'>Value3</option>
                    </select>
                </div>
                <div>
                <select name='drop2' onChange={this.ondropChange}>
                        <option value='value11'>Value11</option>
                        <option value='value22'>Value22</option>
                        <option value='value33'>Value33</option>
                    </select>
                    </div>
                    <div>
                    <select name='drop3' onChange={this.ondropChange}>
                        <option value='value111'>Value111</option>
                        <option value='value222'>Value222</option>
                        <option value='value333'>Value333</option>
                    </select>
                    </div>
            </div>
        );
    }
}
export default DropDownGroup;