import { useSession } from "next-auth/react";

export default function Profile() {
  const { data } = useSession();
  return (
    <div className="container mx-auto flex justify-center items-center flex-col min-h-svh">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="text-gray-500">
        This page is only accessible to signed-in users.
      </p>
      <p className="text-gray-500">
        You&apos;re signed in as <strong>{data?.user?.email}</strong>.
      </p>
    </div>
  );
}
