import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Stack,
  Tooltip,
  IconButton,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import LanguageIcon from "@mui/icons-material/Language";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

import JavaIcon from '@mui/icons-material/Coffee';
import SpringBootIcon from '@mui/icons-material/Nature';
import ReactIcon from '@mui/icons-material/Apps';
import AngularIcon from '@mui/icons-material/FilterDrama';
import JavascriptIcon from '@mui/icons-material/Code';
import TypescriptIcon from '@mui/icons-material/Code';
import MongodbIcon from '@mui/icons-material/Storage';
import MysqlIcon from '@mui/icons-material/Storage';
import KafkaIcon from '@mui/icons-material/Hub';
import AwsIcon from '@mui/icons-material/Cloud';
import { GitHub } from "@mui/icons-material";



const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const skills = [
  { name: "Frontend", icon: <CodeIcon fontSize="large" /> },
  { name: "Backend", icon: <StorageIcon fontSize="large" /> },
  { name: "Cloud", icon: <CloudIcon fontSize="large" /> },
  { name: "Web Tech", icon: <LanguageIcon fontSize="large" /> },
  { name: "System Design", icon: <AccountTreeIcon fontSize="large" /> },
];

const toolsAndLanguages = [
  { name: "Java", icon: <JavaIcon />, image: "/Portfolio/icons/icons8-java-48.png" },
  { name: "Spring Boot", icon: <SpringBootIcon />, image: "/Portfolio/icons/springboot.png" },
  { name: "React", icon: <ReactIcon />, image: "/Portfolio/icons/react.png" },
  { name: "Angular", icon: <AngularIcon />, image: "/Portfolio/icons/angular.png" },
  { name: "GitHub", icon: <GitHub />, image: null },
  { name: "JavaScript", icon: <JavascriptIcon />, image: "/Portfolio/icons/js.png" },
  { name: "TypeScript", icon: <TypescriptIcon />, image: "/Portfolio/icons/typescript.png" },
  { name: "MongoDB", icon: <MongodbIcon />, image: "/Portfolio/icons/mongodb.png" },
  { name: "MySQL", icon: <MysqlIcon />, image: "/Portfolio/icons/mysql.png" },
  { name: "Kafka", icon: <KafkaIcon />, image: "/Portfolio/icons/kafka.png" },
  { name: "AWS", icon: <AwsIcon />, image: "/Portfolio/icons/aws.png" },
];

const workExperience = [
  {
    company: "Infosys",
    role: "Specialist Programmer",
    duration: "3 years",
    projects: [
      {
        name: "ICAP (Client)",
        description: "Developed intermediary APIs from scratch using Java Spring Microservices, ensuring seamless interaction between downstream and upstream systems. Orchestrated APIs based on complex business logic, integrating with various system components.",
        tools: ["Java", "Spring", "Microservices", "AWS", "Jenkins", "Git", "GitHub", "Postman", "Jira", "Putty", "WinSCP", "Dynatrace"],
      },
      {
        name: "INCal (Client)",
        description: "Worked on feature enhancements for a monolithic Java-based web application using PrimeFaces and SQL. Developed new forms, restructured existing forms, and implemented bug fixes to improve user experience. Deployed enhancements and bug fixes through Pivotal Cloud Foundry (PCF), ensuring stable production releases.",
        tools: ["Java", "SQL", "PrimeFaces", "Eclipse", "PCF", "Git", "GitHub"],
      },
      {
        name: "Internal Project",
        description: "Designed a specific module flow and developed two APIs using Java Spring Boot Microservices. Leveraged the project's tailored architecture to utilize existing features, ensuring efficient API development.",
        tools: ["Java", "Spring Boot", "Microservices", "Git", "GitHub"],
      },
    ],
  },
];

const education = [
  {
    institution: "NITTE MEENAKSHI INTITUTE OF TECHNOLOGY",
    degree: "B.E (Information Science and Engineering)",
    year: "2018-2022",
    grade: "7.75 cgpa",
  }
];


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const continuousHorizontal = {
    x: [0, 5, 0],
    transition: {
        duration: 3,
        ease: "easeInOut",
    },
    //repeat: Infinity as number,
    //repeatType: "loop" as RepeatType,
};


