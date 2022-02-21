import React from 'react'
import homeIcon from '../../guideApp/icons/home.svg'
import activityIcon from '../../guideApp/icons/activity.svg'
import userIcon from '../../guideApp/icons/user.svg'
import { NavBarStyled } from '../../styles/style'
import { Link } from 'react-router-dom'

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