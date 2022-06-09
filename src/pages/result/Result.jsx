import { useEffect, useState } from "react";
import { Button } from "../../shared/button/Button";
import Display from "./display/Display";

export default function Result() {
    const ColoredLine = ({ color, height }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: height,
                width: window.Width * 4/5,
                margin: 5
            }}
        />
    );
    return (
        <div className="absolute left-20 w-4/5 text-xl text-lime-800 justify-center items-center font-sans">
            <div className="text-[#226A32] mt-3 font-black text-5xl">
                Corporation/LLC Search
            </div>
            <ColoredLine color="#226A32" height={5} />
            <div className="text-[#226A32] mt-1 font-black text-2xl">
                Search Criteria
            </div>
            <div className="text-[#226A32] flex flex-row w-1 justify-between mt-2 font-bold text-base">
                <div>UNCLE</div>
                <div className="absolute left-20 text-sky-500 hover:underline">Edit</div>
            </div>
        <div>
            <Display />
        </div>
        <div className="absolute left-0 mt-3" >
            <Button name = "More"/>
            </div>
        </div>
    )
}