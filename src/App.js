import React, { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewGame from './components/NewGame/NewGame';
import GameListContainer from './components/GameListContainer/GameListContainer';

import './App.css';

const DUMMY_GAMES = [
  {
    id: 'g0',
    name: 'Ice Climbers',
    year: 1985
  },
  {
    id: 'g1',
    name: 'Super Mario Bros.',
    year: 1985
  },
  {
    id: 'g2',
    name: 'Super Mario Bros. 3',
    year: 1988
  },
  {
    id: 'g3',
    name: 'Tetris',
    year: 1984
  },
  {
    id: 'g4',
    name: 'Duck Hunt',
    year: 1984
  },
  {
    id: 'g5',
    name: 'Contra',
    year: 1987
  },
  {
    id: 'g6',
    name: 'Metroid',
    year: 1986
  },
  {
    id: 'g7',
    name: 'The Legend of Zelda',
    year: 1986
  },
  {
    id: 'g8',
    name: 'Final Fantasy',
    year: 1987
  },
  {
    id: 'g9',
    name: 'Punch-Out!!',
    year: 1987
  },
  {
    id: 'g10',
    name: 'Mother',
    year: 1989
  },
  {
    id: 'g11',
    name: 'Zelda II - The Adventure of Link',
    year: 1987
  },
  {
    id: 'g12',
    name: 'Kirby\'s Adventure',
    year: 1993
  },
  {
    id: 'g13',
    name: 'Battle City',
    year: 1985
  },
  {
    id: 'g14',
    name: 'Mega-Man 2',
    year: 1988
  },
  {
    id: 'g15',
    name: 'Dragon Quest',
    year: 1986
  },
];

const sortGames = (a, b) => {
  if (a.year > b.year) {
    return 1;
  } else if (a.year < b.year) {
    return -1;
  } else {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    }
    return 0;
  }
};

function App() {
  const [games, setGames] = useState(DUMMY_GAMES.sort(sortGames));

  const addGameHandler = (game) => {
    setGames((prevGames) => {
      return [game, ...prevGames].sort(sortGames)
    })
  };

  const deleteGameHandler = (gameId) => {
    setGames(prevGames => {
      const updatedGames = prevGames.filter(game => game.id !== gameId);
      return updatedGames;
    });
  }

  return (
    <>
      <Header />
      <NewGame
        onAddGame={addGameHandler}
      />        
      <GameListContainer
        games={games}
        onDeleteGame={deleteGameHandler}
        />
      <Footer/>
    </>
  );
}

export default App;
