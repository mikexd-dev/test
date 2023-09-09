'use client';
import React from 'react';
import { useDisconnect } from 'wagmi';
import { signOut } from 'next-auth/react';

import SignoutButton from '@/components/auth/SignoutButton';
import GreetingCard from '@/components/example1/GreetingCard';
import NFTCard from '@/components/example2/NFTCard';

const DashboardPage = () => {
  const { disconnectAsync } = useDisconnect();
  const handleSignout = async () => {
    disconnectAsync();
    signOut({ callbackUrl: '/' });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {' '}
      <h1 className="text-5xl tracking-tight font-extrabold text-gray-300">
        Yohoo!!
      </h1>
      <h2 className="text-3xl text-gray-500">
        You have <span className="font-bold">Started</span>.
      </h2>
      <p className="text-gray-500 mb-5">
        You have been signed in{' '}
        <span className="font-semibold text-green-400 text-xl">
          successfully
        </span>
        !
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GreetingCard />
        <NFTCard />
      </div>
      <SignoutButton />
    </div>
  );
};

export default DashboardPage;
