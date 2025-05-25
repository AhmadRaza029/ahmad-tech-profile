
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/components/ui/sonner';
import { Send, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  from_name: z.string().min(2, 'Name must be at least 2 characters'),
  from_email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        'service_0jj46ob', // Your service ID
        'template_1ypggo3', // Your template ID
        data,
        'PGBugtmg-uAejjOuX' // Your public key
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!', {
          description: 'Thank you for reaching out. I\'ll get back to you soon.'
        });
        form.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
        action: {
          label: 'Send Email',
          onClick: () => window.open('mailto:ahmadrajacpr@gmail.com', '_blank')
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
        <p className="text-gray-400">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="from_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="from_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="What would you like to discuss?"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project, question, or how we can work together..."
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
