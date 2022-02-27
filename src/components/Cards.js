import { useState } from 'react';
import './Cards.css'

const Cards = (props) => {
    const {id, image, info, name, price, handleRemoveTour} = props;

    const [isReadMore, setIsReadMore] = useState(true)

    const handleClick = () =>{
        setIsReadMore(false)
    }
    return(
        <article className="card-container">
            <img className="card-img" src={image}/>
            <div className="card-desc">
                <header className='card-header'>
                    <h4>{name}</h4>
                    <h4 className='card-price'>{price}</h4>
                </header>
               {isReadMore ? <p className='card-info'>{info.substring(0,100)}... <span onClick={handleClick}>read more</span></p> : <p className='card-info'>{info}</p>} 
              
            </div>
            <button className='card-remove' onClick={()=> handleRemoveTour(id)}>remove</button>
    
        </article>
    );
}
export default Cards;