import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.scss'
 import {ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_SIZE, CARDS_OFFSET_X, CARDS_OFFSET_y} from "./constants.ts";
 import { GameCardsList } from './components/GameCardsList/GameCardsList.tsx'
import { games } from './games'
import Navbar from './components/navbar/navbar.tsx';
import { CrossFader } from 'react-cross-fader'
import { usePrevious } from './hooks/use-previous'
import {Howl} from 'howler';

// navigation sound
const navigateSound = new Howl({
  src: ['/sounds/menu.mp3'],
  volume: 0.3
});
//load sound 
const loadSound = new Howl({
src: ['/sounds/home_menu_load.mp3'],
volume: 0.3
});

const backgroundMusic = new Howl({
src: ['/sounds/background.mp3'],
loop: true,
volume: 0.2
});



function App() {
  const [ActiveIndex,setActiveIndex]=useState(0);
  const previousActiveIndex=usePrevious(ActiveIndex);
  
  useEffect(() => {
    loadSound.play();
    backgroundMusic.play();
}, []);

// function when nav
const navigate = (index: number) => {
  if (index === ActiveIndex) {
      return;
  }
  navigateSound.play();
  setActiveIndex(index);
};


// const textOffsetX = CARDS_OFFSET_X + ACTIVE_CARD_SIZE + ACTIVE_CARD_GAP + 12;
// const textOffsetY = ACTIVE_CARD_SIZE * 0.78 + CARDS_OFFSET_y;
const isNext = ActiveIndex > (previousActiveIndex ?? 0);
  return (
    <>
    <div className='ps5-container' style={
      
      {
          ['--active-card-size']: `${ACTIVE_CARD_SIZE}px`,
          ['--card-size']: `${CARD_SIZE}px`,
      } as Record<string, string>
  }>
               <CrossFader destroyOnFadeOutComplete={false} className={'game-bg-container ' + (isNext ? 'next' : 'prev')}>
                <div className='game-bg' style={{backgroundImage: `url("${games[ActiveIndex].bg ?? games[ActiveIndex].logo}")`}}>

                </div>
            </CrossFader>
            <Navbar/>

      <div className='games-list-container'>
                <GameCardsList games={games} activeIndex={ActiveIndex} onActiveIndexChange={navigate}/>
            </div>
   
            
    
      
      </div></>
    );
}

export default App;