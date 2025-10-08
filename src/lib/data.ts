import {
  Activity,
  AlertTriangle,
  HeartPulse,
  Droplets,
  Thermometer,
  Wind,
  ShieldCheck,
  Pill,
  BookUser,
  Smartphone,
  Watch,
  Scale,
} from 'lucide-react';

export const patientData = {
  name: 'Sarah Johnson',
  age: 42,
  bloodType: 'O+',
  dob: '1982-07-15',
  email: 'sarah.j@email.com',
  phone: '555-0101',
  address: '123 Health St, Wellness City, 12345',
  emergencyContact: {
    name: 'Mark Johnson',
    relation: 'Husband',
    phone: '555-0102',
  },
  medications: ['Lisinopril (10mg)', 'Metformin (500mg)'],
  allergies: ['Penicillin'],
};

export const vitals = {
  heartRate: 72,
  spo2: 98,
  bloodPressure: '120/80',
  glucose: 95,
  respiration: 16,
};

export const vitalsHistory = [
  { time: '08:00', heartRate: 70, spo2: 99, glucose: 92 },
  { time: '09:00', heartRate: 75, spo2: 98, glucose: 105 },
  { time: '10:00', heartRate: 72, spo2: 98, glucose: 100 },
  { time: '11:00', heartRate: 78, spo2: 97, glucose: 110 },
  { time: '12:00', heartRate: 74, spo2: 98, glucose: 98 },
  { time: '13:00', heartRate: 76, spo2: 98, glucose: 115 },
  { time: '14:00', heartRate: 73, spo2: 99, glucose: 102 },
];

export const wellnessScore = 88;

export const riskLevels = [
  { name: 'Cardiovascular', level: 'Low', value: 15 },
  { name: 'Diabetes', level: 'Medium', value: 45 },
  { name: 'Respiratory', level: 'Low', value: 10 },
];

export const connectedDevices = [
  {
    id: 1,
    name: 'HealthFit Smartwatch',
    type: 'Wearable',
    status: 'Connected',
    lastSync: '2 min ago',
    icon: Watch,
  },
  {
    id: 2,
    name: 'Accu-Check Guide',
    type: 'Glucose Meter',
    status: 'Connected',
    lastSync: '15 min ago',
    icon: Smartphone,
  },
  {
    id: 3,
    name: 'CardioScale 2',
    type: 'Smart Scale',
    status: 'Disconnected',
    lastSync: '2 days ago',
    icon: Scale,
  },
];

export const medicalHistory = [
  {
    id: 1,
    date: '2023-10-26',
    event: 'Annual Check-up',
    type: 'Appointment',
    description: 'Routine physical exam. All vitals normal. Blood work ordered.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    date: '2023-08-15',
    event: 'Started Metformin',
    type: 'Medication',
    description: 'Prescribed Metformin 500mg for pre-diabetes management.',
    icon: Pill,
  },
  {
    id: 3,
    date: '2023-05-20',
    event: 'Treadmill Stress Test',
    type: 'Procedure',
    description: 'Results were negative for any signs of coronary artery disease.',
    icon: Activity,
  },
  {
    id: 4,
    date: '2023-02-10',
    event: 'Flu Diagnosis',
    type: 'Diagnosis',
    description: 'Diagnosed with Influenza A. Prescribed rest and fluids.',
    icon: Thermometer,
  },
];

export const alerts = [
  {
    id: 1,
    patient: 'Sarah Johnson',
    condition: 'High Glucose',
    level: 'High',
    value: '180 mg/dL',
    timestamp: '2023-11-15 09:30 AM',
    icon: Droplets,
  },
  {
    id: 2,
    patient: 'Sarah Johnson',
    condition: 'High Heart Rate',
    level: 'Medium',
    value: '105 bpm',
    timestamp: '2023-11-14 03:15 PM',
    icon: HeartPulse,
  },
  {
    id: 3,
    patient: 'Sarah Johnson',
    condition: 'Device Disconnected',
    level: 'Low',
    value: 'CardioScale 2',
    timestamp: '2023-11-13 08:00 AM',
    icon: AlertTriangle,
  },
  {
    id: 4,
    patient: 'Sarah Johnson',
    condition: 'Low SpO2',
    level: 'High',
    value: '92%',
    timestamp: '2023-11-12 11:45 PM',
    icon: Wind,
  },
  {
    id: 5,
    patient: 'Sarah Johnson',
    condition: 'Medication Reminder',
    level: 'Low',
    value: 'Lisinopril (10mg)',
    timestamp: '2023-11-11 08:00 AM',
    icon: Pill,
  },
];
