import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Experience = () => {
  const theme = useTheme();

  const experienceData = [
    {
      company: '浙大滨江研究院',
      position: '实习研究员',
      project: '基于图神经网络的无人集群 DoS 攻击下鲁棒性实时评估及响应仿真系统',
      period: '2022.11 - 2022.12',
      location: '浙江杭州',
      description: [
        '前端布局：E-chart 图体现测试集测试精度和 F1 分数。',
        '理论参考：参考了无人集群二阶控制理论，转化成了无人集群领导者-跟随者模型。',
        '模型实现：该实时拓扑鲁棒值使用 DiffPool 图神经网络进行训练，实现上基于 Pytorch 库进行 CUDA 训练，并使用 DGL 库封装图邻接矩阵样本，经过实验其测试集精度可达 80% 以上。',
        '框架和运行环境：后端使用 Python+Flask 框架，前端使用 NodeJS+Vue+JS 框架。后端库使用 Anaconda 管理。前后端数据传输使用 JSON 格式，使用 Axios 完成 HTTP 请求。',
        '同步实现：使用 setTimeout 完成了拓扑建立和集群动作的同步性。'
      ],
      technologies: ['(r,s)-robust', 'DiffPool 模型', '二阶领导者-跟随者模型', 'DoS 攻击', 'Python', 'Flask', 'Vue', 'Echart'],
      color: '#1976d2',
    },
    {
      company: '浙江爱达科技有限公司',
      position: '实习开发工程师',
      project: '基于用户的医疗数据隐私保护系统',
      period: '2024.05 - 2024.06',
      location: '浙江杭州',
      description: [
        '图片持久化：图片上传和合成是基于字节的，上传需要先将图片变成字节数组，再通过 Base64 协议将字节数组编码为字符串，最后使用 AES128 对其加密后存储到数据库。解密则采用相反操作。',
        '数据保护：保护数据主要是基于加密和分块，加密保证数据的保密性，分块存储保证数据的完整性。',
        '版本控制：使用 Gitee 上的 Git 进行版本控制，确保代码版本的一致性和可追溯性。'
      ],
      technologies: ['Vue3', 'Springboot', 'Mybatis-plus', 'Androidx', 'SQLite', 'Mysql', 'Docker', 'Git'],
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
    hidden: { x: 50, opacity: 0 },
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
      id="experience"
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
            实习经历
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}
          >
            我的专业实习和工作经验
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {experienceData.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      borderLeft: `6px solid ${exp.color}`,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <WorkIcon 
                            sx={{ 
                              color: exp.color, 
                              fontSize: 32, 
                              mr: 2 
                            }} 
                          />
                          <Typography variant="h4" component="h3" sx={{ fontWeight: 700 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            mb: 1, 
                            color: 'text.primary',
                            fontWeight: 600 
                          }}
                        >
                          {exp.position}
                        </Typography>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            mb: 3, 
                            color: 'text.secondary',
                            fontWeight: 500,
                            fontStyle: 'italic'
                          }}
                        >
                          {exp.project}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                            <CalendarTodayIcon 
                              sx={{ 
                                color: 'text.secondary', 
                                mr: 1,
                                fontSize: 18
                              }} 
                            />
                            <Typography variant="body2" color="text.secondary">
                              {exp.period}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon 
                              sx={{ 
                                color: 'text.secondary', 
                                mr: 1,
                                fontSize: 18
                              }} 
                            />
                            <Typography variant="body2" color="text.secondary">
                              {exp.location}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                          技术要点:
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                          {exp.description.map((item, idx) => (
                            <Box key={idx} sx={{ display: 'flex', mb: 1.5 }}>
                              <CheckCircleOutlineIcon 
                                sx={{ 
                                  color: exp.color, 
                                  mr: 1.5,
                                  mt: 0.3,
                                  flexShrink: 0
                                }} 
                              />
                              <Typography variant="body1">
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                          技术栈:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.technologies.map((tech, idx) => (
                            <Chip 
                              key={idx} 
                              label={tech} 
                              color="primary" 
                              variant={idx % 2 === 0 ? "filled" : "outlined"}
                              size="medium"
                            />
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
            校园工作经历
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  福州大学阳光学院信息工程学院计科2班
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                  班级学习委员
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  2017.09 - 2021.06
                </Typography>
                <Typography variant="body1">
                  组织全班进行学风建设演讲活动，作为代表独立完成20篇以上汇报材料，每周上报院学生会。
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  杭州电子科技大学网络空间安全学院
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                  研会宣传部部长
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  2023.10 - 2024.10
                </Typography>
                <Typography variant="body1">
                  负责研会宣传部招新，教新人使用秀米编辑公众号，组织宣传部共同完成公众号任务和相关活动。
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 