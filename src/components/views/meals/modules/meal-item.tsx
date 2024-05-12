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
		<article
			className={`${classes.meal} flex flex-col justify-center h-full rounded-md overflow-hidden transition-all ease-in-out text-[#ddd6cb]`}
		>
			<header>
				<div className={'relative h-[15rem]'}>
					<Image
						src={image}
						alt={title}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						priority
						className='object-cover'
					/>
				</div>
				<div className={`${classes.headerText} pt-2 pb-0 px-4`}>
					<h2 className='m-0 text-2xl font-bold'>{title}</h2>
					<p className='m-0 text-xs text-[#cfa69b]  italic'>by {creator}</p>
				</div>
			</header>
			<div className='flex flex-col justify-between h-full'>
				<p className='pt-4 pb-0 px-4'>{summary}</p>
				<div className={`${classes.actions} p-4 text-right`}>
					<Link
						href={`/meals/${slug}`}
						className='inline-block mt-4 px-4 py-2 rounded-[0.5rem] text-white font-bold no-underline'
					>
						View Details
					</Link>
				</div>
			</div>
		</article>
	);
}
