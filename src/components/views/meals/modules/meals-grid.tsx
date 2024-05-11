import {TMeal} from '@/dataTypes/datatypes';

import MealItem from './meal-item';
import classes from '../styles/meals-grid.module.css';

interface PropsType {
	meals: TMeal[];
}

const MealsGrid: React.FC<PropsType> = ({meals}) => {
	return (
		<ul
			className={`${classes.mealsGrid} w-[90%] max-w-[90rem] grid gap-20 my-8 mx-auto list-none p-0 `}
		>
			{meals.map(meal => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
