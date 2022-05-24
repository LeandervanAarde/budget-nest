import { render, screen, } from "@testing-library/react";
import Main, { addIncome } from "../Main";


import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe("Testing components in the main Component...", () => {
    test("Testing to see if the inputs are empty on render...", () => {
        render(<Router><Main /></Router>);
        let nameInput = screen.getByLabelText(/name/i);
        let incomeInput = screen.getByLabelText(/income/i);
        //3) Assert Empty
        expect(nameInput.value).toBe("");
        expect(incomeInput.value).toBe("");
    });

    test("See if inputs are updated when typing",  () => {
        render(<Router><Main /></Router>);
        let nameInput = screen.getByLabelText(/name/i);
        let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
        userEvent.type(nameInput, "Leander van Aarde");
        userEvent.type(incomeInput, "1000");
        console.log(nameInput.value);
        expect(nameInput.value).toBe("Leander van Aarde")
        expect(incomeInput.value).toBe("1000")

    });
    
})