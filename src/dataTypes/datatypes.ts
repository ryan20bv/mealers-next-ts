export type TMeal = {
	id: number;
	slug: string;
	title: string;
	image: string;
	summary: string;
	instructions: string;
	creator: string;
	creator_email: string;
};

export interface IShareMealActionType {
	message: string;
	errorData: {
		isTitleInvalid: boolean;
		isSummaryInvalid: boolean;
		instructionsInvalid: boolean;
		isCreatorInvalid: boolean;
		isCreatorEmailInvalid: boolean;
		isSlugInvalid: boolean;
		isImageInvalid: boolean;
	};
}
