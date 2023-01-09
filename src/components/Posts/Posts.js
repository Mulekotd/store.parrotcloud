import React, { Component } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import './Posts.css';

function Posts(props) {

    return (
        <>
            <div className='post'>
                <nav>
                    <img alt='profile' src={require('../../assets/images/Profile.png')} />
                    <p>{props.username}</p>
                </nav>
                <img
                className='imagepost'
                src={(props.image)}
                alt='post'
                />
                <div>
                    <nav><p>{props.title}</p></nav>
                    <LikeButton />
                </div>
            </div>
        </>
    );
}

const styleNotPressed = {
    height: 25,
    width: 25,
    color: '#ffffff'
};

const stylePressed = {
    height: 25,
    width: 25,
    color: 'red',
    animation: 'pop 0.5s linear 0.5s 4 alternate',
}

export class LikeButton extends Component {
    constructor() {
        super();

        this.state = {
            likes: 0,
            isPressed: true,
        }
    }

    onClick = (event) => {
        event.preventDefault();
        if(this.state.isPressed) {
            this.setState({
                isPressed: false,
                likes: this.state.likes + 1
            });
        }

        if(!this.state.isPressed) {
            this.setState({
                isPressed: true,
                likes: this.state.likes - 1
            });
        }
        localStorage.setItem('likes', JSON.stringify(this.state.likes));
    }

    render() {
        return (
            <>   
                <button 
                className="like-btn"
                onClick={this.onClick}
                >
                    {!this.state.isPressed ? <BsHeartFill style={stylePressed}/> : <BsHeartFill style={styleNotPressed}/>}
                </button>
                <p>{this.state.likes}</p>
            </>
        );
    }
}

export default Posts;