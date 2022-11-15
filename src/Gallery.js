import React from 'react'
import Posting from './Posting'
const craigpost = require('./postings')

function Gallery () {
    return (
        <div>
            {
                craigpost.postings.map((data, item)=>{
                    return <Posting data={data} key={item}/>
                })
            }
        </div>
    )
}

export default Gallery