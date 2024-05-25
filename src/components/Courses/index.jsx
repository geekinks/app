import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Course from "./Course";

const allCourses = [
  {
    image: "/img/gcc.png",
    title: "General Certificate in Computing",
    description:
      "Learn the basics of computing including Word, Excel, and PowerPoint.",
    topics: [
      { text: "Computer Basics" },
      { text: "Word" },
      { text: "Excel" },
      { text: "PowerPoint" },
      { text: "Internet Basics" },
      { text: "Email" },
    ],
    category: "Fundamentals",
    detailsUrl: "/docs/basics/intro",
  },
  {
    image: "/img/react.png",
    title: "Frontend Development",
    description: "Master frontend development with React.",
    topics: [
      { text: "HTML" },
      { text: "CSS" },
      { text: "JavaScript" },
      { text: "React" },
      { text: "Redux" },
      { text: "Responsive Design" },
    ],
    category: "Frontend",
    detailsUrl: "/docs/career/react",
  },
  {
    image: "/img/02.png",
    title: "Backend Development with Node.js",
    description: "Learn backend development using Node.js.",
    topics: [
      { text: "Node.js" },
      { text: "Express.js" },
      { text: "MongoDB" },
      { text: "REST APIs" },
      { text: "Authentication" },
      { text: "Error Handling" },
    ],
    category: "Backend",
    detailsUrl: "/docs/career/node",
  },
  // {
  //   image: '/img/02.png',
  //   title: 'Backend Development with SpringBoot',
  //   description: 'Learn backend development using SpringBoot.',
  //   topics: [
  //     { text: 'SpringBoot' },
  //     { text: 'Java' },
  //     { text: 'Maven' },
  //     { text: 'REST APIs' },
  //     { text: 'JPA' },
  //     { text: 'Security' },
  //   ],
  //   category: 'Backend',
  //   detailsUrl: '/docs/career/spring',
  // },
  // {
  //   image: '/img/backendDjango.jpg',
  //   title: 'Backend Development with Django & Flask',
  //   description: 'Learn backend development using Django and Flask.',
  //   topics: [
  //     { text: 'Django' },
  //     { text: 'Flask' },
  //     { text: 'Python' },
  //     { text: 'ORM' },
  //     { text: 'REST APIs' },
  //     { text: 'Deployment' },
  //   ],
  //   category: 'Backend',
  //   detailsUrl: '/docs/career/django',
  // },
  {
    image: "/img/mern.png",
    title: "Fullstack Development (MERN)",
    description: "Become a fullstack developer using the MERN stack.",
    topics: [
      { text: "MongoDB" },
      { text: "Express.js" },
      { text: "React" },
      { text: "Node.js" },
      { text: "Authentication" },
      { text: "Deployment" },
    ],
    category: "Fullstack",
    detailsUrl: "/docs/career/mern",
  },
  // {
  //   image: '/img/02.png',
  //   title: 'Fullstack Development (React + Java)',
  //   description: 'Learn fullstack development using React and Java.',
  //   topics: [
  //     { text: 'React' },
  //     { text: 'Java' },
  //     { text: 'SpringBoot' },
  //     { text: 'REST APIs' },
  //     { text: 'Security' },
  //     { text: 'Deployment' },
  //   ],
  //   category: 'Fullstack',
  //   detailsUrl: '/docs/career/springReact',
  // },
  // {
  //   image: '/img/02.png',
  //   title: 'Fullstack Development (React + Python)',
  //   description: 'Learn fullstack development using React and Python.',
  //   topics: [
  //     { text: 'React' },
  //     { text: 'Python' },
  //     { text: 'Django' },
  //     { text: 'Flask' },
  //     { text: 'REST APIs' },
  //     { text: 'Deployment' },
  //   ],
  //   category: 'Fullstack',
  //   detailsUrl: '/docs/career/djangoReact',
  // },
];

export default function Courses() {
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? allCourses
      : allCourses.filter((course) => course.category === filter);

  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
          mb: 4,
        }}
      >
        Our Courses
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 4, width: "100%", justifyContent: "center" }}
      >
        <Button
          onClick={() => setFilter("All")}
          variant={filter === "All" ? "contained" : "outlined"}
          color="success"
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("Fundamentals")}
          variant={filter === "Fundamentals" ? "contained" : "outlined"}
          color="success"
        >
          Fundamentals
        </Button>
        <Button
          onClick={() => setFilter("Frontend")}
          variant={filter === "Frontend" ? "contained" : "outlined"}
          color="success"
        >
          Frontend
        </Button>
        <Button
          onClick={() => setFilter("Backend")}
          variant={filter === "Backend" ? "contained" : "outlined"}
          color="success"
        >
          Backend
        </Button>
        <Button
          onClick={() => setFilter("Fullstack")}
          variant={filter === "Fullstack" ? "contained" : "outlined"}
          color="success"
        >
          Fullstack
        </Button>
      </Stack>

      <Course courses={filteredCourses} />
    </Container>
  );
}
