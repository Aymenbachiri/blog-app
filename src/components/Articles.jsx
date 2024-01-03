import { useEffect, useState } from "react";
import pen from "../assets/pen.png";
import bin from "../assets/bin.png";
import { auth, db } from "../firebase.config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const Articles = () => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };
  return (
    <div className="homePage px-2 md:px-8 mt-[100px] w-full min-h-[calc(100vh-80px)] h-auto flex flex-col items-center">
      <h1 className="text-xl md:text-4xl font-bold">Latest Articles</h1>
      {postLists.map((post) => {
        return (
          <div
            className="post w-full md:w-[600px] h-auto max-h-[600px] m-5 p-5 bg-[#FAFAFA] rounded-2xl"
            key={post.id}
          >
            <div className="postHeader flex justify-center w-full">
              <div className="title flex-[50%]">
                <h1 className="md:text-3xl font-bold">{post.title} </h1>
              </div>
              <div className="deletePost">
                {post.author.id === auth.currentUser?.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <img style={{ width: "30px" }} src={bin} alt="bin" />
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer mt-4 break-words h-auto max-h-[400px] w-full overflow-hidden overflow-y-auto">
              {post.postText}{" "}
            </div>
            <h1 className="flex items-center mt-4 font-bold text-xl">
              <img
                style={{ width: "20px", marginRight: "2px" }}
                src={pen}
                alt="pen"
              />
              {post.author.name}{" "}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
