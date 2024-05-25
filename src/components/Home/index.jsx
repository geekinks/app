import React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
        <Stack spacing={2} sx={{ width: { xs: '100%', sm: '70%' } }}>
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
            variant="h6"
            textAlign="center"
            color="text.primary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            Where Practical Knowledge Leads to Uncommon Achievements. Talk is Cheap, Show Me the Solution.
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            Geek Ink is here to bridge the gap for aspiring tech professionals in northern Nigeria. We understand the unique challenges you face – limited access to quality education, a focus on theory over practical skills, and a lack of mentorship to navigate the industry.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="success">
              Explore Courses
            </Button>
          </Stack>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            At Geek Ink, we're not just about teaching you code; we're about empowering you to become a tech powerhouse.
          </Typography>
        </Stack>
        <Box
          id="projects"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            width: '100%',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            p: { xs: 2, sm: 4 },
          })}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ color: 'primary.main', mb: { xs: 2, sm: 4 } }}
          >
            Our Key Projects
          </Typography>
          <Stack spacing={4} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src="/img/ink.png"
                alt="Community Ink"
                sx={{
                  width: { xs: '100%', sm: '80%' },
                  borderRadius: '10px',
                  mb: 2,
                }}
              />
              <Typography variant="body1" color="text.primary">
                <strong>Community Ink</strong> - An Open Source Project aimed at building a social media platform for students in various higher institutions to access learning resources, stay updated on campus events, and engage in campus-related activities.
              </Typography>
              <Button variant="outlined" color="primary" href="link_to_community_ink">
                Learn More
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src="/img/logo.png"
                alt="NITDA Blockchain Scholarship"
                sx={{
                  width: { xs: '100%', sm: '80%' },
                  borderRadius: '10px',
                  mb: 2,
                }}
              />
              <Typography variant="body1" color="text.primary">
                <strong>NITDA 12-Weeks Blockchain Scholarship Programme</strong> - A comprehensive platform simplifying blockchain concepts, designed to enhance your understanding and practical skills in blockchain technology.
              </Typography>
              <Button variant="outlined" color="primary" href="link_to_blockchain">
                Learn More
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src="path_to_navist_image.jpg"
                alt="Navist"
                sx={{
                  width: { xs: '100%', sm: '80%' },
                  borderRadius: '10px',
                  mb: 2,
                }}
              />
              <Typography variant="body1" color="text.primary">
                <strong>Navigation Assistant and Virtual Intelligence for Students (Navist)</strong> - A web app utilizing Google technologies to help students, especially freshers, navigate campus and access learning materials easily and freely.
              </Typography>
              <Button variant="outlined" color="primary" href="link_to_navist">
                Learn More
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
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
              sx={{ color: 'primary.main', mb: { xs: 2, sm: 4 } }}
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
                  Bridge the mentorship gap by connecting you with experienced tech professionals from the ALX Network.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleOutlineIcon color="success" />
                <Typography variant="body1" color="text.secondary">
                  Make quality tech education accessible, regardless of location or resources.
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
