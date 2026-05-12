import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetailsPage = async ({ params }) => {

  const { userID } = await params;

  const user = await getUserById(userID);

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-5">User Details</h2>

      <div className="space-y-3 border p-5 rounded-xl">
        <h1>
          <span className="font-bold">Name:</span> {user.name}
        </h1>

        <h1>
          <span className="font-bold">Email:</span> {user.email}
        </h1>

        <h1>
          <span className="font-bold">Role:</span> {user.role}
        </h1>
      </div>
    </div>
  );
};

export default UserDetailsPage;