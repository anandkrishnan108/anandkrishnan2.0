import {
  AcademicCapIcon,
  /*ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,*/
  FlagIcon,
  MapIcon,
  SparklesIcon,
  //TvIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.jpg';
import bpp_logo from '../images/portfolio/bpp_logo.png';
import chicago from '../images/portfolio/chicago.jpg';
import chp_logo from '../images/portfolio/chp.png';
import cs124 from '../images/portfolio/cs124.jpg';
import nasa_logo from '../images/portfolio/nasa.png';
import srh_logo from '../images/portfolio/srh.webp';
import t20_worldcup_2022 from '../images/portfolio/t20.png';
import veganme_logo from '../images/portfolio/veganme.jpg';
import profilepic from '../images/profilepic.png';
import {
  About,
  /*ContactSection,
  ContactType,*/
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
  //TravelSection,
} from './dataDef';
//import { getIconCode } from 'next/dist/compiled/@vercel/og/emoji';
//import Icon from '../components/Icon/Icon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Anand Krishnan',
  description: "Anand Krishnan's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Travels: 'travels',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anand Krishnan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an undergraduate<strong className="text-stone-100"> computer science</strong> student currently studying
        at the<strong className="text-stone-100"> University of Illinois at Urbana-Champaign</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me <strong className="text-stone-100">hiking</strong> and exploring <strong className="text-stone-100">nature</strong>, watching the latest <strong className="text-stone-100">cricket</strong> game, or playing <strong className="text-stone-100">soccer</strong>.
      </p>
    </>
  ),
  actions: [],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I was introduced to computer science in my freshman year of high school, and it immediately became my biggest academic passion. Since then, through a combination of personal projects, classes, and internships, I have developed this passion into a career, while retaining the wonder and excitement I first felt when learning the possibilities of what my code and imagination could accomplish together. Check out some of the experiences that were crucial in my ongoing software development journey below!`,
  aboutItems: [
    {label: 'Location', text: 'Illinois, USA', Icon: MapIcon},
    {label: 'Interests', text: 'Cricket, Soccer, Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Illinois at Urbana-Champaign', Icon: AcademicCapIcon},
    {label: 'Been to', text: 'India, Canada, Australia, New Zealand', Icon: FlagIcon},
    /*{label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},*/
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  /*{
    name: 'OOP Languages',
    skills: [
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 6,
      },
      {
        name: 'Spanish',
        level: 5,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Teamwork',
        level: 10,
      },
      {
        name: 'Problem-solving',
        level: 9,
      },
      {
        name: 'Adaptability',
        level: 8,
      },
    ],
  },
  */
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'BikeNest',
    description: 'Android app visualizing bicycle parking locations throghout Chicago.',
    url: 'https://github.com/anandkrishnan108/bikenest',
    image: bpp_logo,
  },
  {
    title: 'Campus Honors Program',
    description: 'Website Admin of the UIUC Campus Honors Program website.',
    url: 'https://honors.illinois.edu/',
    image: chp_logo,
  },
  {
    title: 'NASA Program Insights',
    description: 'A package for NASA personnel to munge, generate simple statistics, visualizations, and summaries of NASA Applied Science Program data.',
    url: 'https://github.com/anandkrishnan108/nasaprograminsights',
    image: nasa_logo,
  },
  {
    title: 'UIUC Landmarks',
    description: 'Demo video showing my CS124 project: an Android app that displays UIUC landmarks.',
    url: 'https://www.youtube.com/watch?v=OEzaNsuPNds',
    image: cs124,
  },
  {
    title: 'T20 Cricket World Cup Team of the Tournament Dashboard',
    description: 'Cleaned, filtered, and sorted ESPNCricinfo match data using R to rank 200 players\' performance across various key metrics, such as batting average and bowling economy, from the 2022 World Cup.',
    url: 'https://rpubs.com/akrishx/t20wc',
    image: t20_worldcup_2022,
  },
  {
    title: 'VeganMe',
    description: 'Founded VeganMe, a website to help vegans meet their recommended nutrient requirements. 1st place at 2019 Camp Khan programming competition.',
    url: 'https://vegan-me.github.io/vegan-me/',
    image: veganme_logo,
  },
  {
    title: 'Firearm-purchase law research',
    description: 'Researched the relationship between gun homicides in the South Side of Chicago and firearm-purchase laws.',
    url: 'https://emerginginvestigators.org/articles/firearm-purchase-laws-that-limit-the-number-of-guns-on-the-market-reduce-gun-homicides-in-the-south-side-of-chicago',
    image: chicago,
  },
  {
    title: 'Starved Rock Hikers',
    description: 'Volunteer website administrator at SRH, a nonprofit increasing awareness for Starved Rock State Park.',
    url: 'https://www.starvedrockhikers.com/',
    image: srh_logo,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2022 - December 2025',
    location: 'University of Illinois at Urbana-Champaign',
    title: 'Bachelor of Science in Computer Science',
    content: <div>
      <p>Relevant coursework: Data Structures & Algorithms, Computer Architecture, Linear Algebra
    <br/>Honors: Omron National Merit Scholarship Winner (NMSC), Campus Honors Program</p>
    </div>
  },
  {
    date: 'February 2024 - June 2024',
    location: 'University of Melbourne',
    title: 'Study Abroad Exchange Program',
    content: <p>Relevant coursework: Database Systems, Declarative Programming, Software Modelling and Design
    <br/>Cool places I visited: Great Ocean Road, MCG, Botanical Gardens, Yarra River Trail, St Kilda</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2022 - Present',
    location: 'Crowd Dynamics Lab',
    title: 'Researcher',
    content: (
      <p>
        •   Conducting a study to audit online print and e-book markets for price fairness against browsing
profiles defined by 8 unique race-and-gender combinations.<br/>
        •   Scraped product information and price data for 280,000+ books across the specified browsing profiles by writing Selenium Python and SQL scripts.<br/>
        • Performed Bayesian analysis on the collected data to determine whether price discrimination occurred.
      </p>
    ),
  },
  {
    date: 'June 2023 - December 2023',
    location: 'National Aeronautics and Space Administration (NASA)',
    title: 'Software Engineer',
    content: (
      <p>
        • Created an application in R Shiny summarizing 7,000+ NASA Applied Sciences investments to provide
NASA program managers with a comprehensive tool set to assess projects’ success and diversity.<br/>
        • Summarized investments using metrics such as dollar amount invested, geographic location, and reinvestment rate in accordance with a data-driven approach and the FAIR principles.<br/>
        • Presented the application at NASA Headquarters to Applied Sciences Program leadership.<br/>
      </p>
    ),
  },
  {
    date: 'September 2022 - December 2023',
    location: 'University of Illinois at Urbana-Champaign Campus Honors Program',
    title: 'Website Administrator',
    content: (
      <p>
        •	Spearheaded the design and development of the front-end content for the CHP website, utilizing WordPress to create an engaging and user-friendly online platform.<br/>
        •	Leveraged PHP and SQL to maintain, optimize, and secure the CHP database system, ensuring data integrity and accessibility for CHP student and faculty records.<br/>
        •	Automated the time-consuming general education credit petition process using Python.
      </p>
    ),
  },
];


/**
 * Travel section

export const travel:TravelSection = {
  imageSrc: testimonialImage,
  travels: [
    {
      name: 'Shrine of Remembrance',
      text: 'hello world',
      image: shrine,
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};
*/

/**
 * Contact section
 */

/*export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Social media handles:',
  items: [
    {
      type: ContactType.Email,
      text: 'akrishx@gmail.com',
      href: 'mailto:akrishx@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Schaumburg, Illinois',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@akrishx',
      href: 'https://www.instagram.com/akrishx/',
    },
    {
      type: ContactType.Github,
      text: 'anandkrishnan108',
      href: 'https://github.com/anandkrishnan108',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Anand Krishnan',
      href: 'https://github.com/anand-krishnan',
    }
  ],
};*/

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/anandkrishnan108'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anand-krishnan/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/akrishx/'}
];

