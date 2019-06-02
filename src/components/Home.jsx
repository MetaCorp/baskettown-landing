import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import IconButton from '@material-ui/core/IconButton'
import ExpandMore from '@material-ui/icons/ExpandMore'

import OnVisible from 'react-on-visible'

import posed from 'react-pose'

import SubscribeNewsletter from './SubscribeNewsletter'

import background from './../assets/images/ball-basketball-basketball-court-1752757.jpg'
import logo from './../assets/images/logo.svg'

const Logo = posed.img({
	visible: {
		y: 0,
		opacity: 1,
		delay: 1000
	},
	hidden: {
		y: -20,
		opacity: 0
	}
})

const H1 = posed.h1({
	visible: {
		y: 0,
		opacity: 1,
		delay: 1500
	},
	hidden: {
		y: -20,
		opacity: 0
	}
})

const P = posed.p({
	visible: {
		y: 0,
		opacity: 1,
		delay: 2000
	},
	hidden: {
		y: -20,
		opacity: 0
	}
})

const Newsletter = posed.div({
	visible: {
		y: 0,
		opacity: 1,
		delay: 2500
	},
	hidden: {
		y: 10,
		opacity: 0
	}
})

const Arrow = posed.div({
	visible: {
		opacity: 1,
		delay: 3500
	},
	hidden: {
		opacity: 0
	}
})

const Home = () => {
	const classes = useStyles()
	const [ sectionShown, setSectionShown ] = useState(false)

	return (
		<React.Fragment>
			<div className={classes.section1Bg} />

			<OnVisible
				onChange={(e) => {
					console.log(e)
					setSectionShown(true)
				}}>
				<section className={classes.section1} id="landing">
					<Logo className={classes.logo} src={logo} alt="logo" pose={sectionShown ? 'visible' : 'hidden'} />
					<H1 className={classes.title} pose={sectionShown ? 'visible' : 'hidden'}>
						BasketTown
					</H1>
					<P className={classes.slogan} pose={sectionShown ? 'visible' : 'hidden'}>
						L'appli pour mettre en relation des joueurs de basketball.
					</P>
					<Newsletter pose={sectionShown ? 'visible' : 'hidden'}>
						<p className={classes.newsletterText}>Intéressé ? Inscris-toi à la newsletter.</p>
						<SubscribeNewsletter />
					</Newsletter>
					{/* <Box>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdBqROP8U3D8dnAQZ3U3c9PILeGY8Kl42t9eZcLkmUSGNMbTw/viewform?usp=sf_link">
      formulaire
    </a>
	</Box> */}
					<Arrow className={classes.arrowNext} pose={sectionShown ? 'visible' : 'hidden'}>
						<IconButton className={classes.arrowNext} disableRipple href="#product">
							<ExpandMore className={classes.arrowNextIcon} />
						</IconButton>
					</Arrow>
				</section>
			</OnVisible>
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
		paddingRight: 16,
		marginBottom: 32
	},
	arrowNext: {
		position: 'absolute',
		bottom: 16,
		color: 'white',
		transition: 'transform ease-in-out 0.25s',
		marginLeft: -18,
		'&:hover $arrowNextIcon': {
			transform: 'translateY(4px)'
		}
	},
	arrowNextIcon: {
		fontSize: '3rem',
		transition: 'transform ease-in-out 0.25s'
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
