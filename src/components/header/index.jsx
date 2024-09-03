import Logo from '../../assets/images/success.svg'
import './index.scss'

export default function Header () {
    return (
        <main className='Header'>
            <header>
                <img src={Logo} alt="logo" />
                <h2>Atividades</h2>
            </header>
        </main>
    )
}