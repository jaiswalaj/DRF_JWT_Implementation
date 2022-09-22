import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


const PrivateRoutes = () => {
    // let auth = {'token': false}
    let {user} = useContext(AuthContext)
    return(
        // auth.token ? <Outlet /> : <Navigate to="/login" />
         !user ? <Navigate to="/login" /> : <Outlet />
    )
}

export default PrivateRoutes