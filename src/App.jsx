
import Card from "./components/card";
import Header from "./components/header";
import './App.scss'


function App() {

  let Card2 = [

    {
      'titulo': 'Componentes',
      'texto': 'Assuntos',
      'Listas':
        `
       - Objetos e listas de objeto
       - Componentes
       `,
      'data': '26/agosto',
      'cor': 'verde',
      'trabalho': false
    },

    {
      'titulo': 'Renderização e Efeito',
      'texto': 'Assuntos',
      'Listas':
        `
      - Componentes de renderização
      `,
      'data': '02/Setembro',
      'cor': 'rosa',
      'trabalho': false
    },

    {
      'titulo': 'Consumos de APIs - Parte 1',
      'texto': 'Assuntos',
      'Listas':
        `
      - Componentes de renderização
    `,
      'data': '09/Setembro',
      'cor': 'cinza',
      'trabalho': true
    },
    {
      'titulo': 'Prova prática e teórica',
      'texto': 'Assuntos',
      'Listas':
        `
      - Criando um projeto React
      - Estilização com SCSS
      - Navegação entre telas
      - Váriaveis de estado
      - Renderização de lista
      - Componentes
    `,
      'data': '09/Setembro',
      'cor': 'cinza',
      'trabalho': false
    },
    {
      'titulo': 'Fim do Bimestre',
      'texto': '',
      'Listas':
        ``,
      'data': '',
      'cor': '',
      'trabalho': false,
      'fim_bimestre': true
    }
  ]
  return (
    <div className="App">
      <Header />


     <div className="conteudo">

      <h2>Conteúdo</h2>
      <div className="Card">

        {Card2.map((item, index) => {

          return (
            <div className="Card2">
              <Card

                key={index}
                titulo={item.titulo}
                texto={item.texto}
                Listas={item.Listas}
                data={item.data}
                cor={item.cor}
                trabalho={item.trabalho}
              />
            </div>

          )
        })}

      </div>
</div>
    </div>

  );
}

export default App;
