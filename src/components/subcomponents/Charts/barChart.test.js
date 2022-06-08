import { render, screen, } from "@testing-library/react";
import BarChart from "./BarChart";
import renderer from 'react-test-renderer';

it('render correctly..', () =>{
    const chart = renderer.create(<BarChart name={["Leander", "Joshua", "Dae", "Matthew", "Camerom"]} data={[12,23,676,211,4300]}/>);
    let tree = chart.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});