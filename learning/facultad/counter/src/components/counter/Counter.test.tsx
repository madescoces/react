import { act, render, screen } from "@testing-library/react"
import { Counter } from "./Counter"

describe('Contador', () => {

  it('Al presionar + se incrementa el contador', () => {
    // Arrange
    render(<Counter default_number={0} />)
    const btmAdd = screen.getByTestId('add')
    // Act
    act(() => { btmAdd.click() })
    // Assert
    const valueTag = screen.getByTestId('countValue')
    expect(valueTag).toHaveTextContent('1')
  })

  it('Al presionar - se decrementa el contador', () => {
    // Arrange
    render(<Counter default_number={0} />)
    const btmSub = screen.getByTestId('sub')
    // Act
    act(() => { btmSub.click() })
    // Assert
    const valueTag = screen.getByTestId('countValue')
    expect(valueTag).toHaveTextContent('-1')
  })
})