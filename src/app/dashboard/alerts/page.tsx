import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { alerts } from '@/lib/data';

const alertLevelVariant = {
  High: 'destructive',
  Medium: 'default',
  Low: 'secondary',
} as const;

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">Alerts & Notifications</h1>
        <p className="text-muted-foreground">A centralized panel for all health and system alerts.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Alerts</CardTitle>
          <CardDescription>Review and acknowledge all historical alerts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Condition</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="font-medium">{alert.condition}</TableCell>
                  <TableCell>
                    <Badge variant={alertLevelVariant[alert.level as keyof typeof alertLevelVariant]}>
                      {alert.level}
                    </Badge>
                  </TableCell>
                  <TableCell>{alert.value}</TableCell>
                  <TableCell>{alert.timestamp}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Acknowledge
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
