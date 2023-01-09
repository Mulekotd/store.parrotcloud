import { ref, child, get } from 'firebase/database';
import database from '../firebase';

export default function Data(games, users, posts) {
    games = [];
    const dbRef = ref(database);
    get(child(dbRef, `games/`)).then((snapshot) => {
    if (snapshot.exists()) {
        let data = snapshot.val();
        data = Object.values(data);
        data.forEach(element => {
            games.push(element);
        });
    } else {
        console.log('No data available');
    }
    }).catch((error) => {
    console.error(error);
    });
 
    users = [];
    get(child(dbRef, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
        let data = snapshot.val();
        data = Object.values(data);
        data.forEach(element => {
            users.push(element);
        });
    } else {
        console.log('No data available');
    }
    }).catch((error) => {
        console.error(error);
    });
 
    posts = [];
    get(child(dbRef, `posts/`)).then((snapshot) => {
    if (snapshot.exists()) {
        let data = snapshot.val();
        data = Object.values(data);
        data.forEach(element => {
            posts.push(element);
        });
    } else {
        console.log('No data available');
    }
    }).catch((error) => {
        console.error(error);
    });
}