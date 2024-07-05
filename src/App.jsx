
import './App.css'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
 

function App() {


  return (
<div className='w-full min-h-screen flex flex-wrap content-baseline '>
      <div className='w-full block'>
        <Header />
        <main> 
          <div className=' ' >
          <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
