import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { IProductData } from '../hooks';
// import { manufacturerArray } from "../data/DisplayCarsArray";

type Props = {
    data: Array<IProductData>
    onClickCategoryFilter1?: React.MouseEventHandler
    onClickCategoryFilter2?: React.MouseEventHandler
    onClickCategoryFilter3?: React.MouseEventHandler
    onClickPriceFilter1?: React.MouseEventHandler
    onClickPriceFilter2?: React.MouseEventHandler
    onClickStarFilter5?: React.MouseEventHandler
    onClickStarFilter4?: React.MouseEventHandler
    onClickStarFilter3?: React.MouseEventHandler
    onClickStarFilter2?: React.MouseEventHandler
    onClickStarFilter1?: React.MouseEventHandler
}

// props: { data: Array<IProductData> }
export function Filters( {data, onClickPriceFilter1, onClickPriceFilter2, onClickCategoryFilter1, onClickCategoryFilter2, onClickCategoryFilter3, onClickStarFilter1, onClickStarFilter2, onClickStarFilter3, onClickStarFilter4, onClickStarFilter5 }: Props) {

    // let categories = props.data.filter((category, index) => props.data.indexOf(category) === index)
    let categories: string[] = [];
    data.forEach(element => {
        if (!categories.includes(element.category)) {
            categories.push(element.category);
        }
    });

    // console.log(categories)

    const [openBrandFilter, setOpenBrandFilter] = React.useState(true);
    const [openPriceFilter, setOpenPriceFilter] = React.useState(true);
    const [openStarsFilter, setOpenStarsFilter] = React.useState(true);

    const handleClickBrandFilter = () => {
        setOpenBrandFilter(!openBrandFilter);
    };
    const handleClickPriceFilter = () => {
        setOpenPriceFilter(!openPriceFilter);
    };
    const handleClickStarsFilter = () => {
        setOpenStarsFilter(!openStarsFilter);
    };
    return (
        <div>
            <List
                sx={{ width: '230px', bgcolor: 'background.paper', p: 2 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClickBrandFilter}>
                    <ListItemText primary="Categories" />
                    {openBrandFilter ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openBrandFilter} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <FormGroup sx={{ pl: 4 }}>
                            <FormControlLabel control={<Checkbox onClick={onClickCategoryFilter1} />} label='mens clothing' />
                            <FormControlLabel control={<Checkbox onClick={onClickCategoryFilter2} />} label='jewelery' />
                            <FormControlLabel control={<Checkbox onClick={onClickCategoryFilter3} />} label='electronics' />
                        </FormGroup>
                    </List>
                </Collapse>
                <Divider style={{ marginTop: '10px' }} />
                <ListItemButton onClick={handleClickPriceFilter}>
                    <ListItemText primary="PRICE RANGE" />
                    {openPriceFilter ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openPriceFilter} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <FormGroup sx={{ pl: 4 }}>
                            <FormControlLabel control={<Checkbox onClick={onClickPriceFilter1} />} label="Under 100" />
                            <FormControlLabel control={<Checkbox onClick={onClickPriceFilter2} />} label="100 to 1000" />
                        </FormGroup>
                    </List>
                </Collapse>
                <Divider style={{ marginTop: '10px' }} />
                <ListItemButton onClick={handleClickStarsFilter}>
                    <ListItemText primary="RATING" />
                    {openStarsFilter ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openStarsFilter} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <FormGroup sx={{ pl: 4 }}>
                            <FormControlLabel control={<Checkbox onClick={onClickStarFilter5} />} label="5 star" />
                            <FormControlLabel control={<Checkbox onClick={onClickStarFilter4}/>} label="4 star" />
                            <FormControlLabel control={<Checkbox onClick={onClickStarFilter3}/>} label="3 star" />
                            <FormControlLabel control={<Checkbox onClick={onClickStarFilter2}/>} label="2 star" />
                            <FormControlLabel control={<Checkbox onClick={onClickStarFilter1}/>} label="1 star" />
                        </FormGroup>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}