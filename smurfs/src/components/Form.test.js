import React from "react"
import { render, screen, fireEvent, act } from "@testing-library/react"
import Form from './Form'

// All inputs are visible
test('check if all inputs are in the DOM', () => {
    act(() => {
        render(<Form />)
    })
})

