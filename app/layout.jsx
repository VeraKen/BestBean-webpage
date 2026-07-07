import './globals.css';

export const metadata = {
  title: 'BestBean Ltd | Business Consulting, AI & Educational Technology',
  description:
    'BestBean Ltd delivers business consulting, educational technology, AI solutions, digital transformation, ExamSphere, and education device management platforms for schools, enterprises, and government.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
