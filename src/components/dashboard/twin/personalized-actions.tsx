'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { patientData, vitals, wellnessScore, riskLevels, alerts } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export function PersonalizedActions() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGetRecommendations() {
    setIsLoading(true);
    setResult(null);
    setError(null);

    // Mock API call
    setTimeout(() => {
        setResult(`- **Dietary Adjustments:** Reduce sodium and sugar intake. Focus on a diet rich in whole grains, lean proteins, and vegetables.
- **Physical Activity:** Aim for 150 minutes of moderate-intensity exercise per week, such as brisk walking or cycling.
- **Medication Adherence:** Continue taking Lisinopril and Metformin as prescribed. Set reminders to ensure consistency.
- **Follow-up:** Schedule a follow-up appointment with your primary care physician in 3 months to review progress.`);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Personalized Recommendations</CardTitle>
        <CardDescription>
          Generate AI-driven, actionable recommendations based on the patient's current health data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            This action will use the current mock data for{' '}
            <span className="font-semibold text-foreground">{patientData.name}</span> to generate personalized
            recommendations.
          </p>
          <ul className="list-disc pl-5">
            <li>Wellness Score: {wellnessScore}</li>
            <li>Vitals, Risks, and Recent Alerts will be included.</li>
          </ul>
        </div>
        <Button onClick={handleGetRecommendations} disabled={isLoading} className="mt-4">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Generate Actions
        </Button>
        {(result || error) && (
          <div className="mt-6">
            <Separator className="my-4" />
            <h3 className="text-lg font-semibold">AI Recommendations</h3>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {result && (
              <div className="mt-2 space-y-4 text-sm">
                <p className="text-muted-foreground whitespace-pre-line">{result}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
