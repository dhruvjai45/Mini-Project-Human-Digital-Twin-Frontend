
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, HeartPulse } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const signupSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

type Role = 'patient' | 'staff';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<Role>('patient');

  useEffect(() => {
    document.documentElement.classList.add('light');
    return () => {
      document.documentElement.classList.remove('light');
    };
  }, []);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: { fullName: '', email: '', password: '' },
  });

  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    console.log('Logging in as', role, values);
    setTimeout(() => {
      toast({
        title: 'Login Successful',
        description: "Welcome back! You're being redirected.",
      });
      router.push(role === 'patient' ? '/dashboard' : '/staff/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  const handleSignup = (values: z.infer<typeof signupSchema>) => {
    setIsLoading(true);
    console.log('Signing up as', role, values);
    setTimeout(() => {
      toast({
        title: 'Account Created',
        description: "Welcome! We're redirecting you.",
      });
      router.push(role === 'patient' ? '/dashboard' : '/staff/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <Image
          src="https://i.postimg.cc/MKqvpVRM/Gemini-Generated-Image-fone5ffone5ffone.png"
          alt="Healthcare professionals"
          fill
          className="object-cover"
          data-ai-hint="doctors staff"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <HeartPulse className="mr-2 h-8 w-8" />
          HealthView Hub
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This platform has revolutionized how we manage patient care, providing seamless insights and
              improving outcomes.&rdquo;
            </p>
            <footer className="text-sm">Dr. Emily Carter</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center py-12">
        <Tabs defaultValue="patient" className="mx-auto grid w-[350px] gap-6" onValueChange={(value) => setRole(value as Role)}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
          </TabsList>
          <TabsContent value="patient">
            <AuthForm
              key="patient"
              loginSchema={loginSchema}
              signupSchema={signupSchema}
              loginForm={loginForm}
              signupForm={signupForm}
              onLogin={handleLogin}
              onSignup={handleSignup}
              isLoading={isLoading}
              role="patient"
            />
          </TabsContent>
          <TabsContent value="staff">
            <AuthForm
              key="staff"
              loginSchema={loginSchema}
              signupSchema={signupSchema}
              loginForm={loginForm}
              signupForm={signupForm}
              onLogin={handleLogin}
              onSignup={handleSignup}
              isLoading={isLoading}
              role="staff"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function AuthForm({
  loginSchema,
  signupSchema,
  loginForm,
  signupForm,
  onLogin,
  onSignup,
  isLoading,
  role,
}: {
  loginSchema: any;
  signupSchema: any;
  loginForm: any;
  signupForm: any;
  onLogin: (values: any) => void;
  onSignup: (values: any) => void;
  isLoading: boolean;
  role: Role;
}) {
  return (
    <Tabs defaultValue="login" className="w-full">
        <CardHeader className="text-center p-0 mb-6">
          <CardTitle className="text-3xl font-bold">
            {role === 'patient' ? 'Patient Portal' : 'Staff Portal'}
          </CardTitle>
          <CardDescription>
            {role === 'patient'
              ? 'Sign in or create an account to manage your health.'
              : 'Access the staff dashboard.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="signup">
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(onSignup)} className="space-y-4">
                <FormField
                  control={signupForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Account
                </Button>
              </form>
            </Form>
          </TabsContent>
        </CardContent>
    </Tabs>
  );
}
