import { useState } from 'react'
import AppButton from '../../components/AppButton';
import LinkText from '../../components/LinkText';
import TitleInput from '../../components/TitleInput';
import { ReactComponent as AppIcon } from '../../res/svg/app-logo-orange.svg';
import '../../res/styles/Login.css';
import { useNavigate } from 'react-router-dom';
import LoginController from '../../controller/login/LoginController';
import AppError from '../../core/util/AppError';
import Popup from '../../components/Popup';
import LoginPageProps from '../../model/view/LoginPageProps';

const LoginPage = ({ controller }: LoginPageProps) => {

    // --------------------  variables  --------------------
    const navigate = useNavigate();

    // --------------------  states  --------------------
    const [loading, setLoading] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [popupOpen, setPopupOpen] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<string>('');

    // --------------------  event handlers  --------------------
    const handlePopupClose = () => {
        setPopupOpen(false);
    }

    const handlePhoneNumberChange = (text: string) => {
        setPhoneNumber(text);
    }

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    }

    const handleButtonClick = () => {

        setLoading(true);

        controller.authenticate(phoneNumber, password).then(data => {
            navigate('/home', { replace: true });
        }).catch((error: AppError) => {
            setPopupMessage(error.message)
            setPopupOpen(true)
        }).catch(error => {
            setPopupMessage("خطای سیستمی")
            setPopupOpen(true)
        }).finally(() => {
            setLoading(false);
        })

    }

    const handleSignupClick = () => {
        console.log('pressed on signup text ...');
    }


    // --------------------  render  --------------------
    return (
        <div className='main-container'>
            <Popup open={popupOpen} onClose={handlePopupClose}>
                <p>
                    {popupMessage}
                </p>
            </Popup>
            <div className='content-container'>
                <AppIcon style={{ marginBottom: 80 }} />
                <TitleInput
                    title='Phone Number'
                    titleColor='#e3b23c'
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    style={{ marginBottom: 20 }}
                />
                <TitleInput
                    title='Password'
                    titleColor='#e3b23c'
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ marginBottom: 40 }}
                />
                <AppButton
                    title='Log In'
                    onClick={handleButtonClick}
                    isLoading={loading}
                />
                <LinkText
                    style={{ marginTop: 25, marginBottom: 25 }}
                    linkText='Sign Up'
                    preText="You don't have an account?"
                    preTextColor='#e3b23c'
                    linkTextColor='#7ce577'
                    onLinkClick={handleSignupClick}
                />
            </div>
        </div>
    );


}

export default LoginPage