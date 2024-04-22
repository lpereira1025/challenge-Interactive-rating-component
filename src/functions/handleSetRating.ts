import { Dispatch, SetStateAction } from 'react';

export interface RatingCardTypes {
    selectedRating: number;
}

export const handleSetRating = (
    selectedRating: RatingCardTypes['selectedRating'],
    setRating: Dispatch<SetStateAction<number | undefined>>
) => {
    setRating(selectedRating);
};
