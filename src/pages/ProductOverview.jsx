import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar/navbar.jsx';
import Footer from '../components/Footer/footer.jsx';

import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useParams } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCookies } from "react-cookie";
import { useCookieContext } from "../cookies/CookiesProvider.jsx";

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div>
            <Slider {...settings} className="p-5">
                {images.map((imageUrl, index) => (
                    <div key={index} className="flex justify-center items-center h-fit">
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const Star = (props) => {
    const { color = "#eab308", size = "24px" } = props;
    return (
        <IconContext.Provider value={{ color: color, size: size }}>
            <FaStar />
        </IconContext.Provider>
    );
}

const StarHalfAlt = (props) => {
    const { color = "#eab308", size = "24px" } = props;
    return (
        <IconContext.Provider value={{ color: color, size: size }}>
            <FaStarHalfAlt />
        </IconContext.Provider>
    );
}

const RegStar = (props) => {
    const { color = "#eab308", size = "24px" } = props;
    return (
        <IconContext.Provider value={{ color: color, size: size }}>
            <FaRegStar />
        </IconContext.Provider>
    );
}

const RatingStars = (props) => {
    const { averageRating, color, size } = props;

    const totalStars = 5;
    const fullStars = Math.floor(averageRating);
    const decimalPart = averageRating - fullStars;
    let hasHalfStar = decimalPart >= 0.5;
    let emptyStars = totalStars - fullStars - hasHalfStar;
    const stars = [];

    const classes = `text-${size} fill-${color}-500`
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star color={color} size={size} />);
    }
    if (hasHalfStar) {
        stars.push(<StarHalfAlt color={color} size={size} />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<RegStar color={color} size={size} />);
    }
    return (
        <div className="flex items-center gap-1">
            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
}

const Pricing = ({ realPrice, discountedPrice, discount }) => {
    return (
        <div className="flex flex-col gap-1 text-2xl">
            {discount > 0 ? (
                <div className="flex items-center gap-6">
                    <div>
                        <span className="text-red-400 line-through">{`Rs. ${realPrice}`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold" >{`Rs. ${discountedPrice}`}</span>
                        <span className="font-bold bg-yellow-400 px-2 py-1 rounded-full text-xs">{`${discount}%`} Off</span>
                    </div>
                </div>
            ) : (
                <div>
                    <span>{`Rs. ${realPrice}`}</span>
                </div>
            )}
            <div>
                <p className="text-[0.6rem] text-neutral-600"><span className="text-green-800 font-bold">*</span> Shipping calculated at checkout.</p>
            </div>
        </div>
    );
}

const ColorSelector = () => {
    // const [selectedColor, setSelectedColor] = useState('');

    // const handleColorChange = (color) => {
    //     setSelectedColor(color);
    // };

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold">COLOR</h2>
            <p className="text-xs text-red-400">Customizations not available.</p>
            {/* <div className="flex space-x-2">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className={`border-2 text-sm px-4 py-1 ${selectedColor === color ? `'bg-purple-50 border-purple-500 text-purple-500 font-bold'` : 'border-neutral-400 bg-neutral-100 text-neutral-800'}`}
                        onClick={() => handleColorChange(color)}
                    >{color}</button>
                ))}
            </div> */}
        </div>
    );
};

const SizeSelector = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState('');


    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold">SIZE</h2>
            <form className="space-x-4">
                {sizes.map((size) => (
                    <label key={size} className="inline-block">
                        <input
                            type="radio"
                            name="size"
                            value={size}
                            checked={selectedSize === size}
                            onChange={handleSizeChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            className={`border-2 text-sm p-1 w-12 h-9 ${selectedSize === size ? 'bg-purple-50 border-purple-500 text-purple-500 font-bold' : 'border-neutral-400 bg-neutral-100 text-neutral-800'}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    </label>
                ))}
            </form>
        </div>
    );
};

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        const newQuantity = quantity + value;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold">QUANTITY</h2>
            <div className="flex items-center h-9 w-fit bg-neutral-100 border-2 border-neutral-400">
                <button className="bg-neutral-300 px-3 py-1 hover:bg-neutral-400 active:bg-neutral-500" onClick={() => handleQuantityChange(-1)}>
                    <i className="fas fa-minus font-bold"></i>
                </button>
                <span className="mx-4 w-8 text-center">{quantity}</span>
                <button className="bg-neutral-300 px-3 py-1 hover:bg-neutral-400 active:bg-neutral-500" onClick={() => handleQuantityChange(1)}>
                    <i className="fas fa-plus font-bold"></i>
                </button>
            </div>
        </div>
    );
};

const Overview = (
    { category, subCategory, title, articleNumber,
        averageRating, totalReviews, realPrice,
        discountedPrice, discount,
        uuid, sku, sizes, images }) => {

    const { cookies, updateCookie } = useCookieContext();

    const addItemToCart = () => {
        console.log(cookies.cart)
        cookies.cart[uuid] = {
            quantity: 4,
            price: discountedPrice
        }
        // updateCookie('cart', {"new": "value"})
        // console.log(cookies.cart)
        // if (uuid in cookies.cart) {
        //     cookies.cart[uuid] += 1;
        // }
        // else {
        //     cookies.cart[uuid] = 1;
        // }
        // alert(cookies.cart[uuid])
        // console.log(cookies.cart)
    }

    return (
        <div className="text-ut-gray gap-2 md:gap-4">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 overflow-hidden py-16 px-12">
                    <div className="px-6 md:px-24 lg:px-4 xl:px-8 2xl:px-32">
                        <div>
                            <Carousel images={images} />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col py-16 px-12 gap-5">
                    <div id="headings" className="flex flex-col gap-2 font-bold">
                        <h2 className="text-sm text-teal-700">{category} | {subCategory}</h2>
                        <h1 className="text-2xl">{title}</h1>
                        <h3 className="text-xs text-neutral-800">{articleNumber}</h3>
                    </div>
                    <div id="ratings" className="flex gap-6 font-bold">
                        <span>
                            <RatingStars averageRating={averageRating} />
                        </span>
                        <span>
                            {averageRating} | {totalReviews} REVIEWS
                        </span>
                    </div>
                    <div id="price">
                        <Pricing realPrice={realPrice} discountedPrice={discountedPrice} discount={discount} />
                    </div>
                    <div id="metaInfo" className="text-neutral-600 text-xs">
                        <p>
                            <b>UUID:</b> {uuid}
                        </p>
                        <p>
                            <b>SKU:</b> {sku}
                        </p>
                    </div>
                    <div id="color">
                        <ColorSelector colors={[]} />
                    </div>
                    <div id="size">
                        <SizeSelector sizes={sizes} />
                    </div>
                    <div id="quantity">
                        <QuantitySelector />
                    </div>
                    <br />
                    <div id="addToCart">
                        <p className="text-[0.7rem] text-neutral-600"><span className="text-green-500">*</span> Please note that the product appearance may vary from what is shown in the pictures.</p>
                        <br />
                        <button className='px-4 py-2 w-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white' onClick={addItemToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Legal = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between py-4 px-8 lg:px-48 gap-16">
                <div className="flex flex-col gap-4 text-center w-full lg:w-[640px]">
                    <i className="text-5xl text-teal-800 fas fa-shipping-fast"></i>
                    <h2 className="font-bold text-teal-800 text-md">SHIPPING POLICY</h2>
                    <p className="text-sm text-neutral-700">
                        Fast-track your experience with our expedited shipping,
                        delivering your product within 3-4 business days, ensuring your
                        purchase reaches you promptly and reliably.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-center w-full lg:w-[640px]">
                    <i className="text-5xl text-teal-800 fas fa-money-bill"></i>
                    <h2 className="font-bold text-teal-800 text-md">REFUND POLICY</h2>
                    <p className="text-sm text-neutral-700">You have a window of 2 business days from the date of delivery
                        to request a refund for this product. If the item doesn't meet your
                        expectations, initiate a return within this timeframe for a full
                        refund.</p>
                </div>
                <div className="flex flex-col gap-4 text-center text-teal-800 w-full lg:w-[640px]">
                    <i className="text-5xl text-teal-800 fas fa-user-tie"></i>
                    <h2 className="font-bold text-md">CONNECTING BUYERS & SELLERS</h2>
                    <p className="text-sm text-neutral-700">As a platform facilitating transactions between buyers and
                        sellers, we do not assume liability for products. The merchandise
                        holds no contractual obligation with our platform, and any
                        concerns about quality or liability should be addressed directly
                        with the seller.</p>
                </div>
            </div>
        </div>
    );
}

const Bar = ({ reviews, totalReviews, label, color }) => {
    const starPercentage = Math.round((reviews / totalReviews) * 100);
    var classes = `w-[${starPercentage}%] bg-${color}-600`
    return (
        <div className="flex items-center">
            <div className="w-20 text-sm">{label}</div>
            <div className="flex h-3 w-full bg-neutral-200">
                <div className={classes} value={reviews}>&nbsp;</div>
            </div>
        </div>
    );
}

const DistributionChart = ({ totalReviews, reviews }) => {
    const starCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };
    reviews.forEach(review => {
        const { rating } = review;
        starCounts[rating]++;
    });
    return (
        <div className="flex flex-col gap-2 py-4">
            <Bar reviews={starCounts[5]} totalReviews={totalReviews} label="Best" color="green" />
            <Bar reviews={starCounts[4]} totalReviews={totalReviews} label="Good" color="lime" />
            <Bar reviews={starCounts[3]} totalReviews={totalReviews} label="Average" color="yellow" />
            <Bar reviews={starCounts[2]} totalReviews={totalReviews} label="Poor" color="orange" />
            <Bar reviews={starCounts[1]} totalReviews={totalReviews} label="Worst" color="red" />
        </div>
    )
};

const Comment = ({ name, rating, comment }) => {
    return (
        <div className="flex flex-col gap-3 bg-gray-100 p-4 border-l-4 border-pink-800">
            <div className="flex justify-between">
                <h4 className="font-bold text-sm text-indigo-700">{name}</h4>
                <RatingStars averageRating={rating} size="12px" />
            </div>
            <p className="text-sm">{comment}</p>
            <p className="text-[0.6rem] text-neutral-500">03/10/2018</p>
        </div>
    );
};

const CommentList = ({ comments }) => {
    return (
        <div className="flex flex-col gap-4">
            {comments.map((comment, index) => (
                <Comment
                    key={index}
                    name={comment.name}
                    rating={comment.rating}
                    comment={comment.comment}
                />
            ))}
        </div>
    );
};

const Reviews = ({ averageRating, totalReviews, reviews }) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex flex-col gap-3 px-12 py-6">
                    <h2 className="font-bold text-xl">REVIEWS</h2>
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-5xl">{averageRating}</h1>
                        <RatingStars averageRating={averageRating} size="32px" />
                    </div>
                    <div>
                        {totalReviews} REVIEWS
                        <DistributionChart reviews={reviews} totalReviews={totalReviews} />
                    </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-3 px-12 py-6">
                    <h2 className="font-bold text-xl">COMMENTS</h2>
                    <div className="max-h-96 overflow-y-scroll p-2">
                        <CommentList comments={reviews} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Body = ({ data }) => {

    var { id_, category, sub_category,
        title, article_number, average_rating, total_reviews,
        real_price, discounted_price, discount_pc,
        unique_identifier, stock_keeping_unit, available_sizes, images, reviews } = data;

    category = category.replace('_', ' ').toUpperCase();
    sub_category = sub_category.replace('_', ' ').toUpperCase();
    title = title.replace('\'S', '\'s')

    return (
        <div className="flex flex-col gap-24 px-8 py-12 text-ut-gray font-lexend">
            <Overview
                category={category}
                subCategory={sub_category}
                title={title}
                articleNumber={article_number}
                averageRating={average_rating}
                totalReviews={total_reviews}
                realPrice={real_price}
                discountedPrice={discounted_price}
                discount={discount_pc}
                uuid={unique_identifier}
                sku={stock_keeping_unit}
                sizes={available_sizes}
                images={images}
            />
            <Legal />
            <Reviews averageRating={average_rating} totalReviews={total_reviews} reviews={reviews} />
        </div>
    )
};

function ProductOverview() {
    const { category, subCategory, productUUID } = useParams();

    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${category}/${subCategory}/${productUUID}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProductDetails(data[0]);
            } catch (error) {
                console.error('Error fetching product details:', error.message);
            }
        };
        fetchProductDetails();
    }, []);

    return (
        <div>
            <Navbar />
            {productDetails && (
                <Body data={productDetails} />
            )}
            <Footer />
        </div>
    );
}

export default ProductOverview;
