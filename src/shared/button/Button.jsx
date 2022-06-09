import PropTypes from "prop-types";

export function Button(props) {

    return (
        <div className="w-fit h-fit rounded-full border bg-[#226A32] border-[#226A32] hover:bg-white active:!bg-[#226A32] active:shadow-inner active:border-[#226A32] transition-all group">
            <button 
                className="ml-1 mr-1 font-sans text-base text-white group-hover:text-primary-600 active:text-primary-600 transition-all py-[10px] px-[10px]"
                
            >
                {props.name}
            </button>
        </div>
    )
}

Button.protoTypes = {
    name : PropTypes.string
}