import { fireEvent, getByTestId, render, screen, findByTestId, waitForElementToBeRemoved, queryByText, waitFor } from '@testing-library/react';
import Home from '../../pages/Home'

describe('<Home />', () => {
  
  test('renders content', () => {
    render(<Home />)
    
    screen.getByText(/Healthy habits for a better life/i)
    screen.getByText(/The pocket nutritionist app that will help you reach your health and weight goals/i)
    screen.getByPlaceholderText("Search a recipe, an ingredient ...")
  })

  test('Should find a keyword', async () => {
    jest.setTimeout(10000)
    render(<Home />)
    const keywordValue = "beans"
    const input = screen.getByPlaceholderText("Search a recipe, an ingredient ...")
    const buttonSearch = screen.getByRole("button",{name:"Buscar"})
    
    fireEvent.change(input, {target: {value: keywordValue}})
    fireEvent.click(buttonSearch)
    
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole("heading")).toBeInTheDocument()

    await waitFor(() => {
      // const title = screen.findByRole("button", {name: "balanced"})
      // expect(title).toBeVisible()
    })
    
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
