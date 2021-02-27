import React, { useContext, useState, useEffect } from "react"
import { db,auth } from "../../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    var send =  auth.createUserWithEmailAndPassword(email, password)
    const userObj={
      email:email,
      admin:false
    }
    localStorage.setItem('email',email)
    db.collection('users').doc(email).set(userObj);
    return send
    
  }

  function login(email, password) {
    localStorage.setItem('email',email)
    return auth.signInWithEmailAndPassword(email, password)
    
  }

  function logout() {
    localStorage.removeItem('email')
    return auth.signOut()
    
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}