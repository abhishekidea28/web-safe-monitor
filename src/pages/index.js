import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Password from '@/components/ui/Password';

import Link from 'next/link';



export default function Home() {
    return (
        <div className='w-full h-screen bg-primary flex items-center justify-center'>
        
            <div className='w-full max-w-[496px] bg-white  rounded-xl px-8 py-8'>
                <div className='w-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="89" viewBox="0 0 88 89" fill="none">
                    <path d="M71.2549 0.505494H36.6438C36.6438 0.505494 31.468 0.105438 25.9048 6.13295L16.7591 15.3698H71.2637V0.505494" fill="#4288F5" />
                    <path d="M0.83564 70.4175V35.4615C0.83564 35.4615 0.439531 30.2341 6.40758 24.6155L15.5533 15.3787V70.4264H0.83564" fill="#4288F5" />
                    <path d="M16.7503 88.491H51.3615C51.3615 88.491 56.5373 88.8911 62.1004 82.8636L71.2462 73.6267H16.7503V88.4999" fill="#4288F5" />
                    <path d="M87.161 18.5881V53.5441C87.161 53.5441 87.5571 58.7715 81.5891 64.3901L72.4434 73.6269V18.5881H87.1698" fill="#4288F5" />
                    <path d="M44.0028 58.7627C51.8005 58.7627 58.1219 52.3784 58.1219 44.5029C58.1219 36.6275 51.8005 30.2432 44.0028 30.2432C36.205 30.2432 29.8837 36.6275 29.8837 44.5029C29.8837 52.3784 36.205 58.7627 44.0028 58.7627Z" fill="#4288F5" />
                </svg>
                </div>
               
                <form className='mt-6'>
                    <>
                        <label className="flex flex-wrap">
                            <span className="w-full text-sm font-medium mb-1">Email</span>
                            <Input className='bg-[#E9ECEC] placeholder:text-sm placeholder:text-[#606B6C] rounded-[12px]' type="email" placeholder="Enter Email Id" invalidmessage="Please enter a valid email." />
                        </label>

                        <label className="flex flex-wrap mt-4">
                            <span className="w-full text-sm font-medium mb-1">Password</span>
                            <Password className='bg-[#E9ECEC] placeholder:text-sm placeholder:text-[#606B6C] rounded-[12px]' placeholder="at least 8 characteres" ></Password>
                        </label>
                    </>

                    <div className='w-full flex flex-wrap items-end justify-between px-1'>
                        {/* {method? <Link className='text-primary3 text-sm font-medium py-4' href="#" onClick={()=> setMethod(false)}>Use phone instead</Link>: <Link className='text-primary3 text-sm font-medium py-4' href="#" onClick={()=> setMethod(true)}>Use email instead</Link>} */}
                        <Link className='ml-auto text-neutral2 text-sm font-medium py-4 ' href="/forgot-password">Forgot Password ?</Link>
                    </div>

                    <Button type="submit" variant="primary" className="mt-1 mb-5" >{"Login"}</Button>

                    {/* <div className='mt-6 flex items-center justify-center border-t-2 py-4'>
                        <span className='text-sm text-[rgba(0,0,0,0.40)] font-semibold'>Create an account?</span>
                    </div>
                    <div className='w-full text-center'>
                        <Link className='text-primary3 text-primary font-medium' href="/signup">Sign Up</Link>
                    </div> */}
                </form>
            </div>
        </div>
    )
}
