import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

import ser1 from '@site/static/img/hero.png';

export default function Services() {
  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              variant="body1"
              color="#64748B"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Our mentors aren't just tech experts—they're industry leaders, innovators, and passionate advocates for open source collaboration. With years of experience and a deep commitment to empowering the next generation of tech heroes, they're the driving force behind our mission to revolutionize tech education in the northern region of Nigeria.
            </Typography>
          </div>
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
            <img
              src={ser1}
              alt="services"
              style={{ width: '100%', height: '100%' }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}