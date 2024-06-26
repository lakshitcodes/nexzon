import { createContext, useContext, useReducer } from "react";

//Prepare the data layer
export const StateContext = createContext();

//Wrap our and app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information and pull the data layer
export const useStateValue = () => useContext(StateContext);
