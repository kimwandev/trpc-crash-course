import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { api } from "../utils/api";

// import { api } from "../utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div style={{alignItems: 'center', justifyContent: 'center', display: "flex", height: '100vh'}}>
          <Head>Login</Head>
          <div>
            <AuthShowcase />
          </div>
      </div>
    </>
  );
};

export default Home;


const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
debugger;
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name} {sessionData.user?.role}</span>} 
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      {/* <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : <>
        
        
        </>
        }
      </button> */}
      <div className="w-full max-w-sm">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block font-bold mb-2">
                  Username
                </label>
                <input
                  className="border border-gray-400 p-2 w-full"
                  type="text"
                  id="username"
                  name="username"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">
                  Password
                </label>
                <input
                  className="border border-gray-400 p-2 w-full"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
    </div>
  );
};
