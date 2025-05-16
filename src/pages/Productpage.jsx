import Navbar from "../components/Navbar/navbar.jsx"
import Footer from "../components/Footer/footer.jsx"
import Product from "../components/Product/product"
import { Productpanel, FakePanel } from "../components/productpanel/productpanel.jsx"
import "../components/Filterpanel/filter.js"

// importing external functions
import { Clicked, DisplayCateg } from "../components/Filterpanel/filter.js"
import { CloseFilter } from "../components/Filterpanel/filter.js"
import { uncheckAll } from "../components/Filterpanel/filter.js"
import { ApplyFilters } from "../components/Filterpanel/filter.js"

// importing external files
import "../components/Filterpanel/filter.css"
import down from "../assets/down.png"

var BoysCateg = document.getElementsByClassName('boys-categories')
var ManCateg = document.getElementsByClassName("man-categories");
var countCheck = document.getElementsByClassName('check')

// importing all pics
import pic1 from "../assets/pic7.jpeg"
import pic2 from "../assets/pic3.jpeg"
import pic3 from "../assets/pic2.jpeg"
import pic4 from "../assets/pic8.jpeg"
import sort from "../assets/sorter.png"
import filter from "../assets/filter.png"
import color from "../assets/color.png"
import size from "../assets/size.png"
import starpic from "../assets/star.png"
import search from "../assets/search.png"

// Importing function
import { DisplayFilter } from "../components/Filterpanel/filter.js"

// importing for time being
import "../App.css"
import { useState, useEffect, useRef } from "react"


