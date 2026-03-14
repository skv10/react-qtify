import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero';
import AlbumList from './pages/AlbumList';
import AlbumId from './pages/AlbumId';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
            <AlbumList />
        }
      />
      <Route
        path="album/:id"
        element={
            <AlbumId />
        }
      />
    </Routes>
  )
}

export default App
