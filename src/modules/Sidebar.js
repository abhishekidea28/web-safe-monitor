import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter hook
import Logo from './Logo';

export default function Sidebar() {
    const router = useRouter(); // Get the current route
    const currentRoute = router.pathname; // Access the current route path

    return (
        <div className=" w-full bg-white fixed bottom-0 left-0 h-16  md:h-dvh md:sticky md:top-0 md:left-0 md:bg-white md:flex md:flex-wrap md:flex-col ">
            <div className="p-6 pb-12 text-2xl font-bold">
                <Logo />
            </div>
            <nav className="flex-grow">
                <ul>
                    <Link href="/user-details">
                        <li
                            className={`px-6 py-3 mb-2 ${
                                currentRoute.startsWith('/user-details')
                                    ? 'bg-primary text-white rounded-r-full hover:bg-primary'
                                    : 'text-[#5D5D5D] hover:bg-primaryHover'
                            }  hover:text-white hover:rounded-r-full`}
                        >
                            User Details
                        </li>
                    </Link>
                    <Link href="/">
                        <li
                            className={`px-6 py-3 ${
                                currentRoute === '/'
                                    ? 'bg-primary text-white rounded-r-full hover:bg-primary'
                                    : 'text-[#5D5D5D] hover:bg-primaryHover'
                            }  hover:text-white hover:rounded-r-full`}
                        >
                            Logout
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
