import { Header } from "./components/Header"
import { Footer} from "./components/Footer"
import { useState } from "react"

export const App = () => {
  const [count,setCount] = useState(0);

  return (
    <div className="h-screen w-screen bg-cyan-600 flex flex-col">


    <Header name= {"Yuran"} v="ola" />
    <main className="flex-1">
      <h1>Conteudo Principal da Pagina</h1>
      <p>Contagem:{count}</p>
      <button onClick={()=>setCount(count+1)} className="bg-white px-2 py-1 rounded-md text-cyan-600 hover:bg-cyan-950 ">Incrementar contagem</button>
      </main>
    <Footer/>
    </div>
  )
}


