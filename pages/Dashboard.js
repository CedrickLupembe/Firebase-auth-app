import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  if (loading) return <h1>Is loading...</h1>;
  if (!user) route.push("auth/Login");
  if (user)
    return (
      <div className="h-89v w-full flex items-center justify-center flex-col">
        <p>
          Welcome <span>{user.displayName}</span>
        </p>

        <button
          onClick={() => auth.signOut()}
          className=" py-3 px-8 bg-green-600 rounded-lg mt-8"
        >
          Logout
        </button>
      </div>
    );
};

export default Dashboard;
