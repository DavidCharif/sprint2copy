import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext';
import { PerfilStyled } from '../../styles/style'
import NavBar from '../NavBar/NavBar';


const Perfil = () => {
  const { user, setUser } = (useContext(UserContext))
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
        
        <img src={user.user.urlImage} alt="profilePic"></img>
        <p className='nombre'>{user.user.Nombre} {user.user.Apellido}</p>
        <p className='correo'>{user.user.Correo}</p>
        <button type='button' className='cerrarSesion' onClick={()=>{
          setUser({
            data:{},loggedIn : false
          })
        }}> Cerrar sesión</button>
      </div>
      
    </PerfilStyled>
    <NavBar></NavBar>
    </>
  )
}

export default Perfil