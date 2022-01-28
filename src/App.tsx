import React from 'react'
import { Provider } from 'react-redux'
import { store } from '~src/redux/store'
import '~style-components/_theme.scss'
import ErrorBoundary from '~components/ErrorBoundary'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '~components/Layout'
import Songs from '~components/Songs'
import './index.scss'
import Error from '~components/Error'
import Albums from '~components/Albums'
import Search from './components/Search'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Songs} />
            <Route exact path='/albums' component={Albums} />
            <Route exact path='/error' component={Error} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}
