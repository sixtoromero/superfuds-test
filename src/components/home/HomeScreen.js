import React, {useEffect} from 'react'
import { NavBar } from '../shared/navbar/NavBar'
import { useFetch } from '../../hooks/useFetch';
import { urlApiProducts } from '../../utils/constants';

export const HomeScreen = () => {
    
    const result = useFetch(urlApiProducts);
    console.log(result);

    return (
        <>
            <NavBar />                        
        </>
    )
}
