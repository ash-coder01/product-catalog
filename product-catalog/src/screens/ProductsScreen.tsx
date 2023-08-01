import * as React from 'react';
import { SearchBar } from '../components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Filters } from '../components/Filters';
import { ProductItemCard } from '../components/ProductItemCard'
import { fakeCarItemsDisplay } from "../data/DisplayCarsArray";
export function ProductsScreen() {

    return (
        <div style={{ height: '100vh', width: '98vw' }}>
            <div style={{ paddingTop: '3%' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <SearchBar />
                </div>
                <div style={{ marginTop: '2%' }}>
                    <Typography variant="h4" sx={{ paddingLeft: '2vw' }} gutterBottom>
                        Search Results
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div id="filters" >
                            <Filters />
                        </div>

                        <div id="productitems" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {fakeCarItemsDisplay.map((fakeCar, index) => {
                                return <ProductItemCard manufacturer={fakeCarItemsDisplay[index].manufacturer} price={fakeCarItemsDisplay[index].price} rating={fakeCarItemsDisplay[index].rating} numrating={fakeCarItemsDisplay[index].numrating} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}