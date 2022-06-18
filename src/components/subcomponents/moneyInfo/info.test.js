
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Info from "./Info";
import TestRenderer from 'react-test-renderer';
import { act, create } from "react-test-renderer";

describe("Test the household component", () =>{
    test("Create Rendered component", () => {

        const testRender = TestRenderer.create(
           <Info heading={"Some heading that is reusable"} content={"R 14000.00"}/>
        );
        const testInstance = testRender.root;
        expect(testInstance.findByType(Info).props.content).toBe("R 14000.00");
    });

    test("matches snap", async () => {
        let root;
        await act(() => {
            root = create(<Info heading={"Some heading that is reusable"} content={"R 14000.00"}/>);
        });

        expect(root.toJSON()).toMatchSnapshot();

        act(() => {
            root.update(<Info heading={"Some heading that is reusable"} content={"R 14000.00"}/>);
            expect(root.toJSON()).toMatchSnapshot();
        })
        console.log(root.toTree)
    });
});