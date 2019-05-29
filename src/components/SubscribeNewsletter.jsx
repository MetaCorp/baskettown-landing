import React, { useState, useCallback } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import toQueryString from 'to-querystring'
import jsonp from 'jsonp'

import { makeStyles } from '@material-ui/styles'

import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'

const url = 'https://gmail.us20.list-manage.com/subscribe/post?u=8d7edf0333642e86603b9a948&id=8dc71e9e5d'

const tooltipTimeout = 5000

const getAjaxUrl = (url) => url.replace('/post?', '/post-json?')

const SubscribeNewsletter = () => {
	const classes = useStyles()

	const [ email, setEmail ] = useState('')
	const [ tooltipOpen, setTooltipOpen ] = useState(false)
	const [ status, setStatus ] = useState(false)
	const [ message, setMessage ] = useState('')

	const handleSubscribe = useCallback((data) => {
		const params = toQueryString(data)
		const url2 = getAjaxUrl(url) + '&' + params
		setStatus('loading')
		jsonp(
			url2,
			{
				param: 'c'
			},
			(err, data) => {
				if (err) {
					setStatus('error')
					setMessage(err)
					setTooltipOpen(true)
					setTimeout(() => setTooltipOpen(false), tooltipTimeout)
				} else if (data.result !== 'success') {
					setStatus('error')
					setMessage(data.msg)
					setTooltipOpen(true)
					setTimeout(() => setTooltipOpen(false), tooltipTimeout)
				} else {
					setStatus('success')
					setMessage(data.msg)
				}
			}
		)
	}, [])

	return status === 'success' ? (
		<Paper className={classes.newsletter}>
			<div style={{ color: 'green' }}>Subscribed !</div>
		</Paper>
	) : (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubscribe({ EMAIL: email })
			}}>
			<Tooltip open={tooltipOpen} title={message}>
				<Paper className={classes.newsletter}>
					<InputBase
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						variant="outlined"
						placeholder="ton email"
					/>
					<Button className={classes.subscribe} variant="contained" color="primary" type="submit">
						S'inscrire
					</Button>
				</Paper>
			</Tooltip>
		</form>
	)
}

const useStyles = makeStyles({
	newsletter: {
		padding: '8px 8px 8px 16px'
	},
	subscribe: {
		marginLeft: 8
	}
})

export default SubscribeNewsletter
