import Link from 'next/link';
import ImageSlideshow from './imageSlideShow';

import classes from './styles/homeView.module.css';

const HomeView = () => {
	return (
		<>
			<header className='flex gap-12 mx-auto my-12 w-[90%] max-w-[75rem]'>
				<div className='w-[40rem] h-[25rem]'>
					<ImageSlideshow />
				</div>
				<div className={classes.home}>
					<div className='text-[#ddd6cb] text-2xl '>
						<h1 className='text-[2rem] font-bold tracking-[0.15rem] bg-clip-text uppercase  my-6 leading-8 w-[80%]'>
							NextLevel Food for NextLevel Foodies
						</h1>
						<p className='font-Quicksand '>
							Taste & share food from all over the world.
						</p>
					</div>
					<div className='text-2xl flex gap-4 mt-4 text-[#ddd6cb] font-bold no-underline '>
						<Link
							href='/community'
							className='inline-block rounded-lg px-4 py-2 bg-transparent font-normal pl-0 text-[#ff9b05]'
						>
							Join the Community
						</Link>
						<Link href='/meals' className='inline-block rounded-lg px-4 py-2 '>
							Explore Meals
						</Link>
					</div>
				</div>
			</header>
			<main>
				<section className='flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center font-normal'>
					<h2 className='text-4xl font-bold my-10'>How it works</h2>
					<p className='my-4'>
						NextLevel Food is a platform for foodies to share their favorite recipes
						with the world. It&apos;s a place to discover new dishes, and to connect
						with other food lovers.
					</p>
					<p className='my-4'>
						NextLevel Food is a place to discover new dishes, and to connect with
						other food lovers.
					</p>
				</section>

				<section className='flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center'>
					<h2 className='text-4xl font-bold my-10'>Why NextLevel Food?</h2>
					<p className='my-4'>
						NextLevel Food is a platform for foodies to share their favorite recipes
						with the world. It&apos;s a place to discover new dishes, and to connect
						with other food lovers.
					</p>
					<p className='my-4'>
						NextLevel Food is a place to discover new dishes, and to connect with
						other food lovers.
					</p>
				</section>
			</main>
		</>
	);
};

export default HomeView;
