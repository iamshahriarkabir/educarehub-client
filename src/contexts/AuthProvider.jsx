import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { saveUser } from "../api/lib";
import axiosInstance from "../api/axios"; // Axios ইম্পোর্ট করা হলো

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update user profile (name and photo)
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Log out
  const logOut = async () => {
    setLoading(true);
    // সার্ভার থেকে কুকি রিমুভ করা হচ্ছে
    try {
      await axiosInstance.post("/logout");
    } catch (error) {
      console.error("Logout error from server:", error);
    }
    return signOut(auth);
  };

  // Observer for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log("Current User:", currentUser);

      if (currentUser) {
        // ১. ইউজার ডাটাবেসে সেভ করা (যদি নতুন হয়)
        try {
          await saveUser(currentUser);
        } catch (err) {
          console.log("Save user error:", err);
        }

        // ২. JWT টোকেন জেনারেট করা
        const userInfo = { email: currentUser.email };
        try {
          await axiosInstance.post("/jwt", userInfo);
          console.log("Token generated successfully");
        } catch (err) {
          console.error("Token generation failed:", err);
        }
      } else {
        // ইউজার না থাকলে টোকেন ক্লিয়ার করা (যদি কোনো কারণে থেকে যায়)
        try {
          await axiosInstance.post("/logout");
        } catch (err) {
          console.log("Token cleared");
        }
      }

      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;