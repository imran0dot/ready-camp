import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { switchModal } from "../../../redux/features/loginModalSlice";
import LoginForm from "./LoginForm";
import RegisterModel from "./RegisterModel";
import { useState } from "react";

const LoginModal = () => {
    const { isShow } = useAppSelector(state => state.loginModal);
    const dispatch = useAppDispatch();
    const handleOpen = () => dispatch(switchModal());
    const [loginModal, setLoginModal] = useState('login')

    return loginModal === 'login' ?
        <LoginForm
            setLoginModal={setLoginModal}
            handleOpen={handleOpen}
            isShow={isShow} /> :
        <RegisterModel
            setLoginModal={setLoginModal}
            handleOpen={handleOpen}
            isShow={isShow} />
};

export default LoginModal;