import React from  'react'

export const SearchContext = React.createContext({});

export const SearchProvider = (props) => {
    const search = {
        search: 'cafeina',
        category: 'Dicas'
    }
    return(
        <SearchContext.Provider value={{search}}>
            {props.children}
        </SearchContext.Provider>
    );
}