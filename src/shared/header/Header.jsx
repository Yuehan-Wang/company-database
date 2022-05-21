import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-[100px] flex justify-center items-center font-sans">
            <div className="w-10/12 min-w-[1000px] h-[80px] flex justify-around items-center">
                <div className="flex">
                    <div className="flex justify-center items-center space-x-[30px] mr-[30px]">
                        <p 
                            className="text-xl text-neutral-600 hover:underline hover:text-neutral-900 m-0 cursor-pointer"
                            onClick={() => {navigate('/')}}
                        >
                            Home
                        </p>
                        <p 
                            className="text-xl text-neutral-600 hover:underline hover:text-neutral-900 m-0 cursor-pointer"
                            onClick={() => {navigate('/search')}}
                        >
                            Search
                        </p>
                        <p 
                            className="text-xl text-neutral-600 hover:underline hover:text-neutral-900 m-0 cursor-pointer"
                            onClick={() => {navigate('/result')}}
                        >
                            Result
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}