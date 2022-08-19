import { Avatar, Divider, Stack } from '@mui/material';
import IconMenu from './icon_menu.jpg';
import style from './nav-bar.module.css';

const NavBar = () => {

    return (
        <nav className={style.nav}>
            <Stack
                direction='column'
                divider={<Divider orientation='horizontal' />}
                spacing={2}>
                <Avatar
                    // sx={{ width: 90, height: 90, alignSelf: 'center' }}
                    className={style.logo}
                    alt='Logo menu'
                    src={IconMenu} />

                <p>Menu ici</p>

            </Stack>
        </nav>
    );
};

export default NavBar;