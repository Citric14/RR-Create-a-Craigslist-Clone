import React from 'react'


function Posting (props) {
    return (
        <div className='posting'>
            <div>{props.data.price}</div>
            <img src={props.data.imageURL} alt={props.data.title}/>
            <span>{props.data.title}</span>
        </div>
    )
}

export default Posting