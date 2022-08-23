import { Typography } from '@mui/material';
import FormLogin from '../../containers/form-login/form-login';

const Login = () => {

    return (
        <>
            <Typography component='h2' variant='h4'>
                Login
            </Typography>

            <FormLogin />
        </>
    );
};

export default Login;