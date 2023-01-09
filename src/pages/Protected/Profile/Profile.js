
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Profile.css';

function Profile() {

  var cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((acumulator, [key, value]) => (
        {...acumulator, [key.trim()]: decodeURIComponent(value) }),
    {});


  const navigate = useNavigate();

  function onRefresh() {
    window.location.reload(false);
  }

  function logout() {
    document.cookie = `username=; expires=${new Date(1999, 0, 1).toUTCString()}; path=/store.parrotcloud`;
    document.cookie = `email=; expires=${new Date(1999, 0, 1).toUTCString()}; path=/store.parrotcloud`;
    onRefresh(navigate('/login'));
  }

  return (
    <>
      <main>
          <section className='leftbar'></section>
          <section className='middlebar'>
            <div className='profile-card'>
              <p className='warning'>Profile</p>

              <div className='profile-image'>
                <img
                src={require('../../../assets/images/Profile.png')}
                alt='profile-pic'
                />
              </div>


              <div className='description'>
                <p>Description</p>
                <textarea className='description'/>
              </div>

              <div className='user-informations'>
                <p>Nome: {cookies.username}</p>
                <p>Email: {cookies.email}</p>

                <div>
                  <button
                  className='primary-button-warning' 
                  onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className='rightbar'></section>
      </main>
    </>
  );
}

export default Profile;