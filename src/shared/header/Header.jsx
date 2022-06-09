import { useNavigate } from 'react-router-dom'
import Logo from "../assets/img/logo.jpg";

export default function Header() {

    const navigate = useNavigate();

    return (
        <div className="w-full h-[100px] min-h-0 bg-[#226A32] flex justify-center items-center font-sans">
            <div className="w-10/12 min-w-[1000px] h-[100px] flex justify-between items-center">
                <div className="absolute left-0 top-0 object-scale-down w-full h-[100px] object-cover">
                    <img className="w-fit h-[100px] object-cover cursor-pointer" src={Logo} alt="" onClick={() => {navigate('/')}} /> 
                </div>
                <div className="absolute right-5 top-[70px]">
                    <div className="flex justify-center items-center space-x-[30px] mr-[30px]">
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/')}}
                        >
                            Home
                        </p>
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/search')}}
                        >
                            Search
                        </p>
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/billing')}}
                        >
                            Billings
                        </p>
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/signup')}}
                        >
                            Sign in/Sign up
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}