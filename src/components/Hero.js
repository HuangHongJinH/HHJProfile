import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #1a237e 0%, #283593 100%)' 
          : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        pb: 6,
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.1,
          background: `radial-gradient(circle at 20% 30%, ${theme.palette.primary.main} 0%, transparent 20%),
                      radial-gradient(circle at 80% 70%, ${theme.palette.secondary.main} 0%, transparent 20%)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(45deg, #1976d2 30%, #03a9f4 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                黄泓晋
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: 500,
                  color: theme.palette.text.secondary,
                }}
              >
                网络与信息安全专业研究生
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                1999.06 · 福建宁德人 · 现居杭州 · 中共党员
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon color="primary" />
                  <Typography variant="body1">huanghongjin@hdu.edu.cn</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon color="primary" />
                  <Typography variant="body1">13867146847</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1">杭州电子科技大学</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      boxShadow: '0 8px 16px rgba(25, 118, 210, 0.3)',
                    }}
                  >
                    了解更多
                  </Button>
                </ScrollLink>
                <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    查看项目
                  </Button>
                </ScrollLink>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(135deg, #303f9f 0%, #1976d2 100%)' 
                    : 'linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: '12rem',
                    opacity: 0.1,
                    position: 'absolute',
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  }}
                >
                  HHJ
                </Typography>
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    p: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#1565c0',
                    }}
                  >
                    图神经网络
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#1565c0',
                    }}
                  >
                    集群鲁棒性评估
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#1565c0',
                    }}
                  >
                    网络安全
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{ mb: 1, opacity: 0.7 }}
        >
          向下滚动
        </Typography>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 50,
              border: `2px solid ${theme.palette.text.secondary}`,
              borderRadius: 15,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 6,
                height: 6,
                backgroundColor: theme.palette.text.secondary,
                borderRadius: '50%',
              },
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero; 