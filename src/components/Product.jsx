import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'

import OnVisible from 'react-on-visible'

import posed from 'react-pose'

import image1 from './../assets/images/ball-basketball-basketball-court-1752757.jpg'

const FeaturesImg1 = posed.img({
	visible: {
		opacity: 1,
		x: 0,
		delay: 100
	},
	hidden: {
		x: -10,
		opacity: 0
	}
})

const FeaturesH1 = posed.h4({
	visible: {
		opacity: 1,
		x: 0,
		delay: 200
	},
	hidden: {
		x: 20,
		opacity: 0
	}
})

const FeaturesP1 = posed.p({
	visible: {
		opacity: 1,
		x: 0,
		delay: 300
	},
	hidden: {
		x: 20,
		opacity: 0
	}
})

const FeaturesHr1 = posed.hr({
	visible: {
		opacity: 1,
		delay: 400
	},
	hidden: {
		opacity: 0
	}
})

const FeaturesImg2 = posed.img({
	visible: {
		opacity: 1,
		x: 0,
		delay: 900
	},
	hidden: {
		x: 10,
		opacity: 0
	}
})

const FeaturesH2 = posed.h4({
	visible: {
		opacity: 1,
		x: 0,
		delay: 1000
	},
	hidden: {
		x: -20,
		opacity: 0
	}
})

const FeaturesP2 = posed.p({
	visible: {
		opacity: 1,
		x: 0,
		delay: 1100
	},
	hidden: {
		x: -20,
		opacity: 0
	}
})

const FeaturesHr2 = posed.hr({
	visible: {
		opacity: 1,
		delay: 1200
	},
	hidden: {
		opacity: 0
	}
})

const FeaturesImg3 = posed.img({
	visible: {
		opacity: 1,
		x: 0,
		delay: 1700
	},
	hidden: {
		x: -10,
		opacity: 0
	}
})

const FeaturesH3 = posed.h4({
	visible: {
		opacity: 1,
		x: 0,
		delay: 1800
	},
	hidden: {
		x: 20,
		opacity: 0
	}
})

const FeaturesP3 = posed.p({
	visible: {
		opacity: 1,
		x: 0,
		delay: 1900
	},
	hidden: {
		x: 20,
		opacity: 0
	}
})

// const FeaturesHr3 = posed.hr({
// 	visible: {
// 		opacity: 1,
// 		delay: 6000
// 	},
// 	hidden: {
// 		opacity: 0
// 	}
// })

const Produit = () => {
	const classes = useStyles()

	const [ sectionShown, setSectionShown ] = useState(false)

	return (
		<OnVisible
			onChange={(e) => {
				setSectionShown(true)
			}}>
			<section className={classes.section2} id="product">
				<h2 className={classes.featuresTitle}>Notre produit</h2>
				<Paper className={classes.features}>
					<div className={classes.featuresContainer1}>
						<FeaturesImg1
							pose={sectionShown ? 'visible' : 'hidden'}
							className={classes.featuresImg1}
							src={image1}
							alt="img1"
						/>
						<FeaturesH1 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresH1}>
							Fonctionnalité de Check-In
						</FeaturesH1>
						<FeaturesP1 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresP1}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</FeaturesP1>
						<FeaturesHr1 pose={sectionShown ? 'visible' : 'hidden'} className={classes.hr1} />
					</div>

					<div className={classes.featuresContainer2}>
						<FeaturesImg2
							pose={sectionShown ? 'visible' : 'hidden'}
							className={classes.featuresImg2}
							src={image1}
							alt="img2"
						/>
						<FeaturesH2 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresH2}>
							Planifie ta présence
						</FeaturesH2>
						<FeaturesP2 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresP2}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</FeaturesP2>
						<FeaturesHr2 pose={sectionShown ? 'visible' : 'hidden'} className={classes.hr2} />
					</div>

					<div className={classes.featuresContainer3}>
						<FeaturesImg3
							pose={sectionShown ? 'visible' : 'hidden'}
							className={classes.featuresImg3}
							src={image1}
							alt="img3"
						/>
						<FeaturesH3 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresH3}>
							Organise tes matchs
						</FeaturesH3>
						<FeaturesP3 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresP3}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</FeaturesP3>
						{/* <hr className={classes.hr3} /> */}
					</div>
				</Paper>
			</section>
		</OnVisible>
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
