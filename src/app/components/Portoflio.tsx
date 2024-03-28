import React from 'react'
import { s3FileUrl } from '../content'
import Link from 'next/link'

interface PortfolioItemProps {
    title: string
    description: string
    image: string
    link: string
}

const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
    {
        title: "MapThis.AI",
        description: "AI map generation tools to auto-generate, edit, and serve maps from web content",
        image: "portfolio/mapthis.png",
        link: "https://mapthis.ai"
    },
    {
        title: "Gear Generation",
        description: "Dynamic, animatable spur gear/gear set svg generation packages (used on this site)",
        image: "portfolio/gears.png",
        link: "https://github.com/RomneyDa/react-gear-gen"
    },
    {
        title: "rpgGPT",
        description: "Frontend for text-based AI role-playing game built around OpenAI. Company raised 250k+",
        image: "portfolio/rpggpt.png",
        link: "https://rpg-gpt.com"
    },
    {
        title: "Popchew",
        description: "Online ordering system and mobile application for virtual food brand platform. Typescript, React Native iOS/Android, Python, Animations, AWS, Analytics",
        image: "portfolio/popchew.png",
        link: "https://popchew.com"
    }
]
const PortfolioItem = ({ title, description, image, link }: PortfolioItemProps) => {
    return (
        <Link
            target='_blank'
            href={link}
            className="w-full aspect-[1.2] relative overflow-hidden rounded-2xl bg-background hover:scale-105 transition-all duration-500 cursor-pointer">
            <img src={s3FileUrl(image)} alt={title} className="object-cover w-full h-full" />
            <div className="p-4 absolute bottom-0 left-0 w-full max-h-1/2 bg-background/85">
                <h3 className="text-lg font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )

}
const Portoflio = () => {
    return (
        <div className="w-[90%] max-w-[350px] sm:max-w-[800px] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Portoflio