export default function ProductPage() {

    // setting all the states
    const [products, setproducts] = useState([])
    const [denimjeans, setdenimjeans] = useState([])
    const [jackets, setjackets] = useState([])
    const [sweatshirts, setsweatshirts] = useState([])
    const [poloshirts, setpoloshirts] = useState([])
    const [basictees, setbasictees] = useState([])
    const [shalwarsuits, setshalwarsuits] = useState([])
    const [hoodies, sethoodies] = useState([])
    const [coatpants, setcoatpants] = useState([])
    const [trousers, settrousers] = useState([])
    const [kurtas, setkurtas] = useState([])
    const [waistcoats, setwaistcoats] = useState([])
    const [coatsblazers, setcoatsblazers] = useState([])
    const [formalpants, setformalpants] = useState([])
    const [graphictees, setgraphictees] = useState([])
    const [shirts, setshirts] = useState([])
    const [Categcount, setCategcount] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // Initializating important constants and variables
    const prodcts = [];
    const desiredProducts = [];
    const AllSubCategories = [];
    let FilteredSubCategories = [];
    const subCategories = [];




    useEffect(() => {
        localStorage.setItem('arrayofcheck', countCheck[0].checked)
        // alert(localStorage.getItem('arrayofcheck'))
        function processData(data) {
            console.log(data)
            const Categories = data
            Categories.forEach(cat => {
                // console.log(cat.name)
                subCategories.push(cat.sub_categories)
            })
            // Traversing a single subcategory which means from two categories going into one of them
            subCategories.forEach(m => {
                // traversing a single subcategory
                m.forEach(s => {
                    // storing category here
                    AllSubCategories.push(s.name)
                })

            })


            // Loops have ended here
            for (let i = 0; i < AllSubCategories.length && i < Categcount.length; i++) {
                if (Categcount[i].checked == true) {
                    FilteredSubCategories.push(AllSubCategories[i])

                }
            }
            if (FilteredSubCategories.length == 0) {
                FilteredSubCategories = AllSubCategories
            }


            Categories.forEach(cat => {
                // console.log(cat.name)
                // subCategories.push(cat.sub_categories)
                cat.sub_categories.forEach(m => {
                    // traversing a single subcategory
                    m.data.forEach(s => {
                        for (let i = 0; i <= FilteredSubCategories.length; i++) {
                            if (m.name == FilteredSubCategories[i]) {
                                // Storing the products of a filtered subcategories into Products Array
                                prodcts.push(cat)
                            }
                        }
                    }
                    )
                }
                )
            })

            // prodcts.forEach(e => {
            //     e.forEach(d => {
            //         desiredProducts.push(d)
            //     })
            // })
            return prodcts
        }

        // to Split different categories into arrays
        function SplitCategories(data) {
            const DenimJeans = [];
            const Jackets = [];
            const SweatShirts = [];
            const PoloShirts = [];
            const BasicTees = [];
            const ShalwarSuits = [];
            const Hoodies = [];
            const CoatPants = [];
            const Trousers = [];
            const Kurtas = [];
            const WaistCoats = [];
            const CoatsBlazers = [];
            const FormalPants = [];
            const GraphicTees = [];
            const Shirts = [];

            data.forEach(cat => {
                // console.log(cat.name)
                // subCategories.push(cat.sub_categories)
                cat.sub_categories.forEach(m => {
                    // traversing a single subcategory
                    if (m.name == "denim_jeans") {
                        DenimJeans.push(m)
                    }
                    if (m.name == "jackets") {
                        Jackets.push(m)
                    }
                    if (m.name == "sweat_shirts") {
                        SweatShirts.push(m)
                    }
                    if (m.name == "polo_shirts") {
                        PoloShirts.push(m)
                    }
                    if (m.name == "basic_tees") {
                        BasicTees.push(m)
                    }
                    if (m.name == "shalwar_suits") {
                        ShalwarSuits.push(m)
                    }
                    if (m.name == "hoodies") {
                        Hoodies.push(m)
                    }
                    if (m.name == "coat_pants") {
                        CoatsBlazers.push(m)
                    }
                    if (m.name == "trousers") {
                        Trousers.push(m)
                    }
                    if (m.name == "kurtas") {
                        Kurtas.push(m)
                    }
                    if (m.name == "waistcoats") {
                        WaistCoats.push(m)
                    }
                    if (m.name == "coats_blazers") {
                        CoatsBlazers.push(m)
                    }
                    if (m.name == "formal_pants") {
                        FormalPants.push(m)
                    }
                    if (m.name == "graphic_tees") {
                        GraphicTees.push(m)
                    }
                    if (m.name == "shirts") {
                        Shirts.push(m)
                    }
                    setdenimjeans(DenimJeans)
                    setjackets(Jackets)
                    setsweatshirts(SweatShirts)
                    setpoloshirts(PoloShirts)
                    setbasictees(BasicTees)
                    setshalwarsuits(ShalwarSuits)
                    sethoodies(Hoodies)
                    setcoatpants(CoatPants)
                    settrousers(Trousers)
                    setkurtas(Kurtas)
                    setwaistcoats(WaistCoats)
                    setcoatsblazers(CoatsBlazers)
                    setformalpants(formalpants)
                    setgraphictees(GraphicTees)
                    setshirts(Shirts)
                }
                )
            })


        }
        fetch("http://localhost:3000/data/product/fetch")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json()
            })
            .then(data => {
                setCategcount(countCheck)
                const newdata = processData(data)
                const splitdata = SplitCategories(newdata)
                setproducts(newdata)
                setIsLoading(false)
            })
            .catch(error => {
                console.error("Error:", error);
            })

    }, []);


    return (
        <div className="page">
            <Navbar />
            <div className="overflow-x-scroll mt-[1rem] h-[3rem] lg:hidden " style={{ scrollbarWidth: "none" }}>
                <div className="flex justify-center w-full">
                    <form className="w-3/4 flex rounded-full border items-center border-gray-300" action="">
                        <div className="seach w-5 h-5 ml-3">
                            <img src={search} alt="icon" />
                        </div>
                        <input className="px-3 py-2 w-5/6 rounded-full" type="text" name="searchbar" placeholder="Search" />
                        <div className="filter w-6 h-6 rounded-full mr-4 cursor-pointer">
                            <img id="filter" src={filter} onClick={DisplayFilter} alt="" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-5">
                <div>
                    <div className="flex filter-panel absolute justify-center transition ease-in-out delay-150 duration-500 opacity-0">
                        <div className="w-5/6 border border-gray-300 bg-white z-50 p-2">
                            <div className="flex justify-between m-2">
                                <div className="FilterBy">
                                    <p className="a1 text-3xl font-medium">Filter By</p>
                                </div>
                                <div className="cross" onClick={CloseFilter}>
                                    <p className="a1 text-3xl cursor-pointer text-gray-700">✖</p>
                                </div>
                            </div>
                            <p className="a3 tracking-wide ml-2">Category</p>

                            <div className="categ-list flex flex-col ml-2 my-4 rounded-lg border-gray-400 border">
                                <div className="flex items-center justify-between h-[2.5rem] px-2 w-[96%]">
                                    <p className="a2 text-sm text-gray-600 font-extralight">Select Categories</p>
                                    <div className="c1 w-5 h-5 cursor-pointer items-center flex h-full" onClick={Clicked}>
                                        <img src={down} alt="" />
                                    </div>
                                </div>
                                <div className="hidden categ">
                                    <form className="mt-1 ml-2" action="">
                                        <input className="man p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" onClick={() => { DisplayCateg(ManCateg) }} onChange={function () {

                                        }} />
                                        <label className="a1" htmlFor="">Men</label>

                                        <br />
                                        <input className="boys p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" onClick={() => { DisplayCateg(BoysCateg) }} />
                                        <label className="a1" htmlFor="">Boys</label>

                                    </form>
                                </div>
                            </div>
                            <div>
                                <div className="hidden boys-categories mx-2 my-5">
                                    <div className="category">
                                        <p className="a3 text-gray-900">Items</p>
                                    </div>
                                    <form className="mt-1" action="">
                                        <input id="checkbox-1" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1  rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Denim Jeans</label>

                                        <br />
                                        <input id="checkbox-2" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Jackets</label>
                                        <br />
                                        <input id="checkbox-3" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Sweat Shirts</label>
                                        <br />
                                        <input id="checkbox-4" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Polo Shirts</label>
                                        <br />
                                        <input id="checkbox-5" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Basic Tees</label>
                                        <br />
                                        <input id="checkbox-6" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Shalwar Suits</label>
                                        <br />
                                        <input id="checkbox-7" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Hoodies</label>
                                        <br />
                                        <input id="checkbox-8" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Coat Pants</label>
                                        <br />
                                        <input id="checkbox-9" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Trousers</label>


                                    </form>
                                </div>
                                <div className="man-categories mx-2 my-5">
                                    <div className="category">
                                        <p className="a3 text-gray-900">Items</p>
                                    </div>
                                    <form className="mt-1" action="">
                                        <input id="checkbox-10" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1  rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Kurtas</label>

                                        <br />
                                        <input id="checkbox-11" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Jackets</label>
                                        <br />
                                        <input id="checkbox-12" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Waist Coats</label>
                                        <br />
                                        <input id="checkbox-13" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Polo Shirts</label>
                                        <br />
                                        <input id="checkbox-14" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Shalwar Suits</label>
                                        <br />
                                        <input id="checkbox-15" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Coats Blazers</label>
                                        <br />
                                        <input id="checkbox-16" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Formal Pants</label>
                                        <br />
                                        <input id="checkbox-17" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Graphic Tees</label>
                                        <br />
                                        <input id="checkbox-18" className="check p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                        <label className="a1" htmlFor="">Shirts</label>


                                    </form>
                                </div>
                            </div>
                            <div className="price mx-2 my-5">
                                <div className="pricetag">
                                    <p className="a3 text-gray-900">Price (pkr)</p>
                                </div>
                                <form className="mt-3 flex justify-evenly" action="">
                                    {/* <label className="a" htmlFor="">Min Price</label> */}
                                    <input className="min p-3 h-8 border border-gray-400 rounded-md w-[45%]" placeholder="Min" type="text" />

                                    <br />
                                    <input className="max p-3 h-8 border border-gray-400 rounded-md w-[45%]" placeholder="Max" type="text" />
                                    {/* <label className="a" htmlFor="">2000-3500 pkr</label> */}

                                </form>
                            </div>
                            <div className="size mx-2 my-5">
                                <div className="pricetag">
                                    <p className="a3 text-gray-900">Size</p>
                                </div>
                                <form className="mt-1" action="">
                                    <input className="check-1 p-3 h-5 w-5 border border-gray-400 mr-3 my-1  rounded-md" type="checkbox" />
                                    <label className="a1" htmlFor="">XS</label>

                                    <br />
                                    <input className="check-1 p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                    <label className="a1" htmlFor="">SM</label>
                                    <br />
                                    <input className="check-1 p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                    <label className="a1" htmlFor="">MD</label>
                                    <br />
                                    <input className="check-1 p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                    <label className="a1" htmlFor="">LG</label>
                                    <br />
                                    <input className="check-1 p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                    <label className="a1" htmlFor="">XL</label>


                                </form>
                            </div>

                            <div className="mx-2 my-5">
                                <div className="ratetag">
                                    <p className="a3 text-gray-900">Rating <span className="a3 text-gray-400 text-xs">(avg)</span></p>
                                </div>
                                <form className="mt-3 flex" action="">
                                    {/* <label className="a" htmlFor="">Min Price</label> */}
                                    <input className="rating p-3 h-8 border border-gray-400 rounded-md w-[45%]" placeholder="0-20" type="text" />
                                </form>
                            </div>
                            <div className="clear-apply mx-2 flex justify-evenly">
                                <button className="text-yellow-400 w-[45%] h-8 border-yellow-300 border rounded-2xl" onClick={uncheckAll}>Clear Filter</button>
                                <button className="apply-filter a3 text-white rounded-2xl bg-yellow-300 h-8 w-[45%]" onClick={ApplyFilters}>Apply</button>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-center mt-[1rem]">
                <Category header={"Pants"} />
                <section id="pants" className="flex w-full">
                    {/* <Productpanel /> */}

                    {/* first we travserse a single subcategory from an array of many subcategories as our data has a list of them */}
                    {isLoading ? (
                        <Loaders />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                            {
                                products.slice(0, 2).map((category, categoryIndex) => (
                                    category.sub_categories.filter(subcategories => subcategories.name === "denim_jeans").map((subcategories, subindex) => (
                                        subcategories.data.map((item, itemIndex) => (
                                            <Product
                                                prodpic={item.images[0]}
                                                productname={item.title}
                                                reviews={item.total_reviews}
                                                newprice={item.real_price}
                                                category={category.name}
                                                subcategory={subcategories.name}
                                                productId={item.unique_identifier}
                                                rating={item.average_rating}
                                            />

                                        )
                                        )
                                    )
                                    )
                                )
                                )
                            }

                        </div>
                    )}
                </section>

                {/* All the jacket subcategories are here */}
                <Category header={"Jackets"} />
                <section id="jackets" className="flex w-full">

                    {/* first we travserse a single subcategory from an array of many subcategories as our data has a list of them */}
                    {isLoading ? (
                        <Loaders />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                            {
                                products.slice(0, 1).map((category, categoryIndex) => (
                                    category.sub_categories.filter(subcategories => subcategories.name === "jackets").map((subcategories, subindex) => (
                                        subcategories.data.map((item, itemIndex) => (
                                            <Product
                                                prodpic={item.images[0]}
                                                productname={item.title}
                                                reviews={item.total_reviews}
                                                newprice={item.real_price}
                                                category={category.name}
                                                subcategory={subcategories.name}
                                                productId={item.unique_identifier}
                                                rating={item.average_rating}
                                            />

                                        )
                                        )
                                    )
                                    )
                                )
                                )
                            }

                        </div>
                    )}



                </section>

                {/* The trouser subcategory here */}
                {/* All the jacket subcategories are here */}
                <Category header={"Trousers"} />
                <section id="trousers" className="flex w-full">

                    {/* first we travserse a single subcategory from an array of many subcategories as our data has a list of them */}
                    {isLoading ? (
                        <Loaders />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                            {
                                products.slice(0, 1).map((category, categoryIndex) => (
                                    category.sub_categories.filter(subcategories => subcategories.name === "trousers").map((subcategories, subindex) => (
                                        subcategories.data.map((item, itemIndex) => (
                                            <Product
                                                prodpic={item.images[0]}
                                                productname={item.title}
                                                reviews={item.total_reviews}
                                                newprice={item.real_price}
                                                category={category.name}
                                                subcategory={subcategories.name}
                                                productId={item.unique_identifier}
                                                rating={item.average_rating}
                                            />

                                        )
                                        )
                                    )
                                    )
                                )
                                )
                            }

                        </div>
                    )}



                </section>

                {/* All Shalwar Suits here */}
                <Category header={"Kurta Shalwar"} />
                <section id="kurta_shalwar" className="flex w-full">

                    {/* first we travserse a single subcategory from an array of many subcategories as our data has a list of them */}
                    {isLoading ? (
                        <Loaders />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                            {
                                products.slice(0, 1).map((category, categoryIndex) => (
                                    category.sub_categories.filter(subcategories => subcategories.name === "shalwar_suits").map((subcategories, subindex) => (
                                        subcategories.data.map((item, itemIndex) => (
                                            <Product
                                                prodpic={item.images[0]}
                                                productname={item.title}
                                                reviews={item.total_reviews}
                                                newprice={item.real_price}
                                                category={category.name}
                                                subcategory={subcategories.name}
                                                productId={item.unique_identifier}
                                                rating={item.average_rating}
                                            />

                                        )
                                        )
                                    )
                                    )
                                )
                                )
                            }

                        </div>
                    )}



                </section>

            </div>

            <Footer />
        </div >
    )
}
function Category({ header }) {
    return (
        <div className="header flex justify-start lg:justify-center lg:mb-[4rem] w-5/6 xl:w-[89%] mb-5">
            <p className="text-2xl lg:text-4xl">{header}</p>
        </div>
    )
}

function Loaders() {
    return (
        <div className="grid gap-32 mx-4 w-[222rem] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
            <div className=" h-[52vh] bg-gray-100 animate-pulse"></div>
        </div>
    )
}