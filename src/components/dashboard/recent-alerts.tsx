import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { alerts } from '@/lib/data';

const alertLevelVariant = {
  High: 'destructive',
  Medium: 'default',
  Low: 'secondary',
} as const;

export function RecentAlerts() {
  const recentAlerts = alerts.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>A log of the most recent health alerts.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Condition</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentAlerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>
                  <div className="font-medium">{alert.condition}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={alertLevelVariant[alert.level as keyof typeof alertLevelVariant]}>
                    {alert.level}
                  </Badge>
                </TableCell>
                <TableCell>{alert.value}</TableCell>
                <TableCell className="text-right">{alert.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
