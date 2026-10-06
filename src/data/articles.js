// Blog / guides. Each article answers real search questions, links to the keyword
// landing pages (internal linking) and carries Article + FAQPage + BreadcrumbList schema.

export const ARTICLES = [
  {
    path: '/blog/what-is-travel-billing-software',
    title: 'What Is Travel Billing Software? A Complete Guide for Indian Travel Businesses',
    metaTitle: 'What Is Travel Billing Software? Complete Guide (2026)',
    metaDescription: 'What travel billing software is, how it works, key features and benefits for travel agencies and cab operators in India, and how to choose the right one.',
    excerpt: 'How travel billing software works, which features matter for Indian travel businesses, and how it saves days of manual billing every month.',
    published: '2026-10-06',
    readMins: 7,
    sections: [
      {
        h2: 'Travel billing software, defined',
        paras: [
          'Travel billing software is an application that turns trip and booking data into invoices automatically. Instead of writing bills by hand or copying trips into Excel, the software calculates the fare, adds extra charges such as tolls and driver allowance, applies GST and produces a numbered tax invoice ready to send.',
          'For travel agencies, cab operators, tour companies and fleet owners, it is the bridge between running trips and getting paid for them.',
        ],
      },
      {
        h2: 'How travel billing software works',
        paras: ['Most modern systems follow the same flow, and the best ones connect every step so that data is entered only once.'],
        bullets: [
          'A booking is created with the customer, route, vehicle, driver and agreed rate.',
          'During or after the trip, kilometres, hours, tolls, parking and allowances are recorded.',
          'The software calculates the fare using the right model: per-km, hourly, package or monthly contract.',
          'GST is applied based on the service and place of supply, and an invoice number is assigned.',
          'The invoice is shared with the customer on WhatsApp or email, often with a UPI payment QR code.',
          'Payments are recorded against invoices, and overdue bills trigger reminders.',
          'All of it flows into ledgers, profit reports and GST summaries.',
        ],
      },
      {
        h2: 'Key features to look for',
        paras: ['Not every invoicing tool understands travel. These are the features that matter most for Indian travel businesses:'],
        bullets: [
          'GST invoicing with automatic CGST, SGST or IGST and SAC codes',
          'Multiple billing models: per-km, hourly, package, outstation and monthly corporate billing',
          'Extra charges: tolls, parking, night charges and driver bata',
          'Booking and trip sheet integration so trips are never billed twice or missed',
          'Payment tracking, receipts, credit notes and reminders',
          'WhatsApp and email sharing with UPI QR codes',
          'Customer, vendor and agent ledgers',
          'GST and profit reports your accountant can use directly',
          'Cloud access from desktop, tablet and mobile with daily backups',
        ],
      },
      {
        h2: 'Benefits for travel agencies and cab operators',
        paras: [
          'The biggest benefit is time. Businesses that move from manual billing typically save several days of work every month and send invoices the same day a trip ends, which shortens the time it takes to get paid.',
          'Accuracy improves too. GST is calculated the same way every time, invoice numbers never repeat and every trip is billed. Owners also get visibility they never had before: revenue, outstanding payments and profit per vehicle on a single screen.',
        ],
      },
      {
        h2: 'Travel billing software vs generic accounting software',
        paras: ['Generic accounting tools are built for shops and service firms. They record invoices but do not understand trips, vehicles, drivers, kilometres or tolls. Travel billing software starts from the trip, so the invoice is a by-product of work you already record. Many businesses use both: travel billing software for operations and billing, and an accountant\'s package for final books.'],
      },
      {
        h2: 'How to get started',
        paras: ['Start by listing how you bill today: your rates, billing models, GST registration and invoice format. Then book a demo with a provider and ask them to bill one of your real trips. With Travel Bill Pro, most businesses import their vehicles and customers from Excel and send their first GST invoice within 30 minutes.'],
      },
    ],
    faq: [
      { q: 'Who needs travel billing software?', a: 'Travel agencies, tour operators, taxi and cab operators, tempo traveller owners, corporate transport providers and fleet owners who issue invoices for trips, tours or vehicle rentals.' },
      { q: 'Does travel billing software handle GST?', a: 'Good travel billing software applies GST automatically, choosing CGST and SGST or IGST from the place of supply and adding SAC codes and mandatory invoice details.' },
      { q: 'How much does travel billing software cost?', a: 'Pricing varies by fleet size and features. Travel Bill Pro starts at ₹999 per month, with a Professional plan at ₹2,499 per month and custom Enterprise pricing.' },
    ],
    related: ['/travel-billing-software', '/travel-billing-management-software', '/blog/gst-invoice-format-for-travel-agencies'],
  },
  {
    path: '/blog/how-to-choose-travel-agency-software',
    title: 'How to Choose Travel Agency Software: 12-Point Checklist',
    metaTitle: 'How to Choose Travel Agency Software: 12-Point Checklist',
    metaDescription: 'A practical 12-point checklist to choose travel agency software in India: billing, GST, bookings, CRM, mobile access, security, pricing and support.',
    excerpt: 'A practical checklist to compare travel agency software, from GST billing and bookings to mobile access, security and real cost.',
    published: '2026-10-06',
    readMins: 6,
    sections: [
      {
        h2: 'Why the choice matters',
        paras: ['Travel agency software becomes the backbone of your daily work. The right system saves hours every day and grows with you. The wrong one creates double work, frustrated staff and messy data that is hard to move later. Use this checklist when you compare options.'],
      },
      {
        h2: 'The 12-point checklist',
        paras: ['Score each option against these points during the demo, using your own real trips and invoices.'],
        bullets: [
          '1. Fits your business model: tours, cabs, corporate transport or a mix.',
          '2. Booking management with vehicle and driver assignment and clash checks.',
          '3. GST-compliant invoicing with CGST, SGST and IGST handled automatically.',
          '4. Supports your billing styles: per-km, hourly, packages and monthly B2B statements.',
          '5. Customer CRM with trip history and outstanding balances.',
          '6. Vendor management for hotels, fuel and attached vehicles.',
          '7. Payment tracking, reminders and UPI collection.',
          '8. Works on desktop, tablet and mobile without installation.',
          '9. Role-based access for staff and support for multiple branches.',
          '10. Reports: revenue, profit per vehicle and GST summaries.',
          '11. Security: encryption, daily backups and data export when you need it.',
          '12. Transparent pricing, quick onboarding and support in your language.',
        ],
      },
      {
        h2: 'Questions to ask in a demo',
        paras: ['Ask the vendor to bill one of your real trips end to end. Ask how long it takes to import your existing customers and vehicles, what happens to your data if you leave, how support works and whether there are setup fees. A good provider will answer clearly and show, not just tell.'],
      },
      {
        h2: 'Red flags to avoid',
        bullets: [
          'GST handled manually or through workarounds',
          'No mobile access, or a separate paid app for every user',
          'Long contracts with no trial or demo on your own data',
          'No way to export your data',
          'Support only by email with slow responses',
        ],
      },
      {
        h2: 'Making the switch',
        paras: ['Plan a short transition: import customers, vehicles and drivers, set up your invoice series, then run new bookings in the new system from a chosen date. Keep old records in Excel for reference. Most small agencies are fully switched over within a week.'],
      },
    ],
    faq: [
      { q: 'What is the most important feature in travel agency software?', a: 'For most Indian agencies it is GST-compliant billing connected to bookings, because that is where most time is lost and most errors happen.' },
      { q: 'Should travel agency software be cloud-based?', a: 'Yes. Cloud software works on any device, needs no installation and keeps data backed up, so the business is not tied to one office computer.' },
      { q: 'How long does it take to set up?', a: 'With Travel Bill Pro, basic setup takes about ten minutes, and most businesses import their data and send their first invoice within 30 minutes.' },
    ],
    related: ['/travel-agency-software', '/travel-billing-software', '/pricing'],
  },
  {
    path: '/blog/gst-invoice-format-for-travel-agencies',
    title: 'GST Invoice Format for Travel Agencies and Cab Operators: Mandatory Fields',
    metaTitle: 'GST Invoice Format for Travel Agencies & Cab Operators',
    metaDescription: 'The mandatory fields on a GST tax invoice for travel agencies and cab operators in India, CGST vs SGST vs IGST, and common invoicing mistakes to avoid.',
    excerpt: 'The fields every GST tax invoice for travel and cab services must include, when to charge CGST and SGST vs IGST, and the most common mistakes.',
    published: '2026-10-06',
    readMins: 6,
    sections: [
      {
        h2: 'Why the invoice format matters',
        paras: ['A tax invoice is a legal document. For your business customers, a correct GST invoice is what allows them to claim input tax credit where eligible, so missing or wrong details lead to rejected bills and delayed payments. A consistent format also makes your monthly GST filing far simpler.'],
      },
      {
        h2: 'Mandatory fields on a GST tax invoice',
        paras: ['Under the GST invoice rules, a tax invoice for services should include the following details:'],
        bullets: [
          'Your business name, address and GSTIN',
          'A unique, consecutive invoice number for the financial year',
          'Date of issue',
          'Customer name and address, and their GSTIN if they are registered',
          'Place of supply (state name and code)',
          'Description of the service and the SAC code',
          'Taxable value after any discount',
          'Rate and amount of tax: CGST and SGST, or IGST',
          'Total invoice value',
          'Signature or digital signature of the supplier',
        ],
      },
      {
        h2: 'CGST and SGST vs IGST',
        paras: [
          'When your business and the place of supply are in the same state, the tax is split equally into CGST and SGST. When the place of supply is in a different state, a single IGST is charged instead.',
          'For passenger transport and tour services, the place of supply can depend on the type of service and the customer, so it is worth confirming the rule for your main services with your chartered accountant once and then letting your software apply it consistently.',
        ],
      },
      {
        h2: 'GST rates for travel services',
        paras: ['GST rates for rent-a-cab, passenger transport and tour operator services depend on the type of service and whether input tax credit is claimed, and they have been revised over time, including in the GST rate changes of 2025. Always confirm the current applicable rate for your services with your chartered accountant. Travel Bill Pro lets you set the rate per service once, so every invoice uses it correctly.'],
      },
      {
        h2: 'Common invoicing mistakes',
        bullets: [
          'Charging CGST and SGST on an inter-state supply, or IGST on an intra-state one',
          'Duplicate or skipped invoice numbers',
          'Missing customer GSTIN on B2B invoices',
          'Toll and parking reimbursements recorded inconsistently',
          'Invoices issued weeks after the trip, delaying payment',
        ],
      },
      {
        h2: 'Automating GST invoices',
        paras: ['Travel billing software removes these errors by design. Travel Bill Pro fills your business details, assigns the next invoice number, chooses CGST and SGST or IGST from the place of supply, adds SAC codes and produces a ready-to-send tax invoice with a UPI QR code as soon as the trip ends.'],
      },
    ],
    faq: [
      { q: 'What is the SAC code used for cab services?', a: 'Rental of passenger vehicles with an operator is commonly invoiced under SAC 996601, and tour operator services under the 9985 group. Confirm the exact code for your services with your chartered accountant.' },
      { q: 'Can I issue one GST invoice for a month of trips?', a: 'Yes. Many corporate clients prefer a single monthly invoice listing all trips. It must still contain all mandatory fields and the correct tax for the period.' },
      { q: 'Do I need software to make GST invoices?', a: 'It is not legally required, but travel billing software prevents common errors, keeps invoice numbering consistent and saves significant time each month.' },
    ],
    related: ['/travel-billing-software', '/blog/what-is-travel-billing-software', '/features'],
  },
  {
    path: '/blog/travel-billing-software-vs-excel',
    title: 'Travel Billing Software vs Excel: When to Make the Switch',
    metaTitle: 'Travel Billing Software vs Excel: When to Switch',
    metaDescription: 'Excel or travel billing software? Compare time, accuracy, GST, payments and growth, and learn the signs your travel business has outgrown spreadsheets.',
    excerpt: 'An honest comparison of Excel and travel billing software, and the clear signs your travel business has outgrown spreadsheets.',
    published: '2026-10-06',
    readMins: 5,
    sections: [
      {
        h2: 'Why most travel businesses start with Excel',
        paras: ['Excel is familiar, flexible and already installed. For a business with two or three vehicles it can work well enough. The problems appear as trips, customers and staff grow, and the spreadsheet becomes the bottleneck.'],
      },
      {
        h2: 'Excel vs travel billing software at a glance',
        table: {
          head: ['Area', 'Excel', 'Travel billing software'],
          rows: [
            ['Creating an invoice', 'Copy trip details by hand', 'Generated from the trip automatically'],
            ['GST calculation', 'Manual formulas, easy to break', 'Applied automatically by place of supply'],
            ['Invoice numbering', 'Duplicates and gaps happen', 'Unique, consecutive by design'],
            ['Sending invoices', 'Export, attach, send manually', 'WhatsApp or email in one tap with UPI QR'],
            ['Tracking payments', 'Separate sheet, often outdated', 'Live outstanding per customer with reminders'],
            ['Multiple users', 'Conflicting copies of the file', 'Shared cloud data with role-based access'],
            ['Mobile access', 'Difficult on a phone', 'Works on desktop, tablet and mobile'],
            ['Backup', 'Lost if the laptop fails', 'Automatic daily cloud backup'],
          ],
        },
      },
      {
        h2: 'Signs you have outgrown Excel',
        bullets: [
          'Month-end billing takes more than a day',
          'You have found duplicate invoice numbers or GST errors',
          'You do not know your outstanding amount without checking several files',
          'Customers complain about late or incorrect bills',
          'More than one person edits the billing file',
          'You cannot see profit per vehicle or per customer',
        ],
      },
      {
        h2: 'What switching actually involves',
        paras: ['Moving to travel billing software is simpler than most owners expect. Customers, vehicles and drivers can be imported from your existing Excel sheets, your invoice format is set up once, and new trips are billed in the software from a chosen start date. Your old spreadsheets stay available for reference.'],
      },
      {
        h2: 'The real cost comparison',
        paras: ['Excel looks free, but the hours spent on manual billing, the cost of GST mistakes and the money tied up in late payments add up quickly. For most travel businesses, software that costs a few thousand rupees a month pays for itself through faster collections alone.'],
      },
    ],
    faq: [
      { q: 'Can I import my Excel data into travel billing software?', a: 'Yes. Travel Bill Pro imports customers, vehicles and drivers from Excel, and the team can help with the import during your demo.' },
      { q: 'Is Excel good enough for GST billing?', a: 'Excel can produce invoices, but GST is calculated by manual formulas that are easy to break. Dedicated software applies GST consistently and keeps numbering compliant.' },
      { q: 'How quickly can I switch from Excel?', a: 'Most small travel businesses switch within a week, and many send their first invoice from the software on the same day they sign up.' },
    ],
    related: ['/travel-billing-management-software', '/travel-billing-software', '/blog/what-is-travel-billing-software'],
  },
]
