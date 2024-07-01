import { useState, ChangeEvent, MouseEvent, useRef, KeyboardEvent } from "react"
import ListItem from "./ListItem";
import { standardHash, caseInsensitiveIncludes } from "../utils"

interface listPanelProps {
    addGameHandler: (game: string[]) => void,
    deleteGameHandler: (game: string) => void,
    getGamesHandler: () => string[],
    randomPickHandler: () => void
}

export default function ListPanel({
    getGamesHandler,
    addGameHandler,
    deleteGameHandler,
    randomPickHandler
}: listPanelProps) {

    const userInputField = useRef<HTMLInputElement|null>(null);
    const [userInputError, setUserInputError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string|null>(null);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.currentTarget.value) {
            setUserInputError(false);
            console.log(e.currentTarget.value);
        }
    }

    const addGame = () => {
        if (userInputField.current && userInputField.current.value !== "") {
            if (userInputField.current.value.includes(",")) {
                let newGames = userInputField.current.value.split(",");
                newGames = newGames.map(game => game.trim());
                newGames = newGames.filter(game => game !== "");
                newGames = newGames.filter(game => !caseInsensitiveIncludes(getGamesHandler(), game));
                addGameHandler(newGames);
                userInputField.current.value = "";
            } else if (caseInsensitiveIncludes(getGamesHandler(), userInputField.current.value)) {
                userInputField.current.value = "";
                setUserInputError(true);
                setErrorMsg("ERROR: Sorry chief, we have that one...");
            } else {
                if (userInputField.current.value.trim() !== "") {
                    setUserInputError(false);
                    addGameHandler([userInputField.current.value])
                    userInputField.current.value = "";
                }
            }
        } else {
            setUserInputError(true);
            setErrorMsg("ERROR: You have to write something...");
        }
    }

    const deleteGame = (e: MouseEvent<HTMLButtonElement>) => {
        const targ = e.currentTarget.previousSibling;
        if (targ && typeof targ.nodeValue ===  "string") {
            deleteGameHandler(targ.nodeValue);
        }
    }

    const randomPick = () => {
        if (getGamesHandler().length > 0) {
            setUserInputError(false);
            console.log(randomPickHandler());
        } else {
            setUserInputError(true);
            setErrorMsg("You have to have games in your list!");
        }
    }

    return (
       <section className="py-12 w-full xl:w-1/3 flex flex-col items-center gap-4 
        bg-snesLightGrey border-[0.8px] shadow-xl border-black rounded-md mt-4 px-4">
            <div className="w-full bg-snesLightGrey px-4">
                <div className=" w-full bg-[#8bac0d] border-[0.8px] border-black pt-4 pr-4 pl-4 flex flex-col">
                    <h2 className="px-2 text-2xl lg:text-3xl">The <span className="font-pixelify text-3xl lg:text-4xl">Restart</span> Collective</h2>
                        <span className="text-[#0f3810] font-pixelify h-10 px-2 mt-4">
                            {userInputError ? errorMsg : ""}
                        </span>
                        <input type="text"
                            placeholder="Type here"
                            ref={userInputField} 
                            className="bg-[#8bac0d] font-pixelify text-[#0f3810] p-2 w-full focus:outline-none placeholder-[#0f3810] focus:placeholder-transparent" 
                            onChange={inputHandler}
                            onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                                e.preventDefault();
                                if (e.keyCode === 13 || e.code === "Enter") {
                                    addGame();
                                }
                            }}
                        />
                </div>
            </div>
            <button className="rounded-md p-2 bg-gameboybutton text-white"
                onClick={addGame}>
                Add a game
            </button>
            <div className={`w-full flex flex-col gap-2 h-[380px] px-4 
                ${getGamesHandler().length > 6 ? "overflow-y-scroll" : ""}`}>
                { 
                    getGamesHandler() 
                        ?
                        getGamesHandler().map((game, i) => 
                            <ListItem content={game} 
                            key={standardHash(game, i)}
                            deleteHandler={deleteGame}
                            />
                        )
                        :
                        <h2 className="text-3xl text-center my-10">Oooh such empty...</h2>
                }
            </div>
            <button className="rounded-md p-2 bg-gameboybutton text-white"
                onClick={randomPick}>
                Push the button!
            </button>
        </section>
    );
}