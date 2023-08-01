import * as React from 'react';
import { SearchBar, ProductCard } from '../components';

export function SearchScreen() {
    const [isClickInside, setClickInside] = React.useState(false);
    const closeSuggestionCard = () => {
        setClickInside(false);
    };
    const expandSuggestionCard = () => {
        setClickInside(true);
    };
    return (
        <div style={{
            height: "100vh", width: "100vw",
            backgroundImage: `url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            {/* Search Screen */}
            <div style={{ paddingTop: '10%' }}>
                <div onFocus={expandSuggestionCard} onBlur={closeSuggestionCard} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SearchBar />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {isClickInside &&
                        <ProductCard />
                    }
                </div>
            </div>
        </div>
    )
}