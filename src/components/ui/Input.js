"use client";
import { cn } from '@/Utilities/cn'
import { cva } from 'class-variance-authority'
import React from 'react'

export default function Input({children,variant, invalidmessage,type, className, ...attributes}) {
    return (
        <>
            <input type={type} {...attributes} className={cn(inputVariants({variant, type, className}))} />
            {invalidmessage && <span className="w-full my-1 hidden peer-invalid:block text-danger text-sm">
                {invalidmessage}
            </span>}
        </>
    )
}

const inputVariants = cva("w-full peer focus:outline-none",{
    variants:{
        variant:{
            afro:"font-jakarta text-base bg-white text-black rounded-md border-2 border-[rgba(0, 0, 0, 0.05)] px-4 py-2 placeholder-shown:text-neutral4"
        },
        type:{
            "email": "focus:border-primary focus:border-2",
            "text": "focus:border-primary focus:border-2",
            "password": "focus:border-primary focus:border-2",
            "number": "focus:border-primary focus:border-2 disable-scroller",
            "date": "focus:border-primary focus:border-2 disable-scroller",
            "time": "focus:border-primary focus:border-2 disable-scroller",
        }
    },
    defaultVariants:{
        variant: "afro",
        type: "email"
    }
})