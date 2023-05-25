import type { SVGProps } from 'react'

export function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width='36'
			height='40'
			viewBox='0 0 36 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g clipPath='url(#clip0_108_12)'>
				<path
					d='M0 38.7879V0H6.98352L26.88 28.2636V0H33.6V38.7879H26.6165L6.71999 9.92753V38.7879H0Z'
					fill='#5BE9B9'
				/>
				<path
					d='M2.40002 40V1.21213H9.38353L29.28 29.4758V1.21213H36V40H29.0165L9.11999 11.1397V40H2.40002Z'
					fill='#6E07F3'
				/>
			</g>
			<defs>
				<clipPath id='clip0_108_12'>
					<rect width='36' height='40' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
