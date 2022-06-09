import { useEffect, useState } from "react";
import { Button } from "../../shared/button/Button";
import { Checkbox } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";

export default function Search() {
    const { Search } = Input;
    const navigate = useNavigate();
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
    const handleRecord = () => {
        console.log("recording...")
    }
    const suffix = (
        <AudioOutlined
            className="fill-svg"
            onClick={handleRecord}
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
            <div className="text-[#226A32] flex flex-row w-1 justify-between mt-2 font-bold text-base">
                <div>Corporate</div>
                <div className="absolute left-20 text-sky-500 hover:underline">Edit</div>
            </div>
            <div className="text-[#226A32] mt-1 font-black text-2xl">
                Search Method
            </div>
        <div className="flex flex-col text-base m-1 text-[#226A32]">
            <Checkbox>Name</Checkbox>
            <Checkbox>Partial Word</Checkbox>
            <Checkbox>Corporate ID</Checkbox>
        </div>
        <Search 
            placeholder="Search" 
            size="large"
            suffix={suffix}
        />
        <ColoredLine color="grey" height={1}/>
        <div className="absolute left-0 mt-3"  onClick={() => {navigate('/result')}}>
            <Button name = "Search"/>
        </div>

        </div>
    )
}