import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LatestTrendsItemCard } from './LatestTrendsItemCard';
import { faker } from '@faker-js/faker';
import { fakeCarsSuggestions, fakeCarsTrending, fakeCarsSuggestionsDisplay, fakeCarsTrendingDisplay } from "../data/DisplayCarsArray";

export function ProductCard() {
    return (
        <div>
            <Card sx={{
                width: '45vw', marginTop: '2%',
                minWidth: 275, pl: 2, pr: 2, pt: 1, pb: 1, borderRadius: 1
            }}>
                <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} color="black" gutterBottom>
                        Latest Trends
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                        {fakeCarsTrendingDisplay.map((fakeCar, index) => {
                            return <LatestTrendsItemCard manufacturer={fakeCarsTrendingDisplay[index]} />
                        })}
                    </div>
                    <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: 'bold' }} color="black" gutterBottom>
                        Popular Suggestions
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 10 }}>
                        {fakeCarsSuggestionsDisplay.map((fakeCar, index) => {
                            return <Typography variant="caption" color="black" gutterBottom>{fakeCarsSuggestionsDisplay[index]}</Typography>
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
