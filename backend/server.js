import express from 'express';
import cors from 'cors';

const servidor = express()
const port = 8080

servidor.use(express.json())
servidor.use(cors())

servidor.get('/cards', (req, res) => {
    let cards = [

        {
            'titulo': 'Componentes',
            'texto': 'Assuntos',
            'Listas':
              `-Objetos e listas de objeto
-Componentes`,
            'data': '26/agosto',
            'trabalho': false,
            'fim_bimestre': false,
            'status': 'Completo'
        },
        {
            'titulo': 'Renderização e Efeito',
            'texto': 'Assuntos',
            'Listas':
              `-Componentes na renderização`,
            'data': '02/setembro',
            'trabalho': false,
            'fim_bimestre': false,
            'status': 'Em andamento'
        },
        {
            'titulo': 'Consumindo API`s - Parte 1',
            'texto': 'Assuntos',
            'Listas':
              `-Componentes na renderização`,
            'data': '09/setembro',
            'trabalho': true,
            'fim_bimestre': false,
            'status': 'Criado'
        },
        {
            'titulo': 'Renderização e Efeito',
            'texto': 'Assuntos',
            'Listas':
              `-Componentes na renderização
-Estilização com SCSS
-Navegação entre telas
-Váriaveis de estado
-Renderização de listas
-Componentes`,
            'data': '16/setembro',
            'trabalho': false,
            'fim_bimestre': false,
            'status': 'Evento'
        },
        {
            "titulo": 'Fim do bimestre',
            'fim_bimestre': true,
        }
    ]

    
    res.send(cards)
})

servidor.listen(port, () => console.log(`API ouvindo na porta ${port}`));