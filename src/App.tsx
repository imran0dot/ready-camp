import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header'
import { Outlet } from "react-router-dom";
import PreFooter from './components/shared/preFooter/PreFooter';
import LoginModal from './components/shared/loginModal/LoginModal';

function App() {
  return (
    <>
      <Header />
      <LoginModal />
      <Outlet />
      <PreFooter />
      <Footer />
    </>
  )
}

export default App
