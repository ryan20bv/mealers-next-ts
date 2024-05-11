import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './styles/community.module.css';
import ListCommunity from './listCommunity';

export default function CommunityView() {
	return (
		<>
			<header
				className={` gap-12 mt-16 mb-20 mx-auto max-w-[75rem] text-center text-2xl text-[#ddd6cb] ${classes.header} `}
			>
				<h1 className='text-[2em] font-bold mb-12'>
					One shared passion: <span className={classes.highlight}>Food</span>
				</h1>
				<p>Join our community and share your favorite recipes!</p>
			</header>
			<main
				className={`w-[90%] max-w-[40rem] text-center mx-auto my-0 ${classes.main}`}
			>
				<h2 className='text-[2rem] font-bold mb-12 text-[#ddd6cb]'>
					Community Perks
				</h2>

				<ul className={`${classes.perks} list-none my-12 mx-0 p-0`}>
					<li className='flex flex-col items-center gap-2'>
						<Image
							src={mealIcon}
							alt='A delicious meal'
							className='w-32 h-32 object-contain'
						/>
						<p className='text-2xl font-bold m-0 text-[#ddd6cb]'>
							Share & discover recipes
						</p>
					</li>
					<li className='flex flex-col items-center gap-2'>
						<Image
							src={communityIcon}
							alt='A crowd of people, cooking'
							className='w-32 h-32 object-contain'
						/>
						<p className='text-2xl font-bold m-0 text-[#ddd6cb]'>
							Find new friends & like-minded people
						</p>
					</li>
					<li className='flex flex-col items-center gap-2'>
						<Image
							src={eventsIcon}
							alt='A crowd of people at a cooking event'
							className='w-32 h-32 object-contain'
						/>
						<p className='text-2xl font-bold m-0 text-[#ddd6cb]'>
							Participate in exclusive events
						</p>
					</li>
				</ul>
			</main>
		</>
	);
}
