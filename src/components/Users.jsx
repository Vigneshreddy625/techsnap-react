import React, { useState, useMemo } from "react";
import userdata from "../data.json";
import { FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Users() {
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [searchItem, setSearchItem] = useState("");
  const [sortCriteria, setSortCriteria] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentChunk, setCurrentChunk] = useState(1);
  const [jumpPage, setJumpPage] = useState("");

  const pagesPerChunk = 10;

  // Filter and sort the users
  const filteredItems = useMemo(() => {
    return userdata.filter((user) => {
      const searchLower = searchItem.toLowerCase();
      const lastName = user.last_name ? user.last_name.toLowerCase() : "";
      const email = user.email ? user.email.toLowerCase() : "";
      const dateJoined = user.datejoined ? String(user.datejoined) : "";

      return (
        searchLower === "" ||
        lastName.includes(searchLower) ||
        email.includes(searchLower) ||
        dateJoined.includes(searchItem)
      );
    });
  }, [searchItem]);

  const sortedItems = useMemo(() => {
    const sorted = [...filteredItems].sort((a, b) => {
      if (sortCriteria === "date") {
        return new Date(b.datejoined) - new Date(a.datejoined);
      } else if (sortCriteria === "name") {
        return a.last_name.localeCompare(b.last_name);
      }
      return 0;
    });

    return sorted;
  }, [filteredItems, sortCriteria]);

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);

  const chunkStart = (currentChunk - 1) * pagesPerChunk + 1;
  const chunkEnd = Math.min(chunkStart + pagesPerChunk - 1, totalPages);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (page < chunkStart || page > chunkEnd) {
      setCurrentChunk(Math.floor((page - 1) / pagesPerChunk) + 1);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortCriteria(value);
  };

  const handleJumpPageChange = (event) => {
    setJumpPage(event.target.value);
  };

  const handleJumpToPage = () => {
    const page = Number(jumpPage);
    if (page >= 1 && page <= totalPages) {
      handlePageChange(page);
      setJumpPage("");
    }
  };

  const handleJumpToFirstPage = () => {
    handlePageChange(1);
  };

  const handleJumpToFinalPage = () => {
    handlePageChange(totalPages);
  };

  return (
    <>
      <div className="overflow-x-auto px-4 lg:px-20 py-4">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl font-bold underline mb-4 md:mb-0">
            Enrolled Users
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="relative w-full md:w-64 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search by name, email, or date joined"
                onChange={(e) => setSearchItem(e.target.value)}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <Select onValueChange={handleSortChange}>
              <SelectTrigger className="w-full md:w-[80px] mt-2 md:mt-0">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-col items-center md:flex-row md:gap-0">
              <label
                htmlFor="items-per-page"
                className="text-sm text-gray-700 mr-2 md:mr-4"
              >
                per page:
              </label>
              <select
                id="items-per-page"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="bg-white border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none w-20 md:w-20"
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <input
                type="number"
                value={jumpPage}
                onChange={handleJumpPageChange}
                className="border border-gray-300 rounded-md p-2 w-20"
                placeholder="Page"
              />
              <button
                onClick={handleJumpToPage}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 whitespace-nowrap">
                    Username
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 whitespace-nowrap">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 whitespace-nowrap">
                    Date Joined
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 whitespace-nowrap">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{user.last_name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.datejoined}</td>
                    <td className="px-4 py-2">{user.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <Pagination>
            <PaginationContent>
              <button
                onClick={handleJumpToFirstPage}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                First Page
              </button>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              </PaginationItem>
              {Array.from(
                { length: chunkEnd - chunkStart + 1 },
                (_, i) => chunkStart + i
              ).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    className={
                      page === currentPage ? "active bg-gray-300" : "inactive"
                    }
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {chunkEnd < totalPages && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
              <button
                onClick={handleJumpToFinalPage}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Last Page
              </button>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Users;
