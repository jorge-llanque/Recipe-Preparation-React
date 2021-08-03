import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../../pages/Home'

describe('<Home />', () => {
  
  test('renders content', () => {
    render(<Home />)
    
    screen.getByText(/Healthy habits for a better life/i)
    screen.getByText(/The pocket nutritionist app that will help you reach your health and weight goals/i)
    screen.getByPlaceholderText("Search a recipe, an ingredient ...")
  })

  // test('Search Form could be used', async() => {
  //   render(<Home />)
  //   const input = await screen.findByRole('textbox')

  //   fireEvent.change(input, {target: {value: 'Tea'}})
  //   fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'})
    

  //   const title = await waitFor(() => screen.findByText('Tea')) 
  //   expect(title).toBeVisible()
  // })

})