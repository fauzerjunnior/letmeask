import React, { useState, createContext, useEffect } from 'react';
import { auth, firebase } from '../services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();
  const { children } = props;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        const { displayName, photoURL, uid } = loggedUser;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
