/*
Contains an array of global data that is used to implement the collapse
drawer navigator functionality
1 -> not collapsed
0 -> collapsed
*/

import React, {useState} from 'react';

const CollapseNavigatorContext = React.createContext();

/* the children prop will be the <App /> in 
    <CollapseNavigatorProvider>
        <App />
    </CollapseNavigatorProvider> */

export const CollapseNavigatorProvider = ({children}) => {
    /* TODO: comment here */
    const [collapseMenuData, setCollapseMenu] = useState([0,0,0,0,0,0,0,0,0,0,0]);

    /* flips the bit at location index by using XOR */
    const toggleCollapse = (index) =>{
        collapseMenuData[index] = collapseMenuData[index] ^ 1;
        setCollapseMenu([...collapseMenuData]);
        // console.log(`index: ${index}`);
        // console.log(collapseMenuData);
    };

    /* value propr will pass the collapseMenuData array and the
    toggleCollapse callback function */
    return(
        <CollapseNavigatorContext.Provider 
            value={{data: collapseMenuData, toggleCollapse}}>
            {children}
        </CollapseNavigatorContext.Provider>
    );
};

export default CollapseNavigatorContext;