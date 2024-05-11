/* eslint-disable no-undef */
import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
	await new Promise(resolve => setTimeout(resolve, 2000));

	// throw new Error('Loading meals failed!');
	return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
	console.log('### save meal: ', meal);
	meal.slug = slugify(meal.title, {lower: true});
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const randomNumber = Math.random().toFixed(6);
	const fileName = `${meal.slug}_${randomNumber}.${extension}`;
	console.log('### fileName: ', fileName);
	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), error => {
		if (error) {
			throw new Error('Saving image failed!');
		}
	});

	meal.image = `/images/${fileName}`;

	db
		.prepare(
			`
		INSERT INTO meals (title, image, summary, instructions, slug, creator, creator_email)
		VALUES ( 
			@title,
			@image,
			@summary,
			@instructions,
			@slug,
			@creator,
			@creator_email
		)
	`
		)
		.run(meal);
}
