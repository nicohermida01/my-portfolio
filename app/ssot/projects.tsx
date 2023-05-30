import { FastNewsIcon } from 'components/icons/FastNewsIcon'
import { FutballLeagueIcon } from 'components/icons/FutballLeagueIcon'
import { ScrabblearIcon } from 'components/icons/ScrabblearIcon'
import { StudyIcon } from 'components/icons/StudyIcon'

interface IProject {
	imgComponent: React.ReactNode
	url: string
}

export const projects: IProject[] = [
	{
		imgComponent: <ScrabblearIcon />,
		url: 'scrabblear.com',
	},
	{
		imgComponent: <FutballLeagueIcon />,
		url: 'futballeague.com',
	},
	{
		imgComponent: <FastNewsIcon />,
		url: 'fastnews.com',
	},
	{
		imgComponent: <StudyIcon />,
		url: 'study.dev',
	},
]
