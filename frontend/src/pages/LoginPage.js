import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)

    return (
        <div>
            <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" id="username" placeholder='Enter Username' />
                <input type="text" name="password" id="password" placeholder='Enter Password' />
                <input type="submit" />
            </form>
            </div>
        </div>
    )
}

export default LoginPage