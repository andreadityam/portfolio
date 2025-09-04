import { useState, useEffect } from 'react'
import pp from './assets/profpic.jpg'
import payplus from './assets/payplus.png'
import veg from './assets/vegetable.png'
import int from './assets/interactive.png'
import car from './assets/cardashboard.png'
import car2 from './assets/careda.png'
import cus from './assets/customer.png'
import { Button } from "@/components/ui/button"
import { File, Mail, User, Code, BarChart3, Server, Smartphone, Database, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import './index.css'

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Tools", href: "#tools" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
]

const skills = [
  { name: "JavaScript", icon: Code, category: "Language" },
  { name: "Go", icon: Code, category: "Language" },
  { name: "Java", icon: Code, category: "Language" },
  { name: "Python", icon: Code, category: "Language" },
  { name: "PHP", icon: Code, category: "Language" },
  { name: "React", icon: Code, category: "Frontend", color: "bg-green-500", color2: "text-green-500" },
  { name: "Tailwind CSS", icon: Smartphone, category: "Frontend", color: "bg-green-500", color2: "text-green-500" },
  { name: "Express", icon: Server, category: "Backend", color: "bg-purple-500", color2: "text-purple-500" },
  { name: "Laravel", icon: Server, category: "Backend", color: "bg-purple-500", color2: "text-purple-500" },
  { name: "PostgreSQL", icon: Database, category: "Database", color: "bg-red-500", color2: "text-red-500" },
  { name: "MySQL", icon: Database, category: "Database", color: "bg-red-500", color2: "text-red-500" },
  { name: "Data Analysis", icon: BarChart3, category: "Analytics", color: "bg-yellow-500", color2: "text-yellow-500" },
  { name: "Data Visualization", icon: BarChart3, category: "Analytics", color: "bg-yellow-500", color2: "text-yellow-500" },
  { name: "Machine Learning", icon: BarChart3, category: "Analytics", color: "bg-yellow-500", color2: "text-yellow-500" },
  { name: "Pandas", icon: BarChart3, category: "Analytics", color: "bg-yellow-500", color2: "text-yellow-500" },
  { name: "NumPy", icon: BarChart3, category: "Analytics", color: "bg-yellow-500", color2: "text-yellow-500" },
  { name: "Matplotlib", icon: BarChart3, category: "Analytics", color: "bg-yellow-500", color2: "text-yellow-500" },
  { name: "Seaborn", icon: BarChart3, category: "Analytics", color: "bg-yellow-500", color2: "text-yellow-500" },
];

const toolsAndTechnologies = [
  "Figma",
  "Microsoft Excel",
  "Spreadsheets",
  "Tableau",
  "Colab",
  "VS Code",
  "Git",
  "Streamlit",
];

