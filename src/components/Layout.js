import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser, logout } from '../services/auth.service'

import '../css/layout.css'

const Layout = (props) => {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        // grab getCurrentuser from the auth service
        const user =  getCurrentUser();
    
        if (user) {
          // Set current user to the currentUser state
          setCurrentUser(user);
        }
    }, [])

    const logOut = () => {
        logout()
    }

    return(
        <div>
            <nav id='navbar' class='navGrid'>
                <Link to={'/home'} class='inline'>
                    <h1>Mission Control</h1>
                </Link>
                <div>
                
                {currentUser ? (
                    <div class='navGrid'>
                        <Link to={'/home'} class='inline'>
                            <h3>Home</h3>
                        </Link>
                    <li>
                        <a href='/login' onClick={logOut}>
                            Logout
                        </a>
                    </li>
                    </div>
                ): (
                    <div class='navGrid'>
                        <li>
                            <Link to={'/home'} class='inline'>
                            <h3>Home</h3>
                            </Link>
                        </li>
                        
                    <li>
                        <Link to={'/login'}>
                            <h3>Login</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>
                            <h3>Signup</h3>
                        </Link>
                    </li>
                    </div>
                )}
                </div>
                

            </nav>
            <div id='container'>{props.children}</div>
        </div>
    )
}

export default Layout