import * as React from 'react';
import Link from '@docusaurus/Link';
import gcc from '@site/static/img/gcc.png';
import python from '@site/static/img/python.png';
import mlops from '@site/static/img/gcc.png';
import java from '@site/static/img/reactjs.png';
import springboot from '@site/static/img/sprin.png';
import node from '@site/static/img/node.jpeg';
import mern from '@site/static/img/MERN.png';
import react from '@site/static/img/reactjs.png';
import django from '@site/static/img/reactjs.png';
import reactDjango from '@site/static/img/djangoReact.png';
import reactSpringboot from '@site/static/img/Spring-Boot-React.png';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import Grid from '@mui/material/Grid';

const courses = [
  {
   img: gcc,
    title: 'General Certificate in Computing',
    description: 'Learn the fundamentals of computing with this comprehensive course.',
    link: '/docs/basics/intro'
  },
  {
   img: python,
    title: 'Python Programming',
    description: 'Master the versatile Python programming language and its applications.',
    link: '/docs/programming/python'
  },
  {
   img: java,
    title: 'Java Programming',
    description: 'Learn Java programming language and its applications in software development.',
    link: '/docs/programming/java'
  },
  {
   img: node,
    title: 'Backend Development with Node.js',
    description: 'Build scalable backend applications with Node.js.',
    link: '/docs/career/node'
  },
  {
   img: springboot,
    title: 'Backend Development with Java',
    description: 'Learn backend development using Java and its frameworks.',
    link: '/docs/career/spring'
  },
  {
   img: django,
    title: 'Backend Development with Django',
    description: 'Build web applications using Django, a high-level Python web framework.',
    link: '/docs/career/django'
  },
  {
   img: mern,
    title: 'Fullstack Development with MERN',
    description: 'Master fullstack development with MongoDB, Express.js, React, and Node.js stack.',
    link: '/docs/career/mern'
  },
  {
   img: react,
    title: 'Frontend Development with React',
    description: 'Build interactive user interfaces with the popular React library.',
    link: '/docs/career/react'
  },
  {
   img: reactDjango,
    title: 'Fullstack Development with React and Django',
    description: 'Build fullstack web applications using React for frontend and Django for backend.',
    link: '/docs/career/djangoReact'
  },
  {
   img: reactSpringboot,
    title: 'Fullstack Development with React and Spring Boot',
    description: 'Develop fullstack web applications using React for frontend and Spring Boot for backend.',
    link: '/docs/career/springReact'
  },
  // {
  //  img: mlops,
  //   title: 'MLOps',
  //   description: 'Learn MLOps practices for deploying and managing machine learning models in production.',
  //   link: '/docs/career/intro'
  // }
];


export default function Course() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.title}>
            <ButtonBase
              sx={{
                width: '100%',
                borderRadius: 0,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '40vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundImage: `url(${course.img})`,
                color: 'inherit',
                textDecoration: 'none',
                transition: 'opacity 0.3s',
                '&:hover': {
                  opacity: 0.9,
                },
                bgcolor: 'rgba(76, 175, 80, 0.8)', // Green background color
              }}
            >
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.5)' }} />
              <Typography variant="h5" color="inherit" sx={{ 
                zIndex: 1,
                fontWeight: '500'
              
              }}>{course.title}</Typography>
              <Typography variant="body2" color="inherit" textAlign="center" sx={{ zIndex: 1, mt: 1, px: 2,}}>{course.description}</Typography>
              <Button 
              component={Link}
              to={course.link}
              variant="contained" color="success" sx={{ mt: 2, zIndex: 1 }}>Learn More</Button>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
