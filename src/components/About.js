import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';

const About = () => {
  const theme = useTheme();

  const items = [
    {
      icon: <SchoolIcon fontSize="large" />,
      title: '教育背景',
      description: '杭州电子科技大学网络空间安全学院硕士研究生，福州大学阳光学院本科毕业',
    },
    {
      icon: <WorkIcon fontSize="large" />,
      title: '研究方向',
      description: '基于图神经网络的集群鲁棒性评估，对LLM的基本原理也有较为深入的研究',
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: '技术栈',
      description: '熟练使用Java和Python进行后端开发，熟悉SpringBoot、MySQL、Redis等技术',
    },
    {
      icon: <GroupsIcon fontSize="large" />,
      title: '团队合作',
      description: '担任过班级学习委员和研会宣传部部长，具有良好的团队协作和组织能力',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: theme.palette.mode === 'dark' ? 'background.default' : 'background.paper',
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
            关于我
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}
          >
            我是一名专注于网络与信息安全领域的研究生，对图神经网络和集群鲁棒性评估有深入研究。
            热爱技术，善于学习，期待在网络安全领域做出自己的贡献。
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: 4,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        mb: 3,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box sx={{ mt: 8, p: 4, borderRadius: 4, bgcolor: 'background.paper', boxShadow: 1 }}>
          <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
            个人简介
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            我是黄泓晋，1999年6月出生于福建宁德，现居杭州，是一名中共党员。目前在杭州电子科技大学网络空间安全学院攻读网络与信息安全专业的硕士学位。
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            我的研究方向主要是基于图神经网络的集群鲁棒性评估，同时对大语言模型(LLM)的基本原理也有较为深入的研究。我熟练掌握Java和Python编程语言，熟悉SpringBoot、MySQL、Redis等后端技术栈，并对图神经网络框架如GraphSAGE、TAGConv、GATConv等有深入了解。
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            在校期间，我积极参与各类学术和社团活动，曾担任班级学习委员和研会宣传部部长，培养了良好的团队协作和组织能力。我持有英语CET-6证书和计算机等级考试三级证书，并且熟练掌握Git版本控制和Linux操作系统。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 