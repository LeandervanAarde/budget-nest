import { render, screen, } from "@testing-library/react";
import Main, { addIncome, clickValue } from "../Main";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import BarChart from "../subcomponents/Charts/BarChart"

describe("Testing components in the main Component...", () => {

    beforeEach(() =>{
        render(<Router><Main /></Router>);
    })
    
    test("Testing to see if the inputs are empty on render...", () => {
    
        let nameInput = screen.getByLabelText(/name/i);
        let incomeInput = screen.getByLabelText(/income/i);
        //3) Assert Empty
        expect(nameInput.value).toBe("");
        expect(incomeInput.value).toBe("");
    });


    test("See if total Income is calculated...", async () => {
     //variables that we are testing
        let nameInput = screen.getByLabelText(/name/i);
        let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
        let output = screen.getAllByText(/R 0/)[0];
        //Userevents that will then trigger the click 
        userEvent.type(nameInput, "Leander van Aarde");
        userEvent.type(incomeInput, "1000");
        const button = screen.getByLabelText('button');
         fireEvent.click(button.firstChild);
        let finalOut = await output.innerHTML;
        console.log(finalOut);
        expect(finalOut).toEqual("R 1000");
    })
})