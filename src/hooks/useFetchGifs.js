import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // los efectos no pueden ser async, por que esperan algo asincrono
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);


    return state; // data con un arreglo, y el loading es true, el cual hace referencia a la carga inicial de los datos que buscara la api
};