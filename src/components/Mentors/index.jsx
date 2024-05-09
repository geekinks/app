import { Box, Card, Container, Grid, Typography, Avatar } 
 from '@mui/material';
 import { VerifiedUser, School, Business } from '@mui/icons-material'; // Import Material Icons
import mentorImage from '@site/static/img/hero.png';

export default function Mentor() {
  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Our mentors aren't just tech experts—they're industry leaders, innovators, and passionate advocates for open source collaboration. With years of experience and a deep commitment to empowering the next generation of tech heroes, they're the driving force behind our mission to revolutionize tech education in the northern region of Nigeria.
            <br />
            <br />
            <strong > <VerifiedUser />Expertise:</strong> Our mentors bring a wealth of knowledge and expertise to the table, spanning a wide range of tech fields and disciplines.
            <br />
            <strong> <School />Dedication:</strong> They are deeply committed to guiding and supporting students, offering personalized mentorship and hands-on assistance.
            <br />
            <strong> <Business />Impact:</strong> Through their leadership and advocacy, our mentors are making a tangible impact on the world of technology, shaping the future of open source and inspiring the next generation of tech leaders.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain'
              }}
            />
           <Avatar
              alt="Mentor Image"
              src={mentorImage}
              style={{ width: '100%', height: '100%' }}
            /> 
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}