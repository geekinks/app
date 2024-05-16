import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Container from '@mui/material/Container';
import Link from '@docusaurus/Link';
import Stack from '@mui/material/Stack';
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
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            At Geek Ink, we're not just about teaching you code; we're about empowering you to become a tech powerhouse.            
          </Typography>
        </Stack>
        <Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: 'auto',
            width: '100%',
            backgroundSize: 'cover',
            borderRadius: '10px',
            backgroundPosition: 'center',
            border: 'green solid 1px',
            outline: '1px solid',
        
          })}
        >
            <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              p: { xs: 2, sm: 4 },
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ color: 'success.main', mb: { xs: 2, sm: 4 } }}
            >
              Our Mission
            </Typography>
            <Stack
              spacing={2}
              sx={{ width: { xs: '100%', sm: '80%' }, textAlign: 'center' }}
            >
              
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleOutlineIcon color="success" />
                <Typography variant="body1" color="text.secondary">
                  Equip aspiring tech enthusiasts with the practical skills and knowledge they need to thrive in the industry.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleOutlineIcon color="success" />
                <Typography variant="body1" color="text.secondary">
                  Foster a collaborative learning environment that encourages innovation and problem-solving.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleOutlineIcon color="success" />
                <Typography variant="body1" color="text.secondary">
                  Bridge the mentorship gap by connecting you with experienced Local tech professionals from the ALX and Developers Network .
                </Typography>
              </Stack>
            </Stack>
          </Container>
          {/* 
            TODO: Our Mission
    1. Equip aspiring tech enthusiasts with the practical skills and knowledge they need to thrive in the industry.
    2. Foster a collaborative learning environment that encourages innovation and problem-solving.
    3. Bridge the mentorship gap by connecting you with experienced tech professionals from the ALX Network.
    4. Make quality tech education accessible, regardless of location or resources.
            */}
        </Box>
        </Stack>
      </Container>
    </Box>
  );
}