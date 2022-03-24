import React from 'react';
import './Card.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Card = ({ gun, handleAddToCart}) => {
// console.log(props.gunData);
const { name, img, bullet, action, price, id }= gun;
// console.log(name);

    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt=''/>
            </div>
           
            <div className='gun-info'>
            <h1>{name}</h1>
            <p>Bullet Type : {bullet}</p>
        <p>Capacity : {gun.capacity}</p>
        <p>Action : {action}</p>
        <p>Gun id: {id}</p>
      </div>

      <div className='add-to-cart'>
        <button onClick={()=>handleAddToCart(gun)}> <AiOutlineShoppingCart className='icon'/>
        Add to cart
        </button>

        <h1>$ {price}</h1>
      </div>

        </div>
    );
};

export default Card;