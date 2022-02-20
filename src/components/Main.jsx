import React, { memo } from 'react'
import { UserContext } from '../hooks/UserContext'


import useFetch from 'react-fetch-hook'
import { url } from '../helpers/url'
import AppRouter from '../router/AppRouter'
import Loading from './Loading/Loading'

const Main = ({id}) => {
console.log('id in main' , id);
const {isLoading, error, data} = useFetch(url + 1)
console.log("desde main")
console.log(error, "error");

if (isLoading){
  return (<Loading/>)
} 
return (
   <UserContext.Provider value={{data}}>
      <AppRouter/>
   </UserContext.Provider>
  )
}

export default Main