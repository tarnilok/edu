import { render, screen } from "@testing-library/react"
import { Application } from "./application"

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application/>)

        const pageHeading = screen.getByRole('heading', {
            // name: 'Job application form'
            level: 1
        })
        expect(pageHeading).toBeInTheDocument

        const sectionHeading = screen.getByRole('heading', {
            // name: 'Section 1'
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument

        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument

        const paragraphElement2 = screen.getByText('all', {exact: false})
        expect(paragraphElement2).toBeInTheDocument

        const paragraphElement3 = screen.getByText(/^all fields are mandatory$/i)
        expect(paragraphElement3).toBeInTheDocument

        const paragraghElement4 = screen.getByText((content) => content.startsWith('All'))
        expect(paragraghElement4).toBeInTheDocument

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument

        const imageElement = screen.getByAltText("a person with a laptop")
        expect(imageElement).toBeInTheDocument

        const customElement = screen.getAllByTestId('custom-element')
        expect(customElement).toBeInTheDocument

        const nameElement = screen.getByRole('textbox', {
            name: 'Name' // we are able to verify that the input component has been rendered by our application component
        }) //! input element default role is textbox
        expect(nameElement).toBeInTheDocument  

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument

        const nameElement3 = screen.getAllByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument

        const nameElement4 = screen.getByDisplayValue('Chris')
        expect(nameElement4).toBeInTheDocument

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument

        const jobLocationElement = screen.getByRole('combobox') // select
        expect(jobLocationElement).toBeInTheDocument

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument
    })
})