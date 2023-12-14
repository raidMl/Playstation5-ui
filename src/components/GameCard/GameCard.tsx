import { HtmlHTMLAttributes } from "react";
import { Game } from "../../types/game";
import './GameCard.scss'
import {ForwardedRef, forwardRef, HTMLAttributes} from 'react';


interface GameCardProps extends HtmlHTMLAttributes<HTMLDivElement>,Pick<Game, 'name'| 'logo'>{
    active?:boolean;
}
export const GameCard = forwardRef(

 function GameCard({logo,name,active,...props}:GameCardProps,ref: ForwardedRef<HTMLDivElement>){
    return(
        <div ref={ref} {...props} className={`game-card ${active ? 'active' : ''}`}>
            {active && <div className='animated-border'></div>}

        
        
       <div className="game-card-img"> <img src={logo} alt={name}  className="myimg"/></div>
     </div>
    )
});