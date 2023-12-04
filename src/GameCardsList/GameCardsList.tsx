import { GameCard } from "../GameCard/GameCard";
import { CARDS_OFFSET_X, CARD_GAP, CARD_SIZE,CARDS_OFFSET_y, ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE } from "../constants";
import { Game } from "../types/game";
import {useMemo} from 'react'
interface GameCardsListProps{
    games:Game[];
    activeIndex?:number;
    onActiveIndexChange?:(index:number)=>void;
}

export function GameCardsList({games,activeIndex=0,onActiveIndexChange}:GameCardsListProps){
   
    const offsets = useMemo(() => {
        const offsetsAr: number[] = [];
        let curOffset = CARDS_OFFSET_X - (activeIndex * (CARD_SIZE + CARD_GAP));
        games.forEach((_, i) => {
            offsetsAr.push(curOffset);
            if (i === activeIndex - 1) {
                curOffset += CARD_SIZE + ACTIVE_CARD_GAP;
            } else if (i === activeIndex) {
                curOffset += ACTIVE_CARD_SIZE + ACTIVE_CARD_GAP;
            } else {
                curOffset += CARD_SIZE + CARD_GAP;
            }
        });
        return offsetsAr;
    }, [activeIndex, games]);
   
   
   return <>
    
    {
            games.map((g, i) => {
                const offset = offsets[i];

                return <GameCard onClick={() => onActiveIndexChange?.(i)}
                                 active={i === activeIndex}
                                 style={{position: 'absolute', transform: `translateY(${CARDS_OFFSET_y}px) translateX(${offset}px)`}}
                                 key={g.name} {...g}
                />
            })
        }
    </>
}