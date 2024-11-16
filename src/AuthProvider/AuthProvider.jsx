import { createContext, useEffect, useState } from "react"
import { app } from "../firebase-config/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user creating
    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user login 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // api call for jwt token generate
            if (currentUser) {
                axios.post(`http://localhost:4000/authentication`, { email: currentUser.email })
                    .then(data => {
                        if (data.data) {
                            localStorage.setItem('access-token', data?.data?.token)
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, loading, createUser, signInUser, signInWithGoogle, logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
