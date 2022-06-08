import { render, screen } from "@testing-library/react";
import Main from "../Main";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { getBracket, getTotal, getNewTotal, getSavePct,  } from "../Functions/Testfunction";
import BarChart from "../subcomponents/Charts/BarChart";


describe("Testing components in the main Component...", () => {

    beforeEach(() => {
        render(<Router><Main /></Router>);
    })

    afterAll(() => [
        console.log("All tests have been run")
    ])

    test("Testing to see if the inputs are empty on render...", () => {
        let nameInput = screen.getByLabelText(/name/i);
        let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
        //3) Assert Empty
        expect(nameInput.value).toBe("");
        expect(incomeInput.value).toBe("");
    });

    test("See if total Income is Showcased on the DOM", async () => {
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
        expect(finalOut).toEqual("R 1000");
    });

    //test if actual function is working 
    test("Testing to see if getTotal function is working", () => {
        const income = [15000, 45000, 78000];
        const func = getTotal(income);
        expect(func).toEqual(138000);
    });

    test("Testing to see if tax bracket is being calculated correctly", () => {
        const income = 5000;
        const func = getBracket(income);
        expect(func.totalTaxAmmount).toEqual(income * 0.18);
        expect(func.output).toBe("18%");

        //testing again
        let newIncome = (30000 * 12);
        let secondFunc = getBracket(newIncome);
        expect(secondFunc.totalTaxAmmount).toEqual((newIncome * 0.31) + 73726);
    });

    test("See if new value is calculated after the tax amount has been calculated", () =>{
        let income =  5000; 
        let func1 = getBracket(income);
        expect(func1.totalTaxAmmount).toEqual(income * 0.18);
        const func1Out = func1.totalTaxAmmount;
        let func2 = getNewTotal(income, func1Out);
        expect(func2).toEqual(income - func1Out);
    });

    test("To see if correct savings amount has been calculated...", () =>{
        let income = 45000;
        let saveVal = 0.26;
        let func = getSavePct(income, saveVal);
        expect(func).toEqual(45000*0.26);
        console.log(45000*0.26)
    });

    test("To see if tax bracket is showcasing on the DOM...", async() =>{
        let income = 5000;
        let func = getBracket(income);
        let output2 = screen.getByText(0);
         userEvent.type(output2,income);
        const button = screen.getByLabelText('button');
        console.log(button);
       await fireEvent.click(button);
        expect(output2.textContent).toBe(func.output);
    }); 

    


});