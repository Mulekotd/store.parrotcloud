import './Home.css';
import { Link } from 'react-router-dom';
import { getDatabase, ref, child, get } from "firebase/database";
import application from '../../firebase';

function Home() {

    const games = [];
    const dbRef = ref(getDatabase(application));
    get(child(dbRef, `games/`)).then((snapshot) => {
    if (snapshot.exists()) {
        let data = snapshot.val();
        data = Object.values(data);
        data.forEach(element => {
            games.push(element);
        });
        console.log(games);
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });

    return (
        <>
            <Navigation/>

            <main>
                <section className='home'>
                    <img className='back' alt='background' src={require('../../assets/images/galaxy.jpg')} />
                    <div className='gradient'></div>
                    <section>
                        <h1>Empodere Suas Criações!</h1>

                        <p>
                            Nossa plataforma busca democratizar a Publicação de jogos eletrônicos na internet.
                            Através de uma cooperação entre desenvolvedores independentes e pessoas interessadas em
                            jogar coisas inovadoras, criaremos um ambiente produtivo para a criação e
                            distribuição de videogames na rede.
                        </p>

                        <div>
                            <nav className='iconp'>
                                <img alt='logo' src={require('../../assets/images/logo.png')} />
                            </nav>

                            <nav>
                                <h3>
                                    Conheça mais sobre nossa organização!
                                </h3>
                                <Link to='/sign-up'>
                                    registre-se para começar logo a explorar!
                                </Link>
                            </nav>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

function Navigation() {
    return (
        <header>
            <nav className='upheader'>
                <span>
                    <Link to='/' className='logo'>ParrotCloud_</Link>  
                </span>
                <span>
                    <Link to='/login' className='login'>Sign In</Link>
                    <Link to='/sign-up' className='login'>Sign Up</Link>
                </span>
            </nav>
        </header>
    );
}

export default Home;