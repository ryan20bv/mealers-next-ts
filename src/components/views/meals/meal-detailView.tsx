import React from 'react';
import Image from 'next/image';

import classes from './styles/mealDetail.module.css';

import {TMeal} from '@/dataTypes/datatypes';

interface PropsType {
	meal: TMeal;
}

const MealDetailView: React.FC<PropsType> = ({meal}) => {
	meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

	return (
		<>
			<header
				className={`flex px-4 py-8 gap-12 m-auto max-w-[80rem] ${classes.header}`}
			>
				<div className={`relative w-[30rem] h-[20rem]`}>
					<Image
						src={meal.image}
						alt={meal.title}
						fill
						sizes='(min-width: 808px) 50vw, 100vw'
					/>
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{__html: `${meal.instructions}`}}
				></p>
			</main>
		</>
	);
};

export default MealDetailView;
