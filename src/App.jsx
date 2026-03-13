import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero';
import AlbumList from './pages/AlbumList';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    // <>
    //   <Navbar />
    //   <Hero />
    // </>
    <Routes>
      <Route
        path="/"
        element={
            <AlbumList />
        }
      />
    </Routes>
  )
}

export default App
