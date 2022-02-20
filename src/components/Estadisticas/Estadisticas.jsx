import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'
import { EstadisticasStyled } from '../../styles/style'
import NavBar from '../NavBar/NavBar'

const Estadisticas = () => {
  const { user } = (useContext(UserContext))
  console.log('data desde estadisticas' , user.dataUser);
  return (
    <>
    <EstadisticasStyled>
      <div>
        <h3>Estadisticas</h3>
        <h4>Los ultimos 7 dias</h4>
        <div className='bloque'>
          Tiempo de estudio (horas)
        </div>
        <div className='bloque'>
          Respuestas contestadas
        </div>
        <div className='bloque'>
          Respuestas correctas
        </div>
        <div className='bloque'>
        Respuestas incorrectas
        </div>
      </div>
      
    </EstadisticasStyled>
    <NavBar></NavBar>
    </>
  )
}

export default Estadisticas