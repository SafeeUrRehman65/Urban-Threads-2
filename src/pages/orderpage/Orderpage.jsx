// importing css file
import "./orderpage.css";
import Navbar from "../../components/Navbar/navbar.jsx"
import Footer from "../../components/Footer/footer.jsx"
import OrderSm from "../../components/Order-Mobile/ordersm.jsx";

// importing components
import Dashboard from "../../components/Dashboard/dashboard.jsx";
import Orderstatus from "../../components/OrderStatus/orderstatus.jsx";
import OrderLabels from "../../components/OrderLabels/orderlabels.jsx";
import OrderDetails from "../../components/OrderDetails/orderdetails.jsx";
import Order from "../../components/Order/order.jsx";
import { Navigate } from "react-router-dom";


export default function OrderPage() {
    
    return (
        <div className="">
            <div className="hidden 3xl:block">
                <Dashboard />
                <div className="h-[80vh] border-t-2">
                    <div className="flex w-[full] justify-center my-8">
                        <div className="flex w-[95%] justify-between">
                            <p className="a1 font-extrabold text-2xl">Order Details</p>
                            <button className="a1 bg-purple-500 text-white w-[10%] h-[5vh] text-xs">VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className="flex justify-center mb-8">
                        <Orderstatus />
                    </div>
                    <div className="h-[10vh] flex justify-center">
                        <div className="rounded-t-xl border border-gray-400 w-[95%] flex justify-center">
                            <div className="flex rounded-t-xl w-full justify-center border border-blue-300]">
                                <OrderLabels />
                            </div>
                        </div>
                    </div>
                    <OrderDetails />
                    <div className="flex justify-center">
                        <div className="c1 h-[50vh] border-x border-b border-gray-400 w-[95%] overflow-y-scroll rounded-b-xl">
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                            <Order name={"Gelyu-pants"} verification={"2659"} pending={"144 O-2"} dispatched={"256 O-3"} />
                        </div>
                    </div>
                </div>
                <div className="relative top-[631px]">
                    <Footer />
                </div>
            </div>
            <OrderSm />
        </div>
    )
}

