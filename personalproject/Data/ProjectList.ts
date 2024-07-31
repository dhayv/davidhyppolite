
export interface Project {
    name: string,
    image: string,
    screenshots: string,
    video: string,
    repository: string,
    description: string,
    team: string,
    frontend: string,
    backend: string,
    database: string,
    deployment: string
}

export const ProjectList: Project[] = [
    {
    name: "MapofMeals",
    image: "",
    screenshots: "",
    video: "",
    repository: "",
    description: "",
    team: "",
    frontend: "ReactJS, Axios",
    backend: "Node/Express, SQLModel, CORS Middleware",
    database: "MongoDb",
    deployment: "GitHub Actions, Docker, DockerHub, AWS, Nginx, AWS Cloudfront, AWS S3 Bucket, Systemd"
    }
    ,
    {
    name: "WiseWalletWin",
    image: "",
    screenshots: "",
    video: "",
    repository: "",
    description: "",
    team: "",
    frontend: "ReactJS, Axios",
    backend: "FastAPI, SQLModel, CORS Middleware, JWT and OAuth2 Authentication, PyTest",
    database: "SQLite",
    deployment: "GitHub Actions, Docker, AWS, Nginx, Certbot, Systemd"
    }
    ,
    {
    name: "RecipeMeals",
    image: "",
    screenshots: "",
    video: "",
    repository: "",
    description: "",
    team: "",
    frontend: "ReactJS, Axios",
    backend: "Django, CORS Middleware",
    database: "MongoDb",
    deployment: "GitHub Actions, Docker, DockerHub, AWS, Nginx, AWS Cloudfront, AWS S3 Bucket, Systemd"
    },
];