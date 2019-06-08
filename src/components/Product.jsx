import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'

import OnVisible from 'react-on-visible'

import posed from 'react-pose'

import image1 from './../assets/images/ball-basketball-basketball-court-1752757.jpg'
import image2 from './../assets/images/basketball-basketball-hoop-basketball-ring-1040482.jpg'

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

const FeaturesHr3 = posed.hr({
	visible: {
		opacity: 1,
		delay: 2000
	},
	hidden: {
		opacity: 0
	}
})

const FeaturesImg4 = posed.img({
	visible: {
		opacity: 1,
		x: 0,
		delay: 2500
	},
	hidden: {
		x: -10,
		opacity: 0
	}
})

const FeaturesH4 = posed.h4({
	visible: {
		opacity: 1,
		x: 0,
		delay: 2600
	},
	hidden: {
		x: 20,
		opacity: 0
	}
})

const FeaturesP4 = posed.p({
	visible: {
		opacity: 1,
		x: 0,
		delay: 2700
	},
	hidden: {
		x: 20,
		opacity: 0
	}
})

// const FeaturesHr4 = posed.hr({
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
							Créé ton compte et personnalise ton profil.
						</FeaturesH1>
						<FeaturesP1 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresP1}>
							Créé ton compte Faydaway puis personnalise ton profil en sélectionnant ta taille, ton poids,
							ton type de jeu et plus encore pour permettre aux utilisateurs de déterminer le type de
							ballers que tu es.
						</FeaturesP1>
						<FeaturesHr1 pose={sectionShown ? 'visible' : 'hidden'} className={classes.hr1} />
					</div>

					<div className={classes.featuresContainer2}>
						<FeaturesImg2
							pose={sectionShown ? 'visible' : 'hidden'}
							className={classes.featuresImg2}
							src={image2}
							alt="img2"
						/>
						<FeaturesH2 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresH2}>
							Géo-localise des terrains et joueurs via la map.
						</FeaturesH2>
						<FeaturesP2 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresP2}>
							Retrouves les terrains de basket à proximité et informe toi sur le nombre de joueur qui y
							sont présent. Amis, rivaux ou nouveaux challengers t'attendent sur Faydaway. Désormais tu ne
							manqueras plus les gros jours de match.
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
							Fais des matchs et entres les scores
						</FeaturesH3>
						<FeaturesP3 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresP3}>
							En un contre un comme en quatre contre quatre invite les joueurs à t'affronter puis rentres
							les résultats sur Faydaway pour partager toutes tes performances à la communauté Faydaway et
							faire de toi un joueur d'expérience.
						</FeaturesP3>
						<FeaturesHr3 pose={sectionShown ? 'visible' : 'hidden'} className={classes.hr3} />
					</div>

					<div className={classes.featuresContainer4}>
						<FeaturesImg4
							pose={sectionShown ? 'visible' : 'hidden'}
							className={classes.featuresImg4}
							src={image1}
							alt="img4"
						/>
						<FeaturesH4 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresH4}>
							Créé ou rejoins une squad.
						</FeaturesH4>
						<FeaturesP4 pose={sectionShown ? 'visible' : 'hidden'} className={classes.featuresP4}>
							Créé ou rejoins une squad puis participe à de nombreux matchs, évènements pour montrer à ta
							ville que tu fais parti des meilleurs.
						</FeaturesP4>
						{/* <FeaturesHr4 pose={sectionShown ? 'visible' : 'hidden'} className={classes.hr4} /> */}
					</div>
				</Paper>
			</section>
		</OnVisible>
	)
}

const IMAGE_WIDTH = 220
const IMAGE_HEIGHT = 280

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
			padding: '16px 42px',
			background: '#1C2024',
			color: 'rgba(255, 255, 255, 0.8)',
			marginTop: 8,
			marginBottom: 128,
			marginLeft: 160,
			marginRight: 160
		},
		featuresP1: {
			fontSize: '0.9rem',
			marginBottom: 64
		},
		featuresP2: {
			textAlign: 'right',
			fontSize: '0.9rem',
			marginBottom: 64
		},
		featuresP3: {
			fontSize: '0.9rem',
			marginBottom: 64
		},
		featuresP4: {
			textAlign: 'right',
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
		featuresH4: {
			textAlign: 'right',
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
		featuresContainer4: {
			position: 'relative',
			paddingRight: IMAGE_WIDTH / 2 + 24
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
		featuresImg4: {
			position: 'absolute',
			width: IMAGE_WIDTH,
			height: IMAGE_HEIGHT,
			objectFit: 'cover',
			right: -(IMAGE_WIDTH + 24) / 2,
			top: -45,
			boxShadow: theme.shadows[20]
		},
		hr1: {
			borderColor: 'rgba(255,255,255,0.4)',
			marginRight: (IMAGE_WIDTH + 42) / 2,
			marginBottom: 64
		},
		hr2: {
			borderColor: 'rgba(255,255,255,0.4)',
			marginLeft: (IMAGE_WIDTH + 42) / 2,
			marginBottom: 64
		},
		hr3: {
			borderColor: 'rgba(255,255,255,0.4)',
			marginRight: (IMAGE_WIDTH + 42) / 2,
			marginBottom: 64
		},
		hr4: {
			borderColor: 'rgba(255,255,255,0.4)',
			marginLeft: (IMAGE_WIDTH + 42) / 2,
			marginBottom: 64
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
			featuresH4: {
				textAlign: 'left'
			},
			featuresP4: {
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
			featuresImg4: {
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
			featuresContainer4: {
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
			},
			hr4: {
				marginRight: 0
			}
		}
	})
)

export default Produit
