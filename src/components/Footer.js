import React from 'react';
import { Box, Container, Typography, Grid, useTheme, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { id: 'about', label: '关于我' },
    { id: 'education', label: '教育背景' },
    { id: 'experience', label: '实习经历' },
    { id: 'projects', label: '项目经历' },
    { id: 'skills', label: '专业技能' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'background.paper' 
          : '#1976d2',
        color: theme.palette.mode === 'dark' 
          ? 'text.primary' 
          : '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              黄泓晋
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              网络与信息安全专业研究生，专注于图神经网络和集群鲁棒性评估研究。
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">huanghongjin@hdu.edu.cn</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">13867146847</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">杭州</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolIcon fontSize="small" />
                <Typography variant="body2">杭州电子科技大学</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              快速导航
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: 'pointer' }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#ffffff',
                      '&:hover': {
                        color: theme.palette.mode === 'dark' 
                          ? 'primary.main' 
                          : '#bbdefb',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Typography>
                </ScrollLink>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              关于本站
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              本个人网站使用 React 和 Material-UI 构建，展示了我的个人简历、项目经历和专业技能。
            </Typography>
            <Typography variant="body2">
              如果您对我的经历和技能感兴趣，欢迎通过邮件或电话联系我。
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: theme.palette.mode === 'dark' ? 'divider' : 'rgba(255, 255, 255, 0.2)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            © {currentYear} 黄泓晋. 保留所有权利.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 