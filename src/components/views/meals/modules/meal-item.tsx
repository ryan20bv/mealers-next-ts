import Link from 'next/link';
import Image from 'next/image';

import classes from '../styles/meal-item.module.css';

interface PropsType {
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
}

export default function MealItem({
	title,
	slug,
	image,
	summary,
	creator
}: PropsType) {
	return (
		<article className={classes.meal}>
			<header>
				<div className={classes.image}>
					<Image
						src={image}
						alt={title}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						priority
					/>
				</div>
				<div className={classes.headerText}>
					<h2>{title}</h2>
					<p>by {creator}</p>
				</div>
			</header>
			<div className={classes.content}>
				<p className={classes.summary}>{summary}</p>
				<div className={classes.actions}>
					<Link href={`/meals/${slug}`}>View Details</Link>
				</div>
			</div>
		</article>
	);
}
