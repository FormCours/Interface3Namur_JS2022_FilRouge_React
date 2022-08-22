import { Typography } from '@mui/material';
import FormRegister from '../../containers/form-register/form-register';

const Register = () => {

    return (
        <>
            <Typography component='h2' variant='h4'>
                Register
            </Typography>

            <FormRegister />
        </>
    );
};

export default Register;