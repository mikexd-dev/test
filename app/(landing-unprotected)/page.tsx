import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="h-full relative">
      <Navbar title="title" />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-400">
          Welcome
        </h1>
        <h2 className="text-3xl tracking-tight text-gray-500">
          Lets get started, shall we?
        </h2>
        <Link href="/auth">
          <Button variant="default">Get Started</Button>
        </Link>
      </main>
    </div>
  );
}
