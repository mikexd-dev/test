import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateColorFromAddress(address: string) {
  // Take a slice of the wallet address to use as the color seed
  const colorSeed = address.slice(2, 8);

  // Convert the color seed to a valid hexadecimal color code
  const color = `#${colorSeed}`;

  return color;
}
