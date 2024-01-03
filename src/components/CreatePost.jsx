import { useState } from "react";
import Navbar from "./Navbar";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.blog.userInfo);

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <>
      <Navbar />
      {userInfo ? (
        <div className="mt-[120px] rounded-xl">
          <div className="text-center font-bold text-2xl m-5 text-gray-800 rounded-xl">
            Create A Post
          </div>
          <div className="mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-xl">
            <label>Tile</label>
            <input
              className="bg-gray-100 border border-gray-300 rounded-xl p-2 mb-4 outline-none"
              type="text"
              placeholder="Add a Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label>Description</label>
            <textarea
              className=" bg-gray-100 sec p-3 h-60 border border-gray-300 rounded-xl outline-none"
              placeholder="Describe everything about this post here"
              onChange={(e) => setPostText(e.target.value)}
              value={postText}
            ></textarea>
            <button onClick={createPost} className="mt-4 flex">
              <div className=" border border-indigo-500 p-1 px-4 font-semibold cursor-pointer rounded-md text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-600">
                Publish
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex min-h-screen items-center justify-center bg-gray-100 rounded-2xl">
            <div className="rounded-lg bg-gray-50 px-16 py-14">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-200 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
                Sign in!!!
              </h3>
              <p className="w-[230px] text-center font-normal text-gray-600">
                You need to login in order to create a post
              </p>
              <Link
                to="/login"
                className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-[#22c55e] px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
