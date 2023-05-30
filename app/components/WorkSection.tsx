import { pageSections } from 'ssot/pageSections'
import { ProjectCard } from 'components/ProjectCard'
import { projects } from 'ssot/projects'

export function WorkSection() {
	return (
		<section id={pageSections.WORK} className='w-full bg-app-bg-dark-alt'>
			<div className='w-full max-w-appMW mx-auto px-8 min-h-screen flex flex-col justify-center relative'>
				<div className='flex flex-wrap bg-[rgba(255,255,255,.05)] gap-[1px] justify-center'>
					{projects.map((elem, index) => {
						return (
							<ProjectCard
								key={index}
								component={elem.imgComponent}
								url={elem.url}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
