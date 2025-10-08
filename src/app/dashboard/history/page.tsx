import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { medicalHistory } from '@/lib/data';

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">Medical History</h1>
        <p className="text-muted-foreground">An interactive timeline of your health events.</p>
      </div>

      <div className="relative pl-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-border">
        {medicalHistory.map((item, index) => (
          <div key={item.id} className="relative mb-8 flex items-start">
            <div className="absolute left-0 top-1.5 -translate-x-1/2 rounded-full bg-background p-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
            </div>
            <Card className="ml-8 w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{item.event}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <CardDescription>{item.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
