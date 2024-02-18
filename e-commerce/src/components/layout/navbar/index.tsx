import { Link } from "react-router-dom";
// import { MountainIcon } from "../../shared/icon/mountainIcon";
// import { useContext } from "react"; userNameContext
// import { useUserName } from "../../../context";

const Navbar = () => {

  // const {userName} = useContext(userNameContext);
//   const {userName} = useUserName();
  
  
  return (
    <header className="border-b">
      <div className="container px-4 md:px-6">
        <nav className="flex items-center justify-between h-14">
          <p className="flex items-center">
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="sr-only">AIT</span>
          </p>
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium">
              {/* Welcome back, <em>{userName ? userName : 'User not defined'}</em> */}
            </p>
          <button className="text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</button>
            <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link to="/cart" className="text-sm font-medium hover:underline underline-offset-4">
              Cart
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
