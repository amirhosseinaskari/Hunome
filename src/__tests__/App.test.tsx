import { render } from '@testing-library/react'
import App from '~src/App'

describe('Render CheckList', () => {
  it('Should be rendered sucessfully', async () => {
    const app = render(<App />)
    const checkList = app.getAllByTestId('checkList')

    expect(checkList).not.toBeNull()
  })
})
