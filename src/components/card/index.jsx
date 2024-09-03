import './index.scss'

export default function Card ({titulo,texto, Listas, data, cor, trabalho, fim_bimestre}) {

    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'


    if (trabalho == true) {
            return (
                <main className='card' style={{ backgroundColor: corSegundaria }}>
                <header className={`head ${cor}`}><h2>{titulo}</h2></header>
    
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

            
                <main className='card' style={{ backgroundColor: corSegundaria }}>
               
               <h1 >{texto}</h1>
                
                </main>

            )
    }
    return (
        <main className='card' style={{ backgroundColor: corSegundaria }}>
            <header className={`head ${cor}`}><h2>{titulo}</h2></header>

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