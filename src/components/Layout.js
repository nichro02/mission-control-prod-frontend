import { useState, useEffect } from 'react'
import '../css/layout.css'

const Layout = (props) => {

    return(
        <div>
            <nav id='navbar'>
                <h1>Mission Control</h1>
            </nav>
            <div id='container'>{props.children}</div>
        </div>
    )
}

export default Layout