import type { Metadata } from 'next';
import { Bodoni_Moda, Geist_Mono } from 'next/font/google';
import BackgroundMusic from '@/components/BackgroundMusic';
import "./globals.css"

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const bodoniModa = Bodoni_Moda({
	variable: '--font-bodoni',
	subsets: ['latin'],
	weight: '900',
});

export const metadata: Metadata = {
	title: 'Fiainana vaovao',
	description: 'Bored -> this',
    
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistMono.variable} ${bodoniModa.variable} antialiased`}
			>
				{children}
				<BackgroundMusic />
			</body>
		</html>
	);
}
