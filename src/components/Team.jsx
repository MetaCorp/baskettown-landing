import React from 'react'
import { makeStyles } from '@material-ui/styles'

import profile1 from './../assets/images/basketball-game-ocean-69773.jpg'
import profile2 from './../assets/images/basketball-game-ocean-69773.jpg'
import profile3 from './../assets/images/basketball-game-ocean-69773.jpg'
import profile4 from './../assets/images/basketball-game-ocean-69773.jpg'

const Team = () => {
	const classes = useStyles()
	return (
		<div className={classes.root} id="team">
			<h2 className={classes.title}>Equipe</h2>
			<div className={classes.container0}>
				<div className={classes.container1}>
					<div className={classes.container2}>
						<img className={classes.photo} src={profile1} alt="profile1" />
						<h4 className={classes.name}>Léopold Szabatura</h4>
					</div>
					<div className={classes.container2}>
						<img className={classes.photo} src={profile2} alt="profile2" />
						<h4 className={classes.name}>Léopold Szabatura</h4>
					</div>
				</div>
				<div className={classes.container1}>
					<div className={classes.container2}>
						<img className={classes.photo} src={profile3} alt="profile3" />
						<h4 className={classes.name}>Léopold Szabatura</h4>
					</div>
					<div className={classes.container2}>
						<img className={classes.photo} src={profile4} alt="profile4" />
						<h4 className={classes.name}>Léopold Szabatura</h4>
					</div>
				</div>
			</div>
		</div>
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
	photo: {
		width: 200,
		height: 200
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
