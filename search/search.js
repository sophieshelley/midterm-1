function search(nameList, searchTerm) {
    
    const results = nameList.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (results.length > 0) {
        return results;
    } else {
        return `${searchTerm} not found in the list.`;
    }
}

const names = [
    "Bryce", "Brett", "Benjamin", "Brock", 
    "Gilbert", "Delbert", "Numbers", "Wilbur", 
    "Booker", "Isabel", "Melba", "Kimberli"
];

console.log(search(names, 'b')); 
console.log(search(names, 'x')); 
