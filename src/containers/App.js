import { useState } from "react";
import { UserContext } from "../hooks/UserContext";

import RoutesPerso from "../router/Routes";



function App() {
  const [user, setUser] = useState({data:{}, loggedIn : false})

  return (
    
    <UserContext.Provider value={{user, setUser}}>
        <RoutesPerso/>        
    </UserContext.Provider>
     
  );
}

export default App;
