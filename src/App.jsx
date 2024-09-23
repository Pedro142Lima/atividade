
import Card from "./components/card";
import axios from "axios";
import Header from "./components/header";
import './App.scss'
import { useState } from "react";
import Notfound from './images/NotFound404.PNG'


function App() {

  const [card2, setCard2] = useState([])




  async function receberCards(){
    try {
   const resp = await axios.get('http://localhost:8080/cards')

    console.log(resp.data)
    setCard2(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

 


  return (
    <div className="App">
      <Header />


     <div className="conteudo">

      <h2>Conteúdo</h2> 

      <button onClick={receberCards}>Listar</button>
      <div className="Card">
        {
        
      
        card2.map(c => {
 if (card2.length >= 1) {
          return (
            <div className="Card2">
              <Card
                titulo={c.titulo}
                texto={c.texto}
                Listas={c.Listas}
                data={c.data}
                cor={c.cor}
                trabalho={c.trabalho}
                status={c.status}
              />
            </div>
 
          )
} else { <img className="Imagem" src={Notfound} alt="não encontrado" /> }

        })}

      </div>
</div>
    </div>

  );
}

export default App;
