import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";



export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();


    

   

    const handelwithpopup = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {

                console.log(error);

            })
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
         handelwithpopup,
         
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;