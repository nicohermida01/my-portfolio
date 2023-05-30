import { AboutSection } from 'components/AboutSection'
import { ContactSection } from 'components/ContactSection'
import { HomeSection } from 'components/HomeSection'
import { SkillsSection } from 'components/SkillsSection'
import { Topbar } from 'components/Topbar'
import { WorkSection } from 'components/WorkSection'

export default function HomePage() {
	return (
		<>
			<Topbar />
			<main className='w-full'>
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<WorkSection />
				<ContactSection />
			</main>
		</>
	)
}