const projects = [
  { name: 'PayPlus', img: payplus, link: 'https://github.com/orgs/ThePayPlus/repositories', description: 'PayPlus is a digital wallet (e-wallet) web application designed to help users manage their finances effectively and in an organised manner. With a range of financial management features, PayPlus provides a comprehensive, intuitive and flexible user experience.', tech: ['React', 'JavaScript', 'Express', 'MySQL'], },
  { name: 'Interactive Customer Purchase Behavior Dashboard', img: int, link: 'https://github.com/andreadityam/customer-dashboard', description: 'Interactive Streamlit dashboard for analyzing and visualizing customer purchase behavior, trends, and insights.', tech: ['Python', 'Data Analysis', 'Pandas', 'Streamlit'], },
  { name: 'Vegetable Classification with VGG16, MobileNetV2, and ResNet50', img: veg, link: 'https://github.com/andreadityam/vegetable-classification', description: 'This project performs image classification on 15 types of vegetables using three different Convolutional Neural Network (CNN) architectures — VGG16, MobileNetV2, and ResNet50. The entire pipeline, including data loading, model training, evaluation, and visualization, is implemented in a single Kaggle notebook.', tech: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'], },
  { name: 'Used Car Market Dashboard and Analysis', img: car, link: 'https://github.com/andreadityam/used-car-dashboard', description: 'Dashboard for analyzing the used car market. It covers car model, year, price, mileage, engine specs, fuel type, transmission, ownership, first owner (Yes/No), spare key availability, and vehicle condition. The dashboard provides visual insights for decision-making.', tech: ['Microsoft Excel', 'Data Analysis'], },
  { name: 'Used Car Market Exploratory Data Analysis', img: car2, link: 'https://github.com/andreadityam/used-car-eda', description: 'Exploratory Data Analysis (EDA) project on the used car market using Google Colab. It covers key features like price, mileage, engine specs, and ownership history to uncover trends and insights. Based on a dataset from Kaggle.', tech: ['Python', 'Data Analysis', 'Data Visualization', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn'], },
  { name: 'Customer Purchase Behavior Exploratory Data Analysis', img: cus, link: 'https://github.com/andreadityam/customer-purchases-behavior-eda', description: 'Exploratory Data Analysis (EDA) of customer purchase behavior using Python. It explores demographics, income, spending habits, loyalty, and satisfaction to uncover patterns and insights. Based on a simulated dataset from Kaggle.', tech: ['Python', 'Data Analysis', 'Data Visualization', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn'], },
];

const cvPath = `${import.meta.env.BASE_URL}/CV.pdf`;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [iconColor, setIconColor] = useState('#000000');
  const [iconColor2, setIconColor2] = useState('#000000');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='home' className='min-h-screen bg-gradient-to-br from-white to-blue-50'>
      <div className={`flex justify-center md:justify-between p-5 top-0 sticky z-50  ${isScrolled ? 'border-b-2 border-blue-100 bg-white' : 'border-0'}`}>
        <header className='text-blue-600 text-xl font-bold md:ml-5'>Andre's <span className='text-black/80'>Portfolio</span></header>
        <nav className='hidden md:block my-auto'>
          <ul className='flex item-center mr-10 gap-15 justify-center'>
            {navLinks.map((link, index) => (
              <li className='hover:-translate-y-0.5 font-medium text-gray-800 hover:text-blue-700 transition-all' key={link.name}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <section className='text-center p-8 pb-20'>
        <img className='border-blue-300/40 border-3 mb-5 mx-auto md:h-45 h-35 rounded-full' src={pp}></img>
        <h1 className='font-bold md:text-5xl text-gray-800 max-w-2xl mx-auto text-3xl'>Hello, I'm</h1>
        <h1 className='pt-2 font-bold md:text-5xl max-w-2xl mx-auto text-3xl'> <span className='text-blue-700'>Andre Aditya Amann</span></h1>
        <p className='text-gray-950/70 mt-5 md:text-lg max-w-2xl mx-auto text-md'>A passionate Full-Stack Developer & Data Analyst dedicated to building innovative web applications and extracting actionable insights from data.</p>
        <div className='mt-5 px-10 sm:px-25 flex flex-col sm:flex-row justify-center gap-4'>
          <a href='#contacts'><Button className='hover:-translate-y-0.5 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-800/90'><User />Contacts</Button></a>
          <a href={cvPath} download='CV_Andre.pdf'><Button className='hover:-translate-y-0.5 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-800/90'><File />Download CV</Button></a>
          <a href='https://github.com/andreadityam' target='_blank'><Button onMouseEnter={() => setIconColor('white')} onMouseLeave={() => setIconColor('#000000')} className='bg-white hover:-translate-y-0.5 border-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer' variant="outline"><svg fill={iconColor} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>View GitHub</Button></a>
        </div>
      </section>
      <section id='skills' className='text-center p-5 md:pt-15 lg:px-25 pb-25'>
        <h1 className='font-bold text-3xl text-gray-800 max-w-2xl mx-auto mb-5'>Technical Skills</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5'>
          {skills.map((skill, index) => (
            <Card key={skill.name} className='border-1 border-gray-200 bg-white hover:shadow-lg transition-all hover:-translate-y-1'>
              <CardContent className='flex flex-col mx-auto md:gap-3'>
                <skill.icon className={`mx-auto ${skill.color2 ? skill.color2 : 'text-blue-600'} text-blue-600 size-5 md:size-8`}></skill.icon>
                <p className='font-medium'>{skill.name}</p>
                <p className={`mx-auto px-2 py-1 sm:w-25 ${skill.color ? skill.color : 'bg-blue-600'} text-white rounded-lg text-xs font-medium`}>{skill.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className='text-center pb-30'>
        <h1 id='tools' className='font-bold text-3xl text-gray-800 max-w-2xl mx-auto mb-5'>Tools & Technologies</h1>
        <div className='sm:flex sm:flex-wrap items-center sm:gap-2 sm:justify-center sm:pt-5 grid grid-cols-1 px-30 gap-2 pt-5'>
          {toolsAndTechnologies.map((skill) => (
            <p key={skill} className='text-s px-4 py-2 text-gray-800 bg-white text-center hover:bg-blue-600 hover:-translate-y-0.5 hover:text-white transition-all font-medium border-1 rounded-lg border-gray-300'>{skill}</p>
          ))}
        </div>
      </section>
      <section id='projects' className='pb-5'>
        <h1 className='text-center font-bold text-3xl text-gray-800 max-w-2xl mx-auto mb-5'>Featured Projects</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 py-5 px-8 md:px-25'>
          {projects.map((pro) => (
            <Card key={pro.name} className='bg-white border-white hover:shadow-lg transition-all font-normal'>
              <CardHeader>
                <a target="_blank" href={pro.link}><img className='hover:scale-101 hover:-rotate-1 transition-all pb-3' src={pro.img}></img></a>
                <CardTitle className="font-semibold text-lg">
                  {pro.name}
                </CardTitle>
                <CardDescription className='text-justify'>
                  {pro.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-wrap gap-2'>
                {pro.tech.map((pr) => (
                  <p key={pr} className='bg-blue-700 text-white text-sm rounded-md py-1 px-3'>{pr}</p>
                ))}
              </CardContent>
              <a target="_blank" href={pro.link}><p className='mx-6 py-2 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-800/90 flex justify-center gap-2 items-center'><ExternalLink size='16' />View on GitHub</p></a>
            </Card>
          ))}
        </div>
      </section>
      <section id='contacts' className='pb-15 flex flex-col gap-5 justify-center items-center'>
        <a href='https://github.com/andreadityam'><p className='hover:bg-black hover:text-white w-50 transition-all text-black/90 font-semibold text-xl bg-white rounded-lg px-10 py-2 border-2 border-gray-200'>All Projects</p></a>
        <p className='pt-15 text-xl md:text-3xl font-bold text-black/90'>Open to Work!</p>
        <p className='px-8 md:px-5 max-w-160 text-center text-sm lg:text-lg text-gray-700'>I'm always interested in new opportunities and exciting projects. Whether you need a fullstack developer or data analysis expertise, let's connect!</p>
        <div className='md:px-2 px-8 flex md:flex-row flex-col gap-2'>
          <a href="mailto:andreadityam@gmail.com"><p className='bg-blue-600 px-4 py-1.5 rounded-lg text-normal hover:bg-blue-500 transition-all cursor-pointer hover:-translate-y-0.5 hover:border-blue-500 text-white flex gap-2 text-sm items-center border-2 border-blue-600'><Mail />Email Me</p></a>
          <a target='_blank' href='https://www.linkedin.com/in/andre-amann/'><p onMouseEnter={() => setIconColor('white')} onMouseLeave={() => setIconColor('#000000')} className='hover:-translate-y-0.5 bg-white px-4 py-1.5 rounded-lg text-normal hover:bg-blue-600 transition-all cursor-pointer border-2 border-gray-200 hover:border-blue-600 text-black hover:text-white flex gap-2 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
            <path fill={iconColor} d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
          </svg>LinkedIn</p></a>
          <a target='_blank' href='https://github.com/andreadityam'><p onMouseEnter={() => setIconColor2('white')} onMouseLeave={() => setIconColor2('#000000')} className='bg-white px-4 py-2 rounded-lg text-normal hover:bg-blue-600 transition-all cursor-pointer border-2 hover:-translate-y-0.5 border-gray-200 hover:border-blue-600 text-black hover:text-white flex gap-2 text-sm items-center'><svg fill={iconColor2} width="20" height="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>GitHub Profile</p></a>
        </div>
        <p className='text-sm pt-2 text-gray-700'>Email Address: <span className='font-medium text-gray-900'>andreadityam@gmail.com</span></p>
      </section>
      <section>
        <div className='border-t-1 border-gray-300 p-5 flex'>
          <p className='text-gray-600 text-xs mx-auto'>© 2025 Andre Aditya Amann. Built with React and Tailwind CSS.</p>
        </div>
      </section>
    </div>
  )
}

export default App
