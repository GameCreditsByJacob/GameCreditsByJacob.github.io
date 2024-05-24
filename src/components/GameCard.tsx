import React, { memo } from 'react';
import { GameDto } from '../types';

interface GameCardProps {
    game: GameDto;
}

const GameCard: React.FC<GameCardProps> = memo (({ game }) => {
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold">{game.name}</h2>
            <ul>
                {game.topUpOptions.map(option => (
                    <li key={option.id} className="mt-2">
                        {option.points} Points - ${option.price}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default GameCard;