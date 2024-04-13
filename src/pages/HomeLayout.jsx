import {Outlet} from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  return (
    <>
        <nav>
            <Header />
            <Navbar />
        </nav>
        <section className="align-element">
            <Outlet />
        </section>
    </>
  )
}

export default HomeLayout