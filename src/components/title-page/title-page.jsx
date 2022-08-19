import { Typography } from '@mui/material';

const TitlePage = ({ className, children }) => {

    return (
        <Typography component='h1' variant='h3' className={className} >
            {children}
        </Typography>
    );
};

TitlePage.defaultProps = {
    className: ''
};

export default TitlePage;