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


export function Filters(props: { data: Array<IProductData> }) {

    // let categories = props.data.filter((category, index) => props.data.indexOf(category) === index)
    let categories: string[] = [];
    props.data.forEach(element => {
        if (!categories.includes(element.category)) {
            categories.push(element.category);
        }
    });

    console.log(categories)

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
                            {categories && categories.map((val) => (<FormControlLabel control={<Checkbox />} label={val} />))}
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
                            <FormControlLabel control={<Checkbox />} label="Under 500" />
                            <FormControlLabel control={<Checkbox />} label="1000 to 3000" />
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
                            <FormControlLabel control={<Checkbox />} label="5 star" />
                            <FormControlLabel control={<Checkbox />} label="4 star" />
                            <FormControlLabel control={<Checkbox />} label="3 star" />
                            <FormControlLabel control={<Checkbox />} label="2 star" />
                            <FormControlLabel control={<Checkbox />} label="1 star" />
                        </FormGroup>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}