import SignupForm from "./SignupForm"

export default function Signup(){
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
        <div className="w-full h-[500px] flex items-center justify-center">
            <div className="w-[415px] h-[140px] flex flex-col  justify-center items-center">
            <div className="text-4xl font-bold text-[#226A32] justify-center items-center mb-[30px]">Welcome on board!</div>
            <ColoredLine color="#226A32" height={5} />
            <div><SignupForm/></div>
            </div>
            
        </div>
    )
}