import c from '../components/style.module.css'
import { NavLink } from 'react-router-dom'

export const HeaderTitle = props => {
	return (
		<div className="header">
			<div className="navigation">
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/about">About</NavLink>
			</div>
			<p>this a home</p>
			<p className={c.item}>{props.text}</p>
		</div>

	)
}