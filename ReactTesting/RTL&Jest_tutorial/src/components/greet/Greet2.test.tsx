import { render, screen } from "@testing-library/react"
import { Greet2 } from "./Greet2"

test('Greet renders correctly', () => {
    render(<Greet2/>)
    const textElement = screen.getByText('Hello' )
    expect(textElement).toBeInTheDocument
})

// test.only('Greet renders with a name', () => {
// test.skip('Greet renders with a name', () => {
test('Greet renders with a name', () => {
    render(<Greet2 name='Chris'/>)
    const textElement = screen.getByText('Hello Chris')
    expect(textElement).toBeInTheDocument // matcher function
} )

// describe('Greet', () => {
//     test('renders correctly', () => {
//         render(<Greet2/>)
//         const textElement = screen.getByText('Hello')
//         expect(textElement).toBeInTheDocument
//     })
    
//     test('renders with a name', () => {
//         render(<Greet2 name='Chris'/>)
//         const textElement = screen.getByText('Hello Chris')
//         expect(textElement).toBeInTheDocument
//     } )
// })