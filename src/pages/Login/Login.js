import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    
    //User Authentication
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const onRefresh = () => {
        if(onTrigger) {
            window.location.reload(false);
        }
    }

    //create an username cookie on click
    const onTrigger = () => {
        document.cookie = `email=${email}; expires=${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString()}; path=/store.parrotcloud`;
        console.log(password);
        onRefresh(navigate('/store'));
    }

    return (
        <>
            <Navigation />

            <main>
                <section className='middlebar'>

                    <p className='warning'>It's awesome to get you back!<br/>Login to start exploring again!</p>

                    <div className='component-login'>

                        <nav className='leftlogin'>
                            <form>
                                <label>E-mail</label>
                                <input
                                type={'email'}
                                required={true}
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                />

                                <label>Password</label>
                                <input
                                type={'password'}
                                required={true}
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                />

                                <p>Consider doing the the 2 step verification, to improve your security!</p>

                                <button
                                onClick={onTrigger}
                                type='submit'
                                >
                                    Login
                                </button>
                                <br/>
                                <Link to='/sign-up' className='terciary-button'>Create Account</Link>
                            </form>
                        </nav>

                        <nav className='rigthlogin'>
                            <p>You can enter up using</p>
                        </nav>
                    
                    </div>

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
                    <Link to='/sign-up' className='login'>Sign Up</Link>
                </span>
            </nav>
        </header>
    );
}

export default Login;