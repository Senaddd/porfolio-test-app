import logo from './logo.svg'
import './App.scss'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
