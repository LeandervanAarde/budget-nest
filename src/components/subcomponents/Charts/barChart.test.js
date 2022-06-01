import { render, screen, } from "@testing-library/react";
import BarChart from "./BarChart";
import renderer from 'react-test-renderer';

beforeEach(() =>{
    render(<BarChart data={[12,34,643]} name={["leander","Armand","Reinhardt", "Shanre"]}/>)
})


it('render correctly..', () =>{
    const chart = renderer.create(<BarChart name={["Leander", "Joshua", "Dae", "Matthew", "Camerom"]} data={[12,23,676,211,4300]}/>).toJSON();
    expect(chart).toMatchSnapshot();
})