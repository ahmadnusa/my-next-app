import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Register Page</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          // onClick={() => handleRegister()}
        >
          Register
        </button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href={"/auth/login"}>
            <span className="text-blue-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
