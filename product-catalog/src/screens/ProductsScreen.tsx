import * as React from 'react';
import { SearchBar } from '../components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Filters } from '../components/Filters';
import { ProductItemCard } from '../components/ProductItemCard'
import { fakeCarItemsDisplay } from "../data/DisplayCarsArray";
import { IProductData, useFetchProductData } from '../hooks';
export function ProductsScreen() {
    const data = useFetchProductData();
    // const tempdata = data;
    // let displaydata = data;
    const [categoryfilter1, setcategoryfilter1] = React.useState(false);
    const [categoryfilter2, setcategoryfilter2] = React.useState(false);
    const [categoryfilter3, setcategoryfilter3] = React.useState(false);
    const [pricefilter1, setpricefilter1] = React.useState(false);
    const [pricefilter2, setpricefilter2] = React.useState(false);
    const [starfilter1, setstarfilter1] = React.useState(false);
    const [starfilter2, setstarfilter2] = React.useState(false);
    const [starfilter3, setstarfilter3] = React.useState(false);
    const [starfilter4, setstarfilter4] = React.useState(false);
    const [starfilter5, setstarfilter5] = React.useState(false);

    const [displaydata, setdisplayData] = React.useState<Array<IProductData>>(data);
    const [tempdisplaydata, settempdisplayData] = React.useState<Array<IProductData>>(data);

    React.useEffect(() => {
        setdisplayData(data);
        settempdisplayData(data);
    }, [data])

    const handleCategoryFilter1 = () => {
        if(categoryfilter1){
        console.log('handleClickFilter1 unset')
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return obj.category === "men's clothing";
            });
            setdisplayData(result);
            console.log('handleClickFilter1 set')
        }
        setcategoryfilter1(!categoryfilter1);
    };

    const handleCategoryFilter2 = () => {
        if(categoryfilter2){
        console.log('handleClickFilter2 unset')
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return obj.category === 'jewelery';
            });
            setdisplayData(result);
            console.log('handleClickFilter2 set')
        }
        setcategoryfilter2(!categoryfilter2);
    };

    const handleCategoryFilter3 = () => {
        if(categoryfilter3){
        console.log('handleClickFilter3 unset')
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return obj.category === 'electronics';
            });
            setdisplayData(result);
            console.log('handleClickFilter3 set')
        }
        setcategoryfilter3(!categoryfilter3);
    };

    const handlePriceFilter1 = () => {
        if(pricefilter1){
        console.log('handlePriceFilter1 unset')
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return obj.price < 100;
            });
            setdisplayData(result);
            console.log('handlePriceFilter1 set')
        }
        setpricefilter1(!pricefilter1);
    };

    const handlePriceFilter2 = () => {
        if(pricefilter2){
        console.log('handlePriceFilter2 unset')
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return obj.price > 100;
            });
            setdisplayData(result);
            console.log('handlePriceFilter2 set')
        }
        setpricefilter2(!pricefilter2);
    };

    const handleStarFilter1 = () => {
        if(starfilter1){
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return Math.floor(obj.rating.rate) === 1;
            });
            setdisplayData(result);
        }
        setstarfilter1(!starfilter1);
    };

    const handleStarFilter2 = () => {
        if(starfilter2){
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return Math.floor(obj.rating.rate) === 2;
            });
            setdisplayData(result);
        }
        setstarfilter2(!starfilter2);
    };

    const handleStarFilter3 = () => {
        if(starfilter3){
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return Math.floor(obj.rating.rate) === 3;
            });
            setdisplayData(result);
        }
        setstarfilter3(!starfilter3);
    };

    const handleStarFilter4 = () => {
        if(starfilter4){
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return Math.floor(obj.rating.rate) === 4;
            });
            setdisplayData(result);
        }
        setstarfilter4(!starfilter4);
    };

    const handleStarFilter5 = () => {
        if(starfilter5){
        setdisplayData(tempdisplaydata);
        settempdisplayData(data);
        }
        else{
            settempdisplayData(displaydata);
            const result = displaydata.filter((obj) => {
            return Math.floor(obj.rating.rate) === 5;
            });
            setdisplayData(result);
        }
        setstarfilter5(!starfilter5);
    };

    return (
        <div style={{ height: '100vh', width: '98vw'}}>
            <div style={{ paddingTop: '3%' }}>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <SearchBar />
                </div>
                <div style={{ marginTop: '2%'}}>
                    <Typography variant="h4" sx={{ paddingLeft: '2vw' }} gutterBottom>
                        Search Results
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div id="filters" style={{height: '100vh' }}>
                            <Filters {...{ data: data, onClickPriceFilter1: handlePriceFilter1, onClickPriceFilter2: handlePriceFilter2, onClickCategoryFilter1: handleCategoryFilter1, onClickCategoryFilter2: handleCategoryFilter2, onClickCategoryFilter3: handleCategoryFilter3, onClickStarFilter1: handleStarFilter1, onClickStarFilter2: handleStarFilter2, onClickStarFilter3: handleStarFilter3, onClickStarFilter4: handleStarFilter4, onClickStarFilter5: handleStarFilter5 }} />
                        </div>

                        <div id="productitems" style={{ display: 'flex', flexWrap: 'wrap'}}>
                            {displaydata.map((productObj, index) => {
                                return <ProductItemCard {...productObj} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}