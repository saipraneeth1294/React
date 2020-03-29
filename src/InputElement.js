import React, { useState } from 'react';

const InputElement=()=>{
    const [inputText,setInputText]= useState('');
    const [historyList,setHistoryList]= useState([]);
    return(
        <div>
            <input 
        onChange={(e)=>{
            setInputText(e.target.value);
            //I have updated the chnages
        }}
        placeholder='Enter name'/><br/>
        {inputText}
       
        </div>
    );
};
export default InputElement;
