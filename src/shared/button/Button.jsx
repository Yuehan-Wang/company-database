
import { useNavigate } from "react-router-dom";

export function Button() {
    const navigate = useNavigate();

    return (
        <div className="w-fit h-fit rounded-full border bg-[#226A32] border-[#226A32] hover:bg-white active:!bg-[#226A32] active:shadow-inner active:border-[#226A32] transition-all group">
            <button 
                className="font-sans text-base text-white group-hover:text-primary-600 active:text-primary-600 transition-all py-[10px] px-[10px]"
                onClick={() => {navigate('/result')}}
            >
                Search
            </button>
        </div>
    )
}