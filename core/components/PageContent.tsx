import React from "react";
import Link from "next/link";
const PageContent = ({ title, description, linkTo, linkText }) => {
  return (
    <div className="flex justify-between items-center mb-4 mt-2">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="mt-3 mb-3">
        <Link
          href={linkTo}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default PageContent;
