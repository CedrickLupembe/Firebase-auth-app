import { useRouter } from "next/router";
import { useEffect } from "react";
// Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// Firebase imports
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  // Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // Sign in with github
  const githubProvider = new GithubAuthProvider();
  const githubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      route.push("/Dashboard");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push("/Dashboard");
    } else {
      console.log("login");
    }
  }, [route, user]);

  return (
    <div className="h-89v flex items-center justify-center w-full">
      <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
        <h2 className="text-3xl font-medium">Join Today</h2>
        <div className="py-4">
          <h3 className="py-4">Sign in with the provider</h3>
        </div>
        <div className=" flex flex-col gap-4">
          <button
            onClick={GoogleLogin}
            className="text-white font-medium bg-gray-700 w-full rounded-lg flex items-center p-4 gap-4"
          >
            <FcGoogle className=" text-2xl" />
            Sign in with Google
          </button>

          <button
            onClick={githubLogin}
            className="text-white font-medium bg-gray-700 w-full rounded-lg flex items-center p-4 gap-4"
          >
            <FaGithub className=" text-2xl" />
            Sign in with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
