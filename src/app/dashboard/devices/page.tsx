import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { connectedDevices } from '@/lib/data';
import { cn } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';

export default function DevicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold md:text-3xl">Connected Devices</h1>
          <p className="text-muted-foreground">Manage and monitor your IoT health devices.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Device
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {connectedDevices.map((device) => (
          <Card key={device.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">{device.name}</CardTitle>
              <device.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-sm text-muted-foreground">{device.type}</p>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'h-2 w-2 rounded-full',
                    device.status === 'Connected' ? 'bg-green-500' : 'bg-gray-400'
                  )}
                />
                <p className="text-sm font-medium">{device.status}</p>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Last sync: {device.lastSync}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
