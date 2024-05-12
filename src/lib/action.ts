'use server';
import {redirect} from 'next/navigation';

import {saveMeal} from './mealsApi';
import {IShareMealActionType} from '@/dataTypes/datatypes';
import {revalidatePath} from 'next/cache';

function isInvalidText(text: string): boolean {
	return !text || text.trim() === '';
}

export const shareMealAction = async (
	prevState: IShareMealActionType,
	formData: FormData
) => {
	if (!formData) {
		return {
			message: 'Invalid input',
			errorData: {
				isTitleInvalid: true,
				isSummaryInvalid: true,
				instructionsInvalid: true,
				isCreatorInvalid: true,
				isCreatorEmailInvalid: true,
				isSlugInvalid: true,
				isImageInvalid: true
			}
		};
	}

	const meal = {
		title: formData.get('title') as string,
		image: formData.get('image') as any,
		summary: formData.get('summary') as string,
		instructions: formData.get('instructions') as string,
		creator: formData.get('name') as string,
		creator_email: formData.get('email') as string,
		slug: formData.get('title') as string
	};

	const isTitleInvalid = isInvalidText(meal.title);
	const isSummaryInvalid = isInvalidText(meal.summary);
	const instructionsInvalid = isInvalidText(meal.instructions);
	const isCreatorInvalid = isInvalidText(meal.creator);
	const isCreatorEmailInvalid =
		isInvalidText(meal.creator_email) || !meal.creator_email.includes('@');
	const isSlugInvalid = isInvalidText(meal.slug);
	const isImageInvalid = !meal.image || meal.image.size === 0;

	if (
		isTitleInvalid ||
		isSummaryInvalid ||
		instructionsInvalid ||
		isCreatorInvalid ||
		isCreatorEmailInvalid ||
		isSlugInvalid ||
		isImageInvalid
	) {
		// throw new Error('Invalid input');
		const errorData = {
			isTitleInvalid,
			isSummaryInvalid,
			instructionsInvalid,
			isCreatorInvalid,
			isCreatorEmailInvalid,
			isSlugInvalid,
			isImageInvalid
		};

		return {
			message: 'Invalid input',
			errorData
		};
	}

	await saveMeal(meal);
	revalidatePath('/meals', 'layout');
	return redirect('/meals');
};
