import Navbar from "./Navbar";
import logo from "../assets/feather.png";
import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux-toolkit/blogSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        setUserInfo({
          id: auth.currentUser.uid,
          username: auth.currentUser.displayName,
          email: auth.currentUser.email,
        })
      );
      navigate("/");
    });
  };
  return (
    <>
      <Navbar />
      <div className="mt-[80px] bg-gray-400 h-screen">
        <div className="relative py-1">
          <div className="relative container mt-10 m-auto px-6 text-gray-500 md:px-12 xl:px-40 ">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                  <div className="space-y-4 flex items-center">
                    <img
                      src={logo}
                      loading="lazy"
                      className="w-10 mr-4"
                      alt="aymen logo"
                    />
                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                      Sign in to unlock the <br /> best of Aymen Blog.
                    </h2>
                  </div>
                  <div className="mt-16 grid space-y-4">
                    <button
                      onClick={signInWithGoogle}
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <img
                          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                          className="absolute left-0 w-5"
                          alt="google logo"
                        />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Continue with Google
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                    <p className="text-xs">
                      By proceeding, you agree to our{" "}
                      <a href="#" className="underline">
                        Terms of Use
                      </a>{" "}
                      and confirm you have read our{" "}
                      <a href="#" className="underline">
                        Privacy and Cookie Statement
                      </a>
                      .
                    </p>
                    <p className="text-xs">
                      This site is protected by reCAPTCHA and the{" "}
                      <a href="#" className="underline">
                        Google Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline">
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
