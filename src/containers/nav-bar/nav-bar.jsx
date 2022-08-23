import { Avatar, Divider, Stack, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import IconMenu from './icon_menu.jpg';
import style from './nav-bar.module.css';
import { NavLink } from 'react-router-dom';
import { navRoute } from './nav-route';


const NavBarMenuItem = ({ to, text, icon, onSelected }) => {
    return (
        <ListItemButton component={NavLink} to={to} onClick={onSelected}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText>
                {text}
            </ListItemText>
        </ListItemButton>
    );
};

const NavBar = ({ onSelectedMenu }) => {

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

                <List>
                    {navRoute.map((element, index) => (
                        <NavBarMenuItem {...element} onSelected={onSelectedMenu} key={index} />
                    ))}
                </List>

                {/* ↓ Exemple de lien de navigation avec React-Router */}
                <NavLink to='marc'>Error</NavLink>
            </Stack>
        </nav>
    );
};

export default NavBar;