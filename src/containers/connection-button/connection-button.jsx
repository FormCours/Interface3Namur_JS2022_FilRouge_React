import { Button, ButtonGroup } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/auth-action';

const ConnectionButton = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isConnected = useSelector(state => state.auth.isConnected);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/");
    };

    return (
        <ButtonGroup>
            {!isConnected ? (<>
                <Button variant='contained' color='success'
                    component={NavLink} to='/auth/login'>
                    Login
                </Button>
                <Button variant='contained' color='warning'
                    component={NavLink} to='/auth/register'>
                    Register
                </Button>
            </>) : (<>
                <Button variant='contained' color='error'
                    onClick={handleLogout} >
                    Logout
                </Button>
            </>)}
        </ButtonGroup>
    );
};

export default ConnectionButton;