import './style.css'

import React from 'react'


export default props => {
    let { name } = props;
    return (
        <div>
            <h2>From component</h2>
    <p>Hello, { name }</p>
        </div>
    )
}

