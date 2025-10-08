'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import type { PredictHealthRisksOutput } from '@/ai/flows/predict-health-risks';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const riskSchema = z.object({
  patientHistory: z.string().min(10, 'Patient history is required.'),
  currentVitals: z.string().min(10, 'Current vitals are required.'),
  lifestyleFactors: z.string().min(10, 'Lifestyle factors are required.'),
});

const defaultValues = {
  patientHistory: 'Diagnosed with Type 2 Diabetes in 2021. History of hypertension. Non-smoker.',
  currentVitals: 'BP: 130/85 mmHg, Heart Rate: 78 bpm, Glucose: 140 mg/dL.',
  lifestyleFactors: 'Sedentary lifestyle with minimal exercise. Diet includes processed foods.',
};

const riskLevelVariant = {
  high: 'destructive',
  medium: 'default',
  low: 'secondary',
} as const;

export function PredictRisks() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictHealthRisksOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof riskSchema>>({
    resolver: zodResolver(riskSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof riskSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);

    // Mock API call
    setTimeout(() => {
        setResult({
          riskSummary:
            'Based on the provided data, the patient has a medium risk of cardiovascular events due to hypertension and a sedentary lifestyle. The risk of diabetes-related complications is also elevated.',
          recommendations:
            'Recommend a balanced diet with reduced processed foods, and incorporating at least 30 minutes of moderate exercise daily. Continue monitoring blood pressure and glucose levels closely.',
          riskLevel: 'medium',
        });
      setIsLoading(false);
    }, 1000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Predict Health Risks</CardTitle>
        <CardDescription>Use AI to analyze patient data and predict potential health risks.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="patientHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient History</FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentVitals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Vitals</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lifestyleFactors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lifestyle Factors</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analyze Risks
            </Button>
          </form>
        </Form>
        {(result || error) && (
          <div className="mt-6">
            <Separator className="my-4" />
            <h3 className="text-lg font-semibold">Analysis Result</h3>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {result && (
              <div className="mt-2 space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">Overall Risk Level</h4>
                  <Badge variant={riskLevelVariant[result.riskLevel]}>{result.riskLevel}</Badge>
                </div>
                <div>
                  <h4 className="font-semibold">Risk Summary</h4>
                  <p className="text-muted-foreground">{result.riskSummary}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Recommendations</h4>
                  <p className="text-muted-foreground">{result.recommendations}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
