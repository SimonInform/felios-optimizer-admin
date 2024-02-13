import dictDe from '@/dictionaries/de.json';
import { LANGUAGE } from '@/types/enums';

interface IAppLanguage {
	appLanguage: LANGUAGE
	setAppLanguage: (language: LANGUAGE) => void
	getString: (key: string, data?: unknown) => string
}

/**
 * Wrapper function for changing the current App display language
 * @returns {IAppLanguage} The current App language and a function to change it
 */
export function useAppLanguage(): IAppLanguage {
	// const [settings, setSettings] = useRecoilState<ISettings>(settingsState);

	/**
	 * Change the current App language
	 * @param _language The new language
	 */
	const setAppLanguage = (_language: LANGUAGE): void => {
		// setSettings({ ...settings, language: _language });
	};

	/**
	 * Get a string from the current App language
	 * @param _key The key of the string
	 * @param data The data which can be used to replace {exampleTerm} in the string
	 */
	const getString = (_key: string, data?: unknown): string => {
		// Get dictionary based on app language
		// const dict = settings.language === 'de' ? dictDe : dictEn;
		const dict = dictDe;

		// Access nested object properties with dot notation
		try {
			let str = _key.split('.').reduce((o, i) => o[i], dict);
			if (str === undefined) throw new Error();

			if (data) {
				// Replace {exampleTerm} with value from data object
				for (const [key, value] of Object.entries(data)) {
					str = str.replace(
						`{${key}}`,
						value !== undefined ? value.toString() : ''
					);
				}
			}

			return str;
		} catch (error) {
			console.warn(`String '${_key}' not found in dictionary`);
			return _key;
		}
	};

	return {
		appLanguage: LANGUAGE.DE,
		getString: getString,
		setAppLanguage: setAppLanguage,
	};
}
