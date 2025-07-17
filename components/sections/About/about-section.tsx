'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with modern best practices',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating beautiful, intuitive user interfaces and experiences',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and excellent user experience',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams and stakeholders',
  },
];

const technologies = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux',
  'Framer Motion', 'HTML5', 'CSS3', 'Sass', 'Git', 'Figma', 'Responsive Design'
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer who loves creating beautiful, functional, 
            and user-friendly web applications that make a real impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">My Frontend Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I started my frontend development journey 3 years ago and have been passionate about 
                creating exceptional user experiences ever since. I specialize in React ecosystem 
                and modern JavaScript frameworks.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My focus is on writing clean, efficient code and creating responsive designs that 
                work seamlessly across all devices. I love staying up-to-date with the latest 
                frontend technologies and best practices.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new design trends, contributing to 
                open-source projects, or learning about emerging frontend technologies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Technologies I work with:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105 border-0 bg-white dark:bg-gray-800/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}