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
                <a href={`${props.url}`}>{props.name}</a>
                <div className='prices'>
                    <s>{props.price}</s><p>{props.newPrice}</p>
                </div>
            </nav>
        </div>
    );
}

export default GamePromo;