import { MouseEvent } from "react";

interface throbberProps {
    gamePick: string
    setGamePickedHandler: (value: string|null) => void
}

export default function Cartiridge({ 
    gamePick,
    setGamePickedHandler 
}: throbberProps) {

    return (
        <section className="py-12 w-full xl:w-1/3 flex flex-col items-center gap-8 mt-4 px-4">
            <div className="h-[250px] w-[250px] relative p-4 bg-cartridge text-white gap-4 animate-pulse overflow-hidden">
                <div className="absolute h-[15px] w-[15px] shadow-2xl 
            border-[0.8px] border-[#e5e5e5] bg-[#e5e5e5] top-[-0.8px] z-10 right-0"></div>
                <h2 className="text-xl text-black mt-16 bg-white p-4 pb-40 w-full">{ gamePick }</h2>
            </div>
            <button className="rounded-md p-2 bg-gameboybutton text-white"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setGamePickedHandler(null);
            }}>
                back
            </button>
        </section>
    );
}