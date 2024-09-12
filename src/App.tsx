import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header'
import { Outlet, useLocation } from "react-router-dom";
import PreFooter from './components/shared/preFooter/PreFooter';
import LoginModal from './components/shared/loginModal/LoginModal';

function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("account") && <Header />}

      <LoginModal />
      <Outlet />
      {!location.pathname.includes("account") && <PreFooter />}
      {!location.pathname.includes("account") && <Footer />}

    </>
  )
}

export default App
