import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { IProductData } from '../hooks';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export function ProductItemCard(props: IProductData) {
    const [isFavColor, setFavColor] = React.useState(true);
    const [isViewProduct, setViewProduct] = React.useState(false);

    const handleClickFavColor = () => {
        setFavColor(!isFavColor);
    };

    const stars: JSX.Element[] = [];
    for (let i = 1; i <= Math.floor(props.rating.rate); i++) {
        stars.push(<RiStarFill />);
    }
    for (let i = 1; i <= 5-Math.floor(props.rating.rate); i++) {
        stars.push(<RiStarLine />);
    }

    return (
        // <Paper elevation={5} sx={{ bgcolor: 'red', marginLeft: '30px', marginBottom: '30px' }}>
            <button
                onMouseEnter={() => setViewProduct(true)}
                onMouseLeave={() => setViewProduct(false)}
                style={{ border: 'white', padding: 0, backgroundColor: 'white', marginLeft: '30px', marginBottom: '30px', height: '350px', width: '200px'  }}>
                <div style={{
                    height: '250px', width: '200px', position: 'relative',
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                    <IconButton sx={{ position: 'relative', marginLeft: 20 }} aria-label="fav" onClick={handleClickFavColor}>
                        <FavoriteIcon style={{ backgroundBlendMode: 'hard-light', fill: isFavColor ? "grey" : "#ff0000" }} />
                    </IconButton>
                    {isViewProduct &&
                        <div style={{
                            width: '200px',
                            backgroundColor: '#0066b2',
                            marginTop: '174px',
                            opacity: 0.8,
                            textAlign: 'center',
                            padding: '10px 0px',
                            color: 'white'
                        }}>View Product</div>}
                </div>
                <div style={{ width: '200px', padding: 10, textAlign: 'left' }}>
                    <Typography noWrap={true} variant="body1">
                        {props.title.slice(0,20)}
                    </Typography>
                    <Typography variant="body2">
                        $ {props.price}
                    </Typography>
                    {stars} ({props.rating.count})
                </div>
            </button>
        // </Paper>
    );
}