'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

import particlesJSON from 'ssot/assets/particles.json'

const BACKGROUND_PARTICLES_ID = 'tsparticles'

export function BackgroundAnimated() {
	const particlesInit = useCallback(async (engine: any) => {
		await loadFull(engine)
	}, [])

	return (
		<Particles
			id={BACKGROUND_PARTICLES_ID}
			init={particlesInit}
			options={particlesJSON}
			style={{
				position: 'absolute',
				width: '100vw',
				height: '100%',
				zIndex: '-1',
				top: '0',
				left: '0',
				overflow: 'hidden',
			}}
		/>
	)
}
