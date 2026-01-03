import { useState, useEffect, Fragment } from 'react'

type NavLink = {
	label: string
	href: string
}

const navLinks: NavLink[] = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' }
]

const smoothScrollTo = (targetId: string) => {
	const element = document.getElementById(targetId.replace('#', ''))
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeHash, setActiveHash] = useState('#home')

	useEffect(() => {
		const handleHashChange = () => {
			setActiveHash(window.location.hash || '#home')
		}
		window.addEventListener('hashchange', handleHashChange)
		handleHashChange()
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])

	return (
		<Fragment>
			<style>{`
				.nav-link {
					position: relative;
					display: inline-block;
				}
				.nav-link::after {
					content: '';
					position: absolute;
					bottom: -2px;
					left: 0;
					width: 0;
					height: 0.5px;
					background-color: currentColor;
					transition: width 0.3s ease;
				}
				.nav-link:hover::after {
					width: 100%;
				}
				.nav-link.active::after {
					width: 100%;
				}
			`}</style>
			<header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/60 dark:bg-slate-900/70 dark:supports-[backdrop-filter]:bg-slate-900/60">
				<div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 md:px-6">
					<a href="#home" className="flex items-center gap-3">
						<div className="flex flex-col leading-tight">
							<span className="text-base font-semibold text-slate-900 dark:text-white">Mubashir</span>
						</div>
					</a>

					<div className="hidden items-center gap-8 md:flex">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={(e) => {
									e.preventDefault()
									smoothScrollTo(link.href)
									window.history.pushState(null, '', link.href)
									setActiveHash(link.href)
								}}
								className={`nav-link text-sm font-semibold transition ${activeHash === link.href
										? 'text-slate-900 dark:text-white active'
										: 'text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
									}`}
							>
								{link.label}
							</a>
						))}
					</div>

					<button
						type="button"
						className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow md:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-expanded={isOpen}
						aria-controls="mobile-nav"
						aria-label="Toggle navigation"
					>
						<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4 7h16M4 12h16M4 17h16"
								stroke="currentColor"
								strokeWidth="1.8"
								strokeLinecap="round"
								className={isOpen ? 'opacity-0 transition-opacity duration-150' : 'transition-opacity duration-150'}
							/>
							<path
								d="M6 6l12 12M18 6l-12 12"
								stroke="currentColor"
								strokeWidth="1.8"
								strokeLinecap="round"
								className={isOpen ? 'transition-opacity duration-150' : 'opacity-0 transition-opacity duration-150'}
							/>
						</svg>
					</button>
				</div>

				<div
					id="mobile-nav"
					className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
						}`}
				>
					<div className="overflow-hidden">
						<div className="border-t border-white/60 bg-white/80 px-4 py-4 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 dark:border-slate-800/60 dark:bg-slate-900/85 dark:supports-[backdrop-filter]:bg-slate-900/70">
							<div className="flex flex-col gap-3">
								{navLinks.map((link) => (
									<a
										key={link.label}
										href={link.href}
										className={`nav-link rounded-lg px-3 py-2 text-sm font-semibold transition ${activeHash === link.href
												? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
												: 'text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800'
											}`}
									onClick={(e) => {
										e.preventDefault()
										smoothScrollTo(link.href)
										window.history.pushState(null, '', link.href)
										setActiveHash(link.href)
										setIsOpen(false)
									}}
									>
										{link.label}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</header>
		</Fragment>
	)
}

export default Header
