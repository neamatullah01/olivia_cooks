import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
    const [topFoods, setTopFoods] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-chi-virid.vercel.app/topFoods')
            .then(res => res.json())
            .then(data => {
                setTopFoods(data);
            })
    }, [])
    return (
        <div className="py-4">
            <h2 className="text-center text-2xl font-semibold">OUR TOP FOODS</h2>
            <div className="divider w-1/4 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
                {
                    topFoods.map(food =>
                        <div key={food._id} className="card w-full lg:card-side bg-base-100 shadow-xl border border-black">
                            <figure><img className="w-80 h-full" src={food.food_image} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{food.food_name}</h2>
                                <p>{food.food_category}</p>
                                <p className="text-lg text-[#892CDC] font-semibold">Price: {food.price}$</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center pt-6">
                <Link to="/allFood" className="btn btn-primary bg-yellow-400 text-black">See All Food</Link>
            </div>
        </div>
    );
};

export default TopFood;