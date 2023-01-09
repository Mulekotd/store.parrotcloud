import './NewGame.css';
import React from 'react';
import { storage, database } from '../../../firebase';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef } from 'firebase/database';
import { push, child, update } from 'firebase/database';

function NewGame(props) {

    const [gameName, setGameName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [authors, setAuthors] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [imgURL, setimgURL] = useState('');

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id === 'gameName'){
            setGameName(value);
        }
        if(id === 'authors') {
            setAuthors(value);
        }
        if(id === 'price') {
            setPrice(value);
        }
        if(id === 'description') {
            setDescription(value);
        }
        if(id === 'date') {
            setDate(value);
        }
        if(id === 'link') {
            setLink(value);
        }
      }
    
      const handleSubmit = () => {

        const f = new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency'
        })

        let data = {
          name: gameName,
          date: date,
          price: f.format(price),
          authors: authors,
          description: description,
          link: link,
          url: imgURL
        }

        const newGameKey = push(child(databaseRef(database), '/games')).key;
        const updates = {};
        updates['games/' + newGameKey] = data;
        return update(databaseRef(database), updates);
    }

    return (
        <main>
            <section className='middlebar'>

                <p className='warning'>Publish your game!</p>

                <nav className='gameinput'>

                    <p>1 - Insert Your Game Images:</p>

                    <form>
                        <ImageInput handleSubmit={handleSubmit} data={gameName} setimgURL={setimgURL}/>

                        <p>2 - Define:</p>

                        <label>Game Name (*Insert before sending image)</label>
                        <input
                        className='textinput'
                        type='text'
                        required={true}
                        value={gameName}
                        id='gameName'
                        onChange={(e) => handleInputChange(e)}
                        />

                        <label>Download Methods</label>
                        <input
                        className='textinput'
                        type='text'
                        required={true}
                        value={link}
                        id='link'
                        onChange={(e) => handleInputChange(e)}
                        />

                        <label>Launch Date</label>
                        <input
                        className='textinput'
                        type='date'
                        id='date'
                        value={date}
                        onChange={(e) => handleInputChange(e)}
                        />

                        <label>Price (R$)</label>
                        <input
                        className='textinput'
                        type='number'
                        id='price'
                        value={price}
                        onChange={(e) => handleInputChange(e)}
                        />

                        <label>Authors</label>
                        <input
                        className='textinput'
                        type='text'
                        id='authors'
                        value={authors}
                        onChange={(e) => handleInputChange(e)}
                        />

                        <label>Description</label>
                        <input
                        className='bigtextinput'
                        type='text'
                        id='description'
                        value={description}
                        onChange={(e) => handleInputChange(e)}
                        />

                        <p>3 - Everything Done? Just Accept The Terms And Let it Go!</p>

                        <label>
                            <input type='checkbox'/> I agree in share 100 porcent of my gross revenue with the ParrotCloud™ and never complain about it.
                        </label>

                        <button
                        type='submit'
                        onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </form>
                </nav>
            </section>
        </main>
    );
}

export default NewGame;

export function ImageInput(props) {

    // State to store uploaded file
    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);
    const [pressed, isPressed] = useState(false);
 
    // Handle file upload event and update state
    async function handleChange(event) {
        await setFile(event.target.files[0]);
    }

    async function handleUpload() {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/games/${props.data}/${file.name}`);
        // Progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        isPressed(!pressed)

        await uploadTask.on(
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
                    console.log(url);
                    props.setimgURL(url);
                });
            },
        );    
    };

    return (
        <>
            <div className='images'>
                <div className='imageinput'>
                    <input
                    id='large-image'
                    onChange={handleChange}
                    type='file'
                    />
                </div>
                <button 
                type='button'
                className='secondary-button'
                onClick={handleUpload}
                >
                    {!pressed ? <>Send Images</> : <>{percent}% done</>}
                </button>
            </div>
        </>
    );
}