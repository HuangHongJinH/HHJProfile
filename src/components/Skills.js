import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress, useTheme, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TerminalIcon from '@mui/icons-material/Terminal';
import TranslateIcon from '@mui/icons-material/Translate';

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      category: '编程语言',
      icon: <CodeIcon fontSize="large" />,
      skills: [
        { name: 'Java', level: 90, color: '#f44336' },
        { name: 'Python', level: 85, color: '#2196f3' },
        { name: 'JavaScript', level: 75, color: '#ffc107' },
        { name: 'HTML/CSS', level: 70, color: '#4caf50' },
      ],
    },
    {
      category: '数据库',
      icon: <StorageIcon fontSize="large" />,
      skills: [
        { name: 'MySQL', level: 85, color: '#3f51b5' },
        { name: 'Redis', level: 80, color: '#e91e63' },
        { name: 'MongoDB', level: 65, color: '#4caf50' },
      ],
    },
    {
      category: '框架与工具',
      icon: <CloudIcon fontSize="large" />,
      skills: [
        { name: 'SpringBoot', level: 85, color: '#4caf50' },
        { name: 'MyBatis', level: 80, color: '#ff9800' },
        { name: 'Vue', level: 75, color: '#42b883' },
        { name: 'Flask', level: 80, color: '#607d8b' },
      ],
    },
    {
      category: '人工智能',
      icon: <PsychologyIcon fontSize="large" />,
      skills: [
        { name: 'PyTorch', level: 80, color: '#ff5722' },
        { name: 'GraphSAGE', level: 85, color: '#9c27b0' },
        { name: 'TAGConv', level: 80, color: '#2196f3' },
        { name: 'GATConv', level: 75, color: '#009688' },
      ],
    },
    {
      category: '开发工具',
      icon: <TerminalIcon fontSize="large" />,
      skills: [
        { name: 'Git', level: 85, color: '#f44336' },
        { name: 'Docker', level: 75, color: '#2196f3' },
        { name: 'Linux', level: 80, color: '#ff9800' },
      ],
    },
    {
      category: '语言能力',
      icon: <TranslateIcon fontSize="large" />,
      skills: [
        { name: '英语 (CET-6)', level: 80, color: '#3f51b5' },
      ],
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'background.default' 
          : 'background.paper',
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
            专业技能
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}
          >
            我的技术栈和专业能力
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          color: 'white',
                          mr: 2,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                        {category.category}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      {category.skills.map((skill, idx) => (
                        <Box key={idx} sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box sx={{ width: '100%', mr: 1, position: 'relative' }}>
                            <LinearProgress
                              variant="determinate"
                              value={100}
                              sx={{
                                height: 8,
                                borderRadius: 5,
                                backgroundColor: theme.palette.mode === 'dark' 
                                  ? 'rgba(255, 255, 255, 0.1)' 
                                  : 'rgba(0, 0, 0, 0.1)',
                              }}
                            />
                            <motion.div
                              custom={skill.level}
                              variants={progressVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: 8,
                                borderRadius: 5,
                                backgroundColor: skill.color,
                              }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 4,
            }}
          >
            <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
              专业技能概述
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              目前方向为基于图神经网络的集群鲁棒评估，对 LLM 的基本原理也有较为深入的研究。目前文献《A Graph Neural Network Framework for Predicting (r,s)-Robustness of Multi-Agent Networks》正在投递，该文献使用新的度量方法验证混合模型在集群鲁棒性评估上的有效性。
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  后端开发
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  熟练使用 Java 和 Python3 进行后端开发，了解 Java 的多线程机制。熟悉 SpringBoot 和 MyBatis 等后端框架，掌握 Spring、SpringMVC、SpringIoC、SpringAOP 的基本原理。
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  数据库
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  熟悉 MySQL 的基本原理，了解锁机制、索引机制、MVCC、事务隔离级别等，熟悉 InnoDB 与 MyISAM 的差异、三范式、SQL 优化方法。掌握 Redis 的基本原理，熟悉缓存雪崩、缓存穿透等问题及解决方案。
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  人工智能
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  熟悉 ChatGPT 的基本原理，熟悉主流 CNN 的框架及其应用，包括 LeNet、AlexNet 和 ResNet 等，熟悉主流 GNN 的框架及其应用，包括 GraphSAGE、TAGConv、GATConv 等。
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  其他技能
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  熟悉消息队列（MQ）的基本原理，了解 Kafka、RabbitMQ、ActiveMQ 和 RocketMQ 的区别。熟悉多种优化算法的原理，包括模拟退火、粒子群优化和遗传算法等。熟练掌握 Git 版本控制，熟悉 Linux 和 Docker 的命令行操作。
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 