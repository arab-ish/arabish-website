import './globals.css';

export const metadata = {
  title: 'Arab-ish Mediterranean Fusion | Madison WI Food Truck & Catering',
  description: 'Arab-ish is a Mediterranean fusion food truck in Madison, Wisconsin serving bold Middle Eastern-inspired comfort food, catering, wraps, loaded fries, bowls, and rotating specials.',
  keywords: [
    'Madison WI food truck',
    'Mediterranean food Madison',
    'Middle Eastern food Madison',
    'Mediterranean catering Madison',
    'food truck catering Madison',
    'gyro near me',
    'Mediterranean fusion',
    'Arab-ish'
  ],
  metadataBase: new URL('https://arab-ish.com'),
  openGraph: {
    title: 'Arab-ish Mediterranean Fusion',
    description: 'Familiar food with bold Mediterranean soul. Madison, Wisconsin food truck and catering.',
    url: 'https://arab-ish.com',
    siteName: 'Arab-ish Mediterranean Fusion',
    images: [{ url: '/arabish-logo.png', width: 1717, height: 785, alt: 'Arab-ish Mediterranean Fusion logo' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
