import React from "react";
import Navbar from "./componets/Navbar";

import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./componets/Chat";

const style = {
  appContainer: `max-w-[720px] mx-auto text-center `,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 
  shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth)
  console.log(user)
  
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar/>
        <Chat/>
      </section>
     
    </div>
  );
}

export default App;
