import {Suspense} from 'react';
import Link from 'next/link';
import HeaderUI from '@/components/ui/header';
import classes from './styles/meals.module.css';
import {getMeals} from '@/lib/mealsApi';
import MealsGrid from './modules/meals-grid';
import {TMeal} from '@/dataTypes/datatypes';
import LoadingView from './modules/loadingView';

async function Meals() {
	const meals: TMeal[] = (await getMeals()) as unknown as TMeal[];
	return <MealsGrid meals={meals} />;
}

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
				<Suspense fallback={<LoadingView />}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsView;
