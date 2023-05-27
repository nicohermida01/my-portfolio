import { AboutSection } from 'components/AboutSection'
import { HomeSection } from 'components/HomeSection'
import { Topbar } from 'components/Topbar'

export default function HomePage() {
	return (
		<>
			<Topbar />
			<main className='w-full'>
				<HomeSection />
				<AboutSection />
			</main>
		</>
	)
}
