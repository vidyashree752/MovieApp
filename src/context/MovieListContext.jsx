import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  myList: JSON.parse(localStorage.getItem('myList')) || []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case 'REMOVE_FROM_LIST':
      return {
        ...state,
        myList: state.myList.filter(movie => movie.id !== action.payload)
      };
    default:
      return state;
  }
};

export const MovieListContext = createContext();

export const MovieListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(state.myList));
  }, [state.myList]);

  return (
    <MovieListContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieListContext.Provider>
  );
};