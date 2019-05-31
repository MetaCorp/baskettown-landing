import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'

const Project = () => {
	const classes = useStyles()

	return (
		<section className={classes.section2} id="project">
			<h2 className={classes.featuresTitle}>Notre produit</h2>
			<Paper className={classes.features}>
				<h4 className={classes.featuresH1}>Fonctionnalité de Check-In</h4>
				<p className={classes.featuresP1}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<hr className={classes.hr} />
				<h4 className={classes.featuresH2}>Planifie ta présence</h4>
				<p className={classes.featuresP2}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<hr className={classes.hr} />
				<h4 className={classes.featuresH3}>Organise tes matchs</h4>
				<p className={classes.featuresP3}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<hr className={classes.hr} />
			</Paper>
		</section>
	)
}

const useStyles = makeStyles({
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
		fontSize: '2rem'
	},
	features: {
		maxWidth: 742,
		padding: '16px 24px',
		background: '#1C2024',
		color: 'rgba(255, 255, 255, 0.8)',
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
	},
	hr: {
		borderColor: 'rgba(255,255,255,0.4)'
	},
	'@media (max-width: 812px)': {
		featuresH2: {
			textAlign: 'left'
		},
		featuresP2: {
			textAlign: 'left'
		}
	}
})

export default Project
