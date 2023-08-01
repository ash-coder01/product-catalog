import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { RiStarFill, RiStarLine } from "react-icons/ri";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export function ProductItemCard({ manufacturer, price, rating, numrating }: { manufacturer: string, price: BigInteger, rating: BigInteger, numrating: BigInteger }) {
    const [isFavColor, setFavColor] = React.useState(true);
    const [isViewProduct, setViewProduct] = React.useState(false);

    const handleClickFavColor = () => {
        setFavColor(!isFavColor);
    };

    return (
        <div style={{ height: '300px', width: '200px', marginLeft: 50, marginBottom: '40px', }}>
            <button
                onMouseEnter={() => setViewProduct(true)}
                onMouseLeave={() => setViewProduct(false)}
                style={{ border: 'white', padding: 0 }}>
                <div style={{
                    height: '250px', width: '200px', position: 'relative',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <IconButton sx={{ position: 'relative', marginLeft: 20 }} aria-label="delete" onClick={handleClickFavColor}>
                        <FavoriteIcon style={{ fill: isFavColor ? "#ffffff" : "#FF0000" }} />
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
                <div style={{ padding: 10, textAlign: 'left' }}>
                    <Typography variant="body1">
                        {manufacturer}
                    </Typography>
                    <Typography variant="body2">
                        Rs. {price} lakh
                    </Typography>
                    <RiStarFill /><RiStarFill /><RiStarFill /><RiStarLine /><RiStarLine />({numrating})
                </div>
            </button>
        </div>
    );
}