import React, { useState } from 'react';

import ffLogo from './ffLogo.png';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewGame from './components/NewGame/NewGame';
import GameList from './components/GameList/GameList';

import './App.css';

const DUMMY_GAMES = [
  {
    key: 'g0',
    name: 'Ice Climbers',
    year: 1985
  },
  {
    key: 'g1',
    name: 'Super Mario Bros.',
    year: 1985
  },
  {
    key: 'g2',
    name: 'Super Mario Bros. 3',
    year: 1988
  },
  {
    key: 'g3',
    name: 'Tetris',
    year: 1984
  },
  {
    key: 'g4',
    name: 'Duck Hunt',
    year: 1984
  },
  {
    key: 'g5',
    name: 'Contra',
    year: 1987
  },
  {
    key: 'g6',
    name: 'Metroid',
    year: 1986
  },
  {
    key: 'g7',
    name: 'The Legend of Zelda',
    year: 1986
  },
  {
    key: 'g8',
    name: 'Final Fantasy',
    year: 1987
  },
  {
    key: 'g9',
    name: 'Punch-Out!!',
    year: 1987
  },
  {
    key: 'g10',
    name: 'Mother',
    year: 1989
  },
  {
    key: 'g11',
    name: 'Zelda II - The Adventure of Link',
    year: 1987
  },
  {
    key: 'g12',
    name: 'Kirby\'s Adventure',
    year: 1993
  },
  {
    key: 'g13',
    name: 'Battle City',
    year: 1985
  },
  {
    key: 'g14',
    name: 'Mega-Man 2',
    year: 1988
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

  const gameList = (
    <>
    <div>
      {/* GameListHeader */}
      <div name='list-header' style={{textAlign:'center'}}>
        <label style={{position:'relative', left:'6px', fontWeight:'bold', color:'#e6361e', textDecoration:'underline', fontSize:'2rem', fontFamily:'famicom'}}>
          G
        </label>
        <label style={{fontWeight:'bold', color:'#e6361e', textDecoration:'underline', fontSize:'2rem', fontFamily:'famicom'}}>
          <i>A</i>ME LIST
        </label>
      </div>
      <img src={ffLogo} className="ff-logo" alt="ffLogo" />
      <GameList games={games} />
    </div>
    </>
  );

  return (
    <>
      <Header />

      {/* Reemplazar con GameForm que incluya Container como wrapper */}
      <NewGame onAddGame={addGameHandler} />        

      {/* Reemplazar con GameList que incluya Container como wrapper */}
      <Container>
        {gameList}
      </Container>

      <Footer/>
    </>
  );
}

export default App;
