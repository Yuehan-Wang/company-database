import { useEffect, useState } from "react";
import { Button } from "../../shared/button/Button";
import { Checkbox } from 'antd';
import { useNavigate } from "react-router-dom";

export default function Home() {
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
    return(
        <div className="absolute left-20 w-4/5 text-xl text-lime-800 justify-center items-center font-sans">
            <div className="text-[#226A32] mt-3 font-black text-5xl">
                Get information about a company
            </div>
            <ColoredLine color="#226A32" height={5} />
            <div className="text-[#226A32] mt-1 font-black text-2xl">
                Type of Search
            </div>
            <div className="text-[#226A32] mt-2 font-semibold text-sm">
                <p>The Department of Business Services database includes information regarding corporations, not-for-profit corporations, limited partnerships, limited liability companies and limited liability partnerships, as well as, other business-related information. This database is provided to the public for "individual searches only". The use of this website or database to copy or download bulk searches or information is prohibited. Pursuant to statute, the Department of Business Services offers information for sale. For contract information, please contact the Department of Business Services at 217-782-6961.</p>
                <p>Please be advised that the information contained in this database is the property of the Office of the Secretary of State for the State of Illinois. Any unauthorized use of the database, unauthorized access, removal of data, copying or downloading of the database information is prohibited by criminal statutes, including the sections covering the offenses of computer tampering and aggravated computer tampering (720 ILCS 5/16D-3; 5/16D-4). Violators will be prosecuted to the fullest extent of the law.</p>
            </div>
        <div className="flex flex-col mt-3 text-base m-1 text-[#226A32]">
            <Checkbox>Corporate and LLC</Checkbox>
            <Checkbox>Corporate</Checkbox>
            <Checkbox>LLC</Checkbox>
        </div>
        <ColoredLine color="grey" height={1}/>
        <div className="absolute left-0 mt-3" onClick={() => {navigate('/search')}}>
        <Button name = "Search" />
        </div>

        </div>
    )
}