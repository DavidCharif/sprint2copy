import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext';
import { PerfilStyled } from '../../styles/style'
import NavBar from '../NavBar/NavBar';


const Perfil = () => {
  const { user } = (useContext(UserContext))
  console.log('data desde perfil' , user);
  return (
    <>
    <PerfilStyled>
      <h3>Perfil</h3>
      <div>
        {/* <img></img>
        nombre
        Correo
        cerrar sesion */}
      </div>
      
    </PerfilStyled>
    <NavBar></NavBar>
    </>
  )
}

export default Perfil