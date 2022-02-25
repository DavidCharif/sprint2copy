import React from 'react'
import { NavBarStyled } from "../../styles/NavBarStyled"
import { Link } from 'react-router-dom'
const homeIcon = 'https://res.cloudinary.com/davidcharif/image/upload/v1645632535/sprint2/design/icons/home_xgblgc.svg'
const userIcon = 'https://res.cloudinary.com/davidcharif/image/upload/v1645632538/sprint2/design/icons/user_l3rkxf.svg'
const activityIcon = 'https://res.cloudinary.com/davidcharif/image/upload/v1645632534/sprint2/design/icons/activity_kzurzz.svg'

const NavBar = () => {
  return (
    <NavBarStyled>
      <Link to="/sprint2copy/home">
      <div className='navBarIcon'><img src={homeIcon} alt="homeIcon"/> <p>Home</p></div>
      </Link>
      <Link to="/sprint2copy/estadisticas">
      <div className='navBarIcon' ><img src={activityIcon} alt="homeIcon"/> <p>Estadisticas</p></div>
      </Link>
      <Link to="/sprint2copy/perfil">
      <div className='navBarIcon' ><img src={userIcon} alt="homeIcon"/> <p>Perfil</p></div>
      </Link>
    </NavBarStyled>
  )
}

export default NavBar