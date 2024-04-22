import { Dispatch, SetStateAction } from 'react';

export interface SubmittedCardTypes {
    e: React.FormEvent;
}

export const handleSetSubmitted = (
    e: SubmittedCardTypes['e'],
    setIsSubmitted: Dispatch<SetStateAction<boolean>>
) => {
    e.preventDefault();
    setIsSubmitted(true);
};
