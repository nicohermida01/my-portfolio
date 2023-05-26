import { HomeSection } from 'components/HomeSection'
import { Topbar } from 'components/Topbar'

export default function HomePage() {
	return (
		<>
			<Topbar />
			<main className='w-full max-w-appMW mx-auto px-8'>
				<HomeSection />
			</main>
		</>
	)
}
