import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'
import { EstadisticasStyled } from '../../styles/EstadisticasStyled'


import NavBar from '../NavBar/NavBar'
const clockIcon = 'https://res.cloudinary.com/davidcharif/image/upload/v1645632535/sprint2/design/icons/clock_rca2wr.png'
const messageIcon = 'https://res.cloudinary.com/davidcharif/image/upload/v1645632536/sprint2/design/icons/message_pbense.png'
const Estadisticas = () => {
  const {dataGame} = (useContext(UserContext))
  
  return (
    <>
    <EstadisticasStyled>
      <div className='bloquePerfil'>
        <h3>Estadisticas</h3>
        <h4>Los ultimos 7 dias</h4>
        
        <div className='bloque'>
          <img src={clockIcon}  alt="clock"/><p>Tiempo de estudio (minutos)</p><p>{dataGame.general.tiempoDedicado.minutosGenerales}</p>
        </div>
        <div className='bloque'>
        <img src={messageIcon}  alt="Message"/><p>
          Respuestas contestadas</p><p>{dataGame.general.preguntasContestadas}</p>
        </div>
        <div className='bloque'>
        <img src={messageIcon}  alt="Message"/><p>
          Respuestas correctas
          </p><p className='correctas'>{dataGame.general.totalCorrectas}</p>
        </div>
        <div className='bloque'>
        <img src={messageIcon}  alt="Message"/><p>
        Respuestas incorrectas
        </p><p className='incorrectas'>{dataGame.general.totalIncorrectas}</p>
        </div>
      </div>
      
    </EstadisticasStyled>
    <NavBar></NavBar>
    </>
  )
}

export default Estadisticas