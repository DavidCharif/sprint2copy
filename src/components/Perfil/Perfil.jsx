import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext';
import { PerfilStyled } from "../../styles/PerfilStyled";
import NavBar from '../NavBar/NavBar';


const Perfil = () => {
  const { user, setLogin } = (useContext(UserContext))
  console.log('data desde perfil' , user);
  return (
    <>
    <PerfilStyled>
      <h3>Perfil</h3>
      <div className='perfilContainer'>
        {/* <img></img>
        nombre
        Correo
        cerrar sesion */}
        
        <img src={user.urlImage} alt="profilePic"></img>
        <p className='nombre'>{user.Nombre} {user.Apellido}</p>
        <p className='correo'>{user.Correo}</p>
        <button type='button' className='cerrarSesion' onClick={()=>{
          // setUser({
          //   data:{},loggedIn : false
          // })
          setLogin(false)
          window.localStorage.clear()
        }}> Cerrar sesión</button>
      </div>
      
    </PerfilStyled>
    <NavBar></NavBar>
    </>
  )
}

export default Perfil