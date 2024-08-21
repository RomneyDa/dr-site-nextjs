
export const THEME_COLOR = "#121621" // rgb(18, 22, 33) // hsl(224, 29%, 10%)

export const S3_BUCKET_URL = "https://s3.us-west-1.amazonaws.com/dallinromney.com/"

export const s3FileUrl = (file: string) => `${S3_BUCKET_URL}${file}`

export const RESUME_LINK = s3FileUrl("resume-dallin-romney.pdf")

export const CONTACT_LINK = "mailto:dallin@thunklab.com"

export interface PortfolioItemProps {
    title: string
    description: string
    image: string
    link: string
}

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
    {
        title: "MapThis.AI",
        description: "AI map generation tools to auto-generate, edit, and serve maps from web content",
        image: "portfolio/mapthis.png",
        link: "https://mapthis.ai"
    },
    {
        title: "OutbackFriends.com",
        description: "Social network of friends that help each other out",
        image: "portfolio/outback-friends.png",
        link: "https://outbackfriends.com"
    },
    {
        title: "MusicStreet.xyz",
        description: "Learning Tracking app with NFC-tap functionality",
        image: "portfolio/music-street.png",
        link: "https://musicstreet.xyz"
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