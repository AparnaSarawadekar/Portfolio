type logoNames =
  | "apollo"
  | "graphql"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "chartjs"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "s3"
  | "socketio"
  | "typescript"
  | "vercel"
  | "ejs"
  | "nodejs"
  | "javascript"
  | "postgresql"
  | "redux"
  | "sass"
  | "bash"
  | "reactSpring"
  | "framerMotion"
  | "trpc"
  | "cypress"
  | "reactQuery"
  | "c"
  | "unity"
  | "opencv"
  | "boto"
  | "tensorflow"
  | "textract"
  | "keras"
  | "folium"
  | "plotly"
  | "pyspark"
  | "sparksql"
  | "azure"
  | "hadoop"
  | "arcgis"
  | "terraform";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/assets/icons/apollo.svg",
    spin: false,
    invert: true,
  },
  graphql: {
    label: "GraphQl",
    logo: "/assets/icons/graphql.svg",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/assets/icons/nestjs.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "/assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  chartjs: {
    label: "Chart.js",
    logo: "/assets/icons/chartjs.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/assets/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/assets/icons/nextjs.svg",
    invert: true,
  },
  s3: {
    label: "AWS-S3",
    logo: "/assets/icons/s3.svg",
  },
  socketio: {
    label: "Socket.IO",
    logo: "/assets/icons/socketio.svg",
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "/assets/icons/vercel.svg",
    invert: true,
  },
  ejs: {
    label: "EJS",
    logo: "/assets/icons/ejs.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  postgresql: {
    label: "PostgreSQL",
    logo: "/assets/icons/postgresql.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  reactSpring: {
    label: "react-spring",
    logo: "/assets/icons/react-spring.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
  },
  trpc: {
    label: "tRPC",
    logo: "/assets/icons/trpc.svg",
  },
  cypress: {
    label: "Cypress",
    logo: "/assets/icons/cypress.svg",
  },
  reactQuery: {
    label: "React Query",
    logo: "/assets/icons/react-query.svg",
  },
  c: {
    label: "C#",
    logo: "/assets/icons/c.png",
  },
  unity: {
    label: "Unity",
    logo: "assets/icons/unity.png",
  },
  opencv: {
    label: "Open CV",
    logo: "assets/icons/opencv.png",
  },
  boto: {
    label: "Boto-3",
    logo: "assets/icons/boto.png",
  },
  tensorflow: {
    label: "Tensorflow",
    logo: "assets/icons/tensorflow.png",
  },
  textract: {
    label: "AWS Textract",
    logo: "assets/icons/textract.png",
  },
  keras: {
    label: "Keras",
    logo: "assets/icons/keras.png",
  },
  folium: {
    label: "Folium",
    logo: "assets/icons/folium.png",
  },
  plotly: {
    label: "Plotly",
    logo: "assets/icons/plotly.png",
  },
  pyspark: {
    label: "Apache Pyspark",
    logo: "assets/icons/pyspark.png",
  },
  sparksql: {
    label: "Apache Spark SQL",
    logo: "assets/icons/sparksql.png",
  },
  azure: {
    label: "Microsoft Azure",
    logo: "assets/icons/azure.png",
  },
  hadoop: {
    label: "Hadoop",
    logo: "assets/icons/hadoop.png",
  },
  arcgis: {
    label: "ArcGIS",
    logo: "assets/icons/arcgis.png",
  },
  terraform: {
    label: "Terraform",
    logo: "assets/icons/terraform.png",
  }
};

export default logos;
