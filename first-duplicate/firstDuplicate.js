function firstDuplicate(array) {
    const seen = new Set(); 

    for (let num of array) {
        if (seen.has(num)) { 
            return num; 
        }
        seen.add(num); 
    }
    
    return -1; 
}

