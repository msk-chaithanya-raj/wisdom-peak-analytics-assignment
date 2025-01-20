import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading)
    return (
      <div className="text-center text-2xl font-semibold mt-10">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center text-2xl font-semibold mt-10 text-red-500">
        {error}
      </div>
    );
  if (!user)
    return (
      <div className="text-center text-2xl font-semibold mt-10">
        User not found
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            {user.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Company:</span>{" "}
                {user.company.name}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Website:</span> {user.website}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 px-8 py-4">
          <Link
            to="/"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
