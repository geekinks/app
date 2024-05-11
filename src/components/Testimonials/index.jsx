
import { Container, 
  Typography,
   Grid, Box, 
   Card, CardContent, 
   CardHeader, Avatar } 
from '@mui/material';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import img1 from '@site/static/img/1.png';
import img4 from '@site/static/img/2.jpeg';
import img3 from '@site/static/img/1.png';
import img5 from '@site/static/img/1.png';

// Function to select 3 random testimonials
const getRandomTestimonials = () => {
  const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random());
  return shuffledTestimonials.slice(0, 3);
};



const testimonials = [
  {
    avatar: <Avatar alt="Salma Gazali Abdulhamid" src={<FaceTwoToneIcon/>} />,
    name: 'Salma Gazali Abdulhamid',
    // occupation: 'Tech Enthusiast',
    testimonial: "Being part of this project was inspiring and made me appreciate the power of hands-on learning. I learned so much through this project and feel more prepared for future challenges."
  },
  {
    avatar: <Avatar alt="Aliyu Sulaiman" src={img3} />,
    name: 'Aliyu Sulaiman',
    // occupation: 'Tech Innovator',
    testimonial: "Well deserved to be a mentor as a man of thought and also innovation beyond imagination."
  },
  {
    avatar: <Avatar alt="Hassan Musa Idris" src={img4} />,
    name: 'Hassan Musa Idris',
    // occupation: 'Software Developer',
    testimonial: "There is nothing I can say except to express thanks and appreciation for the work from our mentor in the person of ADAMU M. M (AdamsGeeky). I also learned what is Python and how Python is easier and simpler to communicate with human beings and how to collect and interpret objects using Python."
  },
  {
    avatar: <Avatar alt="Salma Gazali Abdulhamid" src={<FaceTwoToneIcon/>}  />,
    name: 'Salma Gazali Abdulhamid',
    // occupation: 'Tech Enthusiast',
    testimonial: "Having a supportive and knowledgeable mentor can make a big difference in any project or learning experience. His guidance and expertise can really help you to grow and succeed!"
  },
  {
    avatar: <Avatar alt="Fatima Sulaiman" src={<FaceTwoToneIcon/>}  />,
    name: 'Fatima Sulaiman',
    // occupation: 'Data Scientist',
    testimonial: "The course was well-structured with a good balance between theory and practice. The instructor was knowledgeable and approachable, making learning Python both enjoyable and effective. I particularly appreciate the real-world applications demonstrated through the hands-on projects, which greatly enhanced my understanding and skills."
  },
  {
    avatar: <Avatar alt="Aliyu Sulaiman" src={img3} />,
    name: 'Aliyu Sulaiman',
    // occupation: 'Tech Innovator',
    testimonial: "Their ICT Center is advantageous for our people to explore and unlock their potentialities due to their conducive learning environment, lab resources, and also a well-guided/mentorship instructor and highlighters, for the advancement of our people within and outside the community."
  },
  {
    avatar: <Avatar alt="Hassan Musa Idris" src={img4} />,
    name: 'Hassan Musa Idris',
    // occupation: 'Software Developer',
    testimonial: "A very hardworking and dedicated person, thanks to his time and energy sacrifice, gentle and professional guy and also he knows what he is doing in terms of guiding and orienting his student/programmers learners."
  },
  {
    avatar: <Avatar alt="Fatima Sulaiman" src={<FaceTwoToneIcon/>}  />,
    name: 'Fatima Sulaiman',
    // occupation: 'Data Scientist',
    testimonial: "My mentor was knowledgeable and approachable. He provided well-developed and understandable resources which made the program enjoyable and effective."
  },
];



export default function Testimonials() {
  const randomTestimonials = getRandomTestimonials();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography variant="body1" color="text.secondary">
          At Geekink we take pride in the success and satisfaction of our students. Here's what some of our Students had to say about their experience with us:
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {randomTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}