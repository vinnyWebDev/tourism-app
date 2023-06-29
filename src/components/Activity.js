import { useState } from 'react'

function Activity(props) {
    return (<div>
       <p>{props.name}</p> 
       <p>{props.url}</p>
       <p>{props.tel}</p>
    </div>
    )
}

export default Activity

