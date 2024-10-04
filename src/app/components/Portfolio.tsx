"use client"
import React from 'react'
import { PORTFOLIO_ITEMS, PortfolioItemProps, s3FileUrl } from '../content'
import Link from 'next/link'
import Image from 'next/image'

const PortfolioItem = ({ title, description, image, link }: PortfolioItemProps) => {
    return (
        <Link
            target='_blank'
            href={link}
            className="w-full aspect-[1.2] relative overflow-hidden rounded-2xl bg-background hover:scale-105 border hover:ring-2 ring-ring transition-all duration-500 cursor-pointer"
        >
            <Image width={350} height={250} src={s3FileUrl(image)} alt={title} className="object-cover w-full h-full" />
            <div className="p-4 absolute bottom-0 left-0 w-full max-h-1/2 bg-background/85">
                <h3 className="text-lg font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )

}
const Portoflio = () => {
    return (
        <div className="w-[90%] max-w-[350px] sm:max-w-[800px] lg:max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Portoflio