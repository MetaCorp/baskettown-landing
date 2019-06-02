import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'
import Fade from "@material-ui/core/Fade";

import OnVisible from "react-on-visible";

import image1 from './../assets/images/ball-basketball-basketball-court-1752757.jpg'
import { useSetState } from 'react-use';

const Produit = () => {
	const classes = useStyles()
	const [animationState, setAnimationState] = useSetState({
		container1Shown: false,
		container2Shown: false,
		container3Shown: false,
	})

	return (
		<section className={classes.section2} id="product">
			<h2 className={classes.featuresTitle}>Notre produit</h2>
			<Paper className={classes.features}>
			<OnVisible
        onChange={e => {
          setAnimationState({container1Shown: true});
        }}
      >
				<Fade in={animationState.container1Shown} timeout={{ enter: 1500 }}>
				<div className={classes.featuresContainer1}>
					<img className={classes.featuresImg1} src={image1} alt="img1" />
					<h4 className={classes.featuresH1}>Fonctionnalité de Check-In</h4>
					<p className={classes.featuresP1}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<hr className={classes.hr1} />
				</div></Fade></OnVisible>

				<OnVisible
        onChange={e => {
          setAnimationState({container2Shown: true});
        }}
      ><Fade in={animationState.container2Shown} timeout={{ enter: 1500 }}><div className={classes.featuresContainer2}>
					<img className={classes.featuresImg2} src={image1} alt="img2" />
					<h4 className={classes.featuresH2}>Planifie ta présence</h4>
					<p className={classes.featuresP2}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<hr className={classes.hr2} />
				</div></Fade></OnVisible>

				<OnVisible
        onChange={e => {
          setAnimationState({container3Shown: true});
        }}
      ><Fade in={animationState.container3Shown} timeout={{ enter: 1500 }}>
				<div className={classes.featuresContainer3}>
					<img className={classes.featuresImg3} src={image1} alt="img3" />
					<h4 className={classes.featuresH3}>Organise tes matchs</h4>
					<p className={classes.featuresP3}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					{/* <hr className={classes.hr3} /> */}
				</div></Fade></OnVisible>
			</Paper>
		</section>
	)
}

const IMAGE_WIDTH = 250
const IMAGE_HEIGHT = 350

const useStyles = makeStyles((theme) =>
	createStyles({
		section2: {
			position: 'relative',
			component: 'section',
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			minHeight: '100vh',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'black'
		},
		featuresTitle: {
			color: 'rgba(255, 255, 255, 0.9)',
			fontSize: '2rem',
			marginTop: 62,
			marginBottom: 42
		},
		features: {
			maxWidth: 742,
			padding: '16px 24px',
			background: '#1C2024',
			color: 'rgba(255, 255, 255, 0.8)',
			marginTop: 8,
			marginBottom: 128,
			marginLeft: 160,
			marginRight: 160
		},
		featuresP1: {
			fontSize: '0.9rem',
			marginBottom: 32
		},
		featuresP2: {
			textAlign: 'right',
			fontSize: '0.9rem',
			marginBottom: 32
		},
		featuresP3: {
			fontSize: '0.9rem',
			marginBottom: 32
		},
		featuresH1: {
			fontSize: '1.5rem',
			marginTop: 24
		},
		featuresH2: {
			textAlign: 'right',
			fontSize: '1.5rem'
		},
		featuresH3: {
			fontSize: '1.5rem'
		},
		featuresContainer1: {
			position: 'relative',
			paddingLeft: IMAGE_WIDTH / 2 + 24
		},
		featuresContainer2: {
			position: 'relative',
			paddingRight: IMAGE_WIDTH / 2 + 24
		},
		featuresContainer3: {
			position: 'relative',
			paddingLeft: IMAGE_WIDTH / 2 + 24
		},
		featuresImg1: {
			position: 'absolute',
			width: IMAGE_WIDTH,
			height: IMAGE_HEIGHT,
			objectFit: 'cover',
			left: -(IMAGE_WIDTH + 24) / 2,
			top: -90,
			boxShadow: theme.shadows[20]
		},
		featuresImg2: {
			position: 'absolute',
			width: IMAGE_WIDTH,
			height: IMAGE_HEIGHT,
			objectFit: 'cover',
			right: -(IMAGE_WIDTH + 24) / 2,
			top: -45,
			boxShadow: theme.shadows[20]
		},
		featuresImg3: {
			position: 'absolute',
			width: IMAGE_WIDTH,
			height: IMAGE_HEIGHT,
			objectFit: 'cover',
			left: -(IMAGE_WIDTH + 24) / 2,
			top: -45,
			boxShadow: theme.shadows[20]
		},
		hr1: {
			borderColor: 'rgba(255,255,255,0.4)',
			marginRight: 150
		},
		hr2: {
			borderColor: 'rgba(255,255,255,0.4)',
			marginLeft: 150
		},
		hr3: {
			borderColor: 'rgba(255,255,255,0.4)',
			marginRight: 150
		},
		'@media (max-width: 812px)': {
			features: {
				marginLeft: 16,
				marginRight: 16
			},
			featuresH2: {
				textAlign: 'left'
			},
			featuresP2: {
				textAlign: 'left'
			},
			featuresImg1: {
				display: 'none'
			},
			featuresImg2: {
				display: 'none'
			},
			featuresImg3: {
				display: 'none'
			},
			featuresContainer1: {
				paddingLeft: 0
			},
			featuresContainer2: {
				paddingRight: 0
			},
			featuresContainer3: {
				paddingLeft: 0
			},
			hr1: {
				marginRight: 0
			},
			hr2: {
				marginLeft: 0
			},
			hr3: {
				marginRight: 0
			}
		}
	})
)

export default Produit
