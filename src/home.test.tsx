import { render } from '@testing-library/react'
import Home from './home/components/pages'

describe('test home page', () => {
	it('should render home page', () => {
		const screen = render(<Home />)
		const text = screen.getByText(/home page/i)
		expect(text).toBeInTheDocument()
	})
})
