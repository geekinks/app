import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';

const Course = ({ courses }) => {
  return (
    <Grid container spacing={4}>
      {courses.map((course, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              backgroundColor: '#f9f9f9',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Avatar
              src={course.image}
              alt={course.title}
              variant="rounded"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: 300,
                mb: 3,
              }}
            />
            <Typography component="p" variant="body1" color="text.success" sx={{ mb: 3 }}>
              {course.description}
            </Typography>
            <List>
              {course.topics.map((topic, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={topic.text} />
                </ListItem>
              ))}
            </List>
            <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              <Button variant="contained" color="success" href="https://forms.gle/MPk5Kuh6E9dxdqYy6">
                Enroll
              </Button>
              <Button variant="outlined" color="success" href={course.detailsUrl}>
                Details
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Course;
