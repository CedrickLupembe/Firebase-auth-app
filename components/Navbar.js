/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const Navbar = () => {
  // Get the user
  const [user, loading] = useAuthState(auth);
  return (
    <div className="flex w-full h-11v items-center px-40 justify-between">
      <h1 className=" text-lg font-semibold">
        <Link href="/">
          <a>Logo</a>
        </Link>
      </h1>
      <ul>
        {!user && (
          <li>
            <Link href={"auth/Login"}>
              <a className="bg-teal-500 py-2 px-7 text-white font-semibold rounded-lg">
                Join now
              </a>
            </Link>
          </li>
        )}

        {user && (
          <div>
            <Link href={"/Dashboard"}>
              <a>
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  referrerPolicy=" no-referrer"
                  className=" w-10 h-10 rounded-full"
                />
              </a>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
