import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import RootBackgroundView from '../background/root-backgroundView';
import NavLink from './nav-link';
import classes from './styles/main-header.module.css';

const MainHeaderView = () => {
	return (
		<>
			<RootBackgroundView />

			<header className='flex justify-between items-center  text-[#ddd6cb] font-bold  py-8 px-4 md:px-[10%]'>
				<Link
					href={'/'}
					className='flex items-center justify-center gap-8 no-underline tracking-[0.15rem] uppercase font-montserrat text-2xl'
				>
					<Image
						src={logoImg}
						alt='home logo'
						priority
						className='w-20 h-20 object-contain filter drop-shadow-xl'
					/>
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul className='list-none flex gap-6 text-xl'>
						<li className='no-underline px-4 py-2 '>
							<NavLink path={'/meals'} classes={classes}>
								Browse Meals
							</NavLink>
						</li>
						<li className='no-underline px-4 py-2'>
							<NavLink path={'/community'} classes={classes}>
								Community
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeaderView;
