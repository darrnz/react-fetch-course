import { Route, Router, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './components/ProductListFetch'
import routes from './routes'
import Navbar from './components/Navbar'

function App() {

  return (

    <div>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  )
}

export default App
