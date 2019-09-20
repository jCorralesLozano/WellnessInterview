export default (results, type) =>{
    /* used to retrieve unique values for every type */
    let set = new Set();

    /* Use type to determine the unique elements for every 
    category (comments, components, subdomain, main, etc) */
    switch(type){
        case 'SUBDOMAIN':
            for(let i = 0; i < results.length; i++){
                set.add(results[i].SUBDOMAIN);
            }
            // console.log(set);
            return setToArray(set);
        case 'MAIN':
            for(let i = 0; i < results.length; i++){
                set.add(results[i].MAIN);
            }
            return setToArray(set);
        default:
            console.log('default case hit');
            return null;
    }
};

/* converts a set to an array, this is important because the data
will be used in a FlatList component, which cannot work with sets */
const setToArray = (set) => {
    /* iterator used to loop through the set container */
    var it = set.values();
    
    /* new array that will hold the elements from set*/
    var array = [];
    for(let i = 0; i < set.size; i++){
        array.push(it.next().value);
    }    
    return array;
};