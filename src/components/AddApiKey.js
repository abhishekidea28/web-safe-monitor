import React from 'react'
import Button from './ui/Button'
import Input from './ui/Input'
import Password from './ui/Password'

const AddApiKey = () => {
  return (
    <>
      <div className='mt-0 flex items-center justify-between'>
        <h3 className="text-[20px] font-semibold mb-4">API Key</h3>
        <Button className='w-40 text-white text-sm flex items-center justify-center rounded-[4px]' >

          Generate API Key
        </Button>
      </div>
      <form className='mt-4 w-1/3'>
                    
                        <label className="flex flex-wrap">
                            <span className="w-full text-sm font-semibold py-2">Username</span>
                            <Input className='bg-[#E9ECEC] placeholder:text-sm placeholder:text-[#606B6C] rounded-[12px] mb-4' type="email" placeholder="Enter Username" invalidmessage="Please enter a valid email." />
                        </label>

                        <label className="flex flex-wrap">
                            <span className="w-full text-sm font-semibold py-2">Email Id</span>
                            <Input className='bg-[#E9ECEC] placeholder:text-sm placeholder:text-[#606B6C] rounded-[12px] mb-4' type="email" placeholder="Enter Email Id" invalidmessage="Please enter a valid email." />
                        </label>
                        <label className="flex flex-wrap">
                            <span className="w-full text-sm font-semibold py-2">API Key Expiry Date</span>
                            <Input className='bg-[#E9ECEC] placeholder:text-sm placeholder:text-[#606B6C] rounded-[12px] '  type="email" placeholder="Enter Date" invalidmessage="Please enter a valid email." />
                        </label>
                    

                  


                   
                </form>
    </>
  )
}

export default AddApiKey