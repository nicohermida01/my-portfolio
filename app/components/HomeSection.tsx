import Link from 'next/link'

import { Heading } from 'components/Heading'
import { BackgroundAnimated } from 'components/BackgroundAnimated'
import { pageSections } from 'ssot/pageSections'
import { translator } from 'utils/translator'

export function HomeSection() {
	return (
		<section
			id={pageSections.HOME}
			className='w-full min-h-screen flex flex-col justify-center gap-8'
		>
			<BackgroundAnimated />
			<Heading />

			<div className='flex gap-8'>
				<Link
					href={`#${pageSections.CONTACT}`}
					scroll={false}
					className='bg-primary py-4 px-16 text-sm contact-button'
				>
					{translator('contact-button#home')}
				</Link>

				<a
					href='/public/docs/nicolas-hermida-cv-en.pdf'
					download='nicolas-hermida-cv.pdf'
					className='py-4 px-16 border border-primary text-primary text-sm download-cv-button'
				>
					{translator('download-cv')}
				</a>
				{/* replace href for `/public/docs/nicolas-hermida-cv-${locale}.pdf` */}
			</div>
		</section>
	)
}
