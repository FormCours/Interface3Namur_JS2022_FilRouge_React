import { Outlet } from 'react-router-dom';
import TitlePage from '../../components/title-page/title-page';
import { useRedirectToHomeIfConnected } from '../../hooks/redirect-hook';


const Auth = () => {

    useRedirectToHomeIfConnected();

    return (
        <>
            <TitlePage>
                Ecran de connexion...
            </TitlePage>

            {/* ↓ Permet d'avoir des pages 'enfant' dans le routing */}
            <Outlet />
        </>
    );
};

export default Auth;