import '../styles/home.css'
import Navigation from '../components/Navigation'
import logo from '../assets/logo-preto.jpeg'
import about from '../assets/aboutus.png'
import banner1 from '../assets/bannerApp.png'
import banner2 from '../assets/bannerApp2.png'
import funcionamento from '../assets/funcionamento.png'
import onlyBarra from '../assets/footerimg.jpeg'
import servicesMenu from '../assets/services.png'

export default function Home(){
    return(
        <div className="container">
            <header id="home">
                <img src={logo} alt="" />
                <div className="nav-icons">
                    <Navigation title="Home" />
                    <Navigation title="Sobre" />
                    <Navigation title="Clube" />
                </div>
                <a href="https://agendamentos.bestbarbers.app/barbershop/alcantrabarber" target='_blank'><button>Agende agora</button></a>
            </header>
            <div className="about">
                <div className="aboutus">
                    <img src={about} alt="foto-da-barbearia" />
                </div>
                <div className="services">
                    <img src={servicesMenu} className='img-service' alt="tabela de serviços" />
                    <div className="icons">
                        <a href="https://apps.apple.com/br/app/alcantra-barbearia/id6743761947"><button><img  src="https://img.icons8.com/fluency/48/apple-app-store.png" alt="apple-app-store"/>Appstore</button></a>
                        <a href="https://play.google.com/store/apps/details?id=alcantrabarbearia.bestbarbers.app"><button><img  src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="google-play-store-new"/>Playstore</button></a>    
                    </div>
                </div>
            </div>
            <div className="feedbacks">
                <img src={banner1} alt="" />
                <img src={banner2} alt="" />
            </div>
                <div className="hours">
                    <img src={funcionamento} alt="horário de funcionamento"/>
                    <a href="https://maps.app.goo.gl/v3TqQJzFNEfcW58G9"><button>Abrir com o Google Maps</button></a>
                </div>
            <footer>
                <div className="footer">
                    <img className='logo-barra' src={onlyBarra} alt="" />
                    <div className="footer-infos">
                        <div className='place-info'>
                            <p>Praça Rotary 945 - Monsenhor Parreiras</p>
                            <p>Telefone: (37) 99126-1865</p>
                            <p>Instagram: @alcantrabarber</p>
                            <div className="footer-icons">
                                <a href="https://wa.me/5537991261865" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />
                                </a>
                                <a href="https://www.instagram.com/alcantrabarber" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram" />
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}