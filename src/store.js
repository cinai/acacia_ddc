import { createStore, combineReducers, compose  } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

/** Custom Reducers */

// Configurar firestore.
const firebaseConfig = {
    apiKey: "AIzaSyCd2lE5NewfBehxs5qTQ96tc_vNQ545leI",
    authDomain: "acacia-6c5b9.firebaseapp.com",
    databaseURL: "https://acacia-6c5b9.firebaseio.com",
    projectId: "acacia-6c5b9",
    storageBucket: "acacia-6c5b9.appspot.com",
    messagingSenderId: "966375149008",
    appId: "1:966375149008:web:60a4ba347dbde403fafdd5",
    measurementId: "G-F2Z8YPVWJ0"
}

// inicializar firebase
firebase.initializeApp(firebaseConfig);

// configuracion de react-redux
const rrfConfig = {
    userProfile : 'users',
    useFirestoreForProfile: true
}

// crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Reducers 
const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore: firestoreReducer, 
})

// state inicial
const initialState = {};

// Create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
));
export default store;