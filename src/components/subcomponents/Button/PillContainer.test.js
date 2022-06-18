import { render, screen } from "@testing-library/react"
import PillContainer from "./PillContainer";
import renderer from 'react-test-renderer';

const saveArr = [0.03];

describe("Testing the pill container", () =>{

    beforeEach(() =>{
        render(saveArr.map((e) => (<PillContainer pct={e} val={Math.round((e*100)) + "%"} />)));
    
    });

    test('To show the save percentages', () => {
        const element = screen.getAllByLabelText(/Pill/i) ;
        expect(element[0]).toBeInTheDocument(); 
        expect(element[0].firstChild.innerHTML).toBe("3%");
    });

    test('create a snapshot for the component', () =>{
        const element = screen.getAllByLabelText(/Pill/i) ;
        expect(element[0]).toBeInTheDocument(); 
        expect(element[0]).toMatchSnapshot();
    });
});

