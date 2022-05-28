import { render, screen, } from "@testing-library/react";
import BarChart from "./BarChart";

beforeEach(() =>{
    render(<BarChart data={[12,34,643]} name={["leander","Armand","Reinhardt", "Shanre"]}/>)
})

test("To do something..", () =>{
    
})