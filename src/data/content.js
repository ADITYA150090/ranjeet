import vid2 from "../assets/videos/vid2.mp4";
import vid3 from "../assets/videos/vid3.mp4";
import vid4 from "../assets/videos/vid4.mp4";
import vid5 from "../assets/videos/vid5.mp4";
import vid6 from "../assets/videos/vid6.mp4";
import vid7 from "../assets/videos/vid7.mp4";
import vid8 from "../assets/videos/vid8.mp4";
import vid9 from "../assets/videos/vid9.mp4";
import vid10 from "../assets/videos/vid10.mp4";


import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo2.png";
import logo3 from "../assets/images/logos/logo3.png";
import logo4 from "../assets/images/logos/logo4.jpeg";
import logo5 from "../assets/images/logos/logo5.jpg";
import logo6 from "../assets/images/logos/logo6.jpeg";
import logo7 from "../assets/images/logos/logo7.png";
import logo8 from "../assets/images/logos/logo8.jpeg";
// import logo9 from "../assets/images/logos/logo9.jpeg";
import logo10 from "../assets/images/logos/logo10.jpeg";
import logo11 from "../assets/images/logos/logo11.png";
import logo12 from "../assets/images/logos/logo12.png";
import logo13 from "../assets/images/logos/logo13.png";
import logo14 from "../assets/images/logos/logo14.png";


const videos = [vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10];

export const reels = videos.map((video, index) => ({
    id: index + 1,
    href: "https://www.instagram.com/ranx.ai/",
    bg: "linear-gradient(160deg, rgb(28,28,28) 0%, rgb(10,10,10) 100%)",
    video,
    likes: "1M",
    comments: "55K",
    shares: "20k",
    text: `Project ${index + 1}`,
    audio: "Selected Work",
    platform: "PORTFOLIO",
    views: "Watch Project"
}));
export const partners = [{
        name: "RunwayML",
        href: "",
        img: logo1,
    },
    {
        name: "Kling AI",
        href: "",
        img: logo2,
    },
    {
        name: "Higgsfield",
        href: "#",
        img: logo3,
    },
    {
        name: "Midjourney",
        href: "",
        img: logo4,
    },
    {
        name: "HeyGen",
        href: "",
        img: logo5,
    },
    {
        name: "ElevenLabs",
        href: "",
        img: logo6,
    },
    {
        name: "Adobe Premiere Pro",
        href: "",
        img: logo7,
    },
    {
        name: "After Effects",
        href: "",
        img: logo8,
    },
    // {
    //     name: "Adobe",
    //     href: "https://www.adobe.com",
    //     img: logo9,
    // },
    {
        name: "Luma AI",
        href: "#",
        img: logo10,
    },
    {
        name: "Magnific AI",
        href: "#",
        img: logo11,
    },
    {
        name: "ImagineArt",
        href: "#",
        img: logo12,
    },
    {
        name: "InVideo AI",
        href: "#",
        img: logo13,
    },
    {
        name: "OpenCreator",
        href: "#",
        img: logo14,
    }
];

export const testimonials = [{
        quote: "AI is the tool. Storytelling is the craft. I do both.",
        who: "Ranjeet Tekam",
        what: "AI CONTENT CREATOR & VIDEO EDITOR"
    },
    {
        quote: "360+ pieces of content created across AI ads, product visuals, reels, and long-form video.",
        who: "Experience",
        what: "CONTENT PRODUCTION"
    }
];

export const steps = [{
        label: "Brief",
        tag: "STEP 01",
        sub: "Discovery",
        desc: "You share the idea, goal, and vibe. I ask the right questions so we're aligned from day one.",
        href: "#contact"
    },
    {
        label: "Concept",
        tag: "STEP 02",
        sub: "Planning",
        desc: "I map out the visual direction, tools, and style before a single frame is made.",
        href: "#contact"
    },
    {
        label: "Create",
        tag: "STEP 03",
        sub: "Production",
        desc: "I generate and edit the video while keeping you updated throughout the process.",
        href: "#contact"
    },
    {
        label: "Deliver",
        tag: "STEP 04",
        sub: "Launch",
        desc: "You receive optimized files ready for Instagram, YouTube, TikTok, and paid ads.",
        href: "#contact"
    }
];

export const stats = [{
        val: "360+",
        label: "VIDEOS CREATED"
    },
    {
        val: "50+",
        label: "CREATOR ADS"
    },
    {
        val: "200+",
        label: "SHORT-FORM REELS"
    },
    {
        val: "13+",
        label: "AI TOOLS MASTERED"
    }
];