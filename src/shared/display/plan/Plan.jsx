import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "../../button/Button";

export function Plan(props) {
    return (
        <div className="border-solid rounded-3xl border-2 m-5 border-[#226A32] w-full h-fit font-sans flex flex-col justify-center items-center hover:bg-neutral-100 transition-all">
           <p className="text-5xl text-bold mt-2  text-[#226A32] mb-[10px]">{props.name}</p>
                <div className="w-full h-[180px] flex justify-center items-center mb-[10px]">
                <p className="text-2xl text-[#226A32] mb-[10px]">$<text className="font-extrabold text-5xl italic">{props.price}</text>/mo</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-neutral-600">{props.desc}</p>
                </div>
                <div className="m-2">
                <Button name = "Select" />
                </div>
            
        </div>
    )
}
Plan.protoTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
}