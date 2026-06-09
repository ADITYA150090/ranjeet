import vid2 from "../assets/videos/vid2.mp4";
import vid3 from "../assets/videos/vid3.mp4";
import vid4 from "../assets/videos/vid4.mp4";
import vid5 from "../assets/videos/vid5.mp4";
import vid6 from "../assets/videos/vid6.mp4";
import vid7 from "../assets/videos/vid7.mp4";
import vid8 from "../assets/videos/vid8.mp4";
import vid9 from "../assets/videos/vid9.mp4";
import vid10 from "../assets/videos/vid10.mp4";
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
        href: "https://runwayml.com",
        img: "/logos/runway.png"
    },
    {
        name: "Kling AI",
        href: "https://www.klingai.com",
        img: "/logos/kling.png"
    },
    {
        name: "Higgsfield",
        href: "#",
        img: ""
    },
    {
        name: "Midjourney",
        href: "https://www.midjourney.com",
        img: "/logos/midjourney.png"
    },
    {
        name: "HeyGen",
        href: "https://www.heygen.com",
        img: "/logos/heygen.png"
    },
    {
        name: "ElevenLabs",
        href: "https://elevenlabs.io",
        img: "/logos/elevenlabs.png"
    },
    {
        name: "Adobe Premiere Pro",
        href: "https://www.adobe.com",
        img: "/logos/premiere.png"
    },
    {
        name: "After Effects",
        href: "https://www.adobe.com",
        img: "/logos/aftereffects.png"
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