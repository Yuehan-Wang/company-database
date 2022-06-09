import SigninForm from "./SigninForm"

export default function Signin(){
    return (
        <div className="w-full h-[500px] flex items-center justify-center">
            <div className="w-[415px] h-[140px] flex flex-col  justify-center items-center">
            <div className="text-4xl font-bold text-[#226A32] justify-center items-center mb-[60px]">Sign In</div>
            
            <SigninForm/>
            </div>
            
        </div>
    )
}