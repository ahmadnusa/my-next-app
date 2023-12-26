import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { push } = useRouter();

  function handleLogin() {
    push("/product");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleLogin()}
        >
          Login
        </button>
        <p className="mt-4">
          Don&apos;t have an account?{" "}
          <Link href={"/auth/register"}>
            <span className="text-blue-500">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
