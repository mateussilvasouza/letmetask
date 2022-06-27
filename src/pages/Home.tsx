import illustrationImg from '../assets/images/illustration.svg'

export const Home = ()=>{
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />                
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
        </div>
    )
}