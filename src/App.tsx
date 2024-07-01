import { useState } from "react";
import ListPanel from "./components/ListPanel"
import Cartridge from "./components/Cartiridge";
// import { sleep } from "./utils"

export default function App() {
  const [games, setGames] = useState<string[]>([]);
  const [gamePicked, setGamePicked] = useState<string|null>(null);
  //const [loading, setLoading] = useState<boolean>(false);

  const getGamesHandler = () => {
    return games;
  }

  const addGamesHandler = (newGames: string[]) => {
    if (newGames.length > 1) {
      if (games.length === 0) {
        setGames([...newGames]);
      } else {
        setGames([...games, ...newGames]);
      }
    } else {
      if (games.length === 0) {
        setGames([newGames[0]]);
      } else {
        setGames([...games, newGames[0]])
      }
    }
  }

  const deleteGamesHandler = (gameToDelete: string) => {
    const newGameArr = games?.filter(game => game !== gameToDelete);
    if (newGameArr) {
        setGames(newGameArr);
    }
  }

  // no need for error handling, only used in wrapped function in ListPanel
  const randomPickHandler = () => {
    const randIndex = Math.floor(Math.random() * games.length);
    setGamePicked(games[randIndex]);
  }

  const setGamePickedHandler = (value: string|null) => {
    setGamePicked(value);
  }

  return (
    <div className="overflow-hidden flex justify-center">
        {
          gamePicked
            ?
            <Cartridge
            gamePick={gamePicked}
            setGamePickedHandler={setGamePickedHandler}
            />
            :
            <ListPanel
            getGamesHandler={getGamesHandler}
            addGameHandler={addGamesHandler}
            deleteGameHandler={deleteGamesHandler}
            randomPickHandler={randomPickHandler}
            />
        }
    </div>
  );
}