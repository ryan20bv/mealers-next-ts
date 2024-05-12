'use client';
// import {useActionState} from 'react';
import {useFormState} from 'react-dom';
import {shareMealAction} from '@/lib/action';

import ImagePicker from './modules/image-picker';
import MealFormSubmit from './modules/meals-form-submit';
import classes from './styles/shareMeal.module.css';

export default function ShareMealView() {
	const [state, formAction] = useFormState(shareMealAction, {
		message: '',
		errorData: {
			isTitleInvalid: false,
			isSummaryInvalid: false,
			instructionsInvalid: false,
			isCreatorInvalid: false,
			isCreatorEmailInvalid: false,
			isSlugInvalid: false,
			isImageInvalid: false
		}
	});

	const {
		errorData: {
			isTitleInvalid,
			isSummaryInvalid,
			instructionsInvalid,
			isCreatorInvalid,
			isCreatorEmailInvalid,
			isImageInvalid
		}
	} = state;

	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your <span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form className={classes.form} action={formAction}>
					<div className={classes.row}>
						<div>
							<div className='form-error-div'>
								<label htmlFor='name'>Your name</label>
								{isCreatorInvalid && <p className='form-error'>Email is required!</p>}
							</div>
							<input
								type='text'
								id='name'
								name='name'
								// required
							/>
						</div>
						<div>
							<div className='form-error-div'>
								<label htmlFor='email'>Your email</label>
								{isCreatorEmailInvalid && (
									<p className='form-error'>Email is required!</p>
								)}
							</div>
							<input
								type='email'
								id='email'
								name='email'
								// required
							/>
						</div>
					</div>
					<div>
						<div className='form-error-div'>
							<label htmlFor='title'>Title</label>
							{isTitleInvalid && <p className='form-error'>Title is required!</p>}
						</div>
						<input
							type='text'
							id='title'
							name='title'
							//  required
						/>
					</div>
					<div>
						<div className='form-error-div'>
							<label htmlFor='summary'>Short Summary</label>
							{isSummaryInvalid && <p className='form-error'>Summary is required!</p>}
						</div>
						<input
							type='text'
							id='summary'
							name='summary'
							// required
						/>
					</div>
					<div>
						<div className='form-error-div'>
							<label htmlFor='instructions'>Instructions</label>
							{instructionsInvalid && (
								<p className='form-error'>Instruction/s is required!</p>
							)}
						</div>

						<textarea
							id='instructions'
							name='instructions'
							rows={10}
							// required
						></textarea>
					</div>
					<ImagePicker
						label='Image Preview'
						name='image'
						isImageInvalid={isImageInvalid}
					/>
					<p className={classes.actions}>
						<MealFormSubmit />
					</p>
				</form>
			</main>
		</>
	);
}
