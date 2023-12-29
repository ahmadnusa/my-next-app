import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data } = useSession();
  return (
    <header className="bg-gray-800 text-white">
      <div className="container py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-5">WebWaves</h1>
        <button
          onClick={data ? () => signOut() : () => signIn()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-5"
        >
          {data ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </header>
  );
}
