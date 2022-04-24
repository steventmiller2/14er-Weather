import TableData from "../../src/Dashboard/TableData";

//this test does not currently work. needs a transform jest configuration
describe("rowData", () => {
  test("rowData", async () => {
      const table = new TableData();
      console.log(await table.getRows());
      expect(1).toBe(2);
  });
});