import './SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { database } from '../../firebase';
import { ref, push, child, update } from 'firebase/database';

function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    const {id, value} = e.target;
    if(id === 'username'){
      setUsername(value);
    }
    if(id === 'email') {
      setEmail(value);
    }
    if(id === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = () => {
    let data = {
      username: username,
      email: email,
      password: password
    }

    const newPostKey = push(child(ref(database), '/users')).key;
    const updates = {};
    updates['users/' + newPostKey] = data;

    //create an username and email cookie
    document.cookie = `username=${username}; expires=${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString()}; path=/store.parrotcloud; Secure`;
    document.cookie = `email=${email}; expires=${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString()}; path=/store.parrotcloud; Secure`;
    return update(ref(database), updates);
  }

  return (
    <>
      <Navigation />

      <main>
        <section className='middlebar'>
          <p className='warning'>You don't have an account yet?<br/>Create one right now!</p>

          <div className='component-login'>

            <nav className='leftlogin'>

              <form action={'/store.parrotcloud/#/store'}>
                <label>Username</label>
                <input 
                type={'text'}
                required={true}
                value={username}
                id='username'
                placeholder='Username'
                onChange={(e) => handleInputChange(e)}
                />

                <label>E-mail</label>
                <input
                type={'email'}
                required={true}
                value={email}
                id='email'
                placeholder='Email'
                onChange={(e) => handleInputChange(e)}
                />

                <label>Password</label>
                <input
                type={'password'}
                required={true}
                value={password}
                id='password'
                placeholder='Password'
                onChange={(e) => handleInputChange(e)}
                />

                <p>By singin up you agree with the terms of privacy and our coockie police.</p>

                <button
                onClick={() => handleSubmit()}
                type='submit'
                >
                  Create Account
                </button>
                <p>Already have an account? <Link to='/login'>Login.</Link></p>
              </form>

            </nav>
            <nav className='rigthlogin'>
              <p>
                You can signin up using
              </p>
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
      <nav className="upheader">
        <span>
          <Link to='/' className='logo'>ParrotCloud_</Link>
        </span>
        <span>
          <Link to='/login' className='login'>Sign In</Link>
        </span>
      </nav>
    </header>
  );
}

export default SignUp;