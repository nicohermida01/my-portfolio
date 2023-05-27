import Link from 'next/link'

import { Logo } from 'components/icons/Logo'
import { LinkedinIcon } from 'components/icons/LinkedinIcon'
import { GithubIcon } from 'components/icons/GithubIcon'
import { navLinks } from 'ssot/pageSections'
import { translator } from 'utils/translator'

export function Topbar() {
	return (
		<div className='w-full bg-topbar-bg-dark fixed top-0 left-0'>
			<div className='w-full max-w-appMW mx-auto px-8 flex justify-between'>
				<div className='flex gap-4'>
					<header className='p-2 bg-black'>
						<Link href='/'>
							<Logo width={26} height={30} />
						</Link>
					</header>
					<div className='flex items-center gap-2'>
						<a
							href='https://www.linkedin.com/in/nico-hermida/'
							target='_blank'
							className='topbar-social-link'
						>
							<LinkedinIcon width={20} height={20} />
						</a>
						<a
							href='https://github.com/nicohermida01'
							target='_blank'
							className='topbar-social-link'
						>
							<GithubIcon width={20} height={20} />
						</a>
					</div>
				</div>
				<nav className='flex items-center'>
					<ul className='flex gap-6'>
						{navLinks.map((value, index) => (
							<li key={index}>
								<Link
									href={`#${value}`}
									scroll={false}
									className='text-sm text-topbar-nav-color-dark topbar-nav-link'
								>
									{translator(value)}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	)
}
