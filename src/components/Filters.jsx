import FormInput from "./FormInput";
import { Form, useLoaderData, Link } from "react-router-dom";

const Filters = ({size}) => {
  return (
    <div className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <FormInput 
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        />
        <button type="submit" className="btn btn-primary btn-sm">search</button>
        <Link to={"/products"} className="btn btn-accent btn-sm">reset</Link>
    </div>
  )
}

export default Filters