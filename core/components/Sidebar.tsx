import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-1/4 text-white p-4">
      <ul className="space-y-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/book">Book</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
