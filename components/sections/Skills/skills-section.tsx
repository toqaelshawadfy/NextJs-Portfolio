'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend Frameworks',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 95 },
    ],
  },
  {
    title: 'Styling & Design',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'CSS3 & Sass', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Figma', level: 80 },
      { name: 'Webpack/Vite', level: 75 },
      { name: 'npm/yarn', level: 85 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical skills and proficiency levels across different areas of 
            frontend development and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={ `${category.title}-${categoryIndex}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full border-0 bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                        className="relative"
                      >
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-gray-700 dark:bg-gray-700 [&>div]:bg-transparent "
                        />
                        <div 
                          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}