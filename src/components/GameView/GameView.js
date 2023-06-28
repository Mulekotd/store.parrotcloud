import './GameView.css'; 
import { Link } from 'react-router-dom';

const GameView = (props) => {

    const onClick = () => {
        return <Link to={props.link}></Link>
    }

    return (
        <div className='gameview'>
            <nav className='gameimg' id='clickable' onClick={onClick}>
                <img src={props.largeImage} alt='game-large'/>
            </nav>

             <nav className='gameinfo'>
                <Link id='clickable' to={props.path}>{props.title}</Link>

                <nav id='clickable' onClick={onClick}>
                    <div><img src={props.smallImage1} alt='game-small1'/></div>
                    <div><img src={props.smallImage2} alt='game-small2'/></div>
                    <div><img src={props.smallImage3} alt='game-small3'/></div>
                    <div><img src={props.smallImage4} alt='game-small4'/></div>
                </nav>
                        
                <nav className='add-cart'>
                    <span>R$ {props.price}</span>
                    <button id='clickable-btn' onClick={onClick}>Add Cart</button>
                </nav>
           </nav>
        </div>
    );
}

export default GameView;