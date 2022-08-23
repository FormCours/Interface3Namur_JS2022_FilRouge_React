import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirectToHomeIfConnected = () => {
    const navigate = useNavigate();
    const isConnected = useSelector(state => state.auth.isConnected);

    useEffect(() => {
        if (isConnected) {
            navigate('/');
        }
    }, [isConnected, navigate]);
};