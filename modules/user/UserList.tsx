import React, { useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import UserDetailsModal from "./UserDetailsModal";

const UserList = ({ users }) => {
  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ value: userId }) => <UserDetailsModal userId={userId} />,
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: users,
      },
      useSortBy,
      usePagination
    );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table
        className="min-w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        {/* ... */}
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
