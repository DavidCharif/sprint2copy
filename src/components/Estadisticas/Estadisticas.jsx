import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'
import { EstadisticasStyled } from '../../styles/style'

import NavBar from '../NavBar/NavBar'
import clockIcon from '../../guideApp/icons/clock.png'
import messageIcon from '../../guideApp/icons/message.png'
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
          <img src={clockIcon}  alt="clock"/><p>Tiempo de estudio (horas)</p><p>{user.dataUser.data.general.tiempoDedicado}</p>
        </div>
        <div className='bloque'>
        <img src={messageIcon}  alt="Message"/><p>
          Respuestas contestadas</p><p>{user.dataUser.data.general.preguntasContestadas}</p>
        </div>
        <div className='bloque'>
        <img src={messageIcon}  alt="Message"/><p>
          Respuestas correctas
          </p><p className='correctas'>{user.dataUser.data.general.totalCorrectas}</p>
        </div>
        <div className='bloque'>
        <img src={messageIcon}  alt="Message"/><p>
        Respuestas incorrectas
        </p><p className='incorrectas'>{user.dataUser.data.general.totalIncorrectas}</p>
        </div>
      </div>
      
    </EstadisticasStyled>
    <NavBar></NavBar>
    </>
  )
}

export default Estadisticas