export const THEME_COLOR = "#121621"; // rgb(18, 22, 33) // hsl(224, 29%, 10%)

// export const S3_BUCKET_URL =
//   "https://s3.us-west-1.amazonaws.com/dallinromney.com/";

// export const s3FileUrl = (file: string) => `${S3_BUCKET_URL}${file}`;

// export const RESUME_LINK = s3FileUrl("resume-dallin-romney.pdf");

export const RESUME_LINK = "/resume.pdf";

export const CONTACT_LINK = "mailto:dallin@thunklab.com";

export interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  subtitle?: string;
  highlights?: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
  {
    title: "Continue.dev",
    description:
      "The leading open-source AI coding assistant with 31k+ GitHub stars",
    image: "continue_agent.gif",
    link: "https://continue.dev",
    highlights: [
      "2,500+ commits across core, GUI, CLI, and IDE extensions",
      "Built agentic coding tools: Edit, Create, Grep, Glob, and LS",
      "Owned the CLI product — OAuth, headless mode, and agent support",
      "Shipped MCP Apps and maintained 10+ LLM provider integrations",
    ],
  },
  {
    title: "MapThis.AI",
    description:
      "AI map generation tools to auto-generate, edit, and serve maps from web content",
    image: "map_this.webp",
    link: "https://mapthis.ai",
  },
  {
    title: "OutbackFriends.com",
    description: "Social platform for the outback community",
    image: "outback_friends.webp",
    link: "https://outbackfriends.com",
  },
  {
    title: "MusicStreet.xyz",
    description: "Learning Tracking app with NFC-tap functionality",
    image: "music_street.webp",
    link: "https://musicstreet.xyz",
  },
  {
    title: "Gear Generation",
    description:
      "Dynamic, animatable spur gear/gear set svg generation packages",
    image: "gear_gen.webp",
    link: "https://github.com/RomneyDa/react-gear-gen",
  },

  {
    title: "rpg-gpt.com",
    description:
      "Text-based AI role-playing game built around OpenAI",
    image: "rpg_gpt.webp",
    link: "https://rpg-gpt.com",
  },
  // {
  //     title: "Popchew",
  //     description: "Online ordering system and mobile application for virtual food brand platform. Typescript, React Native iOS/Android, Python, Animations, AWS, Analytics",
  //     image: "portfolio/popchew.png",
  //     link: "https://popchew.com"
  // }
];
