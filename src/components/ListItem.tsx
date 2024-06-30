import xmark from "../assets/img/xmark-svgrepo-com.svg"
import eject from "../assets/img/eject.svg"
import { MouseEvent } from "react"

interface ListItemProp {
    content: string
    deleteHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function ListItem({content, deleteHandler}: ListItemProp) {
    return (
    <div className="relative p-4 bg-cartridge flex text-white justify-between gap-4">
        <div className="absolute h-[15px] w-[15px] shadow-2xl
        border-[0.8px] border-snesLightGrey bg-snesLightGrey top-[-0.8px] z-10 right-0"></div>
        {content}
        <button className="hover:scale-125 mr-10" onClick={deleteHandler}>
            <img src={eject} alt="delete" />
        </button>
    </div>
    );
}