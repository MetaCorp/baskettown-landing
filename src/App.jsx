import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Box from '@material-ui/core/Box'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import ExpandMore from '@material-ui/icons/ExpandMore'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import AppProvider from './providers/AppProvider'

import background from './assets/images/basketball-basketball-hoop-basketball-ring-1040482.jpg'
import logo from './assets/images/free_logo_19.pdf'

const App = () => {
	const classes = useStyles()

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
					component="section">
					<img src={logo} alt="logo" />
					<Box className={classes.title} component="h1">
						FindMySquad
					</Box>
					<p className={classes.slogan}>L'appli pour mettre en relation des joueurs de basketball.</p>
					<Box>
						<p>Intéressé ? Inscris-toi à la newsletter.</p>
						<Paper className={classes.newsletter}>
							<InputBase variant="outlined" placeholder="ton email" />
							<Button>S'inscrire</Button>
						</Paper>
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
						<ExpandMore className={classes.arrowNextIcon} color="white" />
					</AnchorLink>
				</Box>
				<Box
					classeName={classes.section2}
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
		fontSize: '1rem',
		marginTop: 8
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
	newsletter: {
		padding: '8px 16px'
	}
})

export default App
