import React from 'react'
import { Provider } from 'react-redux'
import CheckList from './components/CheckList'
import { store } from '~src/redux/store'
import '~style-components/_theme.scss'
import ErrorBoundary from './components/ErrorBoundary'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <CheckList />
      </div>
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
