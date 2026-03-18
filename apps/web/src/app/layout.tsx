import type { Metadata } from 'next';
import { AuthProvider } from '@/lib/auth-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevSim — Real Projects. AI-Graded.',
  description:
    'AI-powered virtual job simulations for developers. Real tickets, real code, real feedback.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: 'var(--bg)',
          color: 'var(--text)',
          minHeight: '100vh',
          fontFamily: "'Instrument Sans', sans-serif",
        }}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}