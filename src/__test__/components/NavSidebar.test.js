import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NavSidebar from '../../components/NavSidebar'

describe('<NavSidebar', () => {
  
  test('renders content', () => {
    render(<NavSidebar/>)
    screen.getByRole('button')
    screen.getByText('RECIPE NUTRITION')
    screen.getByText('Home')
    screen.getByText('Meal Type')
    screen.getByText('Dish Type')
  })

  test('should open sidebar', () => {
    render(<NavSidebar />)
    const el = screen.getByText('Home')
  })
  
  
})
