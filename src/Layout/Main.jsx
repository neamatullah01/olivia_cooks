import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const Main = () => {
    return (
        <div className="w-[1300px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;