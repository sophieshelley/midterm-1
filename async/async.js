let characters = [
  {
    id: 0,
    name: 'Yoda',
    affiliation: 'Jedi Order',
    type: 'Jedi'
  },
  {
    id: 1,
    name: 'Rey',    
    affiliation: 'Resistance',
    type: 'Jedi'
  },
  {
    id: 2,
    name: 'Darth Vader',
    affiliation: 'Galactic Empire',
    type: 'Jedi'
  },
  {
    id: 3,
    name: 'Han Solo',
    affiliation: 'Rebel Alliance',
    type: 'Human'
  }
];

class CharacterService {
  constructor() {}
  
  getAllCharacters() {
    return new Promise((resolve) => {
      resolve(characters);
    });
  }
  
  getCharacter(characterId) {
    return new Promise((resolve, reject) => {
      const character = characters.find(char => char.id === characterId);
      if (character) {
        resolve(character);
      } else {
        reject('Character not found');
      }
    });
  }
  
  getCharactersByType(type) {
    return new Promise((resolve, reject) => {
      if (type) {
        const filteredCharacters = characters.filter(char => char.type === type);
        if (filteredCharacters.length > 0) {
          resolve(filteredCharacters);
        } else {
          reject('No characters found of that type');
        }
      } else {
        reject('Type not specified');
      }
    });
  }
}
