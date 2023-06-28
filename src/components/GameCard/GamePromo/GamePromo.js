import React from 'react';
import './GamePromo.css';

const GamePromo = (props) => {
  const { url, link, name, price, newPrice } = props;

  return (
    <div className='gameprmo'>
      <nav className='image-card'>
        <img src={url} alt='game-card' />
      </nav>

      <nav className='promoinfo'>
        <a href={link}>{name}</a>
        <div className='prices'>
          {newPrice ? (
            <>
              <s>{price}</s>
              <p>{newPrice}</p>
            </>
          ) : (
            <p>{price}</p>
          )}
        </div>
      </nav>
    </div>
  );
};

export default GamePromo;