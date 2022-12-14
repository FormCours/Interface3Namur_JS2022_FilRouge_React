import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/auth-action';

const FormLogin = () => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const errorMsg = useSelector(state => state.auth.errorMsg);

    const onRegister = (data) => {
        dispatch(loginUser(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onRegister)}>
            <div>
                <label htmlFor='credential'>Email / Pseudo</label>
                <input id='credential' type='text' {...register('credential')} />
            </div>
            <div>
                <label htmlFor='password'>Mot de passe</label>
                <input id='password' type='password' {...register('password')} />
            </div>

            <Button type='submit' variant='contained' color='primary'>
                Se connecter
            </Button>

            {errorMsg && (
                <p>{errorMsg}</p>
            )}
        </form>
    );
};

export default FormLogin;