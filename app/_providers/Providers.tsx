'use client';
import React from 'react';
import WagmiProvider from './WagmiProvider';
import AuthContext from './AuthContext';
import { ThemeProvider } from './ThemeProvider';

type ProviderType = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderType) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthContext>
        <WagmiProvider>{children}</WagmiProvider>
      </AuthContext>
    </ThemeProvider>
  );
};

export default Providers;
