import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuTwoTone';

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
                        variant='h5' >
                        Task List
                    </Typography>

                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;