import * as React from 'react';
import Link from '@docusaurus/Link';
import gcc from '@site/static/img/gcc.png';
import python from '@site/static/img/python.png';
import mlops from '@site/static/img/gcc.png';
import java from '@site/static/img/java.jpg';
import springboot from '@site/static/img/sprin.png';
import node from '@site/static/img/node.jpeg';
import mern from '@site/static/img/mern.png';
import react from '@site/static/img/react.png';
import django from '@site/static/img/django.jpg';
import reactDjango from '@site/static/img/djangoReact.png';
import reactSpringboot from '@site/static/img/Spring-Boot-React.png';


import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Card, CardContent, Typography} from '@mui/material';


const courses = [
  {
   img: gcc,
    title: 'General Certificate in Computing',
    description: 'Unlock the world of computing with our comprehensive course! Dive deep into the fundamentals and emerge with a solid understanding of essential concepts that form the backbone of modern technology.',
    link: '/docs/basics/intro'
  },
  {
   img: python,
    title: 'Python Programming',
    description: 'Embark on a journey of versatility and innovation with Python! Master one of the most popular programming languages known for its simplicity and power. From web development to data analysis, Python opens doors to endless possibilities.',
    link: '/docs/programming/python'
  },
  {
   img: java,
    title: 'Java Programming',
    description: 'Join the ranks of elite developers with Java expertise! Delve into the world of object-oriented programming and learn to build robust, scalable applications that power enterprises and shape the digital landscape.',
    link: '/docs/programming/java'
  },
  {
   img: node,
    title: 'Backend Development with Node.js',
    description: 'Explore the realm of server-side development with Node.js! Harness the power of JavaScript to build fast and scalable backend solutions. From APIs to real-time applications, Node.js empowers you to create cutting-edge web services.',
    link: '/docs/career/node'
  },
  {
   img: springboot,
    title: 'Backend Development with Java',
    description: 'Dive into the heart of enterprise-grade backend development with Java! Learn to leverage the rich ecosystem of Java frameworks and libraries to craft secure, high-performance backend systems that drive mission-critical applications.',
    link: '/docs/career/spring'
  },
  {
   img: django,
    title: 'Backend Development with Django',
    description: 'Unleash the full potential of web development with Django! Master the art of building dynamic and feature-rich web applications using Pythons elegant framework. From prototyping to deployment, Django streamlines the development process.',
    link: '/docs/career/django'
  },
  {
   img: mern,
    title: 'Fullstack Development with MERN',
    description: 'Embrace the MERN stack and become a fullstack ninja! Seamlessly integrate MongoDB, Express.js, React, and Node.js to build modern, interactive web applications. From data management to user interfaces, MERN offers a holistic approach to development.',
    link: '/docs/career/mern'
  },
  {
   img: react,
    title: 'Frontend Development with React',
    description: 'Elevate your frontend skills with React! Dive deep into component-based architecture and learn to build dynamic user interfaces with ease. From single-page applications to complex UIs, React empowers you to create engaging web experiences.',
    link: '/docs/career/react'
  },
  {
   img: reactDjango,
    title: 'Fullstack Development with React and Django',
    description: 'Bridge the gap between frontend and backend with React and Django! Combine the power of a robust backend framework with a flexible frontend library to create fullstack web applications that deliver unmatched performance and user experience.',
    link: '/docs/career/djangoReact'
  },
  {
   img: reactSpringboot,
    title: 'Fullstack Development with React and Spring Boot',
    description: 'Harness the synergy of React and Spring Boot for fullstack mastery! Seamlessly integrate the frontend magic of React with the robustness of Spring Boot to build scalable, enterprise-grade web applications that set new standards in performance and reliability.',
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
    <>
      <Container maxWidth='lg'>
        <Typography variant='h5' align='center' style={{ marginTop: '15px' }}>
          Dive into a world of possibilities with our comprehensive courses covering everything from fundamental computing concepts to cutting-edge technologies like Python, Java, React, and more.
        </Typography>
        <Grid container spacing={5} style={{ marginTop: '20px' }}>
          {
            courses.map((course, index) => (
              <Grid item xs={12} ms={4} sm={4} key={index}>
                <Card sx={{ maxWidth: 345 }} style={{ padding: '10px', marginBottom: '30px' }}>
                  <CardMedia
                    component="img"
                    alt={course.title}
                    height="140"
                    image={course.img}
                    style={{
                      width: '100%',
                      height: '200px', // Set a fixed height for consistency
                      objectFit: 'cover',
                      borderRadius: '5px'
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  align='center'>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant='contained' style={{ backgroundColor: '#4caf50', color: 'white' }}>Enroll</Button>
                    <Button size="small" variant='contained' component={Link} to={course.link} style={{ backgroundColor: '#4caf50', color: 'white' }}>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  );
}