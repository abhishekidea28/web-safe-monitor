import React from 'react'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { EllipsisVertical, SearchIcon } from 'lucide-react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { InputWithLabel } from './ui/InputWithLabel'
import Image from 'next/image'
import Button from './ui/Button'
import { useRouter } from 'next/navigation'

const UserTable = ({ data }) => {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/user-details/api-key')
    }
    return (
        <>
            <div className='mt-0 flex items-center justify-between'>
                <h3 className="text-[20px] font-semibold mb-4">User</h3>
                <Button onClick={handleNavigation} className='w-40 text-white text-sm flex items-center justify-center rounded-[4px]' >

                    Generate API Key
                </Button>
            </div>
            <div className='mt-5 flex items-center justify-between'>
                <InputWithLabel placeholder='Search "Users"' className={"text-zinc-500"} iconType={"pre"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M17.8395 16.9605L14.1641 13.2852C15.0489 12.1072 15.5266 10.6733 15.525 9.2C15.525 5.43672 12.4633 2.375 8.7 2.375C4.93672 2.375 1.875 5.43672 1.875 9.2C1.875 12.9633 4.93672 16.025 8.7 16.025C10.1733 16.0266 11.6072 15.5489 12.7852 14.6641L16.4605 18.3395C16.6466 18.5058 16.8893 18.5945 17.1387 18.5876C17.3881 18.5806 17.6255 18.4784 17.8019 18.3019C17.9784 18.1255 18.0806 17.8881 18.0876 17.6387C18.0945 17.3893 18.0058 17.1466 17.8395 16.9605ZM3.825 9.2C3.825 8.23582 4.11091 7.29329 4.64659 6.4916C5.18226 5.68991 5.94363 5.06506 6.83442 4.69609C7.72521 4.32711 8.70541 4.23057 9.65107 4.41867C10.5967 4.60678 11.4654 5.07107 12.1471 5.75285C12.8289 6.43464 13.2932 7.30328 13.4813 8.24894C13.6694 9.19459 13.5729 10.1748 13.2039 11.0656C12.8349 11.9564 12.2101 12.7177 11.4084 13.2534C10.6067 13.7891 9.66418 14.075 8.7 14.075C7.40755 14.0735 6.16847 13.5593 5.25457 12.6454C4.34066 11.7315 3.82655 10.4925 3.825 9.2Z" fill="[#828282]" />
                    </svg>
                </InputWithLabel>
                <Button className='bg-white h-10 w-30 text-sm text-[#373737] flex items-center justify-between gap-2' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M9.19217 13.8078C9.25028 13.8659 9.29638 13.9348 9.32783 14.0107C9.35928 14.0865 9.37547 14.1679 9.37547 14.25C9.37547 14.3321 9.35928 14.4135 9.32783 14.4893C9.29638 14.5652 9.25028 14.6341 9.19217 14.6922L6.69217 17.1922C6.63412 17.2503 6.56519 17.2964 6.48932 17.3279C6.41345 17.3593 6.33212 17.3755 6.24998 17.3755C6.16785 17.3755 6.08652 17.3593 6.01064 17.3279C5.93477 17.2964 5.86584 17.2503 5.80779 17.1922L3.30779 14.6922C3.24972 14.6341 3.20366 14.5652 3.17224 14.4893C3.14081 14.4134 3.12463 14.3321 3.12463 14.25C3.12463 14.1679 3.14081 14.0866 3.17224 14.0107C3.20366 13.9348 3.24972 13.8659 3.30779 13.8078C3.42507 13.6905 3.58413 13.6247 3.74998 13.6247C3.8321 13.6247 3.91342 13.6408 3.98929 13.6723C4.06516 13.7037 4.1341 13.7497 4.19217 13.8078L5.62498 15.2414V4.25C5.62498 4.08424 5.69083 3.92527 5.80804 3.80806C5.92525 3.69085 6.08422 3.625 6.24998 3.625C6.41574 3.625 6.57471 3.69085 6.69192 3.80806C6.80913 3.92527 6.87498 4.08424 6.87498 4.25V15.2414L8.30779 13.8078C8.36584 13.7497 8.43477 13.7036 8.51064 13.6722C8.58652 13.6407 8.66785 13.6245 8.74998 13.6245C8.83212 13.6245 8.91344 13.6407 8.98932 13.6722C9.06519 13.7036 9.13412 13.7497 9.19217 13.8078ZM16.6922 6.30782L14.1922 3.80782C14.1341 3.74971 14.0652 3.70361 13.9893 3.67215C13.9134 3.6407 13.8321 3.62451 13.75 3.62451C13.6678 3.62451 13.5865 3.6407 13.5106 3.67215C13.4348 3.70361 13.3658 3.74971 13.3078 3.80782L10.8078 6.30782C10.6905 6.42509 10.6246 6.58415 10.6246 6.75C10.6246 6.91586 10.6905 7.07492 10.8078 7.19219C10.9251 7.30947 11.0841 7.37535 11.25 7.37535C11.4158 7.37535 11.5749 7.30947 11.6922 7.19219L13.125 5.7586V16.75C13.125 16.9158 13.1908 17.0747 13.308 17.1919C13.4253 17.3092 13.5842 17.375 13.75 17.375C13.9157 17.375 14.0747 17.3092 14.1919 17.1919C14.3091 17.0747 14.375 16.9158 14.375 16.75V5.7586L15.8078 7.19219C15.9251 7.30947 16.0841 7.37535 16.25 7.37535C16.4158 7.37535 16.5749 7.30947 16.6922 7.19219C16.8094 7.07492 16.8753 6.91586 16.8753 6.75C16.8753 6.58415 16.8094 6.42509 16.6922 6.30782Z" fill="#5D5D5D" />
                    </svg>
                    Sort
                </Button>
            </div>
            <div className='pt-5'>
                <Table>
                    <TableHeader>
                        <TableRow className='bg-lightPrimary hover:bg-lightPrimary'>
                            <TableHead className="w-1/4 text-black font-normal font-manrope text-sm text-left">Username</TableHead>
                            <TableHead className="w-1/4 text-black font-normal font-manrope text-sm text-left">User Email Id</TableHead>
                            <TableHead className="w-1/6 text-black font-normal font-manrope text-sm text-left">API key</TableHead>
                            <TableHead className="w-1/6 text-black font-normal font-manrope text-sm text-left">Expiry Date</TableHead>
                            <TableHead className="w-1/6 text-black font-normal font-manrope text-sm text-left">API Key Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id} className='bg-white hover:bg-white cursor-pointer'>
                                <TableCell className="flex items-center text-center gap-2">
                                    <Image src={'/images/user.png'} width={40} height={40} />
                                    <span className="text-black font-medium font-manrope text-sm text-left">{item.username}</span>
                                </TableCell>
                                <TableCell className=''>
                                    <span className=" text-black font-normal font-manrope text-sm text-left truncate...">{item.email}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-black font-normal font-manrope text-sm text-left">{item.apiKey}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-black font-normal font-manrope text-sm text-left">{item.expiryDate}</span>
                                </TableCell>
                                <TableCell className=''>
                                    <div className="flex w-100 items-center border justify-center border-green-400 rounded-[8px] py-[5px]">
                                        <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                                        <span className="text-green-500 font-medium">Active</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Pagination Section */}
                <div className="flex items-center justify-between mt-4">
                    {/* Entries Per Page */}
                    <div className="flex items-center">
                        <label htmlFor="entries" className="text-sm text-[#828282] mr-2">Entries per page</label>
                        <select
                            id="entries"
                            className="bg-white rounded-[4px] mx-1 px-4 text-sm p-1 focus:border-primary focus:outline-none "
                            defaultValue="10"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                    </div>

                    {/* Page Navigation */}
                    <div className="flex items-center">
                        <button className="px-3 py-1 text-sm  text-[#828282]  hover:text-primary">Previous</button>
                        <button className="px-3 py-1 border border-primary rounded-[4px] mx-1 px-4 bg-primary text-white">1</button>
                        <button className="px-3 py-1 border border-primary rounded-md mx-1 text-[#828282] hover:bg-primary hover:text-white">2</button>
                        <button className="px-3 py-1 border border-primary rounded-md mx-1 text-[#828282] hover:bg-primary hover:text-white">3</button>
                        <button className="px-3 py-1 border border-primary rounded-md mx-1 text-[#828282] hover:bg-primary hover:text-white">4</button>
                        <button className="px-3 py-1 text-sm text-[#828282]  hover:text-primary">Next</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default UserTable
