import React, { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'

import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import AppProvider from './providers/AppProvider'

import SubscribeNewsletter from './components/SubscribeNewsletter'
import Project from './components/Project'
import Home from './components/Home'

import background from './assets/images/ball-basketball-basketball-court-1752757.jpg'
import logo from './assets/images/free_logo_19.svg'

const App = () => {
	const classes = useStyles()

	const [ scrollY, setScrollY ] = useState(0)

	const handleScroll = useCallback((e) => {
		const bodyOffset = document.body.getBoundingClientRect()
		setScrollY(-bodyOffset.top)
	}, [])

	useEffect(
		() => {
			window.addEventListener('scroll', handleScroll)
			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		},
		[ handleScroll ]
	)

	return (
		<div className={classes.root}>
			<AppProvider>
				<Home />

				<Project />

				<footer className={classes.footer}>© 2019 BasketTown Inc. | All Rights Reserved.</footer>
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
	toTop: {
		position: 'fixed',
		bottom: 16,
		right: 16,
		color: 'rgba(255, 255, 255, 0.8)',
		'&:hover': {
			color: 'white'
		}
	},
	footer: {
		background: '#1C2024',
		display: 'flex',
		justifyContent: 'center',
		height: 64,
		alignItems: 'center',
		color: 'rgba(255, 255, 255, 0.8)'
	}
})

export default App
