interface PropsType {
	children: React.ReactNode;
	classes: {
		readonly [key: string]: string;
	};
	addedClasses?: string;
}

const HeaderUI: React.FC<PropsType> = ({children, classes, addedClasses}) => {
	return (
		<header
			className={`gap-12 mt-16 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl  ${classes.header} ${addedClasses}`}
		>
			{children}
		</header>
	);
};

export default HeaderUI;
