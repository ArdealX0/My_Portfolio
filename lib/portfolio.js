// Content refreshed from “Brainstorm Ideas”, aaggar68's LinkedIn profile,
// verified ArdealX0 repositories, and the supplied AISE 3310 report on October 2, 2026.
// SpatialMind is ongoing; its description reflects the intended system.
export const profileLinks = {
  github: "https://github.com/ArdealX0",
  linkedin: "https://www.linkedin.com/in/aaggar68/",
  email: "anuragaggarwal0612@gmail.com",
}

export const projects = [
  {
    title: "SpatialMind",
    description:
      "I'm developing a multimodal vision system that remembers objects across continuous video. SpatialMind brings together open-vocabulary segmentation, object tracking, visual foundation models, scene graphs, and vector search, with the goal of answering natural-language questions about how a physical environment changes over time.",
    tech: ["Python", "PyTorch", "OpenCV", "Vision-Language Models", "Vector Databases", "FastAPI"],
    timeSpan: "Sep. 2026 – Present · In development",
    category: "Object-centric visual memory",
    icon: "vision",
    thumbnail: "/projects/spatialmind-illustration.png",
    thumbnailPosition: "50% 52%",
    thumbnailCaption: "AI-generated concept illustration",
  },
  {
    title: "Plant Disease Classifier",
    description:
      "Built an end-to-end computer vision system with a teammate to identify plant diseases from leaf images and video. The work covered preprocessing, leaf segmentation, CNN-based classification, and model evaluation, followed by Raspberry Pi deployment for inference under edge-computing constraints.",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Raspberry Pi"],
    thumbnail: "/projects/plant-disease-illustration.png",
    thumbnailPosition: "50% 68%",
    thumbnailCaption: "AI-generated project illustration",
    timeSpan: "Sep. – Dec. 2025",
    github: "https://github.com/ArdealX0/greenhouse-plant-disease-classifier",
  },
  {
    title: "Robotic Eraser Collection & Sorting System",
    description:
      "Designed and built a robot with a team to collect erasers and sort them by colour. Integrated the mechanical design and geared drivetrain with ESP32 control, PWM-driven motors, calibrated colour sensors, and servo actuation. Tested automated sorting logic and anti-jam routines through repeated prototype iterations.",
    tech: ["ESP32", "Embedded Systems", "PWM Motor Control", "Colour Sensing", "CAD", "Onshape"],
    timeSpan: "Jan. – Apr. 2026",
    github: "https://github.com/ArdealX0/2026-project-pdf-team-004-5",
    category: "Mechatronics & embedded control",
    icon: "robot",
    thumbnail: "/projects/eraser-sorter-illustration.png",
    thumbnailPosition: "50% 35%",
    thumbnailCaption: "AI-generated project illustration",
    video: "/projects/eraser-sorter-demo.mp4",
  },
  {
    title: "Stock Analyzer — AI on Wall Street",
    description:
      "Developed an AI-assisted stock-analysis platform with a team, bringing together market data, macroeconomic indicators, financial news, and natural-language processing. Connected external APIs with sentiment analysis and automated financial-data pipelines to support stock analysis and portfolio decisions.",
    tech: ["Python", "NLP", "API Integration", "Financial Data Analysis", "Data Pipelines"],
    thumbnail: "/projects/stock-analyzer-illustration.png",
    thumbnailPosition: "50% 55%",
    thumbnailCaption: "AI-generated project illustration",
    // Current LinkedIn dates supersede the older resume's 2024 dates.
    timeSpan: "Jan. – Apr. 2025",
    github: "https://github.com/ArdealX0/Stock_Analyser",
  },
  {
    title: "Servo Control Circuit Design",
    description:
      "Designed and validated a portable servo-control circuit with an LM317T regulator and NE555 timer. Regulated a 9 V input to about 5.6 V and generated 0.5–2.5 ms PWM pulses at approximately 50–55 Hz. Used oscilloscope measurements and failure analysis to refine the resistor network, reduce jitter, and improve servo response.",
    tech: ["Analog Circuit Design", "NE555", "LM317T", "PWM", "Oscilloscope Testing"],
    thumbnail: "/projects/servo-prototype.jpg",
    thumbnailCaption: "Servo circuit prototype",
    thumbnailRotate: true,
    thumbnailPosition: "50% 50%",
    mediaLinks: [
      { label: "View prototype photo", href: "/projects/servo-prototype.jpg" },
      { label: "View circuit illustration", href: "/projects/servo-circuit-illustration.png" },
    ],
    timeSpan: "Sep. – Dec. 2025",
  },
  {
    title: "Vending Machine Database System",
    description:
      "Developed a centralized vending-machine database with a course-project team to manage inventory, transactions, maintenance, customers, suppliers, and personnel. Combined normalized MySQL design with a Python synthetic-data pipeline, analytical SQL views, and stored procedures for operational reporting and supply-chain analysis.",
    tech: ["SQL", "MySQL", "Python", "Faker", "Data Modeling", "Stored Procedures"],
    timeSpan: "Sep. – Dec. 2025",
    github: "https://github.com/ArdealX0/Vending-Machine-Database-System",
    category: "Relational databases & data engineering",
    icon: "database",
    thumbnail: "/projects/vending-sql-result.png",
    thumbnailCaption: "Actual SQL query and result",
    thumbnailFit: "contain",
    mediaLinks: [
      { label: "View SQL result", href: "/projects/vending-sql-result.png" },
      { label: "View repository data summary", href: "/projects/vending-data-summary.png" },
    ],
  },
  {
    title: "Diabetes Prediction Using Relational Healthcare Data",
    description:
      "Built a cloud-based healthcare data pipeline with a teammate for AISE 3310. Joined patient demographics, medical history, and lab results in Google BigQuery, engineered features with SQL, and trained a TensorFlow/Keras neural network in Google Colab. The course report records approximately 96% classification accuracy and a 0.96 weighted F1 score on the project evaluation dataset.",
    tech: ["Python", "SQL", "Google BigQuery", "TensorFlow", "Keras", "Scikit-learn"],
    timeSpan: "Jan. – Apr. 2026 · AISE 3310",
    github: "https://github.com/ArdealX0/Diabetes_Prediction",
    category: "Healthcare data & machine learning",
    icon: "data",
  },
]
