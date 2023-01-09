import './GamePromo.css';

const GamePromo = (props) => {

    return (
        <div className='gameprmo'>
            <nav className='image-card'>
                <img
                src={(props.image)}
                alt='game-card'
                />
            </nav>

            <nav className='promoinfo'>
                <p>{props.name}</p>
                <div className='prices'>
                    <s>{props.price}</s><p>{props.newPrice}</p>
                </div>
            </nav>
        </div>
    );
}

export default GamePromo;