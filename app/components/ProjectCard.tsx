interface IProjectCardProps {
	component: React.ReactNode
	url: string
}

export function ProjectCard({ component, url }: IProjectCardProps) {
	return (
		<div className='grow flex flex-col justify-between bg-app-bg-dark-alt'>
			<div className='flex items-center justify-center p-8 h-full'>
				{component}
			</div>
			<a
				href={url}
				target='_blank'
				className='block w-full text-center bg-[rgba(0,0,0,.3)] py-5 text-topbar-nav-color-dark hover:underline'
			>
				{url}
			</a>
		</div>
	)
}
