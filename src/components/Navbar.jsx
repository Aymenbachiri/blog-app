import { Link } from "react-router-dom";
import logo from "../assets/feather.png";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from "../redux-toolkit/blogSlice";

const Navbar = () => {
  const userInfo = useSelector((state) => state.blog.userInfo);
  const auth = getAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth).then(() =>
      dispatch(userSignOut()).catch((error) => console.log(error))
    );
    window.location.reload();
  };

  return (
    <div className="bg-[#e9eef3] fixed top-0 z-20 w-full flex justify-between items-center p-4 ">
      <div className="md:flex md:items-center hidden">
        <img style={{ width: "50px" }} src={logo} alt="" />
        <h1 className="text-xl md:text-3xl font-bold">Aymen Blog</h1>
      </div>
      <div>
        <Link to="/" className="text-xl cursor-pointer md:text-3xl font-bold">
          Home
        </Link>
        <Link
          to="/createpost"
          className="text-xl cursor-pointer md:text-3xl font-bold ml-4"
        >
          Create Post
        </Link>
      </div>
      <div className="flex items-center">
        {!userInfo ? (
          <Link to="/login" className="text-xl md:text-3xl font-bold mr-3">
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="text-xl md:text-3xl font-bold mr-3 bg-black/35 rounded-2xl"
          >
            Logout
          </button>
        )}
      </div>
      {userInfo && (
        <div className="flex items-center">
          <h1 className="text-xl md:text-3xl font-bold mr-8 bg-black/35 rounded-2xl">
            {userInfo.username}{" "}
          </h1>
          <h1 className="hidden md:block text-xl md:text-3xl font-bold mr-3 bg-black/35 rounded-2xl">
            {userInfo.email}{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
