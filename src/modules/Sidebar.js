import Link from 'next/link';
import Logo from './Logo';

export default function Sidebar() {
    return (
        <div className="h-screen w-64 bg-white text-white fixed top-0 left-0 flex flex-col  z-10">
            {/* <div className='py-4 px-4'>
                <Logo />
            </div> */}

            <div className="p-6 text-2xl font-bold">
            <Logo />
            </div>
            <nav className="flex-grow">
                <ul>
                    <li className="px-6 py-3 text-[#5D5D5D] hover:bg-blue-700 hover:text-white hover:rounded-r-full">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-6 py-3 text-[#5D5D5D] hover:bg-blue-700 hover:text-white hover:rounded-r-full">
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    {/* <li className="px-6 py-3 hover:bg-blue-700">
            <Link href="/services">
              Services
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-blue-700">
            <Link href="/contact">
              Contact
            </Link>
          </li> */}
                </ul>
            </nav>
            {/* <div className="p-6">
                <button className="bg-primary text-white font-semibold px-4 py-2 rounded-lg ">
                    Logout
                </button>
            </div> */}
        </div>
    );
}
