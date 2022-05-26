import { render, screen, } from "@testing-library/react";
import Main, { addIncome, clickValue } from "../Main";
import { fireEvent } from "@testing-library/react";




import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

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

    // test("See if inputs are updated when typing...", () => {
    //     render(<Router><Main /></Router>);
    //     let nameInput = screen.getByLabelText(/name/i);
    //     let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
    //     userEvent.type(nameInput, "Leander van Aarde");
    //     userEvent.type(incomeInput, "1000");
    //     console.log(nameInput.value);
    //     expect(nameInput.value).toBe("Leander van Aarde")
    //     expect(incomeInput.value).toBe("1000");

    // });

    test("See if total Income is calculated...", async () => {
        //render the component
       
        //variables that we are testing
        let nameInput = screen.getByLabelText(/name/i);
        let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
        let output = screen.getByText(/R 0/i);
        //Userevents that will then trigger the click 
        userEvent.type(nameInput, "Leander van Aarde");
        userEvent.type(incomeInput, "1000");
        const button = screen.getByLabelText('button');
        await fireEvent.click(button.firstChild);
        let finalOut = await output.innerHTML;
        console.log(finalOut);
        expect(finalOut).toBe("R 1000");
    })

})