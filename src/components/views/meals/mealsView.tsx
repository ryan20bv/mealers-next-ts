import Link from 'next/link';
import HeaderUI from '@/components/ui/header';
import classes from './styles/meals.module.css';

const MealsView = () => {
	return (
		<>
			<HeaderUI classes={classes}>
				<h1 className='text-[2em] font-bold mb-12'>
					Delicious meals, created <span className={classes.highlight}>by you</span>
				</h1>
				<p className='m-0'>
					Choose your favorite recipe. It is easy to cook and fun!
				</p>
				<p className={`${classes.cta} m-0`}>
					<Link
						href='/meals/share'
						className='inline-block mt-4 px-4 py-2 rounded-lg text-[#ddd6cb] font-bold no-underline'
					>
						Share your favorite Recipe
					</Link>
				</p>
			</HeaderUI>
			<main className={classes.main}>
				{/* <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
					<Meals />
				</Suspense> */}
			</main>
		</>
	);
};

export default MealsView;
