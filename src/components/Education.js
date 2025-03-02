import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Education = () => {
  const theme = useTheme();

  const educationData = [
    {
      school: '杭州电子科技大学',
      degree: '硕士',
      field: '网络空间安全学院 - 网络与信息安全专业',
      period: '2022.09 - 2025.06',
      location: '浙江杭州',
      description: '研究方向为基于图神经网络的集群鲁棒性评估，对LLM的基本原理也有较为深入的研究。',
      color: '#1976d2',
    },
    {
      school: '福州大学阳光学院',
      degree: '本科',
      field: '信息工程学院 - 计算机科学与技术专业',
      period: '2017.09 - 2021.06',
      location: '福建福州',
      description: '本科期间担任班级学习委员，组织全班进行学风建设演讲活动，作为代表独立完成20篇以上汇报材料。',
      color: '#03a9f4',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      id="education"
      sx={{
        py: 10,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'background.paper' 
          : 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              },
            }}
          >
            教育背景
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}
          >
            我的学术旅程和教育经历
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {educationData.map((edu, index) => (
              <Grid item xs={12} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      borderLeft: `6px solid ${edu.color}`,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <SchoolIcon 
                            sx={{ 
                              color: edu.color, 
                              fontSize: 32, 
                              mr: 2 
                            }} 
                          />
                          <Typography variant="h4" component="h3" sx={{ fontWeight: 700 }}>
                            {edu.school}
                          </Typography>
                        </Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            mb: 2, 
                            color: 'text.secondary',
                            fontWeight: 500 
                          }}
                        >
                          {edu.degree} · {edu.field}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                          {edu.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: '100%',
                            justifyContent: 'center',
                            p: { xs: 0, md: 2 },
                            borderLeft: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <CalendarTodayIcon 
                              sx={{ 
                                color: 'text.secondary', 
                                mr: 1 
                              }} 
                            />
                            <Typography variant="body1" color="text.secondary">
                              {edu.period}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon 
                              sx={{ 
                                color: 'text.secondary', 
                                mr: 1 
                              }} 
                            />
                            <Typography variant="body1" color="text.secondary">
                              {edu.location}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 