import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home")
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("")
    navigate('/')
  }

  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt="" className="logo" /> */}
      <Link to='/'>
        <h1 className='head'>Foody.</h1>
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a target='_blank ' href='https://shobhitportfolio.vercel.app/' >Portfolio</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
        <a target='_blank' href="https://blog-rastogi.netlify.app">
                        <li>Blog</li>
                        </a>
                         <a target='_blank' href="https://youtuve.netlify.app">
                        <li>Youtube</li>
                        </a>
                        <a target='_blank' href="https://inotebook-rastogi.netlify.app">
                        <li>iNotebook</li>
                        </a> <a target='_blank' href="https://thoughtsagency.vercel.app/">
                        <li>Blog2</li>
                        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>sign in</button>:
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div>}
        
      </div>
    </div>
  )
}

export default Navbar