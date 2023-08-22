import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

var COLUMNS = [
  { Header: "Name", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "BirthDay", accessor: "dateOfBirth" },
  {
    Header: "Admin?",
    accessor: "isAdmin",
    Cell: ({ value: isAdmin }) => (
      <div className={isAdmin ? "text-green-600" : "text-red-600"}>
        {isAdmin ? "Yes" : "No"}
      </div>
    ),
  },

  {
    Header: "",
    accessor: "id",
    Cell: ({ value: userId }) => (
      <Link
        href={`/user/create?id=${userId}`}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Edit
      </Link>
    ),
  },
];

const UserList = ({ users }) => {
  const data = useMemo(() => {
    return users ? users : [{}];
  }, [users]);

  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    toggleSortBy,
  } = useTable(
    {
      columns,
      data: data,
      initialState: {
        sortBy: [{ id: "name", desc: false }],
      },
    },
    useSortBy
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4 mt-2">
        <div>
          <h2 className="text-xl font-bold">Users</h2>
          <p className="text-sm">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-3 mb-3">
          <Link
            href="/user/create"
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white"
          >
            Create User
          </Link>
        </div>
      </div>
      <table
        className="min-w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  onClick={() => {
                    toggleSortBy(column.id, !column.isSortedDesc);
                  }}
                >
                  <div className="flex items-center">
                    {column.render("Header")}
                    {column.isSorted ? (
                      <FontAwesomeIcon
                        icon={column.isSortedDesc ? faSortDown : faSortUp}
                        className="ml-1 text-gray-400"
                      />
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className="bg-white divide-y divide-gray-200"
          {...getTableBodyProps()}
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
