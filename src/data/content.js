import {
  CalendarCheck, ReceiptIndianRupee, Car, IdCard, Users, Handshake, Wallet, ChartColumn,
  MessageCircle, Sparkles, BookOpen, Landmark, MapPinned, ClipboardList, TrendingDown,
  TrendingUp, Calculator, Bell, Building2, UserCog, FolderLock, Fuel, Wrench, CalendarClock,
  ShieldCheck, Bus, Plane, School, Briefcase, Gem, Map as MapIcon, Users2, Smartphone, Lock, CloudUpload,
  KeyRound, DatabaseBackup, Mail, QrCode, Database, HardDrive, FileCheck2,
} from 'lucide-react'

export const STATS = [
  { value: 500, suffix: '+', label: 'Travel businesses' },
  { value: 10, prefix: '₹', suffix: 'Cr+', label: 'Billing processed' },
  { value: 25000, suffix: '+', label: 'Trips managed' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Platform uptime' },
]

// Sample customer wordmarks — swap for real client logos with permission.
export const CLIENTS = [
  'Deccan Cabs', 'Charminar Travels', 'GoConnect Tours', 'Sai Krishna Travels', 'Orange Wheels',
  'Nizam Fleet Co.', 'BluSky Holidays', 'Metro Corporate Cabs', 'Konark Tempo Travels', 'Royal Coastal Tours',
]

export const FEATURES = [
  { icon: CalendarCheck, title: 'Booking Management', desc: 'Take bookings by phone, WhatsApp or web. Assign cab and driver in two taps, with conflict checks built in.', tone: 'emerald' },
  { icon: ReceiptIndianRupee, title: 'GST Billing', desc: 'One-click GST invoices with CGST/SGST/IGST auto-split, HSN/SAC codes and toll & parking add-ons.', tone: 'teal' },
  { icon: Car, title: 'Fleet Management', desc: 'Every vehicle, its availability, odometer, service history and document expiry, on one screen.', tone: 'sky' },
  { icon: IdCard, title: 'Driver Management', desc: 'Profiles, licences, attendance, trip allowances and advances, tracked without a single register.', tone: 'violet' },
  { icon: Users, title: 'Customer CRM', desc: 'Complete trip history, outstanding balance and preferences for every corporate and retail customer.', tone: 'amber' },
  { icon: Handshake, title: 'Vendor Management', desc: 'Hotels, fuel pumps, attached vehicles and partner operators, with running ledgers for each.', tone: 'rose' },
  { icon: Wallet, title: 'Payroll', desc: 'Salary, bata, overtime and advance deductions calculated automatically at month end.', tone: 'emerald' },
  { icon: ChartColumn, title: 'Reports', desc: 'Revenue, GST, trip and profitability analytics, export-ready for your CA in one click.', tone: 'teal' },
  { icon: MessageCircle, title: 'WhatsApp Automation', desc: 'Send invoices, trip details and payment reminders on WhatsApp the moment a trip closes.', tone: 'sky' },
  { icon: Sparkles, title: 'AI Business Dashboard', desc: 'Live insights on idle vehicles, late payers and your most profitable routes, every morning.', tone: 'amber' },
]

export const MODULES = [
  { icon: CalendarCheck, name: 'Booking System', color: '#00C853' },
  { icon: ReceiptIndianRupee, name: 'GST Invoice', color: '#009688' },
  { icon: BookOpen, name: 'Customer Ledger', color: '#0EA5E9' },
  { icon: Landmark, name: 'Vendor Ledger', color: '#6366F1' },
  { icon: MapPinned, name: 'Fleet Tracker', color: '#14B8A6' },
  { icon: Wallet, name: 'Driver Payroll', color: '#F59E0B' },
  { icon: ClipboardList, name: 'Trip Sheet', color: '#8B5CF6' },
  { icon: TrendingDown, name: 'Expense Tracker', color: '#EF4444' },
  { icon: TrendingUp, name: 'Income Tracker', color: '#22C55E' },
  { icon: Calculator, name: 'Profit Calculator', color: '#0891B2' },
  { icon: Users, name: 'CRM', color: '#EC4899' },
  { icon: Bell, name: 'WhatsApp Reminder', color: '#16A34A' },
  { icon: ChartColumn, name: 'Analytics', color: '#2563EB' },
  { icon: Building2, name: 'B2B Client Management', color: '#0F766E' },
  { icon: UserCog, name: 'Employee Management', color: '#7C3AED' },
  { icon: FolderLock, name: 'Document Storage', color: '#475569' },
  { icon: Fuel, name: 'Fuel Management', color: '#EA580C' },
  { icon: Wrench, name: 'Maintenance Reminder', color: '#DB2777' },
  { icon: CalendarClock, name: 'EMI Tracker', color: '#CA8A04' },
  { icon: ShieldCheck, name: 'Insurance Reminder', color: '#059669' },
]

export const COMPARISON = [
  { row: 'Manual Billing', old: 'Handwritten bills, 15 min each', tbp: 'Auto-generated in 10 seconds' },
  { row: 'GST Invoice', old: 'Calculated by hand, error-prone', tbp: 'CGST/SGST/IGST auto-split' },
  { row: 'Customer Ledger', old: 'Scattered across notebooks', tbp: 'Live balance per customer' },
  { row: 'Driver Payroll', old: 'Excel sheets & calculators', tbp: 'One-click monthly payroll' },
  { row: 'Fleet Tracking', old: 'Phone calls to drivers', tbp: 'Real-time availability board' },
  { row: 'Reports', old: 'Days of manual compiling', tbp: 'Instant, CA-ready exports' },
  { row: 'WhatsApp', old: 'Typed out manually', tbp: 'Automatic invoice & reminders' },
  { row: 'Cloud Backup', old: 'Lost if the laptop crashes', tbp: 'Encrypted daily backups' },
  { row: 'Multi Device', old: 'Stuck on one office PC', tbp: 'Web, Android & iPhone' },
  { row: 'Admin Panel', old: 'No control over staff access', tbp: 'Role-based permissions' },
]

export const STEPS = [
  { n: '01', title: 'Create Business', desc: 'Sign up, add your GSTIN, logo and bank details. Your invoice template is ready instantly.' },
  { n: '02', title: 'Add Vehicles & Drivers', desc: 'Import your fleet and drivers from Excel, or add them one by one with documents.' },
  { n: '03', title: 'Start Booking Trips', desc: 'Create bookings, assign vehicles and track every trip from pickup to drop.' },
  { n: '04', title: 'Generate Invoice & Reports', desc: 'Close a trip and the GST invoice, WhatsApp message and ledger entry happen on their own.' },
]

export const BUSINESS_TYPES = [
  { icon: Car, title: 'Taxi Operators', desc: 'Local, outstation and rental trips with per-km and package billing.', grad: ['#00C853', '#009688'] },
  { icon: Bus, title: 'Tempo Traveller', desc: 'Group trips, multi-day tours, driver bata and night charges handled.', grad: ['#0EA5E9', '#6366F1'] },
  { icon: MapIcon, title: 'Tour Agencies', desc: 'Packages with hotels, sightseeing and vendor costs in one itinerary.', grad: ['#F59E0B', '#EA580C'] },
  { icon: Briefcase, title: 'Corporate Travel', desc: 'Monthly B2B billing, cost-centre reports and duty slips for clients.', grad: ['#0F766E', '#0F172A'] },
  { icon: School, title: 'School Transport', desc: 'Route-wise student billing, term fees and bus attendance.', grad: ['#EAB308', '#F59E0B'] },
  { icon: Users2, title: 'Employee Transport', desc: 'Shift rosters, pick-up routes and trip-wise vendor settlement.', grad: ['#8B5CF6', '#EC4899'] },
  { icon: Plane, title: 'Airport Taxi', desc: 'Flight-linked pickups, waiting charges and instant fare quotes.', grad: ['#06B6D4', '#0284C7'] },
  { icon: Gem, title: 'Luxury Fleet', desc: 'Premium sedans, wedding cars and chauffeur services billed beautifully.', grad: ['#A16207', '#1E293B'] },
]

export const PRICING = [
  {
    name: 'Starter', price: 999, period: '/month',
    blurb: 'For owner-operators getting off paper billing.',
    features: ['Basic billing', 'Up to 5 vehicles', 'GST invoice', 'Customer CRM', 'WhatsApp sharing'],
    cta: 'Book Demo',
  },
  {
    name: 'Professional', price: 2499, period: '/month', highlight: true,
    blurb: 'For growing agencies running a full fleet.',
    features: ['Unlimited invoices', 'Unlimited vehicles', 'GST filing reports', 'Advanced reports', 'Driver payroll', 'Customer CRM', 'WhatsApp automation', 'Cloud backup', 'AI dashboard', 'Priority support'],
    cta: 'Book Demo',
  },
  {
    name: 'Enterprise', price: null, period: '',
    blurb: 'For multi-branch operators and corporate transport.',
    features: ['Everything in Professional', 'White label branding', 'Multi-branch management', 'API access', 'Dedicated success manager', 'Custom onboarding'],
    cta: 'Talk to Sales',
  },
]

// Sample testimonials — replace with verified customer quotes before launch.
export const TESTIMONIALS = [
  { name: 'Ravi Kumar Reddy', role: 'Owner, Deccan Cabs', city: 'Hyderabad', fleet: '42 vehicles', quote: 'We used to spend the first week of every month on billing. Now invoices go out on WhatsApp the moment a trip closes. Our collections improved within two months.' },
  { name: 'Priya Venkatesh', role: 'Director, BluSky Holidays', city: 'Chennai', fleet: '18 vehicles', quote: 'The GST reports alone are worth it. My CA gets a clean export every month, and I finally know which tour packages actually make money.' },
  { name: 'Mohammed Irfan', role: 'Founder, Nizam Fleet Co.', city: 'Hyderabad', fleet: '65 vehicles', quote: 'Driver payroll with bata and advances was a nightmare in Excel. Travel Bill Pro calculates it in one click, and drivers trust the numbers.' },
  { name: 'Sandeep Patil', role: 'Partner, Konark Tempo Travels', city: 'Pune', fleet: '24 vehicles', quote: 'Insurance and permit reminders saved us from two expensive fines last year. The mobile app means I run the business even when travelling.' },
  { name: 'Anitha Rao', role: 'Operations Head, Metro Corporate Cabs', city: 'Bengaluru', fleet: '110 vehicles', quote: 'Monthly B2B billing for 30 corporate clients used to need two accountants. Now it takes one person an afternoon.' },
  { name: 'Harpreet Singh', role: 'Owner, Royal Coastal Tours', city: 'Goa', fleet: '15 vehicles', quote: 'Setup took one evening. The team imported all our vehicles from Excel on the demo call itself. Genuinely the easiest software we have used.' },
]

export const FAQ = [
  { q: 'Is GST included in the pricing?', a: 'Plan prices are exclusive of 18% GST, which is added at checkout and shown on your invoice. GST billing itself (CGST, SGST, IGST split, HSN/SAC codes and GSTR-ready reports) is included in every plan.' },
  { q: 'Can I use Travel Bill Pro on mobile?', a: 'Yes. Travel Bill Pro runs in any browser and has dedicated Android and iPhone apps. Owners, office staff and drivers each get a view designed for their role.' },
  { q: 'Are invoices unlimited?', a: 'The Professional and Enterprise plans include unlimited invoices and unlimited vehicles. Starter covers up to 5 vehicles with all the invoices you need for them.' },
  { q: 'Can multiple users work at the same time?', a: 'Yes. Add accountants, booking staff and branch managers, each with role-based permissions so they only see what they need.' },
  { q: 'Is my data backed up to the cloud?', a: 'All data is stored in the cloud with automatic daily encrypted backups. Even if your office computer fails, nothing is lost.' },
  { q: 'Can I send invoices on WhatsApp?', a: 'Yes. Invoices, trip details and payment reminders can be sent on WhatsApp in one tap, or automatically when a trip is closed.' },
  { q: 'Does it handle driver payroll?', a: 'Yes. Salary, daily bata, overtime, night charges and advance deductions are calculated automatically from trip and attendance data.' },
  { q: 'Is a free demo available?', a: 'Absolutely. Book a free 30-minute live demo and our team will walk you through the product using your own business scenarios.' },
  { q: 'How secure is my business data?', a: 'Data is encrypted in transit (TLS) and at rest (AES-256), access is role-based, and every login is protected. Your data is never shared or sold.' },
]

export const INTEGRATIONS = [
  { icon: QrCode, name: 'UPI', desc: 'Dynamic QR on every invoice' },
  { icon: MessageCircle, name: 'WhatsApp', desc: 'Invoices & reminders' },
  { icon: Mail, name: 'Email', desc: 'Branded invoice emails' },
  { icon: FileCheck2, name: 'GST', desc: 'GSTR-1 & 3B ready data' },
  { icon: Database, name: 'Supabase', desc: 'Realtime, secure database' },
  { icon: HardDrive, name: 'Cloud Storage', desc: 'Documents & RC copies' },
]

export const SECURITY = [
  { icon: Lock, title: 'AES-256 Encryption', desc: 'Bank-grade encryption at rest and TLS 1.3 in transit.' },
  { icon: CloudUpload, title: 'Cloud Backup', desc: 'Your data lives in secure Indian-region cloud servers.' },
  { icon: KeyRound, title: 'Role Based Access', desc: 'Owners, accountants and staff see only what they should.' },
  { icon: DatabaseBackup, title: 'Daily Backup', desc: 'Automatic daily snapshots with point-in-time restore.' },
]

export const TIMELINE = [
  { year: '2021', title: 'The spark', desc: 'Our founders watched a Hyderabad cab operator lose a full week each month to handwritten bills and GST calculations.' },
  { year: '2022', title: 'First 50 operators', desc: 'Launched GST billing and trip sheets with a handful of local taxi businesses as design partners.' },
  { year: '2023', title: 'Fleet & payroll', desc: 'Added driver payroll, fleet document reminders and WhatsApp automation based on customer requests.' },
  { year: '2024', title: '500+ businesses', desc: 'Crossed ₹10 crore in billing processed across tour agencies, corporate transport and fleet owners.' },
  { year: '2025', title: 'AI dashboard', desc: 'Introduced AI insights that flag idle vehicles, late payers and most profitable routes.' },
]

export const MOBILE_FEATURES = [
  { icon: CalendarCheck, label: 'Booking' },
  { icon: MapPinned, label: 'Driver Trips' },
  { icon: ReceiptIndianRupee, label: 'Invoice' },
  { icon: QrCode, label: 'Payment' },
  { icon: Smartphone, label: 'Dashboard' },
]
