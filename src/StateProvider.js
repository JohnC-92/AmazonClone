import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [basket, basketDispatch] = useReducer(reducer, []);
  const [user, userDispatch] = useReducer(reducer, null);

  return (
    <StateContext.Provider
      value={{ basket, basketDispatch, user, userDispatch }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
