import '../styles/home.css'
import Navigation from '../components/Navigation'
import Service from '../components/Service'
import logo from '../assets/logo-preto.jpeg'
import logoBarra from '../assets/logo-barra-preto.jpeg'
import about from '../assets/aboutus.jpeg'
import agende1 from '../assets/AGENDE_01.png'
import agende2 from '../assets/AGENDE_02.png'
import agende3 from '../assets/AGENDE_03.png'
import agende4 from '../assets/AGENDE_04.png'

export default function Home(){
    return(
        <div className="container">
            <header id="home">
                <img src={logo} alt="" />
                <Navigation  title="Home" />
                <Navigation title="Sobre" />
                <Navigation title="Clube" />
                <a href="https://agendamentos.bestbarbers.app/barbershop/alcantrabarber" target='_blank'><button>Agende agora</button></a>
            </header>
            <div className="about">
                <div className="aboutus">
                    <img src={about} alt="foto-da-barbearia" />
                    <p>Com uma pegada contemporânea e foco total na experiência do cliente, a Alcantra Barber chegou pra mostrar que barbearia também é sobre conexão, estilo e identidade. Aqui, o corte é só o começo.
                    Criada em 2022, e localizada na Praça Rotary, 945 — Bairro Monsenhor Parreiras, Luz/MG, a Alcantra Barber vem conquistando espaço com profissionalismo, qualidade nos serviços e um ambiente que mistura modernidade e autenticidade.
                    Nossa missão é simples: fazer com que cada cliente se sinta em casa, saia satisfeito e volte não só pelo corte, mas pelo respeito, pelo papo e pela vibe única que rola por aqui.</p>
                </div>
                <h2 className="about-write"> NOSSOS SERVIÇOS:</h2>
                <div className="services">
                    <Service title='CORTE' price='30,00'/>
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
                    <Service title='CONSULTORIA VISAGISTA' price='150,00'/>
                </div>
                <div className="download">
                    <p>Agende agora mesmo pelo app:</p>
                    <div className="icons">
                        <a href="https://apps.apple.com/br/app/alcantra-barbearia/id6743761947"><button><img width="50" height="50" src="https://img.icons8.com/fluency/48/apple-app-store.png" alt="apple-app-store"/>App store</button></a>
                        <a href="https://play.google.com/store/apps/details?id=alcantrabarbearia.bestbarbers.app"><button><img width="50" height="50" src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="google-play-store-new"/>Playstore</button></a>    
                    </div>
                </div>
            </div>
            <div className="feedbacks">
                <img src={agende1} alt="" />
                <img src={agende2} alt="" />
                <img src={agende3} alt="" />
                <img src={agende4} alt="" />
            </div>
            <div className="local-hours-content">
                <div className="hours">
                    <h2>Nossos horários</h2>
                    <p>Segunda a sexta: 08:00 - 20:00</p>
                    <p>Sábado: 08:00 - 19:00</p>
                    <p>Domingo: Fechado</p>
                </div>
                <div className="location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1379.6401582235949!2d-45.683070574026964!3d-19.78994165606067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b3a5555b851f1f%3A0x218473d39e0bc24a!2sAlcantra%20barber!5e0!3m2!1spt-BR!2sbr!4v1744842730139!5m2!1spt-BR!2sbr"
                        width="160%"
                        height="300"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Alcantra Barber">
                    </iframe>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <img className='logo-barra' src={logoBarra} alt="" />
                    <div className="footer-infos">
                        <div className='place-info'>
                            <p>Praça Rotary 945 - Monsenhor Parreiras</p>
                            <p>Telefone: (37) 99126-1865</p>
                            <p>Instagram: @alcantrabarber</p>
                            <div className="footer-icons">
                                <a href="https://wa.me/5537991261865" target="_blank" rel="noopener noreferrer">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />
                                </a>
                                <a href="https://www.instagram.com/alcantrabarber" target="_blank" rel="noopener noreferrer">
                                <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram" />
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}