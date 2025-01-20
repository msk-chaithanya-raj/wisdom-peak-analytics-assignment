import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const {
    filteredUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

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

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        User Directory
      </h1>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full sm:w-64 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Sort {sortOrder === "asc" ? "Z-A" : "A-Z"}
        </button>
      </div>
      <ul className="space-y-4">
        {currentUsers.map((user) => (
          <li
            key={user.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <Link to={`/user/${user.id}`} className="block p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {user.address.city}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        {Array.from(
          { length: Math.ceil(filteredUsers.length / usersPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
