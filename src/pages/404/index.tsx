// pages/404.tsx

import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* 404 text */}
      <h1 className="text-9xl font-bold text-gray-700">404</h1>

      {/* Message */}
      <p className="my-4 text-xl text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Home link */}
      <Link href="/">
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
