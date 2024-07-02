import { useState } from "react"

export const Header = ({name}) => {
    const [userSession,setUserSession]  = useState(false)

    return(
    <header className="flex justify-between px-4 bg-white">
      <h1 className="font-bold text-2xl text-cyan-600">
        {(userSession === true?`Ola,${name}`:`Bem-vindo(a)`)}
        </h1>
      <button onClick={() => setUserSession(!userSession)} className="bg-cyan-600 px-2 py-1 rounded-md text-white hover:bg-cyan-950 " >{(userSession === true?" Terminar Sessao ":" Iniciar Sessao ")}</button>
     </header> 
    )
}