import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import OnVisible from 'react-on-visible'
import posed from 'react-pose'

import profile1 from './../assets/images/photo_2019-06-02_19-09-43.jpg'
import profile2 from './../assets/images/photo_2019-06-02_18-45-00.jpg'
import profile3 from './../assets/images/0035_35-Dylan_Merigaud.jpg'
import profile4 from './../assets/images/0040_40-Leopold_Szabatura.jpg'

const Img1 = posed.img({
	visible: {
		opacity: 1,
		y: 0,
		delay: 100
	},
	hidden: {
		y: -20,
		opacity: 0
	}
})

const H1 = posed.h4({
	visible: {
		opacity: 1,
		delay: 200
	},
	hidden: {
		opacity: 0
	}
})

const Img2 = posed.img({
	visible: {
		opacity: 1,
		y: 0,
		delay: 400
	},
	hidden: {
		y: -20,
		opacity: 0
	}
})

const H2 = posed.h4({
	visible: {
		opacity: 1,
		delay: 500
	},
	hidden: {
		opacity: 0
	}
})

const Img3 = posed.img({
	visible: {
		opacity: 1,
		y: 0,
		delay: 700
	},
	hidden: {
		y: -20,
		opacity: 0
	}
})

const H3 = posed.h4({
	visible: {
		opacity: 1,
		delay: 800
	},
	hidden: {
		opacity: 0
	}
})

const Img4 = posed.img({
	visible: {
		opacity: 1,
		y: 0,
		delay: 1000
	},
	hidden: {
		y: -20,
		opacity: 0
	}
})

const H4 = posed.h4({
	visible: {
		opacity: 1,
		delay: 1100
	},
	hidden: {
		opacity: 0
	}
})

const Team = () => {
	const classes = useStyles()
	const [ sectionShown, setSectionShown ] = useState(false)
	return (
		<OnVisible
			onChange={(e) => {
				setSectionShown(true)
			}}>
			<div className={classes.root} id="team">
				<h2 className={classes.title}>Équipe</h2>
				<div className={classes.container0}>
					<div className={classes.container1}>
						<div className={classes.container2}>
							<Img1
								pose={sectionShown ? 'visible' : 'hidden'}
								className={classes.photo1}
								src={profile1}
								alt="profile1"
							/>
							<H1 pose={sectionShown ? 'visible' : 'hidden'} className={classes.name}>
								Julien Ganga
							</H1>
						</div>
						<div className={classes.container2}>
							<Img2
								pose={sectionShown ? 'visible' : 'hidden'}
								className={classes.photo2}
								src={profile2}
								alt="profile2"
							/>
							<H2 pose={sectionShown ? 'visible' : 'hidden'} className={classes.name}>
								Ouassim Temman
							</H2>
						</div>
					</div>
					<div className={classes.container1}>
						<div className={classes.container2}>
							<Img3
								pose={sectionShown ? 'visible' : 'hidden'}
								className={classes.photo3}
								src={profile3}
								alt="profile3"
							/>
							<H3 pose={sectionShown ? 'visible' : 'hidden'} className={classes.name}>
								Dylan Merigaud
							</H3>
						</div>
						<div className={classes.container2}>
							<Img4
								pose={sectionShown ? 'visible' : 'hidden'}
								className={classes.photo4}
								src={profile4}
								alt="profile4"
							/>
							<H4 pose={sectionShown ? 'visible' : 'hidden'} className={classes.name}>
								Léopold Szabatura
							</H4>
						</div>
					</div>
				</div>
			</div>
		</OnVisible>
	)
}

const useStyles = makeStyles({
	title: {
		fontSize: '2rem',
		color: 'white'
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 64,
		paddingTop: 16
	},
	container0: {
		display: 'flex',
		flexDirection: 'row',
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	container1: {
		display: 'flex',
		flexDirection: 'row'
	},
	container2: {
		margin: '24px 32px'
	},
	photo1: {
		width: 200,
		height: 200,
		objectFit: 'cover',
		objectPosition: 'top'
	},
	photo2: {
		width: 200,
		height: 200,
		objectFit: 'cover'
	},
	photo3: {
		width: 200,
		height: 200,
		objectFit: 'cover',
		objectPosition: 'top'
	},
	photo4: {
		width: 200,
		height: 200,
		objectFit: 'cover',
		objectPosition: 'top'
	},
	name: {
		textAlign: 'center'
	},
	'@media (max-width: 1200px)': {
		container0: {
			display: 'flex',
			flexDirection: 'column'
		}
	},
	'@media (max-width: 812px)': {
		container0: {
			display: 'flex',
			flexDirection: 'column'
		},
		container1: {
			display: 'flex',
			flexDirection: 'column'
		}
	}
})

export default Team
