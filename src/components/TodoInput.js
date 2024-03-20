import React, { useState } from 'react'

function TodoInput(props){
    const[inputText,setInputText]=useState('');
    return(
        
             <div className="input-conatiner">
                <input type='text' 
                className='input-box-todo'
                placeholder='Enter your Task here'
                value={inputText}
                onChange={e=>{
                    setInputText(e.target.value)
                }}
                />
                <button className='add-btn'
                onClick={()=>{
                    props.addList(inputText)
                    setInputText("")
                }}>+</button>
                <div>{inputText}</div>
        </div>
       
    )
}
export default TodoInput