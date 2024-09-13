import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter hook
import Logo from './Logo';

export default function Sidebar() {
    const router = useRouter(); // Get the current route
    const currentRoute = router.pathname; // Access the current route path

    return (
        <div className="h-screen w-64 bg-white text-white fixed top-0 left-0 flex flex-col z-10">
            <div className="p-6 text-2xl font-bold">
                <Logo />
            </div>
            <nav className="flex-grow">
                <ul>
                    <Link href="/user-details">
                        <li
                            className={`px-6 py-3 mb-2 ${
                                currentRoute.startsWith('/user-details')
                                    ? 'bg-primary text-white rounded-r-full'
                                    : 'text-[#5D5D5D]'
                            } hover:bg-blue-700 hover:text-white hover:rounded-r-full`}
                        >
                            User Details
                        </li>
                    </Link>
                    <Link href="/">
                        <li
                            className={`px-6 py-3 ${
                                currentRoute === '/'
                                    ? 'bg-primary text-white rounded-r-full'
                                    : 'text-[#5D5D5D]'
                            } hover:bg-blue-700 hover:text-white hover:rounded-r-full`}
                        >
                            Logout
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
