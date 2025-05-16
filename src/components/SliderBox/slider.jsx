import "./slider.css"
import pic1 from "../../assets/pic7.jpeg"
import pic2 from "../../assets/pic8.jpeg"
import pic3 from "../../assets/pic4.jpeg"
import { useState } from "react"
import { useEffect } from "react"

function Product({ backimg, name, cost }) {
    return (
        <div className="w-[10rem] h-[10rem] mr-4 sm:h-[14rem] sm:w-[14rem] inline-block md:h-[20rem] md:w-[20rem]">
            <div className="bg-red-200 w-full h-full product" style={{ backgroundImage: `url(${backimg})`, backgroundSize: "cover" }}>
            </div >
            <div className="flex-col justify-center items-center flex">
                <p className="s1 a1">{name}</p>
                <p className="s1 a1">{cost} pkr</p>
            </div>
        </div>


    )
}

export default function SliderBox() {
    const [products, setproducts] = useState([])
    // Initializating important constants and variables
    const prodcts = [];
    const desiredProducts = [];
    const subCategories = [];


    useEffect(() => {
        function processData(data) {
            const Categories = data
            Categories.forEach(cat => {
                // console.log(cat.name)
                subCategories.push(cat.sub_categories)
            })
            // Traversing a single subcategory which means from two categories going into one of them
            subCategories.forEach(m => {
                // traversing a single subcategory
                m.forEach(s => {
                    prodcts.push(s.data)
                })

            })

            prodcts.forEach(e => {
                e.forEach(d => {
                    desiredProducts.push(d)
                })
            })
            return desiredProducts
        }
        fetch("http://localhost:3000/data/product/fetch")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                const mydata = processData(data);
                setproducts(mydata);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);
    return (
        <div className="mt-[3rem] mb-[8rem] font-medium">
            <div className="head flex justify-center mb-4">
                <p className="text-lg ml-3 sm:text-xl sm:ml-0">NEW AND TRENDING</p>
            </div>
            <div className="slider overflow-x-scroll">
                <div className="ml-4 scroller w-[110rem] sm:w-[150remrem] md:w-[210rem] h-[28vh] sm:h-[36vh] md:h-[48vh]">
                    {/* Only put 10 items here */}
                    {products.slice(40,50).map((product, index) => (
                        <Product key={index} backimg={product.images[1]} name={product.title.toUpperCase()} cost={product.real_price} />
                    ))}

                </div>
            </div>
        </div>
    )
}

