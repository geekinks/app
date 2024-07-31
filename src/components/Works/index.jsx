import React from "react";
import { Container, Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { green, blue, grey } from "@mui/material/colors";
import { motion } from "framer-motion";

const WorksSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: blue[50],
}));

const ContentBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: grey[900],
  maxWidth: "800px",
  margin: "0 auto",
  padding: theme.spacing(4),
}));

const WorkItem = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
  margin: theme.spacing(2, 0),
}));

const WorkMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  [theme.breakpoints.up('sm')]: {
    height: 250,
  },
}));

const CallToAction = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1, 5),
  backgroundColor: green[700],
  color: "#fff",
  "&:hover": {
    backgroundColor: green[900],
  },
}));

const works = [
  {
    title: "Community Ink",
    description: "A dedicated platform for students in higher institutions to access learning resources and campus updates.",
    image: "https://communityink.netlify.app/img/favicon/logo.png",
    link: "https://communityink.netlify.app",
  },
  {
    title: "ICT Club GSU Site",
    description: "A dedicated platform for the ICT Club at Gombe State University to share news, events, and resources with its members.",
    image: "https://gsuictclub.web.app/img/logo.jpg", 
    link: "https://gsuictclub.web.app/",
  },
  {
    title: "Al-NUR (Elnur Online Academy)",
    description: "Engaging and accessible online courses in Quran, Tajweed, Fiqh, Tauheed, and Hadith for all levels.",
    image: "https://alnur-acadamy.web.app/img/logo.svg", 
    link: "https://alnur-acadamy.web.app/",
  }
];

const Works = () => {
  return (
    <WorksSection>
      <Container maxWidth="lg">
        <ContentBox
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Sample of Our Works
          </Typography>
          <Typography variant="body1" paragraph>
            Our team has successfully delivered a range of projects across different industries. Here are a few examples of our work and the services we provide:
          </Typography>

          <Grid container spacing={4}>
            {works.map((work, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <WorkItem
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <WorkMedia
                    image={work.image}
                    title={work.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {work.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {work.description}
                    </Typography>
                    {work.link && (
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ mt: 2, backgroundColor: green[700], color: "#fff", "&:hover": { backgroundColor: green[900] } }}
                        href={work.link}
                        target="_blank"
                      >
                        View Live
                      </Button>
                    )}
                  </CardContent>
                </WorkItem>
              </Grid>
            ))}
          </Grid>

          <CallToAction
            variant="contained"
            component={motion.a}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/2347018565308?text=I%20am%20interested%20in%20your%20services"
          >
            Improve Efficiency & Digital Presence
          </CallToAction>

          <Typography variant="body2" paragraph sx={{ marginTop: 2 }}>
          We help businesses improve their efficiency and digital presence. Let us handle the tech so you can focus on your business logistics with expertise and precision.
          </Typography>
        </ContentBox>
      </Container>
    </WorksSection>
  );
};

export default Works;
