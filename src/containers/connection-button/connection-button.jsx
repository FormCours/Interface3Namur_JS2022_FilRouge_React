import { Button, ButtonGroup } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ConnectionButton = () => {

    return (
        <ButtonGroup>
            <Button variant='contained' color='success'
                component={NavLink} to='/auth/login'>
                Login
            </Button>
            <Button variant='contained' color='warning'
                component={NavLink} to='/auth/register'>
                Register
            </Button>
            <Button variant='contained' color='error'
                component={NavLink} to='/'>
                Logout
            </Button>
        </ButtonGroup>
    );
};

export default ConnectionButton;