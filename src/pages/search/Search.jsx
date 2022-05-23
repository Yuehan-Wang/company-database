import { useEffect, useState } from "react";
import { Button } from "../../shared/button/Button";
import { Checkbox } from 'antd';

export default function Search() {
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
            <div className="text-[#226A32] mt-1 font-black text-5xl">
                Corporation/LLC Search
            </div>
            <ColoredLine color="#226A32" height={5} />
            <div className="text-[#226A32] mt-1 font-black text-2xl">
                Type of Search
            </div>
            
        <div className="flex flex-col mt-3 text-base m-1 text-[#226A32]">
            <Checkbox>Corporate and LLC</Checkbox>
            <Checkbox>Corporate</Checkbox>
            <Checkbox>LLC</Checkbox>
        </div>
        <ColoredLine color="grey" height={1}/>
        <div className="absolute left-0 mt-3">
        <Button />
        </div>

        </div>
    )
}