import type {Metadata} from 'next';
import './globals.css';

import MainHeaderView from '@/components/views/main-header/main-header';

export const metadata: Metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<MainHeaderView />
				{children}
			</body>
		</html>
	);
}
