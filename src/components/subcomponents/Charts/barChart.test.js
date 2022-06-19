import { render, screen, } from "@testing-library/react";
import { ReactTestRenderer, create, act } from "react-test-renderer";
import BarChart from "./BarChart";
import renderer from 'react-test-renderer';


// test('render correctly..', () =>{
//     const testRender = TestRenderer.create(
//         <BarChart name={["Leander", "Joshua", "Dae", "Matthew", "Camerom"]} data={[12,23,676,211,4300]}/>
//         );
//     const testInstance = testRender.root;
//     expect(testInstance.findByType(BarChart).props.name).toBe["Leander", "Joshua", "Dae", "Matthew", "Camerom"];
// }); 

// test("matches snap", async() =>{
//     let root;
//     await act(() =>{
//          root = create( <BarChart name={["Leander", "Joshua", "Dae", "Matthew", "Camerom"]} data={[12,23,676,211,4300]}/>);
//     });

//     expect(root.toJSON()).toMatchSnapshot();

//     act(() =>{
//         root.update(<BarChart name={["Leander", "Joshua", "Dae", "Matthew", "Camerom", "Brosamino"]} data={[12,23,676,211,4300,5000]}/>);
//         expect(root.toJSON()).toMatchSnapshot();
//     })

//     console.log(root.toTree)
// });

test('renders learn react link', () => {
  // render(<App />);
  const component = renderer.create(
    <BarChart name={["Leander", "Joshua", "Dae", "Matthew", "Camerom"]} data={[12, 23, 676, 211, 4300]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});