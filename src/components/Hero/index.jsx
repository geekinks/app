import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Container from '@mui/material/Container';
import Link from '@docusaurus/Link';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #97f0af, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography
              component="span"
              variant="h1"
               sx={{
                display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
                 fontSize: 'clamp(3rem, 10vw, 2rem)',
                 color: 'success.main',
               }}
            >
             Geek Ink
            </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
           is here to bridge the gap for aspiring tech professionals in northern Nigeria. We understand the unique challenges you face – limited access to quality education, a focus on theory over practical skills, and a lack of mentorship to navigate the industry.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="success"
             component={Link}
             to="/docs/intro"
            >
              Expore Courses
            </Button>
          </Stack>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ pt: 3, alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
             At Geek Ink, we believe in practical knowledge. Our courses are project-based: learn by building.            
          </Typography>
        </Stack>
        <Stack>
          {/* 3 icons for Skills, Mentors, investors  */}
          <Box
      sx={{
        pt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 2,
        '@media (min-width: 600px)': {
          flexDirection: 'row',
        },
      }}
    >
      {['Skills', 'Innovate', 'Build'].map((text) => (
        <Stack
          key={text}
          direction="row"
          spacing={2}
          sx={{ alignSelf: 'center', width: { xs: '100%', sm: 'auto' } }}
        >
          <Typography
            component="span"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3rem, 10vw, 2rem)',
              color: 'success.main',
            }}
          >
            {text} 
          </Typography>
          <CheckCircleOutlineIcon color="success" fontSize="large" />
        </Stack>
      ))}
    </Box>
    {/*  */}
    {/* <Stack > */}
    {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
          width: '100%',
          '@media (min-width: 600px)': {
            flexDirection: 'row',
            justifyContent: 'center',
          },
        }}
      >
        <Typography
          component="p"
          variant="h6"
          sx={{
            textAlign: 'center',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: 'text.success',
            marginBottom: 2,
            marginRight: 2,
          }}
        >
          Subscribe to be notified about our new courses
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            '@media (min-width: 600px)': {
              flexDirection: 'row',
              width: 'auto',
            },
          }}
        >
          <TextField 
            label="Email" 
            variant="outlined" 
            size="small" 
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          />
          <Button 
            variant="contained" 
            color="success" 
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Stack> */}
    {/*  */}
  </Stack>
</Container>
</Box>
  );
}