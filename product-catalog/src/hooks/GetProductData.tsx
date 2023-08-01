import { useEffect, useState } from "react"


export interface IProductData {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: { rate: number, count: number }
}

export const useFetchProductData = () => {
    const [data, setData] = useState<Array<IProductData>>([]);
    useEffect(() => {
        storeFetch();
    }, [])
    const storeFetch = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData: Array<IProductData> = await response.json();
        setData(jsonData);
    }
    return data;
}

