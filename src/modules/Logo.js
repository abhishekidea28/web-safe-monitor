import Image from 'next/image'
import React from 'react'

const Logo = ({className}) => {
  return (
    <Image src={"/images/logo.svg"} width={180} height={130}  />
  )
}

export default Logo