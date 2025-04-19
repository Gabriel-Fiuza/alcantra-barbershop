import '../styles/service.css'

export default function Service({ title,price }){
    return(
        <div className="service">
            <h4>{title}</h4>
            <p>R${price}</p>
        </div>
    )
}