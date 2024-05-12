'use client';
import {useRef, useState} from 'react';
import Image from 'next/image';

import classes from '../styles/image-picker.module.css';

const ImagePicker = ({label, name, isImageInvalid}) => {
	const [pickedImage, setPickedImage] = useState('');
	const imageInputRef = useRef(null);

	const handlePickClick = () => {
		imageInputRef.current?.click();
	};

	const handleChangeImage = e => {
		if (!e.target.files) {
			return;
		}
		let file;
		if (e.target.files && e.target.files.length > 0) {
			file = e.target.files[0]; // Logging file name for demonstration
		}

		if (!file) {
			setPickedImage('');
			return;
		}

		// eslint-disable-next-line no-undef
		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	};

	return (
		<div className={classes.picker}>
			<div className='form-error-div'>
				<label htmlFor={name}>{label}</label>{' '}
				{isImageInvalid && <p className='form-error'>Image is required!</p>}
			</div>

			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && (
						<Image src={pickedImage} alt='The image selected by user' fill />
					)}
				</div>
				<input
					type='file'
					id={name}
					accept='image/png, image/jpeg'
					name={name}
					className={classes.gptInputClass}
					ref={imageInputRef}
					onChange={handleChangeImage}
					// required
				/>

				<button className={classes.button} type='button' onClick={handlePickClick}>
					Pick an Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
