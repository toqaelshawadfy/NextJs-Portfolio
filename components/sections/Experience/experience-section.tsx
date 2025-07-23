'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const internships = [
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'HTI (Higher Technological Instute 10th of Ramadan)',
    location: 'Egypt',
    period: '2021 - 2025',
    description:
      'Pursuing a comprehensive Computer Science degree with focus on software engineering, algorithms, data structures, and modern programming paradigms. Maintaining excellent academic performance while participating in various tech-related activities.',
    technologies: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'CodeSoft',
    location: 'Remote',
    period: 'Jun 2024 - Jul 2024',
    type: 'Internship',
    description: [
      'Built interactive landing pages and marketing websites',
      'Implemented responsive designs across multiple devices and browsers',
      'Worked with modern CSS frameworks and animation libraries',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Bootstrap', 'Sass'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Web Masters',
    location: 'Remote',
    period: 'Aug 2024 - Nov 2024',
    type: 'Internship',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Collaborated with design team to implement pixel-perfect UI components',
      'Participated in code reviews and learned best practices for clean code',
      'Learned to explain code and development concepts clearly to junior team members',
    ],
    technologies: ['React', 'Redux', 'TypeScript', 'TailwindCss'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experiences that have shaped my development as a
            software developer
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {internships.map((internship, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={ `${internship.title}-${ index}`}
                  ref={ref}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 flex items-center justify-center">
                    {internship.type === 'education' ? (
                      <GraduationCap className="h-2 w-2 text-white" />
                    ) : (
                      <Briefcase className="h-2 w-2 text-white" />
                    )}
                  </div>

                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          {internship.type === 'education' ? (
                            <GraduationCap className="h-5 w-5 mr-2 text-blue-800" />
                          ) : (
                            <Briefcase className="h-5 w-5 mr-2 text-blue-800" />
                          )}
                          <Badge
                            className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            variant={
                              internship.type === 'education' ? 'default' : 'secondary'
                            }
                          >
                            {internship.type === 'education' ? 'Education' : 'Internship'}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{internship.title}</CardTitle>
                        <div className="space-y-2">
                          <p className="font-semibold text-primary">{internship.company}</p>
                          <div className="flex items-center text-sm text-muted-foreground space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {internship.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {internship.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {Array.isArray(internship.description) ? (
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            {internship.description.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground">{internship.description}</p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              variant="outline"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
