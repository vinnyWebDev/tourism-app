import { useState } from 'react'

function Activity(props) {
    return (<div class="row">
        <div className='col-lg border rounded m-3 p-3'>
            <h4>{props.name}</h4>
            <p>{props.url}</p>
            <p>{props.tel}</p>
        </div>
    </div>
    )
}

export default Activity

