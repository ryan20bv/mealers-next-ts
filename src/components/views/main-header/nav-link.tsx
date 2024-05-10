'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface PropsType {
	classes: {
		readonly [key: string]: string;
	};
	children: React.ReactNode;
	path: string;
}

const NavLink: React.FC<PropsType> = ({classes, children, path}) => {
	const pathname = usePathname();
	return (
		<Link
			href={path}
			className={pathname.startsWith(path) ? classes.active : undefined}
		>
			{children}
		</Link>
	);
};

export default NavLink;
