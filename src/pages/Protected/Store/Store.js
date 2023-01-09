import './Store.css';
import { Link } from 'react-router-dom';
import Featured from '../../../components/Featured/Featured';
import Offers from '../../../components/Offers/Offers';

function Store() {

    return (
        <>            
            <main>
                <section className='middlebar'>

                    <div className='gamedesc'>
                        <button>Your Store</button>
                        <button>Noteworthy</button>
                        <button>Categories</button>
                        <button>Labs</button>
                    </div>

                    <Featured />

                    <Offers />

                </section>

                <section className='leftbar'>
                    <nav>
                        <Link to='/store'><img src={require('../../../assets/images/logo.png')} alt='PARROTCLOUD LOGO'/></Link>
                    </nav>

                    <div>

                        <h3>Categories</h3>

                        <p>Free to Play</p>
                        <p>RPG</p>
                        <p>Action</p>
                        <p>Sports</p>
                        <p>Horror</p>
                        <p>Multiplayer</p>
                        <p>Strategy</p>
                        <p>Open World</p>
                        <p>City Builder</p>
                        <p>Simulation</p>
                        <p>FPS</p>
                        <p>Race</p>
                        <p>Rougue Like</p>
                        <p>MetroidVania</p>
                        <p>Puzzle</p>
                        <p>MMO</p>
                        
                        <button><Link to='/new-game'>Publish Your Game</Link></button>
                    </div>

                </section>

                <section className='rightbar'></section>

            </main>
        </>
    );
}

export default Store;