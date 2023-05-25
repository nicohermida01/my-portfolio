interface ILayoutDefaultProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: ILayoutDefaultProps) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
