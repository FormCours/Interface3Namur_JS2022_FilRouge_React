import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import ConnectionButton from '../connection-button/connection-button';

const Header = ({ onOpenMenu }) => {

    return (
        <header>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <IconButton
                        onClick={() => onOpenMenu()}
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component='div'
                        variant='h5'
                        sx={{ flexGrow: 1 }}>
                        Task List
                    </Typography>

                    <ConnectionButton />
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;