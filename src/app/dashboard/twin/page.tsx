import { PredictRisks } from '@/components/dashboard/twin/predict-risks';
import { PersonalizedActions } from '@/components/dashboard/twin/personalized-actions';

export default function DigitalTwinPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">Digital Twin Insights</h1>
        <p className="text-muted-foreground">
          Leverage AI to gain deeper insights into health trends and potential risks.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        <PredictRisks />
        <PersonalizedActions />
      </div>
    </div>
  );
}
