export default (results, type) =>{
    /* used to retrieve unique values for every type */
    let set = new Set();

    /* Use type to determine the unique elements for every 
    category (comments, components, subdomain, main, etc */
    switch(type){
        case 'SUBDOMAIN':
            for(let i = 0; i < results.length; i++){
                set.add(results[i].SUBDOMAIN);
            }
            return set;
        case 'MAIN':
            for(let i = 0; i < results.length; i++){
                set.add(results[i].MAIN);
            }
            return set;
        default:
            console.log('default case hit');
            return null;
    }
};

// console.log('Number of elements ' + set.size);
//             var it = set.values();
//             for(let i = 0; i < set.size; i++){
//                 console.log(it.next().value);
//             }