
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const appointments = [
  {
    id: 1,
    patientName: 'Liam Johnson',
    avatar: '/avatars/01.png',
    email: 'liam@example.com',
    doctor: 'Dr. Emily Carter',
    time: '2024-08-15 10:00 AM',
    status: 'Confirmed',
  },
  {
    id: 2,
    patientName: 'Olivia Smith',
    avatar: '/avatars/02.png',
    email: 'olivia@example.com',
    doctor: 'Dr. Ben Hanson',
    time: '2024-08-15 11:30 AM',
    status: 'Confirmed',
  },
  {
    id: 3,
    patientName: 'Noah Williams',
    avatar: '/avatars/03.png',
    email: 'noah@example.com',
    doctor: 'Dr. Emily Carter',
    time: '2024-08-15 02:00 PM',
    status: 'Pending',
  },
  {
    id: 4,
    patientName: 'Emma Brown',
    avatar: '/avatars/04.png',
    email: 'emma@example.com',
    doctor: 'Dr. Olivia Chen',
    time: '2024-08-16 09:00 AM',
    status: 'Canceled',
  },
   {
    id: 5,
    patientName: 'James Wilson',
    avatar: '/avatars/05.png',
    email: 'james@example.com',
    doctor: 'Dr. Ben Hanson',
    time: '2024-08-16 01:00 PM',
    status: 'Confirmed',
  },
];

const statusVariant = {
    Confirmed: 'default',
    Pending: 'secondary',
    Canceled: 'destructive'
} as const

export default function StaffDashboardPage() {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-semibold md:text-3xl">Staff Dashboard</h1>
            <p className="text-muted-foreground">Manage patient appointments and records.</p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>A list of all scheduled appointments for today and tomorrow.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Appointment Time</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={appointment.avatar} alt="Avatar" />
                        <AvatarFallback>{appointment.patientName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <div className="font-medium">{appointment.patientName}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">{appointment.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={statusVariant[appointment.status as keyof typeof statusVariant]}>
                      {appointment.status}
                    </Badge>
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
