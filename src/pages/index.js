import About from './components/About'
import Header from './components/Header'
import Sidebar from "./components/Sidebar"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Sidebar />
      <Header />
      <div className='z-10'>
        <About />
      </div>
    </>
  )
}
