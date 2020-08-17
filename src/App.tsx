import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { routers, modalRouters } from './router'
import 'antd/dist/antd.css'

const Wrapped = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
`	
export const App = (): React.ReactElement => {
	return (
		<Wrapped>
			<Route
				render={(state) => {
					return (
						<Switch location={state.location}>
							{routers.map(({ path, Component, exact }) => (
								<Route
									path={path}
									key={path}
									exact={exact}
									render={() => {
										return <Component />
									}}
								/>
							))}
						</Switch>
					)
				}}
			/>
			<Route
				render={(state) => {
					return (
						<Switch location={state.location}>
							{modalRouters.map(({ path, Component, exact }) => (
								<Route
									path={path}
									key={path}
									exact={exact}
									render={() => {
										return <Component />
									}}
								/>
							))}
						</Switch>
					)
				}}
			/>

			{/* <Switch>
				{routers.map(({ exact, Component, path }) => {
					return (
						<Route key={path} exact={exact} path={path} render={() => <Component />} />
					)
				})}
			</Switch> */}
			{/* <Switch>
				{modalRouters.map(({ exact, Component, path }) => {
					return (
						<Route key={path} exact={exact} path={path} render={() => <Component />} />
					)
				})}
			</Switch> */}
		</Wrapped>
	)
}
