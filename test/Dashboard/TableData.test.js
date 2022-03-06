import TableData from "../../src/Dashboard/TableData";

//this test does not currently work. needs a transform jest configuration
describe('testing accurate table data', () => {
  test('', () => {
    let table = new TableData();
    console.log(table.getMap());
  });
});