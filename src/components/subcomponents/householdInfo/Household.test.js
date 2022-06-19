
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Household from "./Household";
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";
import removeMember from "../../Functions/Testfunction"

describe("Test the household component", () =>{
    test("Create Rendered component", () => {

        const testRender = TestRenderer.create(
            <Household name={["Leander", "Riaan", "Nina"]} amount={[12000, 300000, 144000]} />
        );
        const testInstance = testRender.root;
        expect(testInstance.findByType(Household).props.name).toBe["Leander", "Riaan", "Nina"];
    });

    test("matches snap", async () => {
        let root;
        await act(() => {
            root = create(<Household name={["Leander", "Riaan", "Nina"]} amount={[12000, 300000, 144000]} />);
        });

        expect(root.toJSON()).toMatchSnapshot();

        act(() => {
            root.update(<Household name={["Leander", "Riaan", "Nina"]} amount={[12000, 300000, 144000]} />);
            expect(root.toJSON()).toMatchSnapshot();
        })
        console.log(root.toTree)
    });

});