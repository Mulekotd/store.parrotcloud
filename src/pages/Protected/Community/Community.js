import './Community.css';
import { Link } from 'react-router-dom';

import { AiOutlineUsergroupAdd, AiOutlineLike } from 'react-icons/ai';
import { BsCamera } from 'react-icons/bs';
import { GiRetroController } from 'react-icons/gi';
import Posts from '../../../components/Posts/Posts';

import { useState, useRef } from 'react';
import { storage, database } from '../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef } from 'firebase/database';
import { push, child, update } from 'firebase/database';

const Community = (props) => {

  const [input, setInput] = useState('');
  const [imgURL, setimgURL] = useState('');

  //get all cookie history break ';' and '=' characters, decrease informations in key and value, arrange keys and decode values
  var cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((acumulator, [key, value]) => (
      {...acumulator, [key.trim()]: decodeURIComponent(value) }),
  {});

  const handleInputChange = (e) => {
    e.preventDefault();
    const {id, value} = e.target;
    if(id === 'input'){
      setInput(value);
    }
  }

  const handleSubmit = () => {
    let data = {
      input: input,
      url: imgURL
    }

    const newPostKey = push(child(databaseRef(database), '/posts')).key;
    const updates = {};
    updates['posts/ ' + newPostKey] = data;

    return update(databaseRef(database), updates);
  }

  return (
    <main>
      
        <section className='middlebar'>

          <div className='gamedesc'>
            <button>Popular</button>
            <button>Trend</button>
            <button>New</button>
            <button>Communities</button>
          </div>

          <div className='add-post'>
            <nav>
              <img alt='profile' src={require('../../../assets/images/Profile.png')} />
            </nav>
            <p>
              {cookies.username}
            </p>
            <input
            type='text'
            className='comment'
            placeholder='Write what are thinking...'
            id='input'
            value={input}
            onChange={(e) => handleInputChange(e)}
            />
            <SendImage setimgURL={setimgURL}/>
            <button
            type='submit'
            onClick={() => handleSubmit()}
            >
              Send Post!
            </button>
          </div>

          <Posts
          image='https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FCuphead%2Fcapsule_616x353%20(1).jpg?alt=media&token=a1c72ca6-3973-4e02-a76e-d0966c176965'
          username='Admin'
          title='New Game Released!'
          key={1}
          />
          
        </section>

        <section className='leftbar'>
            <nav>
                <Link to='/store'><img src={require('../../../assets/images/logo.png')} alt='PARROTCLOUD LOGO' /></Link>
            </nav>

            <p className="warning">PARROTCLOUD COMMUNITY</p>

            <div className="gamedesc">
                <Link to='/profile'>Profile</Link>
                <span>
                    <Link>
                      <AiOutlineUsergroupAdd />Friends
                    </Link>
                    <Link>
                      <GiRetroController />Your Games
                    </Link> 
                    <Link>
                      <AiOutlineLike /> Likes
                    </Link>
                </span>
            </div>
        </section>

        <section className='rightbar'>

        </section>

    </main>
  )
}

export default Community;

function SendImage(props) {

  const inputFile = useRef(null);
  const [file, setFile] = useState('');
  const [percent, setPercent] = useState(0);
  const [pressed, isPressed] = useState(false);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    const storageRef = ref(storage, `/posts/${file.name}`);
    // Progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    isPressed(!pressed);

    uploadTask.on(
        "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            // update progress
            setPercent(percent);
          },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                props.setimgURL(url);
            });
        },
    );
    console.log(percent);
  };

  return (
    <>
      <div
      onChange={handleChange}
      onClick={() => inputFile.current.click()}
      >
        <BsCamera />
        <input
        type='file'
        className='file-upload'
        ref={inputFile}
        onClick={handleUpload}
        />           
      </div>
    </>
  )
}