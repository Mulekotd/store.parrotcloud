import React from 'react';
import './GamePage.css';

function GamePage() {

    return (
        <main>
            <section className='middlebar' id='page'>
                <div className='gamedetails'>
                    <nav>
                        <img alt='large-img' src={require('../../../assets/images/spiderman (1).jpg')} />
                    </nav>
                    <div className='gameinform'>
                        <p className='gamepagename'>Marvel® Spider-Man™ Remastered</p>

                        <p className='gamedescription'>
                            In Marvel’s Spider-Man Remastered, 
                            the worlds of Peter Parker and Spider-Man collide in an 
                            original action-packed story. Play as an experienced Peter 
                            Parker, fighting big crime and iconic villains in Marvel’s 
                            New York. Web-swing through vibrant neighborhoods and defeat 
                            villains with epic...
                        </p>

                        <p className='gamedata'>Launch date: 09/05/2005</p>
                        <p className='gamedata'>Developer: Isominniac Games</p>
                        <p className='gamedata'>Genre: Action and Adventure</p>
                        <p className='gamedata'>Authors: Isominniac Dev Team</p>

                    </div>
                    <div className='gamecomments'>
                        <p className='gamepagename'>Reviews</p>
                    </div>
                    <div className='buybox'>

                        <p className='gamepagename'>PRICE: R$ 187,49</p>
                        <button type='submit' value='entrada'>BUY</button>

                    </div>
                </div>

            </section>

        </main>
    );
}

export default GamePage;