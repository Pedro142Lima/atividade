import './index.scss'

export default function Card ({titulo,texto, Listas, data,  trabalho, fim_bimestre, status}) {

    let corPrimaria = ''
    let corSegundaria = '' 

    switch (status) {
        case 'Completo':
            corPrimaria = '#A3E5BA'
            corSegundaria = '#EFFBE2'
         break;

        case 'Em andamento':
            corPrimaria = '#DCA3E5'
            corSegundaria = '#EDE2FB'
            break;

        case 'Criado':
            corPrimaria = '#C3C3C3'
            corSegundaria = '#F2F2F2'
            break;

         case 'Evento': 
            corPrimaria = '#F6E448'
            corSegundaria = '#FAF4C1'
            break;

    
        default:
            corPrimaria = '#fff'
            corSegundaria = '#fff'
            break;
    }


    if (trabalho == true) {
            return (
                <main className='card' style={{ backgroundColor: corSegundaria }}>
                <header className={`head`} style={{ backgroundColor: corPrimaria }} ><h2>{titulo}</h2></header>
    
                <div className='card-conteudo'>
                    <h3>{texto}</h3>
    
                   <pre>{Listas}</pre><br/>
                </div>
    
                <div className='botoes' style={{
                    display: 'flex',
                    flexDirection: 'row-reverse'
                }}>
                    <p className='tag'>{data}</p>
                    <p className='tag'>Entregar trabalho</p>
                </div>

                
            </main>
            )
    }
    else if (fim_bimestre == true) {
        return (

            
                <main className='card' style={{ backgroundColor: corSegundaria}}>
               
                <h1>{titulo}</h1>
                
                </main>

            )
    }
    return (
        <main className='card' style={{ backgroundColor: corSegundaria }}>
        <header className={`head`} style={{ backgroundColor: corPrimaria }} ><h2>{titulo}</h2></header>


            <div className='card-conteudo'>
                <h3>{texto}</h3>

               <pre>{Listas}</pre><br/>
            </div>

            <div className='tag'>
                <p>{data}</p>
            </div>
        </main>
    )
}