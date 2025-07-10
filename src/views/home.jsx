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
                    <Navigation  title="Home" />
                    <Navigation title="Sobre" />
                    <Navigation title="Clube" />
                </div>
                <a href="https://agendamentos.bestbarbers.app/barbershop/alcantrabarber" target='_blank'><button>Agende agora</button></a>
            </header>
            <div className="about">
                <div className="aboutus">
                    <img src={about} alt="foto-da-barbearia" />
                </div>
                {/* <h2 className="about-write"> NOSSOS SERVIÇOS:</h2> */}
                <div className="services">
                    <img src={servicesMenu} className='img-service' alt="tabela de serviços" />
                    {/* <Service title='CORTE' price='30,00'/>
                    <Service title='BARBOTERAPIA' price='30,00'/>
                    <Service title='PEZINHO' price='10,00'/>
                    <Service title='SELAGEM' price='70,00'/>
                    <Service title='SOBRANCELHA' price='10,00'/>
                    <Service title='PLATINADO' price='120,00'/>
                    <Service title='LUZES' price='90,00'/>
                    <Service title='DEPILAÇÃO NARIZ OU ORELHA' price='20,00'/>
                    <Service title='LIMPEZA DE PELE' price='25,00'/>
                    <Service title='TINTURA CABELO' price='30,00'/>
                    <Service title='TINTURA BARBA' price='20,00'/>
                    <Service title='HIDRATAÇÃO CABELO OU BARBA' price='25,00'/>
                    <Service title='CONSULTORIA VISAGISTA' price='150,00'/> */}
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
            {/* <div className="local-hours-content"> */}
                <div className="hours">
                    <img src={funcionamento} alt="horário de funcionamento"/>
                    <button>Abrir com o Google Maps</button>
                </div>
                <div className="location">
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1379.6401582235949!2d-45.683070574026964!3d-19.78994165606067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b3a5555b851f1f%3A0x218473d39e0bc24a!2sAlcantra%20barber!5e0!3m2!1spt-BR!2sbr!4v1744842730139!5m2!1spt-BR!2sbr"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Alcantra Barber">
                    </iframe> */}
                    {/* <img src={local1} alt="" /> */}
                </div>
            {/* </div> */}
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