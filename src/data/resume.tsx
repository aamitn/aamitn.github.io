import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amit Nandi",
  initials: "AKN",
  url: "https://aamitn.github.io",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Data Analyst, Software Developer and Open Source Contributor. I love solving porblems at scale. Actively respond to queries on   [Matrix](https://matrix.to/#/@bigwiz:synapse.bitmutex.com). ",
  summary: "I initially started as a data analytics professional with a solid background in operational risk analysis and due diligence. My 4+ years of experience has equipped me with the necessary expertise to navigate complex risk landscapes effectively. I have also recently started to maneuver into the software engineering landscape and had built quite a few hobby projects all this while.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "Spring",
    "Hibernate",
    "JPA",
    "Jakarta EE",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amitnandileo@gmail.com",
    tel: "+91 9038556097",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aamitn",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aamitn",
        icon: Icons.linkedin,

        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/users/146662188122243072",
        icon: Icons.discord,

        navbar: true,
      },
      Matrix: {
        name: "Matrix",
        url: "https://matrix.to/#/@bigwiz:synapse.bitmutex.com",
        icon: Icons.matrix,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bandana Digitals",
      href: "https://www.crunchbase.com/organization/bandana-digitals",
      badges: [],
      location: "Bengaluru, India",
      title: "Systems Engineer",
      logoUrl: "/bd.png",
      start: "December 2025",
      end: "Present",
      description:
        "Architecting a new greefield project based on template based report egnine to support enterprise grade high volume template-based report generation at scale",
    },

    {
      company: "Amazon",
      href: "https://amazon.com",
      badges: [],
      location: "Remote",
      title: "Data Analyst",
      logoUrl: "/amazon.jpg",
      start: "February 2021",
      end: "September 2024",
      description: "At Amazon Payments Europe Marketplaces, I played a key role in mitigating financial risks by leading the review of account rings comprising over 1,000 customers. This initiative significantly reduced potential Money Laundering (ML) and Terrorist Financing (TF) risks while driving amendments to internal SOPs to strengthen compliance beyond anti-money laundering measures. I also optimized a bulk customer information launcher application, expanding its functionality across new marketplaces and entities, which led to a 5% reduction in average handling time (AHT) for customer investigations, enhancing operational efficiency. Further advancing automation, I designed and integrated an automated translation system within the negative news screening process, leveraging AWS Machine Translation API. This innovation reduced AHT by 20% and minimized audit-related issues tied to negative news screenings. Additionally, I led the development and deployment of a tag replacement tool for Amazon Payments UK, streamlining the SAR (Suspicious Activity Report) filing process to improve accuracy and regulatory compliance. To enhance fraud detection and compliance monitoring, I optimized complex SQL queries and ETL pipelines tailored for the Singapore market. These enhancements improved rule-triggering efficiency, significantly increasing data processing speed and accuracy. As a result, fraud detection systems executed compliance rules faster and with greater reliability, ensuring alignment with stringent local regulatory standards.",
    },

    {
      company: "Smartpower Automation",
      badges: [],
      href: "https://smartpower.co.in/",
      location: "Kolkata, India",
      title: "Engineering Intern",
      logoUrl: "/sp.jpg",
      start: "January 2020",
      end: "April 2021",
      description: "Led the development of a web application with integrated eCommerce capabilities to facilitate the launch of the uPVC Tools product line. The solution was architected using Nginx as the web server, MongoDB for scalable NoSQL data storage, and PHP as the backend, ensuring robustness and efficiency. Leveraging CodeIgniter and OpenCart, I streamlined development, enabling seamless product management and transaction handling. Additionally, I enhanced an existing NoSQL wrapper for PHP, optimizing its functionality and seamlessly integrating it into the project to improve database interactions and overall system performance."
      },

  ],
  education: [
    {
      school: "Birla Institute of Technology Mesra",
      href: "https://www.bitmesra.ac.in/",
      degree: "Master's of Technology(M.Tech) in Production Engineering",
      logoUrl: "/bitm.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Heritage Institute of Technology Kolkata",
      href: "https://www.heritageit.edu/",
      degree: "Bachelor's of Technology(B.Tech) in Instrumentation Engineering",
      logoUrl: "/hitk.png",
      start: "2014",
      end: "2018",
    },
    {
      school: "Institution of Engineers  India",
      href: "https://iei.org",
      degree: "Associate Member",
      logoUrl: "/iei.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Sim C",
      href: "https://aamitn.github.io/simc",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This is a web based circuit cimulator , which was originally written in Java and runs in modern browser engines using Google web Toolkit(GWT)",
      technologies: [
        "Java",
        "Javascript",
        "GWT",
        "HTML5",
        "AWT GUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://aamitn.github.io/simc/circuitjs.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aamitn/simc",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/simc.png",
      video: "",
    },
    {
      title: "Pulsebridge",
      href: "https://github.com/aamitn/pulsebridge-gateway/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "PulseBridge Gateway Server is a powerful SMS Gateway software that allows you to send SMS messages seamlessly. Whether you're looking to integrate SMS functionality into your web applications or send messages from a centralized server, PulseBridge Gateway makes the process efficient and straightforward along with mobile client application",
      technologies: [
        "PHP",
        "Java",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aamitn/pulsebridge-app/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aamitn/pulsebridge-gateway/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cover.png",
      video: "",
    },
    {
      title: "TUSC-URL Shortener",
      href: "https://github.com/aamitn/URLShortener/",
      dates: "April 2023 - September 2023",
      active: true,
      description:" A powerful and scalable URL shortener with integrated bio pages built using Spring Boot. ",
      technologies: [
        "Java",
        "Thymeleaf",
        "Javascript",
        "Spring Boot",
        "MySQL",
        "React",
        "Tailwind",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aamitn/URLShortener",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tusc.png",
      video: "",
    },
    {
      title: "TrakRok",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:" Open Source GPS tracking hardware code for Arduino and middleware for Traccar tracking software",
      technologies: [
        "PHP",
        "MySQL",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },

    {
      title: "Tagger",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:" Tagger is a versatile Java application designed to simplify the process of replacing tags within text content. It provides a user-friendly GUI that allows users to interactively replace tag in a structured manner.",
      technologies: [
        "JAVA",
        "AWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cover.png",
      video:
        "",
    },

    {
      title: "NDC-NewDocGen",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A template-based report generation engine that supports vectors, repeatable content and high-availability, high-volume processing capability.",
      technologies: [
        "Java",
        "JPA",
        "Spring",
        "Apache POI",
        "Postgres",
        "React",
        "PDFBox",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cover.png",
      video:
        "",
    },


  ],
  hackathons: [
    {
      title: "A Real-time Autonomous Face-tracking System Based On A 2-dof Articulated Manipulator Platform Using Extended Kalman Filter ",
      dates: "July ’21",
      location: "Acta Mechanica - Springer",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://doi.org/nbng",
        },
      ],
    },

    {
      title: "Design & Development of a Web-Based Robotics Simulator ",
      dates: "Oct ’20",
      location: "Elsevier",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "doi",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://doi.org/nbnh",
        },
      ],
    },
    {
      title: "Design & Implementation of an IoT Based 3-Axis CNC VMC",
      dates: "September 14th - 16th, 2018",
      location: "IJSER",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "doi",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://rb.gy/msw8g1",
        },
      ],
    },
  ],
} as const;
