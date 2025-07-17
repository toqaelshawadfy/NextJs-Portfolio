'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Resturant Project',
    description: 'A simple React project that allows users to view a restaurant menu and place food orders directly through the web application.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Material Ui', 'React Router'],
    githubUrl: 'https://github.com/toqaelshawadfy/Resturant-React-Project.git',
    liveUrl: 'https://toqaelshawadfy.github.io/Resturant-React-Project/',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website with modern design, smooth animations, and responsive layout.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Zod' , 'Shadcn'],
    githubUrl: 'https://github.com/toqaelshawadfy/portfolio',
    liveUrl: 'https://toqaelshawadfy.vercel.app',
  },
  {
    title: 'Weather App',
    description: 'Built a Weather App using React to display current weather and a 3-day forecast for searched cities. Integrated WeatherAPI for real-time data and optimized the app for responsiveness and usability.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'OpenWeather API', 'Bootstrap', 'CSS3'],
    githubUrl: 'https://github.com/toqaelshawadfy/weather-web-master.git',
    liveUrl: 'https://toqaelshawadfy.github.io/weather-web-master/',
  },
  {
    title: 'E-Commerce',
    description: 'Built an interactive shopping cart system integrating state management with API calls resulting in reduced loading times by over 30 seconds.',
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ["React", "React Router" , "Bootstrap" ],
    githubUrl: 'https://github.com/toqaelshawadfy/e-commerce.git',
    liveUrl: 'https://toqaelshawadfy.github.io/e-commerce/',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent frontend projects that demonstrate my skills in 
            React, Next.js, and modern web development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0 bg-white dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <Button size="sm" variant="secondary" asChild className="bg-white/90 hover:bg-white text-gray-900">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild className="bg-white/90 hover:bg-white text-gray-900">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.2 + techIndex * 0.05 
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}