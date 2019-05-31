import React from 'react'
import { makeStyles } from '@material-ui/styles'

import SubscribeNewsletter from './SubscribeNewsletter'

const Home = () => {
	const classes = useStyles()
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}

const useStyles = makeStyles({
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
	}
})

export default Home
