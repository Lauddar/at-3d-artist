// ThemeContext.js
'use client';
import { createContext, useContext, useState } from 'react';
import { Changa_One } from 'next/font/google';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [backgroundColor, setBackgroundColor] = useState('bg-gradient');
  const [navigationColors, setNavigationColors] = useState({
    text: 'text-primary',
    border: 'border-primary'
  });

  return (
    <ThemeContext.Provider value={{ backgroundColor, navigationColors, setNavigationColors, setBackgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const changaOne = Changa_One({ subsets: ['latin'], weight: '400' });
