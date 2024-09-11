import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
