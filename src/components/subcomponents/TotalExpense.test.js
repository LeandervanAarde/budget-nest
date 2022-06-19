import { render, screen } from "@testing-library/react";
import TotalExpense from "./TotalExpense";
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { getBracket, getTotal, getNewTotal, getSavePct, getMemberDetails, checkPerson } from "../Functions/Testfunction";
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";

describe("Testing the UI for the totalExpense Component", () =>{
    beforeEach(() => {
        render(<Router><TotalExpense /></Router>);
    });

    test("To see if inputs are empty on Render...", () =>{
        let nameInput = screen.getByPlaceholderText(/Enter expense title.../i);
        let amountInput = screen.getByPlaceholderText(/Enter expense amount.../i);
        expect(nameInput.value).toBe("");
        expect(amountInput.value).toBe("");
    });

    test("To see if the value is updated when typing...", () =>{
        let nameInput = screen.getByPlaceholderText(/Enter expense title.../i);
        let amountInput = screen.getByPlaceholderText(/Enter expense amount.../i);
        userEvent.type(nameInput,"Food and Water");
        userEvent.type(amountInput, "1000");
        expect(amountInput.value).toBe("1000")
        expect(nameInput.value).toBe("Food and Water")
    }); 
})
