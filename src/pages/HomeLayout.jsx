import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
        <nav>
            <Header />
            <Navbar />
            <span className="text-4xl text-primary">Confy</span>
        </nav>
        <Outlet />
    </>
  )
}

export default HomeLayout