import {render, screen} from '@testing-library/react'
import SuggestionsList from '../../components/SuggestionsList'

describe('<SuggestionsList />', () => {
  
  test('renders content', () => {

    const category = {
      type: "mealType",
      keywordType: "breakfast"
    }
    render(<SuggestionsList category={category} />)
    screen.getByRole('heading')
    screen.getByRole('list')
  })
  
})
