import { Avatar, Drawer } from '@mui/material';
import IconMenu from './icon_menu.jpg';

const NavBar = ({ isVisible, onCloseMenu }) => {

    return (
        <Drawer
            anchor='left'
            open={isVisible}
            onClose={onCloseMenu}>

            <Avatar
                sx={{ width: 90, height: 90 }}
                alt='Logo menu'
                src={IconMenu} />


        </Drawer>
    );
};

export default NavBar;