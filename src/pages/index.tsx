import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const Home: React.FC = () => {
    return (
        <div className="bg-blueSecondary">
            <div>Hola como estas</div>
        </div>
    );
};

export default Home;
