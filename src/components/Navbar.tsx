import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="items-center py-2 h-16 bg-white px-8 fixed top-0 w-full shadow-md z-10">
      <div className="flex justify-between items-center h-full ">
        {/* Logo */}
        <h1 className="text-2xl font-medium cursor-pointer">
          <Link href="/">
            <a>WatchTogether</a>
          </Link>
        </h1>
        {/* Search */}
        <div
          className="hidden sm:flex w-1/4 bg-gray-100 px-4 py-2 rounded-full h-11
   items-stretch overflow-hidden min-w-max text-gray-400 focus-within:text-black focus-within:border-[1px] border-gray-400"
        >
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
          <input
            type="text"
            placeholder="Tìm kiếm game, phần mềm..."
            className="bg-transparent outline-none flex-1 px-2"
          />
        </div>
        {/* Items and Login */}
        <div className="hidden space-x-16 lg:flex min-w-max">
          <a
            href="#"
            className="px-6 text-white py-2.5 rounded-full bg-main-red hover:bg-main-green transition-all"
          >
            Đăng nhập
          </a>
        </div>
      </div>
    </nav>
  );
}
