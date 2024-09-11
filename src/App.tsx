import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header'
import { Outlet } from "react-router-dom";
import PreFooter from './components/shared/preFooter/PreFooter';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <PreFooter />
      <Footer />
    </>
  )
}

export default App
