'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export function PatientSummary() {
  const summary = "Sarah Johnson, a 42-year-old female with a history of Type 2 Diabetes and Hypertension, maintains a stable condition. Current vitals are within normal ranges. Her wellness score is 88, with a medium risk for diabetes-related complications. Overall, her health is well-managed with current medications.";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5"/>
            AI Patient Summary
        </CardTitle>
        <CardDescription>A concise summary of the patient's current health status.</CardDescription>
      </CardHeader>
      <CardContent>
          <p className="text-sm text-muted-foreground">{summary}</p>
      </CardContent>
    </Card>
  );
}
