import React from 'react';
import { Card } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const GreetingGetter = dynamic(() => import('./GreetingGetter'), {
  ssr: false,
});

const GreetingSetter = dynamic(() => import('./GreetingSetter'), {
  ssr: false,
});

const GreetingCard = () => {
  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-400">
        Example 1: Greeting Card
      </h3>
      <GreetingGetter />
      <GreetingSetter />
    </Card>
  );
};

export default GreetingCard;
