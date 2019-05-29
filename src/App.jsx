import React, { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/styles'

import Box from '@material-ui/core/Box'

import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import AppProvider from './providers/AppProvider'

import SubscribeNewsletter from './components/SubscribeNewsletter'

import background from './assets/images/basketball-basketball-hoop-basketball-ring-1040482.jpg'
import logo from './assets/images/free_logo_19.svg'

const App = () => {
	const classes = useStyles()

	const [ scrollY, setScrollY ] = useState(0)

	const handleScroll = useCallback((e) => {
		const bodyOffset = document.body.getBoundingClientRect()
		setScrollY(-bodyOffset.top)
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={classes.root}>
			<AppProvider>
				<Box
					className={classes.section1}
					display="flex"
					flexDirection="column"
					width="100%"
					height="100vh"
					justifyContent="center"
					alignItems="center"
					component="section"
					id="landing">
					<img className={classes.logo} src={logo} alt="logo" />
					<Box className={classes.title} component="h1">
						FindMySquad
					</Box>
					<p className={classes.slogan}>L'appli pour mettre en relation des joueurs de basketball.</p>
					<Box>
						<p className={classes.newsletterText}>Intéressé ? Inscris-toi à la newsletter.</p>
						<SubscribeNewsletter />
					</Box>
					<Box>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://docs.google.com/forms/d/e/1FAIpQLSdBqROP8U3D8dnAQZ3U3c9PILeGY8Kl42t9eZcLkmUSGNMbTw/viewform?usp=sf_link">
							formulaire
						</a>
					</Box>
					<AnchorLink className={classes.arrowNext} href="#project">
						<ExpandMore className={classes.arrowNextIcon} />
					</AnchorLink>
				</Box>
				<Box
					className={classes.section2}
					component="section"
					display="flex"
					flexDirection="column"
					width="100%"
					height="100vh"
					justifyContent="center"
					alignItems="center"
					id="project">
					<h2>Notre projet</h2>
					<p>Description</p>
				</Box>
				<Box component="footer">footer</Box>
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
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		position: 'relative',
		color: 'white'
	},
	section2: {
		position: 'relative'
	},
	title: {
		fontSize: '3rem',
		marginTop: 8,
		marginBottom: 8
	},
	slogan: {
		fontSize: '1.2rem',
		marginTop: 8,
		textAlign: 'center'
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
		color: 'black'
	}
})

export default App