const About: React.FC = () => {
    useEffect(()=>{window.scrollTo(0,0)},[]);
  return (
    <>
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      sx={{ padding: "3rem 1rem", textAlign: "center" }}
    >
      <MotionTypography
        variant="h4"
        gutterBottom
        whileHover={{ scale: 1.05, color: "#1976d2" }}
        transition={{ duration: 0.3 }}
        sx={{
          fontWeight: "bold",
          display: "inline-block",
          position: "relative",
          mb: 4,
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -2,
            width: "100%",
            height: "3px",
            backgroundColor: "#1976d2",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease",
            transformOrigin: "right",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        }}
      >
        About Me
      </MotionTypography>

      <MotionTypography
        variant="body1"
        variants={itemVariants}
        sx={{
          maxWidth: 800,
          margin: "0 auto",
          mb: 6,
          fontSize: "1.1rem",
          color: "#444",
          textAlign: "left",
        }}
      >
        Specialist Programmer with 3 years of experience at Infosys, focused on
        backend development using Java and Spring framework. Skilled in building
        and orchestrating RESTful APIs, enhancing web applications, and designing
        scalable module flows in both microservices and monolithic architectures.
        Strong understanding of SOLID principles and commonly used design
        patterns for writing clean, maintainable code. Experienced in front-end
        development with Angular and proficient in Git and GitHub for version
        control across all projects. Delivered reliable software solutions for major
        clients and internal initiatives.
      </MotionTypography>

      <MotionTypography
        variant="h5"
        gutterBottom
        whileHover={{ scale: 1.05, color: "#1976d2" }}
        transition={{ duration: 0.3 }}
        sx={{ fontWeight: "bold", mt: 5, mb: 3 }}
      >
        Skills
      </MotionTypography>

      <MotionStack
        direction="row"
        gap={3}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 1.1 }}
            variants={itemVariants}
          >
            <Tooltip title={skill.name}>
              <IconButton
                sx={{
                  color: "#1976d2",
                  transition: "color 0.3s",
                  "&:hover": { color: "#0d47a1" },
                }}
              >
                {skill.icon}
              </IconButton>
            </Tooltip>
          </motion.div>
        ))}
      </MotionStack>

      <MotionTypography
        variant="h5"
        gutterBottom
        whileHover={{ scale: 1.05, color: "#1976d2" }}
        transition={{ duration: 0.3 }}
        sx={{ fontWeight: "bold", mt: 6, mb: 3 }}
      >
        Tools & Languages
      </MotionTypography>

      <MotionStack
        direction="row"
        gap={1.5}
        flexWrap="wrap"
        justifyContent="center"
        sx={{ mt: 2 }}
      >
        {toolsAndLanguages.map((tool, index) => (
          <motion.div
            key={index}
            animate={continuousHorizontal}
          >
            <Tooltip title={tool.name}>
              <Chip
                icon={tool.image ? <Box component="img" src={tool.image} alt={tool.name} sx={{ width: 24, height: 24 }} /> : tool.icon}

                // color="primary"
                // variant="outlined"
                  sx={{ fontSize: "1rem", padding: "10px 5px", backgroundColor:"transparent" }}
              />
            </Tooltip>
          </motion.div>
        ))}
      </MotionStack>

      <MotionTypography
        variant="h5"
        gutterBottom
        whileHover={{ scale: 1.05, color: "#1976d2" }}
        transition={{ duration: 0.3 }}
        sx={{ fontWeight: "bold", mt: 6, mb: 3 }}
      >
        <BusinessCenterIcon sx={{ mr: 1 }} /> Work Experience
      </MotionTypography>

      <MotionBox sx={{ maxWidth: 900, margin: "0 auto", position: "relative", pb: 4 }}>
        <Box sx={{
          position: "absolute",
          left: "20px", // Keep left fixed for mobile timeline line
          top: 0,
          bottom: 0,
          borderLeft: "4px dotted lightgrey",
          height: "100%",
            '@media (min-width: 601px)': {
              left: "50%",
              transform: "translateX(-50%)",
           }
        }} />

        {workExperience.map((exp, index) => (
          <MotionBox
            key={index}
            variants={itemVariants}
            sx={{
              display: "flex",
              position: "relative",
              mb: 6,
              "&:last-child": { mb: 0 },
              flexDirection: "row",
               '@media (min-width: 601px)': {
                 direction: index % 2 === 0 ? "row" : "row-reverse",
               }
            }}
          >
               <Box sx={{
                width: "100%",
                pr: 2,
                pl: "3", // Keep significant left padding for mobile
                textAlign: "left",
                 '@media (min-width: 601px)': {
                   width: "50%",
                   pr: index % 2 === 0 ? 4 : 0,
                   pl: index % 2 !== 0 ? 4 : "40px",
                   textAlign: index % 2 === 0 ? "right" : "left",
                 }
              }}>
                 <MotionTypography variant="h6" sx={{ fontWeight: "bold", color: "grey" }}>
                    {exp.company}
                 </MotionTypography>
                 <Typography variant="body2" color="text.secondary">
                    {exp.duration}
                 </Typography>
              </Box>

               <Box sx={{
                 position: "absolute",
                 left: "16px", // Keep left fixed for mobile timeline circle
                 top: "10px",
                 width: "16px",
                 height: "16px",
                 backgroundColor: "#1976d2",
                 borderRadius: "50%",
                 zIndex: 1,
                  '@media (min-width: 601px)': {
                     left: "50%",
                     transform: "translateX(-50%)",
                   }
               }} />


               <Box sx={{
                width: "100%",
                pl: "3", // Keep significant left padding for mobile
                pr: 2,
                textAlign: "left",
                 '@media (min-width: 601px)': {
                   width: "50%",
                   pl: index % 2 === 0 ? 4 : "40px",
                   pr: index % 2 !== 0 ? 4 : 0,
                   textAlign: index % 2 === 0 ? "left" : "right",
                 }
              }}>
                 <MotionTypography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
                    {exp.role}
                 </MotionTypography>
                 {exp.projects.map((project, pIndex) => (
                   <MotionBox key={pIndex} variants={itemVariants} sx={{ mt: 1 }}>
                     <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                       Project: {project.name}
                     </Typography>
                     <Typography variant="body2" sx={{ mb: 1, color: "#555" }}>
                       {project.description}
                     </Typography>
                     <Typography variant="body2" sx={{ fontStyle: "italic", color: "#777" }}>
                       Tools used: {project.tools.join(", ")}
                     </Typography>
                   </MotionBox>
                 ))}
              </Box>
            </MotionBox>
        ))}
      </MotionBox>


      <MotionTypography
        variant="h5"
        gutterBottom
        whileHover={{ scale: 1.05, color: "#1976d2" }}
        transition={{ duration: 0.3 }}
        sx={{ fontWeight: "bold", mt: 6, mb: 3 }}
      >
           <SchoolIcon sx={{ mr: 1 }} /> Education
      </MotionTypography>

       <MotionBox sx={{ maxWidth: 800, margin: "0 auto", position: "relative", pb: 4 }}>
         <Box sx={{
           position: "absolute",
           left: "20px", // Keep left fixed for mobile timeline line
           top: 0,
           bottom: 0,
           borderLeft: "4px dotted lightgrey",
           height: "100%",
            '@media (min-width: 601px)': {
              left: "50%",
               transform: "translateX(-50%)",
            }
         }} />

         {education.map((edu, index) => (
           <MotionBox
             key={index}
             variants={itemVariants}
             sx={{
               display: "flex",
               position: "relative",
               mb: 6,
               "&:last-child": { mb: 0 },
               flexDirection: "row",
                '@media (min-width: 601px)': {
                  direction: index % 2 === 0 ? "row" : "row-reverse",
                }
             }}
           >
                <Box sx={{
                 width: "100%",
                 pr: 2,
                 pl: "3", // Keep significant left padding for mobile
                 textAlign: "left",
                  '@media (min-width: 601px)': {
                    width: "50%",
                    pr: index % 2 === 0 ? 4 : 0,
                    pl: index % 2 !== 0 ? 4 : "40px",
                    textAlign: index % 2 === 0 ? "right" : "left",
                  }
               }}>
                  <MotionTypography variant="h6" sx={{ fontWeight: "bold", color: "#388e3c" }}>
                     {edu.institution}
                  </MotionTypography>
                  <Typography variant="body2" color="text.secondary">
                     {edu.year}
                  </Typography>
               </Box>

                <Box sx={{
                  position: "absolute",
                  left: "16px", // Keep left fixed for mobile timeline circle
                  top: "10px",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#5cb85c",
                  borderRadius: "50%",
                  zIndex: 1,
                   '@media (min-width: 601px)': {
                      left: "50%",
                      transform: "translateX(-50%)",
                    }
                }} />

                <Box sx={{
                 width: "100%",
                 pl: "3", // Keep significant left padding for mobile
                 pr: 2,
                 textAlign: "left",
                  '@media (min-width: 601px)': {
                    width: "50%",
                    pl: index % 2 === 0 ? 4 : "40px",
                    pr: index % 2 !== 0 ? 4 : 0,
                    textAlign: index % 2 === 0 ? "left" : "right",
                  }
               }}>
                  <MotionTypography variant="subtitle1" sx={{ fontWeight: "bold", color: "#555" }}>
                     {edu.degree}
                  </MotionTypography>
                    <Typography variant="body2" color="text.secondary">
                     {edu.grade}
                  </Typography>
               </Box>
             </MotionBox>
         ))}
       </MotionBox>

    </MotionBox></>
  );
};

export default About;