import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { RiStarFill, RiStarLine } from "react-icons/ri";


export function LatestTrendsItemCard({ manufacturer }: { manufacturer: string }) {

    return (
        <div style={{ height: '180px', width: '120px', borderRadius: 3 }}>
            <div style={{
                height: '160px', width: '120px', borderRadius: 3,
                backgroundImage: 'url(https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            </div>
            <div style={{ padding: 2, textAlign: 'left' }}>

                <Typography variant="caption">
                    By: {manufacturer}
                </Typography>
            </div>
        </div>
    );
}