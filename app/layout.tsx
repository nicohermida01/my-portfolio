import localFont from 'next/font/local'
import type { Metadata } from 'next'

import 'globals.css'

const SansationFont = localFont({
	src: [
		{
			path: '../public/fonts/Sansation-Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Sansation-Bold.woff',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-sansation',
})

export const metadata: Metadata = {
	title: "I'm Nico hermida",
	description: "Hi, my name is Nicolas Hermida and i'm a Software Developer.",
}

interface ILayoutDefaultProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: ILayoutDefaultProps) {
	return (
		<html lang='en' className={`${SansationFont.variable} font-sans`}>
			<body className='bg-app-bg-dark text-white'>{children}</body>
		</html>
	)
}
