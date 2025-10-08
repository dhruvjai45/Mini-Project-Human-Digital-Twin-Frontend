import { HeartPulse, Droplets, Wind, Activity } from 'lucide-react';
import { StatCard } from '@/components/dashboard/stat-card';
import { VitalsLineChart } from '@/components/charts/vitals-line-chart';
import { RecentAlerts } from '@/components/dashboard/recent-alerts';
import { patientData, vitals } from '@/lib/data';
import { PatientSummary } from '@/components/dashboard/patient-summary';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold md:text-3xl">
          Welcome back, {patientData.name.split(' ')[0]}
        </h1>
        <p className="text-muted-foreground">Here&apos;s a look at your health today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Heart Rate"
          value={`${vitals.heartRate} bpm`}
          icon={HeartPulse}
          description="Normal"
        />
        <StatCard
          title="Blood Oxygen"
          value={`${vitals.spo2}%`}
          icon={Wind}
          description="Excellent"
        />
        <StatCard
          title="Blood Pressure"
          value={vitals.bloodPressure}
          icon={Activity}
          description="Normal"
        />
        <StatCard
          title="Glucose"
          value={`${vitals.glucose} mg/dL`}
          icon={Droplets}
          description="In range"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <VitalsLineChart />
        <PatientSummary />
      </div>

      <div className="grid gap-4">
        <RecentAlerts />
      </div>
    </div>
  );
}
