
import home from "../../assets/home.png"
import { useNavigate } from "react-router-dom"
export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <div className="dashboard h-[10vh] flex items-center justify-between">
            <div className="flex w-[15%] justify-evenly items-center">
                <div className="w-8 h-8">
                    <img src={home} alt="" />
                </div>
                <div className="dashboard">
                    <p className="a1 text-2xl">Dashboard</p>
                </div>
            </div>
            <div onClick={() => {
                navigate(-1);
            }} className="go-back flex">
                <p className="a1 text-2xl mr-4 text-blue-300 cursor-pointer">Go Back</p>
            </div>
        </div>
    )
}