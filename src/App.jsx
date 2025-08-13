import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { useAuth } from "./Authentication";

function App() {
  const {currentUser, loading}= useAuth();

  if (loading){
    return <h1 className="flex h-screen justify-center items-center text-xl">Carregando</h1>
  }

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={!currentUser ? <SignIn /> : <Navigate to='/dashboard' />}/>
          <Route path="/signup" element={!currentUser ? <SignUp /> : <Navigate to='/dashboard'/>} />
          <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to='/signin'/>} />
          <Route path="/profile" element={currentUser ? <Profile /> : <Navigate to='/signin'/>} />
        </Routes>
  )
}

export default App
