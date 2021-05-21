import React,{ createContext,useContext,useReducer } from "react";

//prepares the data layer
export const stateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({reducer,initialState,children}) =>(
    <stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(stateContext)