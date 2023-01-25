import '../styles/card.css'

const Card = ({city, setSity}) => {
    return (
        <div className='card-block'>
            {city.map((item) => (
                <div className={`card ${item.current.is_day? `day` : `night`}`}>
                    <div className="card-left-items">
                        <p className="city-name">{item.location.name}</p>
                        <p className="city-location">{item.location.region}</p>
                        <p className="date">{item.location.localtime}</p>
                    </div>
                    <div className="card-right-items">
                        <img src={item.current.condition.icon} alt="" className='right-items-img'/>
                        <p className="temp">{item.current.temp_c}ºC</p>
                        <p className="farg">{item.current.temp_f}ºF</p>
                    </div>
                </div>
            ))}    
        </div>
    )
}

export default Card