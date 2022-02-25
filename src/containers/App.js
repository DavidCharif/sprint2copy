import { useState } from "react";
import { UserContext } from "../hooks/UserContext";

import RoutesPerso from "../router/Routes";



function App() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})
  const [dataGame,setDataGame] = useState({})
  const [localId,setLocalId] = useState(0)
  const states = {
    login, setLogin, user, setUser, dataGame, setDataGame, localId, setLocalId
  }
  return (
    
    <UserContext.Provider value={{...states}}>
        <RoutesPerso/>        
    </UserContext.Provider>
     
  );
}

export default App;
