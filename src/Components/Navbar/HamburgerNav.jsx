import React from 'react'
import './HamburgerNav.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

export default function HamburgerNav() {
    const [login, setLogin] = React.useState(false)
    const [admin, setAdmin] = React.useState(false)

    const loginBackFunc = () => {
        setLogin(false)
    }
    const loginFunc = () => {
        setLogin(!login)
        setAdmin(false)
    }
    const adminFunc = () => {
        setAdmin(!admin)
        setLogin(false)
    }

    const checkUserIsAuth = JSON.parse(localStorage.getItem("isAuth"))

    const checkAdminIsAuth = JSON.parse(localStorage.getItem("AdminIsAuth"))
    // console.log(checkUserIsAuth)
    return (
        <motion.div
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 1.0 }}
            className='hamburger-main-con'>
            {/* <Link to="/">Resgister</Link>
            <hr /> */}
            <Link onClick={loginFunc}>Login</Link>
            {
                login ? <motion.div
                    whileInView={{ y: [-30, 0] }}
                    transition={{ duration: 1.0 }}
                    className='ham-login-submenu'>
                    {/* <Link to="/register" onClick={loginBackFunc}>Register</Link> */}
                    {
                        !checkUserIsAuth ? <Link to="/register" onClick={loginBackFunc}>Register</Link> : ""
                    }
                    {
                        !checkUserIsAuth ? <hr /> : ""
                    }
                    <Link to="/login" onClick={loginBackFunc} >{checkUserIsAuth ? "Profile" : "Login"}</Link>
                </motion.div> : ""
            }
            <hr />
            <Link onClick={adminFunc}>Admin</Link>
            {
                admin ? <motion.div
                    whileInView={{ y: [-60, 0] }}
                    transition={{ duration: 1.0 }}
                    className='ham-login-submenu'>
                    {
                        !checkAdminIsAuth ? <Link to="/adminRegister" onClick={loginBackFunc}>Admin Register</Link> : <Link to="/dashboard" onClick={loginBackFunc}>Dashboard</Link>
                    }
                    <hr />
                    <Link to="/adminLogin" onClick={loginBackFunc} >{checkAdminIsAuth ? "Admin Profile" : "Admin"}</Link>
                </motion.div> : ""
            }
            <hr />
            <Link to="/">Customer Care</Link>
            <hr />
            <Link to="/men">Men</Link>
            <hr />
            <Link to="/">Women</Link>
            <hr />
            <Link to="/kids">Kids</Link>
            <hr />
            <Link to="/design">Design & Art</Link>
        </motion.div>
    )
}
