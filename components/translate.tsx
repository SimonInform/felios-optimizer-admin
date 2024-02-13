'use client';

import { ReactElement, ReactNode } from 'react';
import { useAppLanguage } from '@/hooks/use-language';

type TranslateProps = {
	dictKey: string
	children?: ReactNode
}

/**
 * Translate component
 * This component provides a translation based on the app language.
 * @param dictKey Translation key from dictionary that is replaced with its value
 * @param children - Optional string which is appended to the translation.
 */
export function Translate({ dictKey, children }: TranslateProps): ReactElement {
	const lang = useAppLanguage();

	const str: string = lang.getString(dictKey);

	return (
		<>
			{str}
			{children}
		</>
	);
}
