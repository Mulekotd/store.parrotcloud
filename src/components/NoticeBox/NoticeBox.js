import './NoticeBox.css';

const NoticeBox = (props) => {
    return (
        <div className='notice'>
            <p>{props.title}</p>
        </div>
    );
}

export default NoticeBox;