import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { getBracket, getTotal, getNewTotal, getSavePct, getMemberDetails, checkPerson } from "../../Functions/Testfunction";
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";
import Individual from "./Individual";

describe("Testing the individuals component to see if it renders the final outcome for an individuals income after tax, expenses and savings", () => {

    test("Test to see if the component does Render in the DOM", () => {

        const monthlyIncome = 12000;
        const yearlyIncome = monthlyIncome*12;
        const savings =[{
            percentage: 0.03,
            outputVal: "3%"
        }]
        const expenseAmount = 1000;
        const savingsAmount = getSavePct(monthlyIncome * savings[0].percentage);

            const testRender = TestRenderer.create(
                <Individual 
                 name={"Leander"} 
                 monthlyInc = {monthlyIncome}
                 yearlyinc = {yearlyIncome}
                 savings = "3%"
                 savingsA = {savingsAmount}
                 expenseA={expenseAmount}
                 outcome = {monthlyIncome - expenseAmount - Math.round(savingsAmount)}
                     />
                );
            const testInstance = testRender.root;
            expect(testInstance.findByType(Individual).props.name).toBe["Leander", "Joshua", "Dae", "Matthew", "Camerom"];
        });
    })