import React from 'react';
import classes from '../styles/loading.module.css';

const LoadingView = () => {
	return <p className={classes.loading}>Fetching meals...</p>;
};

export default LoadingView;
