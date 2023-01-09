import React from 'react';
import NoticeBox from '../NoticeBox/NoticeBox';
import GameView from '../GameView/GameView';

let gameView = [
    <GameView
        largeImage={require('../../assets/images/formula1.png')}
        smallImage1={require('../../assets/images/f11.jpg')}
        smallImage2={require('../../assets/images/f12.jpg')}
        smallImage3={require('../../assets/images/f13.jpg')}
        smallImage4={require('../../assets/images/f14.jpg')}
        key={1}
        title='Formula 1® 2022 EA SPORTS™'
        price='161,85'
    />,

    <GameView
        largeImage={require('../../assets/images/days gone (1).jpeg')}
        smallImage1={require('../../assets/images/days gone (2).jpg')}
        smallImage2={require('../../assets/images/days gone (3).jpg')}
        smallImage3={require('../../assets/images/days gone (4).jpg')}
        smallImage4={require('../../assets/images/days gone (5).jpg')}
        key={2}
        title='Days Gone'
        price='199,99'
    />,

    <GameView
        largeImage={require('../../assets/images/spiderman (1).jpg')}
        smallImage1={require('../../assets/images/spiderman (2).jpg')}
        smallImage2={require('../../assets/images/spiderman (3).jpg')}
        smallImage3={require('../../assets/images/spiderman (4).jpg')}
        smallImage4={require('../../assets/images/spiderman (5).jpg')}
        key={3}
        path='/game/spider-man'
        title='Marvel’s Spider-Man Remastered'
        price='249,90'
    />
]

var game = gameView[Math.floor(Math.random() * gameView.length)];

const Featured = () => {
    return (
        <>
            <NoticeBox 
            title='Featured'
            />

            {game}
        </>
    );
}

export default Featured;
