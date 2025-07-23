'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';



const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'toqaelshawadfy196@gmail.com',
    href: 'toqaelshawadfy196@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 1273711857',
    href: 'tel:+201273711857',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/toqaelshawadfy',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/toqa-elshawadfy/',
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  type FormValues = z.infer <typeof formSchema>
  const {register,handleSubmit,reset, formState: { errors }} = useForm <FormValues> (
   {resolver:zodResolver(formSchema) ,
    defaultValues: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
   } //to communicate with "Zod" and "React hook form"
  )
  //  the function of submited
  const onSubmit = async(data : FormValues) => {
    setIsSubmitting(true)
   try{
    const result = await emailjs.send(
     'service_0piw50q',
     'template_h28l46b',
     {
        from_name:data.name,
        reply_to:data.email,
        subject:data.subject,
        message:data.message,
     },
    //  user id
     'l4YWf65vqBNSSaud9'
     );
     toast.success('Message sent successfully! ✨');
      reset();
   }catch(error){
      toast.error('Failed to send message. Please try again.');
   }
   setIsSubmitting(false)

  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about frontend development and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
             <form onSubmit={handleSubmit(onSubmit)}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
    {/* name input */}
    <Input
      type="text"
      id="name"
      {...register("name")}
      className="w-full px-4 py-2 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700"
      placeholder="Enter your name"
      required
    />
    {errors.name &&(
      <p className='text-sm text-red-600 mt-1'>{errors.name.message}</p>
    )}
    {/* email input */}
    <Input
      type="email"
      id="email"
      {...register("email")}
      className="w-full px-4 py-2 border bg-blue-50 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700"
      placeholder="Enter your email"
      required
    />
    {errors.email&&(
      <p className='text-sm text-red-600 mt-1'>{errors.email.message}</p>
    )}
  </div>

  {/* subject input */}
  <Input
    type="text"
    id="subject"
    {...register("subject")}
    className="w-full bg-blue-50 px-4 py-2 mb-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700"
    placeholder="Enter subject"
    required
  />
  {errors.subject&&(
    <p className='text-sm text-red-600 mt-1'>{errors.subject.message}</p>
  )}

  {/* textarea input */}
  <Textarea
    id="message"
    rows={5}
    {...register("message")}
    className="w-full px-4 py-2 border bg-blue-50 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700"
    placeholder="Write your message"
    required
  />
   {errors.message&&(
    <p className='text-sm text-red-600 mt-1'>{errors.message.message}</p>
   )}
  <Button
    type="submit"
    className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition mt-4"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Submitting..." : "Send Message"}
  </Button>
</form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <link.icon className="h-6 w-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-4">Let's work together!</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm always excited to take on new frontend challenges and collaborate on innovative projects. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                I typically respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}