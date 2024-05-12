import type {Metadata} from 'next';

import {notFound} from 'next/navigation';
import {TMeal} from '@/dataTypes/datatypes';
import {getMeal} from '@/lib/mealsApi';
import MealDetailView from '@/components/views/meals/meal-detailView';

interface PropsType {
	params: {
		mealId: string;
	};
}

export async function generateMetadata({params}: PropsType): Promise<Metadata> {
	// read route params
	const meal: TMeal = getMeal(params.mealId) as TMeal;

	if (!meal) {
		notFound();
	}

	return {
		title: meal.title,
		description: meal.summary
	};
}

const MealDetailPage: React.FC<PropsType> = ({params}) => {
	const meal: TMeal = getMeal(params.mealId) as TMeal;

	if (!meal) {
		notFound();
	}

	return <MealDetailView meal={meal} />;
};

export default MealDetailPage;
