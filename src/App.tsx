import React from 'react'
import { Route } from 'react-router'
import styled from 'styled-components'
import { routers } from './router'
import 'antd/dist/antd.css'

const Wrapped = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
`
export const App = (): React.ReactElement => {
	return (
		<Wrapped>
			{routers.map(({ exact, Component, path }) => {
				return <Route key={path} exact={exact} path={path} render={() => <Component />} />
			})}
		</Wrapped>
	)
}
