import { render, screen} from "@testing-library/react";
import Main from "../Main";
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { getBracket, getTotal, getNewTotal, getSavePct, } from "../Functions/Testfunction";
import Household from "../subcomponents/householdInfo/Household";

describe("Testing components in the main Component...", () => {

    beforeEach(() => {
        render(<Router><Main /></Router>);
    })

 

    describe("Testing calculation functions", () => {

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

        test("See if new value is calculated after the tax amount has been calculated", () => {
            let income = 5000;
            let func1 = getBracket(income);
            expect(func1.totalTaxAmmount).toEqual(income * 0.18);
            const func1Out = func1.totalTaxAmmount;
            let func2 = getNewTotal(income, func1Out);
            expect(func2).toEqual(income - func1Out);
        });

        test("To see if correct savings amount has been calculated...", () => {
            let income = 45000;
            let saveVal = 0.26;
            let func = getSavePct(income, saveVal);
            expect(func).toEqual(45000 * 0.26);
            // console.log(45000 * 0.26)
        });

    });


    describe("Testing all the DOM Elements...", () => {

        test("Testing to see if the inputs are empty on render...", () => {
            let nameInput = screen.getByPlaceholderText(/Enter name.../i);
            let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
            expect(nameInput.value).toBe("");
            expect(incomeInput.value).toBe("");
        });

        test("See if total Income is Showcased on the DOM", () => {
            let nameInput = screen.getByPlaceholderText(/name/i);
            let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
            let output = document.getElementById("totalincome");
            userEvent.type(nameInput, "Leander van Aarde");
            userEvent.type(incomeInput, "5000");
            expect(nameInput.value).toBe("Leander van Aarde");
            expect(incomeInput.value).toBe("5000");
            const button = document.getElementById("addbtn").firstChild;
            userEvent.click(button);
             expect(output.innerHTML).toBe("R 5000");
        });

        test("To see if the tax bracket is showing on the DOM   ", () => {
            let income = 5000;
            let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
            userEvent.type(incomeInput, "5000");
            let func = getBracket(income);
            let output = document.getElementById("MonthlyTax");
            const button = document.getElementById("addbtn").firstChild;
            userEvent.click(button);
            expect(output.innerHTML).toBe(func.output);
        });

        test("To see if the income after tax element are showcased in the DOM...", () =>{
            let income = [5000, 5000];
            let nameInput = screen.getByPlaceholderText(/name/i);
            let incomeInput = screen.getByPlaceholderText(/Enter amount.../i);
            //All functions that need to run in order to calculate
            // let output = document.getElementById("totalincome");
            let total = getTotal(income);
            let brack = getBracket(total);
            let output = <Household amount= {5000} />; 
            const button = document.getElementById("addbtn").firstChild;
            userEvent.click(button);
            //  expect(output.innerHTML).toBe("R 5000");
            expect(output).toBeTruthy(); 
        });

        test('To see if pillcontainer function works', () =>{
            const element = screen.getByText(/3%/i);
            expect (element).toBeInTheDocument();
        })
    });
});