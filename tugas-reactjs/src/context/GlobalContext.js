import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) =>{
    let navigate = useNavigate();

    const [word, setWord] = useState('Halo, saya state 1 dari context');
    const [number, setNumber] = useState('Halo, saya state 2 dari context');
    return(
        <GlobalContext.Provider value={
            {
                word,
                setWord,
                number,
                setNumber
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
};