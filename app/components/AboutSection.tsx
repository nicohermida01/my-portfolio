import Image from 'next/image'

import { pageSections } from 'ssot/pageSections'
import { translator } from 'utils/translator'

export function AboutSection() {
	return (
		<section id={pageSections.ABOUT} className='w-full bg-app-bg-dark-alt'>
			<div className='w-full max-w-appMW mx-auto px-8 py-16 flex items-center justify-between'>
				<div className='flex flex-col gap-8 max-w-xl'>
					<h3 className='flex flex-col'>
						<span className='text-5xl font-bold'>
							{translator('description-heading-first')}
						</span>
						<span className='text-3xl'>
							{translator('description-heading-second')}
						</span>
						<span className='text-xl'>
							{translator('description-heading-third')}
						</span>
					</h3>
					<p>{translator('description-first')}</p>
					<p>{translator('description-second')}</p>
				</div>
				<Image
					src='/images/profile-picture.jpg'
					alt='profile picture'
					width={250}
					height={350}
					priority={true}
					className='shadow-[32px_32px_0_0_rgba(0,0,0,.5)] h-max'
				/>
			</div>
		</section>
	)
}
