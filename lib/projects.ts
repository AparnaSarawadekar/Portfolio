import logos from "./logos";

type ProjectName =
  | "Streamflix"
  | "VideoSceneSearcher"
  | "CyclingSF"
  | "LicensePlateIdentification"
  | "EnchantedWoods";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live?: string; publication?: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  Streamflix: {
    title: "Streamflix",
    description: [
      "StreamFlix is a movie streaming entertainment web app, offering a Netflix-like experience. ", 
      "Users can set up personalized profiles, enjoy movies and trending series, and save their favorites to watch later.",
    ],
    images: {
      webm: "/project/streamflix/StreamFlix.webm",
      mp4: "/project/streamflix/StreamFlix.mp4",
      poster: "/project/streamflix/StreamFlix.png",
      vidHeight: 676,
      vidWidth: 963,
    },
    stack: [
      //logos.trpc,
      logos.nextjs,
      logos.react,
      logos.mongodb,
      // logos.graphql,
      // logos.typescript,
      logos.nodejs,
      //logos.reactQuery,
      // logos.materialui,
    ],
    links: {
      live: "https://aparna-project1.vercel.app/",
      github: "https://github.com/AparnaSarawadekar/netflix-clone",
    },
  },

  VideoSceneSearcher: {
    title: "Video Scene Searcher",
    description: [
      "A video scene searching system automatically finds the required scene from a video by taking the textual scene description as input and matching it with each scene from the video to find a scene that has maximum similarity.",
      "First, the video gets pre-processed in which a CNN-Transformer hybrid model generates the scene descriptions of video frames in fixed intervals of time. These descriptions are compared with the user-given description to find the best matching scene.",
      "The algorithm has been extended to implement image searching by providing an image description to the model.",
      "A custom evaluation metric integrates the scoring methodology of two evaluation metrics to accurately find out the performance of the model.",
    ],
    images: {
      main: {
        link: "/project/VideoSceneSearcher/VideoSceneSearcher.png",
        width: 1903,
        height: 894,
      },
    },
    stack: [
      logos.opencv,
      logos.tensorflow,
      logos.keras,
      logos.bootstrap,
    ],
    links: {
      publication: "https://ieeexplore.ieee.org/document/9864519",
      github: "https://github.com/AparnaSarawadekar/Video-And-Image-Scene-Searching",
    },
  },
  CyclingSF: {
    title: "SafePedalSF",
    description: [
      "It addresses the increasing crime rates faced by pedestrians in the San Francisco area, by providing a solution of bike stations at crime hotspots.",
      "**Geospatial analysis** is implemented for bike availability in the San Francisco region, highlighting areas of high crime, to help users plan their trips better and avoid possible crime areas.",
      "Crime data has been overlapped with bike availability data to identify previously reported areas and allows the commuters to plan their trips accordingly.",
    ],
    images: {
      main: {
        link: "/project/CyclingSF/SafePedalSF.png",
        width: 1903,
        height: 894,
      },
    },
    stack: [logos.folium, logos.plotly, logos.sparksql, logos.pyspark],
    links: {
      github: "https://github.com/AparnaSarawadekar/SafePedalSF"
    }    
  },
  LicensePlateIdentification: {
    title: "License Plate Identification",
    description: [
      "While obtaining the License Plate number of each incoming vehicle on a specific toll plaza, usually vehicles have to stop just to extract the license plate numbers",
      "The aim is to make the stopping time of vehicles absolutely zero, thus avoiding any traffic which occurs due to traditional tolling methods.",
      "YOLOv4 object detector was used to detect the coordinates of license plate numbers from the incoming vehicleswith an accuracy of 94% and stored in Amazon S3 buckets.",
      "Boto3 module was incorporated to pass the license plate images stored in AWS S3 to the Textract service for OCR.",
    ],
    images: {
      webm: "/project/LicensePlateIdentification/amazon.webm",
      mp4: "/project/LicensePlateIdentification/amazon.mp4",
      poster: "/project/LicensePlateIdentification/license.png",
      vidHeight: 676,
      vidWidth: 963,
    },
    stack: [logos.opencv, logos.s3, logos.tensorflow, logos.boto, logos.textract],
    links: {
      github: "https://github.com/AparnaSarawadekar/License-Plate-Identification",
    },
  },
  EnchantedWoods: {
    title: "Enchanted Woods",
    description: [
      "This project involved the development of a 2D platform game using the Unity game engine. The game was designed to be compatible with Android devices, offering an engaging and immersive experience for mobile gamers. The gameplay features classic platforming mechanics, including running, jumping, and navigating through various levels filled with obstacles and challenges.",
      "After thorough testing and optimization, the game was successfully released on the Google Play Store, where it is available for download and play by a broad audience of Android users.",
    ],
    images: {
      webm: "/project/EnchantedWoods/enchantedwoods.webm",
      mp4: "/project/EnchantedWoods/enchantedwoods.mp4",
      poster: "/project/EnchantedWoods/enchantedwoods.png",
      vidHeight: 720,
      vidWidth: 963,
    },
    links: {
      publication: "https://play.google.com/store/apps/details?id=com.Teknack.EnchantedWoods&hl=en-IN",
    },
    stack: [
      logos.unity,
      logos.c
    ],
  },
};

export default projects;