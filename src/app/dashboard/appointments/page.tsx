
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const appointmentSchema = z.object({
  doctor: z.string().min(1, 'Please select a doctor.'),
  date: z.string().min(1, 'Please select a date.'),
  time: z.string().min(1, 'Please select a time.'),
  reason: z.string().min(10, 'Please provide a brief reason for your visit.'),
});

export default function AppointmentPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof appointmentSchema>>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctor: '',
      date: '',
      time: '',
      reason: '',
    },
  });

  function onSubmit(values: z.infer<typeof appointmentSchema>) {
    console.log(values);
    toast({
      title: 'Appointment Booked!',
      description: 'Your appointment has been successfully scheduled.',
    });
    form.reset();
  }

  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-2xl font-semibold md:text-3xl">Book an Appointment</h1>
        <p className="text-muted-foreground">Schedule a visit with one of our specialists.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg">
           <Image
            src="https://www.manipalhospitals.com/campaign/hospitals/jaipur/internal_medicine_specialities/img/im-side.webp"
            alt="Doctor with medical icons"
            width={600}
            height={400}
            className="h-full w-full object-cover"
            data-ai-hint="doctor medical"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <h2 className="text-2xl font-bold text-white">Expert Internal Medicine</h2>
            <p className="mt-2 text-white/90">
              Our experienced physicians specialize in treating acute and chronic diseases, offering personalized care to ensure optimal health outcomes.
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
            <CardDescription>Fill out the form below to book your appointment.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="doctor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Doctor</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a doctor" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Dr. Emily Carter">Dr. Emily Carter - Cardiologist</SelectItem>
                          <SelectItem value="Dr. Ben Hanson">Dr. Ben Hanson - Neurologist</SelectItem>
                          <SelectItem value="Dr. Olivia Chen">Dr. Olivia Chen - Dermatologist</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason for Visit</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Briefly describe the reason for your visit..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Book Appointment
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
