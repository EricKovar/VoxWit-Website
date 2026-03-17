'use client';

import { FormEvent, useState } from 'react';

interface WaitlistFormProps {
  variant?: 'default' | 'compact';
}

export function WaitlistForm({ variant = 'default' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Email is required.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? 'Unable to join the waitlist right now.');
      }

      setStatus('success');
      setMessage('You are on the list! We will be in touch soon.');
      setEmail('');
    } catch (error) {
      const fallback =
        error instanceof Error ? error.message : 'Unable to join the waitlist right now.';
      setStatus('error');
      setMessage(fallback);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-3 rounded-3xl border border-white/15 bg-white/5 p-4 text-white backdrop-blur ${
        variant === 'compact' ? 'sm:flex-row sm:items-center sm:p-3' : ''
      }`}
    >
      <div className="w-full">
        <label htmlFor={variant} className="sr-only">
          Email
        </label>
        <input
          id={variant}
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-2xl border border-white/10 bg-midnight/60 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-softCyan focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center rounded-2xl bg-electricPurple px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:bg-electricPurple/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
      </button>
      {message && (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-softCyan' : 'text-red-300'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
