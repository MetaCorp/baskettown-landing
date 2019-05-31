import React, { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'

import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import AppProvider from './providers/AppProvider'

import SubscribeNewsletter from './components/SubscribeNewsletter'

import background from './assets/images/ball-basketball-basketball-court-1752757.jpg'
import logo from './assets/images/free_logo_19.svg'

const App = () => {
	const classes = useStyles()

	const [ scrollY, setScrollY ] = useState(0)

	const handleScroll = useCallback((e) => {
		const bodyOffset = document.body.getBoundingClientRect()
		setScrollY(-bodyOffset.top)
	}, [])

	useEffect(
		() => {
			window.addEventListener('scroll', handleScroll)
			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		},
		[ handleScroll ]
	)

	return (
		<div className={classes.root}>
			<AppProvider>
				<div className={classes.section1Bg} />

				<section className={classes.section1} id="landing">
					<img className={classes.logo} src={logo} alt="logo" />
					<h1 className={classes.title} component="h1">
						BasketTown
					</h1>
					<p className={classes.slogan}>L'appli pour mettre en relation des joueurs de basketball.</p>
					<div>
						<p className={classes.newsletterText}>Intéressé ? Inscris-toi à la newsletter.</p>
						<SubscribeNewsletter />
					</div>
					{/* <Box>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://docs.google.com/forms/d/e/1FAIpQLSdBqROP8U3D8dnAQZ3U3c9PILeGY8Kl42t9eZcLkmUSGNMbTw/viewform?usp=sf_link">
							formulaire
						</a>
					</Box> */}
					<AnchorLink className={classes.arrowNext} href="#project">
						<ExpandMore className={classes.arrowNextIcon} />
					</AnchorLink>
				</section>

				<section className={classes.section2} id="project">
					<h2 className={classes.featuresTitle}>Notre produit</h2>
					<Paper className={classes.features}>
						<h4 className={classes.featuresH1}>Fonctionnalité de Check-In</h4>
						<p className={classes.featuresP1}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<h4 className={classes.featuresH2}>Planifie ta présence</h4>
						<p className={classes.featuresP2}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<h4 className={classes.featuresH3}>Organise tes matchs</h4>
						<p className={classes.featuresP3}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</Paper>
				</section>

				<footer>footer</footer>
				{scrollY > 100 && (
					<AnchorLink className={classes.toTop} href="#landing">
						<ExpandLess className={classes.toTopIcon} />
					</AnchorLink>
				)}
			</AppProvider>
		</div>
	)
}

const useStyles = makeStyles({
	root: {},
	section1: {
		position: 'relative',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center'
	},
	section1Bg: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		filter: 'brightness(0.6)'
	},
	section2: {
		position: 'relative',
		component: 'section',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'black'
	},
	title: {
		fontSize: '3rem',
		marginTop: 8,
		marginBottom: 8
	},
	slogan: {
		fontSize: '1.2rem',
		marginTop: 8,
		textAlign: 'center',
		paddingLeft: 16,
		paddingRight: 16
	},
	arrowNext: {
		position: 'absolute',
		bottom: 16,
		color: 'white',
		transition: 'transform ease-in-out 0.25s',
		'&:hover': {
			transform: 'translate(0, 4px)'
		}
	},
	arrowNextIcon: {
		fontSize: '3rem'
	},
	newsletterText: {
		fontSize: '0.8rem'
	},
	logo: {
		marginTop: -52,
		width: 196
	},
	toTop: {
		position: 'fixed',
		bottom: 16,
		right: 16,
		color: 'rgba(255, 255, 255, 0.7)',
		'&:hover': {
			color: 'white'
		}
	},
	featuresTitle: {
		color: 'rgba(255, 255, 255, 0.8)',
		fontSize: '2rem'
	},
	features: {
		maxWidth: 742,
		padding: '16px 24px',
		background: '#1C2024',
		color: 'rgba(255, 255, 255, 0.7)',
		marginTop: 8,
		marginBottom: 64
	},
	featuresP1: {
		fontSize: '0.9rem'
	},
	featuresP2: {
		textAlign: 'right',
		fontSize: '0.9rem'
	},
	featuresP3: {
		fontSize: '0.9rem'
	},
	featuresH1: {
		fontSize: '1.5rem'
	},
	featuresH2: {
		textAlign: 'right',
		fontSize: '1.5rem'
	},
	featuresH3: {
		fontSize: '1.5rem'
	}
})

export default App
