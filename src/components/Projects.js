import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Projects = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: '基于图神经网络的智能交通系统鲁棒性评估与优化仿真系统',
      subtitle: '发明专利',
      period: '2023.12 - 2024.01',
      shortDescription: '使用GraphSAGE图卷积模型评估智能交通系统的鲁棒性，并提供优化方案。',
      technologies: ['(r,s)-robust', 'GraphSAGE 图卷积模型', 'Python', 'Flask', 'Vue', 'Echart', 'BMap'],
      keyPoints: [
        '系统初始化: 由于一次性加载对于资源的消耗巨大，多次调优下采用延迟加载方案来进行资源预载；同时，为防止页面刷新后资源二次加载，采用缓存机制，大幅优化资源重载卡顿问题。',
        '模型框架：选择 SAGEConv 模型，具体是使用一层 pool 聚合层和 2 层 LSTM 聚合层，经过实验得出该模型泛化性和准确性的综合得分是所有实验中最高的。',
        '拓扑切换：采用自适应拓扑生成，使用当前视野内节点最多的集群作为拓扑生成目标。',
        '信号优化：手动调整信号范围和噪声干扰，调整拓扑的疏密程度，信号优化能够使得拓扑更密集。'
      ],
      color: '#1976d2',
      image: 'traffic_system.jpg'
    },
    {
      title: '基于卷积神经网络的多智能体系统鲁棒性评估模型',
      subtitle: '研究项目',
      period: '2024.08 - 2024.09',
      shortDescription: '使用AlexNet卷积神经网络对多智能体系统的鲁棒性进行评估，提高评估准确性。',
      technologies: ['(r,s)-robust', 'AlexNet', 'PyTorch', '图重构'],
      keyPoints: [
        '图重构：对图拓扑按入度和出度进行了重构，这样重构出的图能够尽可能避免同构图，使得数据集更加单一，CNN 识别更精准。',
        '将多智能体拓扑的邻接矩阵映射到灰度图中，作为输入，使用 AlexNet 的变体作为模型，能够使得后期注意到更深层次的特征。',
        '进行了多项对比实验：包括 25%-100% 数据集的对比实验、重构数据集后和重构数据集前的对比实验、测试集的方差和误差的对比实验等，验证了数据集和重构工作的有效性和模型的泛化性。'
      ],
      color: '#03a9f4',
      image: 'cnn_model.jpg'
    },
    {
      title: '基于 SpringBoot 的木材管理产销系统日志模块',
      subtitle: '本科毕设',
      period: '2021.01 - 2021.05',
      shortDescription: '开发基于SpringBoot的木材管理系统，负责日志模块的设计与实现。',
      technologies: ['Java', 'BootStrap', 'SpringBoot', 'Mybatis', 'SpringAOP', 'MySQL', 'LaiUI', 'thymeleaf'],
      keyPoints: [
        '后端框架：该项目整体用 SpringMVC 架构，包含持久层、业务层和控制层，其中持久层采用 Mybatis 框架，负责与 MySQL 交互与 CRUD 操作。日志数据展示和记录用 SpringAOP 的前置通知、后置通知和环绕通知，并以注释的方式切入业务控制逻辑。',
        '前端框架：BootStrap 用于导航栏布局，而日志管理模块使用 LaiUI 原生框架进行分页及其他展示功能，并辅以 Jquery 辅以定位控件，进行部分自定义参数传递和展示。在修改数据模块，使用 thymeleaf 进行参数传递，增强了界面跳转流畅性和稳定性。'
      ],
      color: '#ff5722',
      image: 'timber_system.jpg'
    }
  ];

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
    hidden: { y: 30, opacity: 0 },
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
      id="projects"
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
            项目经历
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}
          >
            我参与开发的主要项目和研究成果
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={4}>
            {projectsData.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      borderTop: `4px solid ${project.color}`,
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="overline" color="text.secondary">
                          {project.period}
                        </Typography>
                        <Typography 
                          variant="h5" 
                          component="h3" 
                          sx={{ 
                            fontWeight: 700, 
                            mb: 1,
                            color: project.color
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5
                          }}
                        >
                          <VerifiedIcon sx={{ fontSize: 18, color: project.color }} />
                          {project.subtitle}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 3 }}>
                        {project.shortDescription}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Chip 
                            key={idx} 
                            label={tech} 
                            size="small" 
                            variant="outlined"
                            sx={{ 
                              borderColor: project.color,
                              color: project.color
                            }}
                          />
                        ))}
                        {project.technologies.length > 4 && (
                          <Chip 
                            label={`+${project.technologies.length - 4}`} 
                            size="small" 
                            sx={{ 
                              backgroundColor: project.color,
                              color: 'white'
                            }}
                          />
                        )}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button 
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => handleOpenDialog(project)}
                        sx={{ 
                          color: project.color,
                          '&:hover': {
                            backgroundColor: `${project.color}10`,
                          }
                        }}
                      >
                        查看详情
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        scroll="paper"
        aria-labelledby="project-dialog-title"
      >
        {selectedProject && (
          <>
            <DialogTitle 
              id="project-dialog-title"
              sx={{ 
                borderBottom: `1px solid ${theme.palette.divider}`,
                pb: 2
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                  {selectedProject.title}
                </Typography>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleCloseDialog}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                {selectedProject.subtitle} · {selectedProject.period}
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <CodeIcon sx={{ mr: 1 }} />
                技术栈
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {selectedProject.technologies.map((tech, idx) => (
                  <Chip 
                    key={idx} 
                    label={tech} 
                    color="primary" 
                    variant={idx % 2 === 0 ? "filled" : "outlined"}
                  />
                ))}
              </Box>

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                技术要点
              </Typography>
              <List>
                {selectedProject.keyPoints.map((point, idx) => (
                  <ListItem key={idx} alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>关闭</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 