import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { generateDbPathFromList } from '../utils';

const firestore = firebase.firestore;

class FirebaseProvider {
    /**
     * Firebase data provider
     * @param {object} firebaseConfig 
     */
    constructor(firebaseConfig){
        if(firebaseConfig){
            
            // Initializing firebase
            firebase.initializeApp(firebaseConfig);
            firebase.auth().onAuthStateChanged((user)=> {
                if(user){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }else {
                    localStorage.removeItem('currentUser');
                }
            });
        }
    }

    /**
     * Register user
     */
    registerUser = (user) => {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((firebaseUser) => {
                let userData = {
                    email: user.email,
                    username: user.username,
                    userId: generateDbPathFromList([user.email], ''),
                    loginId: firebaseUser.user.uid,
                }

                // Save the user record in the database
                this.saveUserProfile(userData);

                resolve(firebase.auth().currentUser);
            }, (error) => {
                reject(error.message);
            })
        })
    }

    /**
     * Save user profile to database
     * @param {*} user 
     */
    saveUserProfile(user){
        return new Promise((resolve, reject) => {
            firestore().collection('/users').doc(user.userId)
            .set(user).then((_) => {
                resolve();
            }).catch(error => {
                reject(error.message);
            });
        });
    }


    /**
     * Login user with email and password
     * @param {string} email 
     * @param {string} password 
     */
    loginUser = (email, password) => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                resolve(firebase.auth().currentUser);
            }).catch(error => {
                reject(error.message);
            });
        });
    }


    /**
     * Send user an email with link to recover password
     * @param {string} email 
     */
    forgotPassword = (email) => {
        return new Promise((resolve, reject) => {
            firebase.auth()
            .sendPasswordResetEmail(email, {url: window.location.protocol + '//' + window.location.host + '/login'})
            .then(()=>{
                resolve(true);
            }).catch((error) => {
                reject(error.message);
            });
        });
    }


    /**
     * Logout the user
     */
    logout = () => {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut()
            .then(() => {
                resolve(true);
            }).catch((error) => {
                reject(error.message);
            });
        });
    }

    /**
     * Update localstorage
     * @param {object} user 
     */
    setLoggedInUser = (user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    /**
     * Returns currently authenticated user
     */
    getCurrentUser = () => {
        if(!localStorage.getItem('currentUser'))
            return null;
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}


// const handleUserPresence = () => {
//     let onlineStatus = {
//         status: 'online',
//         lastSeen: database.ServerValue.TIMESTAMP,
//     }

//     // let offlineStatus = {
//     //     status: 'offline',
//     //     lastSeen: database.ServerValue.TIMESTAMP,
//     // }

//     let currentUser = JSON.parse(localStorage.getItem('currentUser'));

//     if(currentUser) {
//         let email = currentUser.email;
//         let userId = generateDbPathFromList([email], '');

//         let userRef = firestore().collection('/users').doc(userId);

//         database().ref('.info/connected').on('value', snapshot => {
//             if (snapshot.val()) {
//                 //User is online
//                 userRef.update(onlineStatus);


//                 // userDbRef.onDisconnect().update(offlineStatus);
//                 // return
//             };
//         })
//     }
// }

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
    const user = localStorage.getItem('currentUser');
    return user ? (typeof (user) == 'object' ? user : JSON.parse(user)) : null;
}

let _firebaseProvider = null;

/**
 * Initialize firebase provider
 * @param {object} config 
 */
const initFirebaseProvider = (config) => {
    if(!_firebaseProvider){
        _firebaseProvider = new FirebaseProvider(config);
    }
    return _firebaseProvider;
}

/**
 * Returns firebase data provider
 */
const getFirebaseProvider = () => {
    return _firebaseProvider;
}


export {initFirebaseProvider, getFirebaseProvider, getLoggedInUser };