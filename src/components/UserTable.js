import React from 'react'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { EllipsisVertical } from 'lucide-react'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
// import { capitalizeFirstLetter } from '@/app/helpers/allFunctions'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const UserTable = ({ data }) => {
    return (
        <div className='pt-11'>
            <Table>
                <TableHeader>
                    <TableRow className='bg-lightPrimary hover:bg-lightPrimary'>
                        <TableHead className="text-black font-normal font-manrope text-sm text-left">Feature ID</TableHead>
                        <TableHead className="text-black font-normal font-manrope text-sm text-left">Feature Name & Logo</TableHead>
                        <TableHead className="text-black font-normal font-manrope text-sm text-left">Added On</TableHead>
                        <TableHead className="text-black font-normal font-manrope text-sm text-left"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id} className='bg-white hover:bg-white cursor-pointer'>
                            <TableCell>
                                <span className="text-black font-normal font-manrope text-sm text-left truncate...">{item.id}</span>
                            </TableCell>
                            <TableCell className=" flex items-center text-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path d="M30.3756 13.8585C30.3585 13.7792 30.3334 13.7018 30.3006 13.6275L27.4671 7.0155C26.8139 5.48775 25.2246 4.5 23.4164 4.5H8.58287C6.77612 4.5 5.18537 5.48775 4.53287 7.0155L1.69637 13.6275C1.6319 13.7767 1.59897 13.9375 1.59962 14.1V27.3C1.59962 27.6183 1.72605 27.9235 1.95109 28.1485C2.17613 28.3736 2.48136 28.5 2.79962 28.5H5.19962C5.51788 28.5 5.8231 28.3736 6.04815 28.1485C6.27319 27.9235 6.39962 27.6183 6.39962 27.3V26.1H25.5996V27.3C25.5996 27.6183 25.726 27.9235 25.9511 28.1485C26.1761 28.3736 26.4814 28.5 26.7996 28.5H29.1996C29.5179 28.5 29.8231 28.3736 30.0481 28.1485C30.2732 27.9235 30.3996 27.6183 30.3996 27.3V14.1C30.3997 14.0189 30.3917 13.938 30.3756 13.8585ZM7.59962 21.3C7.12494 21.3 6.66093 21.1592 6.26625 20.8955C5.87157 20.6318 5.56396 20.257 5.38231 19.8184C5.20066 19.3799 5.15313 18.8973 5.24573 18.4318C5.33834 17.9662 5.56692 17.5386 5.90256 17.2029C6.23821 16.8673 6.66585 16.6387 7.1314 16.5461C7.59696 16.4535 8.07952 16.501 8.51806 16.6827C8.9566 16.8643 9.33143 17.172 9.59515 17.5666C9.85886 17.9613 9.99962 18.4253 9.99962 18.9C9.99962 19.5365 9.74676 20.147 9.29668 20.5971C8.84659 21.0471 8.23614 21.3 7.59962 21.3ZM24.3996 21.3C23.9249 21.3 23.4609 21.1592 23.0662 20.8955C22.6716 20.6318 22.364 20.257 22.1823 19.8184C22.0007 19.3799 21.9531 18.8973 22.0457 18.4318C22.1383 17.9662 22.3669 17.5386 22.7026 17.2029C23.0382 16.8673 23.4658 16.6387 23.9314 16.5461C24.397 16.4535 24.8795 16.501 25.3181 16.6827C25.7566 16.8643 26.1314 17.172 26.3951 17.5666C26.6589 17.9613 26.7996 18.4253 26.7996 18.9C26.7996 19.5365 26.5468 20.147 26.0967 20.5971C25.6466 21.0471 25.0361 21.3 24.3996 21.3ZM4.61912 12.9L6.73637 7.96125C7.00787 7.32675 7.74962 6.9 8.58287 6.9H23.4164C24.2489 6.9 24.9914 7.32675 25.2629 7.96125L27.3801 12.9H4.61912Z" fill="#373737" />
                                </svg>
                                <span className="text-black font-medium font-manrope text-sm text-left">{item.feature_name}</span>
                            </TableCell>

                            <TableCell>
                                <span className="text-black font-normal font-manrope text-sm text-left">
                                    {item['added on']}
                                </span>
                            </TableCell>
                            <TableCell className=''>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className='outline-none'>
                                        <EllipsisVertical />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup>
                                           
                                            <DropdownMenuItem className='font-manrope font-normal text-sm text-primary hover:text-primary'>
                                                Delete Feature
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default UserTable
