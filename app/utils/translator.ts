const dictionaries = {
	en: () => import('i18n/en.json').then(module => module.default),
	es: () => import('i18n/es.json').then(module => module.default),
}

const getDictionary = async (locale: string) => dictionaries[locale]()

export const translator = async (key: any, locale = 'en'): Promise<string> => {
	const dict = await getDictionary(locale)
	return dict[key]
}
