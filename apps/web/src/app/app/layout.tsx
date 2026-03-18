'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: 'var(--text)', fontSize: 14 }}>Loading...</span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Nav */}
      <header
        style={{
          height: 60,
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background: 'linear-gradient(135deg, var(--accent), var(--cyan))',
            }}
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '-0.03em',
            }}
          >
            DevSim
          </span>
          <div style={{ display: 'flex', gap: 16, marginLeft: 16 }}>
            {(user.role === 'INSTRUCTOR' || user.role === 'HIRING_MANAGER') ? (
              <a href="/app/assessments" style={{ fontSize: 13, color: 'var(--text-light)', textDecoration: 'none' }}>
                Assessments
              </a>
            ) : (
              <a href="/app" style={{ fontSize: 13, color: 'var(--text-light)', textDecoration: 'none' }}>
                Simulations
              </a>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 13, color: 'var(--text-light)' }}>
            {user.username}
          </span>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'var(--surface-light)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--accent)',
            }}
          >
            {user.username[0].toUpperCase()}
          </div>
          <button
            onClick={logout}
            style={{
              padding: '6px 14px',
              fontSize: 12,
              fontWeight: 500,
              borderRadius: 8,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text)',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main style={{ flex: 1, padding: 32 }}>
        {children}
      </main>
    </div>
  );
}