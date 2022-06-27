import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

export const Home = ()=>{
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />                
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Logo Let Me Ask" />
                    <button>
                        <img src={googleIcon} alt="Icone do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder='Digite o código da sala'    
                        />
                        <button type="submit">
                            Entrar na Sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}