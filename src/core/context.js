import { createContext } from 'react';

const initialState = {
    pages: [
      {
        name: 'Characters',
        text: "There are so many crazy characters, right? Let's take a close look to all of them!",
        imagePath: '/images/characters.jpg',
        url: '/characters',
      },
      {
        name: 'Locations',
        text: "You can't remember which was the name of the world Rick and Morty visited in that episode? Come here and find out!",
        imagePath: '/images/worlds.jpg',
        url: '/locations',
      }
    ]
};

const Context = createContext(initialState);

export default Context;
