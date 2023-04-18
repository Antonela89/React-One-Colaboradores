import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" style = {{backgroundColor: "#6278F7"}}>
            <div className="redes">
                <a href="https://aluracursos.com/" >
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href ="https://aluracursos.com/">
                    <img src="/img/twitter.png" alt="twitter" />
                </a>
                <a href ="https://aluracursos.com/">
                    <img src="/img/instagram.png" alt="instagram" />
                </a>
            </div>
            <img src="/img/Logo.png" alt="org" />
            <strong>Desarrollado por Antonela Borgogno - Alura</strong>
        </footer>
    )
    
}

export default Footer
