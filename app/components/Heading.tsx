'use client'

import { useEffect, useState } from 'react'
import { translator } from 'utils/translator'
import { Logo } from './icons/Logo'

export function Heading() {
	const [headingText, setHeadingText] = useState('')

	useEffect(() => {
		translator('heading').then(value => setHeadingText(value))
	})

	return (
		<h1 className='text-7xl font-bold [&>span]:inline-block heading'>
			{headingText.split('').map((char, index) => {
				if (headingText.charAt(index - 1) === ',') return <br key={index} />

				if (char === ' ') return ' '

				if (char === 'N')
					return (
						<span key={index}>
							<Logo width={54} height={58} className='pr-1' />
						</span>
					)

				return <span key={index}>{char}</span>
			})}
		</h1>
	)
}
