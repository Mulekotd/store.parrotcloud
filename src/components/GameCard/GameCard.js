import './GameCard.css';
import GamePromo from './GamePromo/GamePromo';
import { getGames } from "../../api/";
import React, { useEffect, useState } from "react";

const GameCard = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const gamesData = await getGames();
        setGames(gamesData);
    };

    return (
        <div className="gamecard">
            {games.map((game) => (
                <GamePromo
                key={game.id}
                price={game.price}
                newPrice={game.newPrice}
                url={game.url}
                link={game.link}
                name={game.name}
                />
            ))}
        </div>
    );
}

export default GameCard;