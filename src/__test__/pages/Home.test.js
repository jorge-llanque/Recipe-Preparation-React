import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home'

describe('<Home />', () => {
  
  test('renders content', () => {
    const component = render(<Home />)
    
    component.getByText(/Healthy habits for a better life/i)
    component.getByText(/The pocket nutritionist app that will help you reach your health and weight goals/i)
  })
})