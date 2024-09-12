import Image from 'next/image'
import React from 'react'

const Logo = ({className}) => {
  return (
    <Image src={"/images/logo.svg"} width={150} height={100}  />
  )
}

export default Logo