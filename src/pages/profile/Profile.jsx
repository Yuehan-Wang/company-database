export default function Profile() {
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
        <div className="absolute left-20 w-[200px] text-xl justify-center items-center font-sans">
            <div className="text-[#226A32] mt-1 font-black text-5xl">
                Profile
            </div>
            <ColoredLine color="#226A32" height={5} />
                <div>
                    <div className="text-[#226A32] flex flex-col justify-between mt-4 mb-4 font-black text-base">
                        <text>User Name: <text className="font-thin">Aajimatics</text></text>
                        <text>User ID: <text className="font-thin">001</text></text>
                        <text>Email: <text className="font-thin">CDS@Aajimatics.com</text></text>
                        <text>Current Plan: <text className="font-thin">Corporate</text></text>
                    </div>
                    <div className="text-sky-500 hover:underline">Edit</div>
            </div>
        </div>
    )
}