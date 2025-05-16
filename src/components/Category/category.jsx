import "./category.css"
import pic1 from "../../assets/pic4.jpeg"
import pic2 from "../../assets/pic3.jpeg"
import pic3 from "../../assets/pic2.jpeg"
import pic4 from "../../assets/pic7.jpeg"
import { useState } from "react"
import { useEffect } from "react"


function Category({ backimg, text }) {
    return (
        <div className="picbox">
            <div className="flex items-end img h-[10rem] w-[8rem] sm:h-[14rem] sm:w-[9rem] md:h-[20rem] md:w-[15rem] lg:h-[27rem] lg:w-[22rem]" style={{ backgroundImage: `url(${backimg})`, backgroundSize: "cover" }}>
                <p className="text-xl sm:text-2xl font-bold text-white ms-3">{text}</p>
            </div>
        </div>)

}

export default function Categories() {
    const [products, setproducts] = useState([])
    const [Categcount, setCategcount] = useState([])
    // Initializating important constants and variables
    const prodcts = [];
    const desiredProducts = [];
    const subCategories = [];
    const FilteredSubCategories = ["basic_tees", "trousers", "graphic_tees", "shirts"];


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
                    for (let i = 0; i < FilteredSubCategories.length; i++) {
                        if (s.name == FilteredSubCategories[i]) {
                            prodcts.push(s.data)
                        }
                    }
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
        <div className="flex flex-col mb-[5rem] xl:flex-row">
            <div className="flex justify-evenly xl:w-[50%] xl:justify-around">
                {products.slice(0, 2).map((product, index) => (
                    <Category backimg={product.images[2]} text={'KURTAS'} />
                ))}
            </div>
            <div className="mt-[3rem] flex justify-evenly xl:mt-[0rem] xl:w-[50%] xl:justify-around">
                {products.slice(25, 27).map((product, index) => (
                    <Category backimg={product.images[2]} text={'BASIC-TEES'} />
                ))}
            </div>
        </div>
    )
}

